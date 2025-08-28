import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";


function useAuth() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {  
        setLoading(false);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        await fetchProfile(session.user.id);
      } else {
        setProfile(null);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (userId) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (error && error.code !== "PGRST116") {
        console.error("Error fetching profile:", error);
      } else if (data) {
        setProfile(data);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (
    email,
    password,
    name,
    role
  ) => {
    // Sign up user with email verification link
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `http://localhost:5173/email-confirmed`,
        data: { name, role },
      },
    });

    if (error) throw error;
    // Do NOT create profile here. Profile will be created after email verification.
    return data;
  };
   const resendVerificationEmail = async (email) => {
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email,
      options: {
        emailRedirectTo: `http://localhost:5173/email-confirmed`,
      },
    });
    if (error) throw error;
    return true;
  };

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    // Check if user exists
    if (!data.user?.id) {
      throw new Error("User not found. Please sign up first.");
    }

    // Check if email is confirmed in Supabase
    if (!data.user?.email_confirmed_at) {
      await supabase.auth.signOut();
      throw new Error("Please verify your email before logging in.");
    }

    // Check if profile exists and is verified
    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .select("emailVerified, role")
      .eq("id", data.user.id)
      .single();

    if (profileError || !profileData) {
      await supabase.auth.signOut();
      throw new Error("Profile not found. Please sign up first.");
    }
    if (!profileData.emailVerified) {
      await supabase.auth.signOut();
      throw new Error("Email not verified. Please check your email for the verification link.");
    }

    return { ...data, profile: profileData };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  const updateProfile = async (updates) => {
    if (!user) return;

    const { data, error } = await supabase
      .from("profiles")
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq("id", user.id)
      .select()
      .single();

    if (error) throw error;

    setProfile(data);
    return data;
  };

  const createProfileAfterEmailConfirm = async (
    userId,
    name,
    email,
    role
  ) => {
    // Update profile to set emailVerified: true
    const { error } = await supabase
      .from("profiles")
      .update({ emailVerified: true })
      .eq("id", userId);
    if (error) {
      console.error("Error updating profile after verification:", error);
    }
  };

  return {
    user,
    profile,
    loading,
    signUp,
    signIn,
    signOut,
    updateProfile,
    createProfileAfterEmailConfirm,
    resendVerificationEmail,
  };
}

export default useAuth;

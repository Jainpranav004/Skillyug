import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase"; // ✅ single shared instance
import useAuth from "../hooks/useAuth.js";
import { CheckCircle } from "lucide-react";

const EmailConfirmed = () => {
  const navigate = useNavigate();
  const { createProfileAfterEmailConfirm } = useAuth();
  const [status, setStatus] = useState("loading");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const handleProfileCreation = async () => {
      try {
       const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = hashParams.get('access_token');
        const refreshToken = hashParams.get('refresh_token');

        if (!accessToken) {
          setErrorMsg("Missing access token. Please use the verification link from your email.");
          setStatus("error");
          return;
        }

        // Set session so we can fetch the user
        const { error: sessionError } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });

        if (sessionError) {
          setErrorMsg("Session error: " + (sessionError.message || JSON.stringify(sessionError)));
          setStatus("error");
          return;
        }

        // Fetch the user
        const { data, error } = await supabase.auth.getUser();
        if (error || !data.user) {
          setErrorMsg("Error fetching user: " + (error?.message || "No user found."));
          setStatus("error");
          return;
        }

        const user = data.user;
        const name = user.user_metadata?.name || "User";
        const role = user.user_metadata?.role || "student";

        // Check if profile exists
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("id")
          .eq("id", user.id)
          .single();

        let dbError = null;
        if (!profile) {
          // Insert profile with emailVerified: true
          const { error: insertError } = await supabase
            .from("profiles")
            .insert({
              id: user.id,
              name,
              email: user.email || "",
              role,
              emailVerified: true,
            });
          dbError = insertError;
        } else {
          // Update profile to set emailVerified: true
          const { error: updateError } = await supabase
            .from("profiles")
            .update({ emailVerified: true })
            .eq("id", user.id);
          dbError = updateError;
        }

        if (dbError) {
          setErrorMsg("Database error: " + (dbError.message || JSON.stringify(dbError)));
          setStatus("error");
          await supabase.auth.signOut();
          return;
        }

        setStatus("success");
        await supabase.auth.signOut();
        setTimeout(() => navigate("/"), 15000);
      } catch (err) {
        console.error("Error in email confirmation flow:", err);
        setStatus("error");
      }
    };

    handleProfileCreation();
  }, [navigate, createProfileAfterEmailConfirm]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 px-4">
      {status === "loading" && (
        <div className="text-white text-center">
          <p className="text-lg">Verifying your email...</p>
          <p className="text-sm text-gray-300">Please wait a moment</p>
        </div>
      )}

      {status === "success" && (
        <div className="text-center text-white">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold">Email Verified!</h1>
          <p className="mt-2 text-gray-300">
            Your account is ready. Please log in to continue...
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="text-center text-red-500">
          <h1 className="text-xl font-bold">Verification Failed</h1>
          <p className="mt-2 text-gray-300">
            {errorMsg || "Something went wrong. Please try logging in again."}
          </p>
        </div>
      )}
    </div>
  );
};

export default EmailConfirmed;

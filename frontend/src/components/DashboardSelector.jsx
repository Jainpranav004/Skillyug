import React from "react";
import { useAuth } from "../hooks/AuthContext";
import AdminDashboard from "../pages/AdminDashboard";
import StudentDashboard from "../pages/StudentDashboard";
import MentorsDashboard from "../pages/MentorsDashboard";

const DashboardSelector = () => {
  const { profile } = useAuth();
  console.log(profile);
  
  // if (!profile) return null;
  if (profile.user_type === "admin") return <AdminDashboard />;
  if (profile.user_type === "student") return <StudentDashboard />;
  if (profile.user_type === "instructor" || profile.user_type === "teacher" || profile.user_type === "mentor") return <MentorsDashboard />;
  // Default fallback
  return <StudentDashboard />;
};

export default DashboardSelector;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import MentorsDashboard from "./pages/MentorsDashboard";
import Courses from "./pages/Courses";
import AboutUs from "./pages/AboutUs";
import JoinOurTeam from "./pages/JoinOurTeam";
import SignupForm from "./pages/Signup";
import AuthCallback from "./pages/AuthCallback";
import Dashboard from "./pages/Dashboard";
import ContactUs from "./pages/ContactUs";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/AuthContext";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPasswordForm from "./pages/ResetPasswordForm";
import ResetPasswordRedirect from "./pages/ResetPasswordRedirect";
import DashboardSelector from "./components/DashboardSelector";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-blue-800">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignupForm />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route
              path="/auth/reset-password"
              element={<ResetPasswordRedirect />}
            />
            <Route
              path="/reset-password-form"
              element={<ResetPasswordForm />}
            />
            {/* Redirect to dashboard after login/signup handled in those pages */}
            {/* Unified dashboard route based on user_type */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about-us"
              element={
                  <AboutUs />
              }
            />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/join-our-team" element={<JoinOurTeam />} />
            {/* Add other protected routes as needed */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

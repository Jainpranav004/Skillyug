import React, { useState } from 'react';
import { useAuth } from "../hooks/AuthContext";
// Import any icons you need from lucide-react
import { LogOut, RadioTower, Book, User, Gamepad, MessageSquare } from 'lucide-react';

// ## Sidebar Component Definition ##
const Sidebar = () => {
  return (
    <aside className="w-64 bg-blue-900/50 p-6 flex flex-col flex-shrink-0">
      <div className="mb-8">
        {/* Replace with your actual logo image */}
        <img
          src="https://your-logo-url.png" // Replace with your logo URL
          alt="Skill Yug Logo"
          className="h-12 w-auto bg-white p-2 rounded-lg"
        />
      </div>
      <nav className="flex flex-col space-y-3 flex-grow">
        <button className="w-full text-left p-3 bg-orange-500 rounded-lg font-semibold">Profile</button>
        <button className="w-full text-left p-3 hover:bg-blue-800 rounded-lg">Your Course</button>
        <button className="w-full text-left p-3 hover:bg-blue-800 rounded-lg">All Course</button>
        <button className="w-full text-left p-3 hover:bg-blue-800 rounded-lg">Quiz/Games</button>
        <button className="w-full text-left p-3 hover:bg-blue-800 rounded-lg">Contact us</button>
      </nav>
      <div>
        <button className="w-full text-left p-3 border border-blue-700 hover:bg-blue-800 rounded-lg flex items-center space-x-2">
          <LogOut className="h-5 w-5" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};

// ## Main Content Component Definition ##
const MainContent = () => {
  const { user, profile, createProfileForCurrentUser } = useAuth();
  const [creatingProfile, setCreatingProfile] = useState(false);

  const handleCreateProfile = async () => {
    setCreatingProfile(true);
    await createProfileForCurrentUser();
    setCreatingProfile(false);
  };

  if (!profile) {
    return (
      <main className="flex-1 p-8 flex flex-col items-center justify-center">
        <div className="bg-blue-900/50 p-8 rounded-xl text-center">
          <User className="h-12 w-12 mx-auto text-orange-500 mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Profile not found</h2>
          <p className="text-gray-300 mb-4">Create your profile to get started!</p>
          <button
            onClick={handleCreateProfile}
            disabled={creatingProfile}
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            {creatingProfile ? 'Creating...' : 'Create Profile'}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 p-8">
      {/* Profile Header */}
      <div className="flex items-center bg-blue-900/50 p-4 rounded-lg mb-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
          alt="Profile"
          className="w-24 h-24 rounded-lg mr-6 border-2 border-white bg-white p-1"
        />
        <div className="text-white">
          <h2 className="text-xl font-semibold">Welcome {profile?.name || "Student"}</h2>
          <p className="text-gray-300 mt-1">Email: {profile?.email}</p>
          <p className="text-gray-300">Role: {profile?.user_type}</p>
        </div>
      </div>

      {/* Announcement */}
      <div className="border-2 border-blue-700 bg-blue-900/50 p-4 rounded-lg text-center mb-6">
        <p className="text-white">Announcement: Today's class is at 5pm</p>
      </div>

      {/* Button Grid */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <button className="p-4 bg-blue-800 hover:bg-blue-700 rounded-lg text-white font-semibold">Your Course</button>
        <button className="p-4 bg-blue-800 hover:bg-blue-700 rounded-lg text-white font-semibold">Explore Course</button>
        <button className="p-4 bg-blue-800 hover:bg-blue-700 rounded-lg text-white font-semibold">Quiz/Games</button>
        <button className="p-4 bg-blue-800 hover:bg-blue-700 rounded-lg text-white font-semibold">Contact us</button>
      </div>

      {/* Live Class Card */}
      <div className="bg-blue-900/50 p-6 rounded-lg flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://i.ytimg.com/vi/Cu2b_c-d_iU/maxresdefault.jpg" // Placeholder Live Class Image
          alt="Yakeen Batch"
          className="w-full md:w-56 h-auto rounded-lg"
        />
        <div className="flex-1 text-white">
          <h3 className="text-2xl font-bold">Subject: Python</h3>
          <p className="text-lg text-gray-300 mt-1">Time: 5:30 to 6:30</p>
          <p className="text-lg text-gray-300">Strength: 57</p>
        </div>
        <button className="w-full md:w-auto mt-4 md:mt-0 px-8 py-3 bg-orange-500 rounded-lg font-semibold hover:bg-orange-600 text-white">
          Join Now
        </button>
      </div>
    </main>
  );
};


// ## Main Dashboard Component ##
const StudentDashboard = () => {
  return (
    <div className="min-h-screen flex text-white bg-blue-900">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default StudentDashboard;
import React, { useState } from 'react';
import { useAuth } from "../hooks/AuthContext";
import { Users, BookOpen, TrendingUp, DollarSign, UserCheck, AlertCircle } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Students', value: '10,234', icon: Users, color: 'text-blue-400', bg: 'bg-blue-900/30' },
    { title: 'Active Courses', value: '486', icon: BookOpen, color: 'text-green-400', bg: 'bg-green-900/30' },
    { title: 'Revenue', value: '$124,590', icon: DollarSign, color: 'text-orange-400', bg: 'bg-orange-900/30' },
    { title: 'Completion Rate', value: '92%', icon: TrendingUp, color: 'text-purple-400', bg: 'bg-purple-900/30' }
  ];

  const recentActivities = [
    { user: 'John Doe', action: 'Completed React Fundamentals', time: '2 hours ago' },
    { user: 'Jane Smith', action: 'Enrolled in Python Basics', time: '4 hours ago' },
    { user: 'Mike Johnson', action: 'Left a 5-star review', time: '6 hours ago' },
    { user: 'Sarah Wilson', action: 'Submitted final project', time: '8 hours ago' }
  ];

  const { user, profile, createProfileForCurrentUser } = useAuth();
  const [creatingProfile, setCreatingProfile] = useState(false);

  const handleCreateProfile = async () => {
    setCreatingProfile(true);
    await createProfileForCurrentUser();
    setCreatingProfile(false);
  };

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-900">
        <div className="bg-blue-900/50 p-8 rounded-xl text-center">
          <Users className="h-12 w-12 mx-auto text-orange-500 mb-4" />
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
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-300">Welcome {profile?.name || "Admin"} ({profile?.email})</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-md border border-blue-800/30 rounded-xl p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.bg} p-3 rounded-lg`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activities */}
          <div className="bg-black/30 backdrop-blur-md border border-blue-800/30 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Recent Activities</h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-blue-900/20 rounded-lg">
                  <UserCheck className="h-5 w-5 text-green-400" />
                  <div className="flex-1">
                    <p className="text-white text-sm">
                      <span className="font-medium">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-gray-400 text-xs">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-black/30 backdrop-blur-md border border-blue-800/30 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200">
                Add Course
              </button>
              <button className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Manage Users
              </button>
              <button className="p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                View Reports
              </button>
              <button className="p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200">
                Settings
              </button>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="mt-8 bg-black/30 backdrop-blur-md border border-blue-800/30 rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertCircle className="h-5 w-5 text-orange-400" />
            <h2 className="text-xl font-bold text-white">System Alerts</h2>
          </div>
          <div className="space-y-2">
            <div className="p-3 bg-orange-900/20 border border-orange-500/30 rounded-lg">
              <p className="text-orange-300 text-sm">Server maintenance scheduled for tonight at 2 AM EST</p>
            </div>
            <div className="p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
              <p className="text-blue-300 text-sm">New course approval requests: 3 pending</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
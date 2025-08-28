import React, { useState } from 'react';
import { Users, MessageCircle, Calendar, Star, BookOpen, TrendingUp } from 'lucide-react';
import { useAuth } from "../hooks/AuthContext";

const MentorsDashboard = () => {
  const stats = [
    { title: 'Active Students', value: '124', icon: Users, color: 'text-blue-400' },
    { title: 'Messages', value: '18', icon: MessageCircle, color: 'text-green-400' },
    { title: 'Sessions Today', value: '6', icon: Calendar, color: 'text-orange-400' },
    { title: 'Rating', value: '4.9', icon: Star, color: 'text-yellow-400' }
  ];

  const upcomingSessions = [
    {
      student: 'Alice Johnson',
      subject: 'React Components',
      time: '2:00 PM',
      duration: '1 hour',
      type: 'Video Call'
    },
    {
      student: 'Bob Smith',
      subject: 'JavaScript Basics',
      time: '3:30 PM',
      duration: '45 minutes',
      type: 'Code Review'
    },
    {
      student: 'Carol Davis',
      subject: 'Python Project',
      time: '5:00 PM',
      duration: '1.5 hours',
      type: 'Project Help'
    }
  ];

  const recentMessages = [
    {
      student: 'David Wilson',
      message: 'Thanks for the help with the database queries!',
      time: '10 minutes ago',
      unread: false
    },
    {
      student: 'Emma Brown',
      message: 'Can we schedule a session for tomorrow?',
      time: '1 hour ago',
      unread: true
    },
    {
      student: 'Frank Miller',
      message: 'I completed the assignment you gave me.',
      time: '2 hours ago',
      unread: true
    }
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
          <h1 className="text-3xl font-bold text-white mb-2">Mentor Dashboard</h1>
          <p className="text-gray-300">Welcome {profile?.name || "Mentor"} ({profile?.email})</p>
        </div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Mentor Dashboard</h1>
          <p className="text-gray-300">Guide students on their learning journey</p>
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
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upcoming Sessions */}
          <div className="bg-black/30 backdrop-blur-md border border-blue-800/30 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Today's Sessions</h2>
            <div className="space-y-4">
              {upcomingSessions.map((session, index) => (
                <div key={index} className="bg-blue-900/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-medium">{session.student}</h3>
                    <span className="text-orange-400 text-sm font-medium">{session.time}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-1">{session.subject}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{session.duration}</span>
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                      {session.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200">
              View All Sessions
            </button>
          </div>

          {/* Recent Messages */}
          <div className="bg-black/30 backdrop-blur-md border border-blue-800/30 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Recent Messages</h2>
            <div className="space-y-4">
              {recentMessages.map((message, index) => (
                <div key={index} className={`p-4 rounded-lg ${message.unread ? 'bg-orange-900/20 border border-orange-500/30' : 'bg-blue-900/20'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-medium">{message.student}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 text-xs">{message.time}</span>
                      {message.unread && (
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{message.message}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              Open Messages
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-black/30 backdrop-blur-md border border-blue-800/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Schedule Session</span>
            </button>
            <button className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
              <BookOpen className="h-5 w-5" />
              <span>Create Assignment</span>
            </button>
            <button className="p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>View Analytics</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorsDashboard;
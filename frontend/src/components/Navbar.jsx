import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import { useAuth } from '../hooks/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, profile, signOut } = useAuth();

  // Determine dashboard route based on role
  let dashboardRoute = null;
  if (profile?.user_type === 'student') dashboardRoute = '/dashboard';
  else if (profile?.user_type === 'instructor' || profile?.user_type === 'teacher') dashboardRoute = '/dashboard';
  else if (profile?.user_type === 'admin') dashboardRoute = '/dashboard';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'AboutUs', path: '/about-us' },
    { name: 'Join Our Team', path: '/join-our-team' },
    { name: 'ContactUs', path: '/contactus' },
  ];

  return (
    <nav className="bg-black/20 backdrop-blur-md border-b border-blue-800/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo/Logo.png"
              alt="Skillyug Logo"
              className="h-12 w-auto object-contain mt-2"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path || link.name}
                to={link.path}
                className={`flex items-center justify-center px-4 font-serif py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === link.path
                  ? 'text-orange-500 bg-blue-900/50'
                  : 'text-gray-300 hover:text-white hover:bg-blue-800/50'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            {user && dashboardRoute && (
              <Link
                to={dashboardRoute}
                className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Dashboard
              </Link>
            )}
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="ml-4 px-6 py-2 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600 transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/sign-up"
                  className="ml-2 px-6 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={signOut}
                className="ml-4 px-6 py-2 bg-red-500 text-white rounded-md font-medium hover:bg-red-600 transition-colors duration-200"
              >
                Sign Out
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/30 backdrop-blur-md rounded-md mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path || link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${location.pathname === link.path
                    ? 'text-orange-500 bg-blue-900/50'
                    : 'text-gray-300 hover:text-white hover:bg-blue-800/50'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              {user && dashboardRoute && (
                <Link
                  to={dashboardRoute}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Dashboard
                </Link>
              )}
              {!user ? (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600 transition-colors duration-200"
                  >
                    Login
                  </Link>
                  <Link
                    to="/sign-up"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors duration-200"
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <button
                  onClick={() => { setIsOpen(false); signOut(); }}
                  className="block px-3 py-2 bg-red-500 text-white rounded-md font-medium hover:bg-red-600 transition-colors duration-200"
                >
                  Sign Out
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
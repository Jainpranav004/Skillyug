import React from 'react';
import { ArrowRight, BookOpen, Code, Palette, TrendingUp, Briefcase, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExploreCourses = () => {
  const categories = [
    {
      id: 'programming',
      name: 'Programming & Development',
      icon: Code,
      description: 'Learn to code with modern technologies',
      courses: 156,
      color: 'from-blue-500 to-blue-700',
      skills: ['JavaScript', 'Python', 'React', 'Node.js']
    },
    {
      id: 'design',
      name: 'Design & Creative',
      icon: Palette,
      description: 'Master visual design and user experience',
      courses: 89,
      color: 'from-purple-500 to-purple-700',
      skills: ['UI/UX', 'Figma', 'Photoshop', 'Illustration']
    },
    {
      id: 'business',
      name: 'Business & Entrepreneurship',
      icon: Briefcase,
      description: 'Build business skills and leadership',
      courses: 124,
      color: 'from-green-500 to-green-700',
      skills: ['Strategy', 'Leadership', 'Finance', 'Marketing']
    },
    {
      id: 'marketing',
      name: 'Digital Marketing',
      icon: TrendingUp,
      description: 'Grow your brand and reach customers',
      courses: 67,
      color: 'from-orange-500 to-orange-700',
      skills: ['SEO', 'Social Media', 'Analytics', 'Content']
    }
  ];

  const featuredCourses = [
    {
      title: 'Complete Web Development Bootcamp',
      instructor: 'Sarah Johnson',
      students: 12543,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Programming'
    },
    {
      title: 'Advanced UI/UX Design Course',
      instructor: 'Mike Chen',
      students: 8764,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Design'
    },
    {
      title: 'Digital Marketing Mastery',
      instructor: 'Emily Davis',
      students: 6432,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Marketing'
    }
  ];

  const learningPaths = [
    {
      title: 'Frontend Developer',
      duration: '6 months',
      courses: 8,
      description: 'Become a professional frontend developer',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript']
    },
    {
      title: 'Data Scientist',
      duration: '8 months',
      courses: 12,
      description: 'Master data analysis and machine learning',
      skills: ['Python', 'SQL', 'Machine Learning', 'Statistics']
    },
    {
      title: 'UX Designer',
      duration: '4 months',
      courses: 6,
      description: 'Design amazing user experiences',
      skills: ['User Research', 'Prototyping', 'Design Systems', 'Testing']
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Explore Our
            <span className="text-orange-500"> Course Categories</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover thousands of courses across various disciplines and find your perfect learning path
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-black/30 backdrop-blur-md border border-blue-800/30 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{category.name}</h3>
              <p className="text-gray-300 mb-4">{category.description}</p>
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-orange-400 font-medium">{category.courses} courses</span>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">1000+ students</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <Link
                to="/courses"
                className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 font-medium group-hover:translate-x-2 transition-transform duration-300"
              >
                <span>Explore Courses</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Featured Courses */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-300">
              Our most popular and highly-rated courses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-md border border-blue-800/30 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-xs font-medium">
                    {course.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-3 mb-2">{course.title}</h3>
                  <p className="text-gray-300 mb-4">by {course.instructor}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>⭐ {course.rating}</span>
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Paths */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Structured Learning Paths
            </h2>
            <p className="text-xl text-gray-300">
              Follow curated paths to master specific careers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-md border border-blue-800/30 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">{path.title}</h3>
                <p className="text-gray-300 mb-4">{path.description}</p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <span>{path.duration}</span>
                  <span>{path.courses} courses</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {path.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <button className="w-full py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200">
                  Start Learning Path
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 backdrop-blur-md border border-blue-700/30 rounded-2xl p-8 md:p-12">
            <BookOpen className="h-16 w-16 text-orange-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with Skillyug
            </p>
            <Link
              to="/courses"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              <span>Browse All Courses</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExploreCourses;
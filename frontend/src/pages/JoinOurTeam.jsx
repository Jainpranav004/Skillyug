import React from 'react';
import { Users, Heart, Zap, Globe, Award, ArrowRight, Mail, MapPin, Clock } from 'lucide-react';

const JoinOurTeam = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Meaningful Work',
      description: 'Every day, you\'ll be directly impacting lives and helping people achieve their dreams'
    },
    {
      icon: Zap,
      title: 'Innovation & Growth',
      description: 'Work with cutting-edge technology and grow your skills alongside industry experts'
    },
    {
      icon: Globe,
      title: 'Remote-First Culture',
      description: 'Work from anywhere in the world while collaborating with a global, diverse team'
    },
    {
      icon: Award,
      title: 'Competitive Package',
      description: 'Excellent salary, comprehensive benefits, and equity opportunities'
    }
  ];

  const openPositions = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead the development of our learning platform using React, TypeScript, and modern web technologies.',
      requirements: ['5+ years React experience', 'TypeScript proficiency', 'UI/UX sensibility']
    },
    {
      title: 'Course Content Creator',
      department: 'Education',
      location: 'Remote',
      type: 'Contract',
      description: 'Create engaging course content and assessments for our programming and design courses.',
      requirements: ['Industry expertise', 'Teaching experience', 'Content creation skills']
    },
    {
      title: 'Student Success Manager',
      department: 'Operations',
      location: 'Remote',
      type: 'Full-time',
      description: 'Support student journey from enrollment to career success with personalized guidance.',
      requirements: ['Customer success experience', 'EdTech background preferred', 'Excellent communication']
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design intuitive and beautiful learning experiences that delight our students.',
      requirements: ['5+ years design experience', 'Figma expertise', 'User research skills']
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and maintain scalable infrastructure to support millions of learners.',
      requirements: ['AWS/GCP experience', 'Kubernetes knowledge', 'CI/CD expertise']
    },
    {
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'Drive growth through data-driven marketing campaigns and community building.',
      requirements: ['Digital marketing experience', 'Analytics proficiency', 'Content creation skills']
    }
  ];

  const teamValues = [
    'We put students first in everything we do',
    'We believe in continuous learning and growth',
    'We embrace diversity and inclusive collaboration',
    'We maintain transparency and open communication',
    'We celebrate wins together and support each other through challenges',
    'We think globally but act with local empathy'
  ];

  const companyStats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Countries' },
    { number: '10K+', label: 'Students Helped' },
    { number: '4.9', label: 'Glassdoor Rating' }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our
            <span className="text-orange-500"> Mission</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Help us transform lives through education. Be part of a team that's passionate about
            creating the future of learning and making quality education accessible to everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
              View Open Positions
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
              Learn About Our Culture
            </button>
          </div>
        </section>

        {/* Company Stats */}
        {/* <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Why Join Us */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're not just building a product - we're building a movement that changes lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-md border border-blue-800/30 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>




        {/* Meet Our Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The passionate people behind our mission
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Parv Srivatsava",
                designation: "Founder & CEO",
                image: "Pics/parv.jpg",
                linkedin: "https://www.linkedin.com/in/parv-srivastava-63b533283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                email: "mailto:parvsrivastava125@gmail.com",
                github: " "
              },
              {
                name: "Harshita",
                designation: "Co-Founder",
                image: "Pics/Harshita.jpg",
                linkedin: "https://www.linkedin.com/in/harshita-singh-198b2a295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                email: "mailto:Hs9642386@gmail.com",
                github: " "
              },
              {
                name: "Pranav Jain",
                designation: "CTO",
                image: "Pics/pranav.jpg",
                linkedin: "https://www.linkedin.com/in/pranav-jain-pj/",
                email: "mailto:jainapranav02@gmail.com",
                github: "https://github.com/Jainpranav004"
              },
              {
                name: "Palak Sharma",
                designation: "CMO",
                image: "Pics/palak.jpg",
                linkedin: "https://linkedin.com/in/snehadas",
                email: " ",
                github: " "
              },
              {
                name: "Ayush Vardhan",
                designation: "Course cordination head",
                image: "Pics/ayush.jpg ",
                linkedin: " ",
                email: "mailto:ayushvardhan820@gmail.com",
                github: " "
              },
              {
                name: "Abhishek Sharma",
                designation: "Technical Lead",
                image: "Pics/abhishek.jpg",
                linkedin: " ",
                email: "mailto:Abhi03085e@gmail.com",
                github: "https://github.com/ABHI-theq"
              }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-md border border-blue-800/30 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-2 border-orange-500"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <h3 className="text-s font-semibold text-white mb-2">{member.designation}</h3>

                <div className="flex justify-center space-x-4 mt-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-500 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 
              2.76 2.24 5 5 5h14c2.76 0 5-2.24 
              5-5v-14c0-2.76-2.24-5-5-5zm-11 
              19h-3v-10h3v10zm-1.5-11.3c-.97 
              0-1.75-.79-1.75-1.75s.79-1.75 
              1.75-1.75 1.75.79 
              1.75 1.75-.78 1.75-1.75 
              1.75zm13.5 11.3h-3v-5.6c0-1.33-.03-3.04-1.85-3.04-1.85 
              0-2.13 1.45-2.13 2.95v5.69h-3v-10h2.89v1.37h.04c.4-.75 
              1.38-1.54 2.84-1.54 3.04 0 
              3.6 2 3.6 4.58v5.59z"/>
                    </svg>
                  </a>
                  <a
                    href={member.email}
                    className="text-orange-400 hover:text-orange-500 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5C5.65.5.5 5.65.5 
              12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.6-3.9-1.6-.6-1.5-1.4-1.9-1.4-1.9-1.1-.8.1-.8.1-.8 1.2.1 
              1.8 1.2 1.8 1.2 1 .1 1.7.7 2 
              1.2.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.9 
              0-1.3.5-2.4 1.2-3.3 0-.3-.5-1.5.1-3 
              0 0 1-.3 3.3 1.3a11.6 11.6 0 
              0 1 6 0c2.3-1.6 3.3-1.3 
              3.3-1.3.6 1.5.1 2.7.1 3 
              .8.9 1.2 2 1.2 
              3.3 0 4.6-2.7 5.6-5.3 
              5.9.4.3.8 1 .8 2v3c0 
              .3.2.7.8.6 4.6-1.5 7.9-5.7 
              7.9-10.8C23.5 5.7 18.3.5 
              12 .5z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>





        {/* Our Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Team Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These principles guide how we work together and treat each other
            </p>
          </div>

          <div className="bg-black/30 backdrop-blur-md border border-blue-800/30 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {teamValues.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-300 text-lg">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find your next career opportunity and help us shape the future of education
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-md border border-blue-800/30 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded">
                        {position.department}
                      </span>
                      <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {position.location}
                      </span>
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{position.description}</p>

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-2">Key Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-gray-400 text-sm flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>Apply Now</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Hiring Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We've designed a fair and transparent process that respects your time
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Application', description: 'Submit your application and portfolio' },
              { step: 2, title: 'Screening', description: 'Initial conversation with our team' },
              { step: 3, title: 'Interview', description: 'Technical and cultural fit assessment' },
              { step: 4, title: 'Welcome!', description: 'Join our mission to transform education' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-md border border-blue-700/30 rounded-2xl p-8 md:p-12">
            <Users className="h-16 w-16 text-orange-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't see the perfect role? We're always looking for exceptional people to join our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Send Us Your Resume</span>
              </button>
              <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                Follow Us for Updates
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JoinOurTeam;
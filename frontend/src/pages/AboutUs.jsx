import React from 'react';
import { Heart, Users, Award, Target, Quote } from 'lucide-react';
import { Box } from "@mui/material"
const EmotionalConnect = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Learning',
      description: 'We believe education should inspire and transform lives. Every course is designed with love and dedication to help you succeed.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Our learners are family. We create connections that last beyond the classroom, building a supportive network for life.'
    },
    {
      icon: Award,
      title: 'Excellence in Everything',
      description: 'We never compromise on quality. From our instructors to our platform, everything is crafted to exceed your expectations.'
    },
    {
      icon: Target,
      title: 'Your Success is Our Mission',
      description: 'Every feature, every course, every interaction is designed with one goal: helping you achieve your dreams.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Frontend Developer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'Skillyug didn\'t just teach me to code - it gave me the confidence to change my entire career. The mentors became my biggest supporters.',
      transformation: 'From Marketing Coordinator to Senior Developer'
    },
    {
      name: 'Michael Chen',
      role: 'UX Designer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'The emotional support I received here was as valuable as the technical skills. This community believed in me when I didn\'t believe in myself.',
      transformation: 'From Restaurant Manager to Lead UX Designer'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Scientist',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'Skillyug showed me that learning isn\'t just about acquiring skills - it\'s about discovering who you can become.',
      transformation: 'From Teacher to Machine Learning Engineer'
    }
  ];

  const milestones = [
    { year: '2025', title: 'Founded with a Dream', description: 'Started with a simple belief: everyone deserves quality education' },
    // { year: '2021', title: '1,000 Lives Changed', description: 'Celebrated our first thousand successful career transformations' },
    // { year: '2022', title: 'Global Community', description: 'Expanded to serve learners in over 50 countries' },
    // { year: '2023', title: '10,000+ Success Stories', description: 'Reached a milestone of transforming over 10,000 careers' },
    // { year: '2024', title: 'The Future', description: 'Continuing to innovate and inspire the next generation of learners' }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            More Than Just
            <span className="text-orange-500"> Education</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            At Skillyug, we don't just teach skills - we transform lives. Every student's journey is personal,
            every success is celebrated, and every challenge is met with unwavering support.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto"></div>
        </section>

        {/* Our Story */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  Skillyug was born from a simple observation: traditional education wasn't meeting the needs
                  of dreamers and career changers. We saw talented individuals stuck in jobs that didn't fulfill them,
                  held back not by lack of potential, but by lack of opportunity.
                </p>
                <p className="text-lg">
                  Our founders, who themselves had transformed their careers through learning, knew there had to be a better way.
                  They envisioned a platform that would not just teach skills, but nurture dreams, build confidence,
                  and create a supportive community where everyone could thrive.
                </p>
                <p className="text-lg">
                  Today, every course we create, every mentor we recruit, and every feature we build is guided by one principle:
                  <span className="text-orange-400 font-semibold"> your success is our success</span>.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-md border border-blue-800/30 rounded-2xl p-8">
                <Quote className="h-12 w-12 text-orange-500 mb-4" />
                <blockquote className="text-xl text-white font-medium mb-4">
                  "We believe that education should be transformative, not just informative.
                  Every student who walks through our digital doors deserves to leave not just with new skills,
                  but with renewed confidence and unlimited possibilities."
                </blockquote>
                <cite className="text-orange-400 font-semibold">- Skillyug Founders</cite>
              </div>
            </div>
          </div>
        </section>


        <section>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              paddingBottom: "3em",


            }}
          >
            <img
              src="/Pics/GroupPic.jpg"
              alt="Group Pic"
              style={{
                maxWidth: '50%',
                height: 'auto',
                borderRadius: "1em",
                border: "2px solid white"
              }}
            />
          </Box>
        </section>




        {/* Our Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These aren't just words on a wall - they're the principles that guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-md border border-blue-800/30 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stories That Inspire Us
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These transformations remind us why we do what we do every single day
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-black/40 to-blue-900/20 backdrop-blur-md border border-blue-800/30 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
                  />
                  <div>
                    <h3 className="text-white font-bold">{testimonial.name}</h3>
                    <p className="text-orange-400">{testimonial.role}</p>
                  </div>
                </div>

                <blockquote className="text-gray-300 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
                  <p className="text-orange-300 text-sm font-medium">
                    {testimonial.transformation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Journey Together
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every milestone represents thousands of dreams realized and futures transformed
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-blue-500 transform md:-translate-x-1/2"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-black/30 backdrop-blur-md border border-blue-800/30 rounded-xl p-6 ml-8 md:ml-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="w-8 h-8 bg-orange-500 rounded-full border-4 border-blue-900 flex-shrink-0 absolute left-0 md:left-1/2 transform md:-translate-x-1/2"></div>
                </div>
              ))}
            </div>
          </div>
          <p className='pt-8 text-xl text-gray-300  mx-auto text-center block'>More to Come...</p>
        </section>


        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Special Thanks ⭐
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Special thanks to <span style={{ fontWeight: "bold" }}>Kamal Kishore Sir ,Sonu Kadam Sir and Sourabh Sir</span> for their invaluable guidance and support during our incubation journey .
              This initiative is proudly supported by  <span style={{ fontWeight: "bold" }}>Galogitas Incubation Centre (GICRISE)</span>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-md border border-blue-700/30 rounded-2xl p-8 md:p-12">
            <Heart className="h-16 w-16 text-orange-500 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Become Part of Our Story
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Your transformation story is waiting to be written. Let's create something beautiful together.
            </p>
            <button className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
              Start Your Journey Today
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmotionalConnect;
import React from "react";

const ContactUs = () => {
    return (

        <div className="min-h-screen flex items-center justify-center bg-blue-900 text-white px-4">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">
                {/* Left Section */}
                <div className="flex flex-col justify-center">
                    <button className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg w-fit mb-4 shadow-md">
                        Contact us
                    </button>
                    <h1 className="text-4xl font-bold mb-3">Let’s Get In Touch</h1>
                    <p className="text-sm">
                        or just reach out manually to{" "}
                        <span className="text-orange-400">contactskill@gmail.com</span>
                    </p>
                </div>

                {/* Right Section (Form) */}
                <div className="bg-blue-800 p-6 rounded-2xl shadow-lg">
                    <form className="flex flex-col space-y-4">
                        {/* Full Name */}
                        <div>
                            <label className="block mb-1 text-sm">Full name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name..."
                                className="w-full p-3 rounded-lg text-black outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-1 text-sm">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email address..."
                                className="w-full p-3 rounded-lg text-black outline-none"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block mb-1 text-sm">Phone number</label>
                            <input
                                type="tel"
                                placeholder="Enter your phone number..."
                                className="w-full p-3 rounded-lg text-black outline-none"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block mb-1 text-sm">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Enter your message here..."
                                className="w-full p-3 rounded-lg text-black outline-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition"
                        >
                            Send Message →
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

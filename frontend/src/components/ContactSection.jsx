//import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhone,
} from "react-icons/fa";
import { useState } from "react";
import api from "../api/portfolioApi";

const ContactSection = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    message:"",
  });
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    })
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      await api.post("contact/contact/",formData);
      alert("Message sent Successfully");
      setFormData({
        name:"",
        email:"",
        message:""
      });
    }catch(error){
       console.error(error);
       alert("Failed to send message")

    }
  }
  const contactInfo = [
    {
      id: 1,
      icon: FaEnvelope,
      title: "Email",
      value: "muthuigrace64@gmail.com",
      link: "mailto:muthuigrace64@gmail.com",
    },
    {
      id: 2,
      icon: FaLinkedin,
      title: "Linkedin",
      value: "linkedin.com",
      link: "#",
    },
    {
      id: 3,
      icon: FaPhone,
      title: "Phone",
      value: "+254 799 377 039",
      link: "tel:+254 799 377 039",
    },
    {
      id: 4,
      icon: FaMapMarkedAlt,
      title: "Location",
      value: "Nairobi",
      link: null,
    },
  ];
  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-5xl font-extrabold text-white
                mb-2"
          >
            Let's Connect.
          </h2>
          <div className="w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Lets connect 
            </p>
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.id}
                    className="
                                flex items-center gap-4 group"
                  >
                    <div
                      className="w-10 h-10 rounded-full
                                    bg-primary/10 flex items-center justify-center
                                    group-hover:bg-primary/20 transition-colors"
                    >
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="
                                    text-gray-400 text-sm hover:text-primary
                                    transition-colors"
                          target={
                            info.title === "Location" ? "_self" : "_blank"
                          }
                          rel={
                            info.title === "Location"
                              ? ""
                              : "noopener noreferrer"
                          }
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400 text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/*Contact form */}
          <div className="mb-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-700 
                  border border-gray-600 rounded-lg
                text-white text-sm focus:outline-none
                 focus:border-primary transition-colors"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="Email"
                  className="
                    text-white block mb-2 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-700
                    border border-gray-600 rounded-lg
                    text-white text-sm focus:outline-none focus:border-primary
                    transition-colors"
                  placeholder="your@gmail.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="
                    text-white block mb-2 text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 bg-gray-700
    border border-gray-600 rounded-lg
    text-white text-sm focus:outline-none focus:border-primary
    transition-colors"
                  placeholder="Your Message...."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-2.5 bg-primary text-white
              rounded-lg font-medium hover:bg-primary/80
              "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

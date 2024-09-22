// import React from 'react'
// import PropTypes from 'prop-types'

import { useState } from "react";

function ContactPage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:mfurnielc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div id="contact" className="flex justify-end h-screen w-full p-6 bg-slate-200">
      <div className="flex h-full w-full border-2 bg-white border-double border-black p-10">
        <div className="w-2/3 bg-blue-200">
          <h2 className="text-2xl font-light">Contact Me</h2>
          <form className="" onSubmit={handleSubmit}>
            <div className="">
              <label className="" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=""
                placeholder="Your Name"
                required
              />
            </div>
            <div className="">
              <label className="" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=""
                placeholder="Your Email"
                required
              />
            </div>
            <div className="">
              <label className="" htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className=""
                placeholder=""
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className=""
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="w-1/3 bg-slate-400">

        </div>

      </div>
    </div>
  )
}

// ContactPage.propTypes = {}

export default ContactPage

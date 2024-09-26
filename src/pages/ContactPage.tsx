import { useState } from "react";

function ContactPage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:mfurnielc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div id="contact" className="flex justify-end h-screen w-full p-6 bg-slate-200">
      <div className="flex h-full w-full border-2 bg-white border-double border-black ">

        <div className="w-1/3 bg-principalBlue"></div>

        <div className="w-2/3 p-24 ">
          <h2 className="text-4xl font-bold text-center mb-4">Contacto</h2>
          <p className="text-lg font-light text-center">Puedes contactarme por cualquier medio mostrado en este portafolio</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-xl font-light" htmlFor="name">Nombre</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-2 rounded-lg h-10 pl-4 shadow-md focus:outline-none focus:ring-2 focus:ring-principalBlue"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label className="text-xl font-light" htmlFor="subject">Asunto</label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="border-2 rounded-lg h-10 pl-4 shadow-md focus:outline-none focus:ring-2 focus:ring-principalBlue"
                placeholder="Subject"
                required
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label className="text-xl font-light" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 rounded-lg h-10 pl-4 shadow-md focus:outline-none focus:ring-2 focus:ring-principalBlue"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label className="text-xl font-light" htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border-2 rounded-lg h-40 p-4 shadow-md focus:outline-none focus:ring-2 focus:ring-principalBlue"
                placeholder="Your Message"
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className="text-xl text-white bg-principalBlue rounded-lg w-full p-3 mt-6 shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

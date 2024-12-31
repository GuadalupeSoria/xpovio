import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="py-16">
      <h1 className="text-4xl lg:text-6xl font-bold mb-12">Contact Us</h1>
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-zinc-900 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-zinc-900 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-zinc-900 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-orange-500 rounded-full font-medium hover:bg-orange-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-orange-500" />
                <span>hello@xpovio.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-orange-500" />
                <span>+44 (0) 123 456 789</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-orange-500" />
                <span>123 Agency Street, London, UK</span>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Office Hours</h3>
            <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-400">Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
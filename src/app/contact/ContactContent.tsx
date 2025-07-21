export default function ContactContent() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We would love to hear from you! Whether you have questions, need help, or want to partner with us, feel free to reach out.
        </p>
      </section>

      {/* Contact Cards Section */}
      <section className="grid md:grid-cols-3 gap-8">
        {/* Phone Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">Call Us</h3>
          <p className="text-lg">For quick assistance, reach us via phone.</p>
          <p className="mt-4 text-xl font-bold">+251 911 123 456</p>
        </div>

        {/* Email Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">Email Us</h3>
          <p className="text-lg">Send us an email with your inquiries, and we will get back to you as soon as possible.</p>
          <p className="mt-4 text-xl font-bold">
            <a href="mailto:info@ethiorental.com" className="text-blue-600 hover:underline">
              info@ethiorental.com
            </a>
          </p>
        </div>

        {/* Social Media Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <p className="text-lg">Stay updated with our latest offers and news on social media.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-blue-600 hover:underline">Facebook</a>
            <a href="#" className="text-blue-600 hover:underline">Instagram</a>
            <a href="#" className="text-blue-600 hover:underline">Twitter</a>
          </div>
        </div>
      </section>

      {/* Location Inquiry Form Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <form className="space-y-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold mb-2">Full Name</label>
              <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-md" required />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-semibold mb-2">Email Address</label>
              <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-md" required />
            </div>
          </div>

          <div>
            <label htmlFor="location" className="block text-lg font-semibold mb-2">Your Location</label>
            <input
              type="text"
              id="location"
              placeholder="Enter city or location"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us more about your rental needs"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
            Submit
          </button>
        </form>
      </section>

      {/* Our Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-6">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <img
              src="/team-member-1.jpg"
              alt="Team Member 1"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <img
              src="/team-member-2.jpg"
              alt="Team Member 2"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-600">Marketing Director</p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <img
              src="/team-member-3.jpg"
              alt="Team Member 3"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Samuel Birhanu</h3>
            <p className="text-gray-600">Operations Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
}

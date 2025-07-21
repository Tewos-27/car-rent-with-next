'use client';
export default function Home() {
  return (
    <main className="px-6 py-12 max-w-7xl mx-auto space-y-24">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Ethio Car Rental</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find the perfect car for your journey — affordable, reliable, and available across Ethiopia.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Wide Car Selection</h3>
          <p>
            From compact cars to luxury SUVs, we offer a range of vehicles to meet your travel needs.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Flexible Rental Plans</h3>
          <p>
            Rent by the day, week, or month — our plans are built to give you flexibility and value.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Trusted Local Partners</h3>
          <p>
            We collaborate with verified car rental companies to ensure safety, service, and reliability.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6 text-left">
          <div>
            <h4 className="font-bold mb-2">1. Search</h4>
            <p>Browse available cars in your city with real-time pricing and availability.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">2. Book</h4>
            <p>Choose your preferred vehicle and book online in just a few clicks.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">3. Pick Up</h4>
            <p>Pick up your rental from the selected location or arrange delivery.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">4. Drive</h4>
            <p>Enjoy your trip with full support from our partner network.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <blockquote className="bg-white shadow-md p-6 rounded">
            <p className="text-lg italic">
              "Ethio Car Rental made my business trip smooth and stress-free. Highly recommend!"
            </p>
            <footer className="mt-4 text-right">— Meron T.</footer>
          </blockquote>
          <blockquote className="bg-white shadow-md p-6 rounded">
            <p className="text-lg italic">
              "Great selection of cars and very professional customer service. Will use again."
            </p>
            <footer className="mt-4 text-right">— Dawit A.</footer>
          </blockquote>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Rent?</h2>
        <p className="mb-6 text-lg text-gray-600">
          Start your booking today and explore Ethiopia with ease and confidence.
        </p>
        <a
          href="/cars"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Browse Cars
        </a>
      </section>
    </main>
  );
}

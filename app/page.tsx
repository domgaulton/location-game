// app/page.js

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Clue Quest: Adventure Awaits!
        </h1>
        <p className="text-xl">
          Explore, Solve, and Compete in Fun Location-Based Games
        </p>
        <div className="mt-6">
          <Link
            href="/games"
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-300"
          >
            Play Now
          </Link>
          <Link
            href="/adventures"
            className="ml-4 bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-100"
          >
            Choose Your Adventure
          </Link>
        </div>
      </header>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Featured Games</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/play/england/london/pomeroy-street"
              className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition"
            >
              <Image
                src="/images/nunhead.webp"
                alt="City Safari"
                className="w-full mb-4"
                width={300}
                height={200}
              />
              <h3 className="text-2xl font-semibold">Pomeroy Classics</h3>
              <p className="mt-2 text-gray-600">Plod around Pomeroy Street</p>
            </Link>
            <Link
              href="/play/usa/portland/portland-pubs"
              className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition"
            >
              <Image
                src="/images/portland.webp"
                alt="Mystery Tour"
                className="w-full mb-4"
                width={300}
                height={200}
              />
              <h3 className="text-2xl font-semibold">Portland Pub Trip</h3>
              <p className="mt-2 text-gray-600">
                Tour the old pubs of Portland
              </p>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 GeoHunts. All rights reserved.</p>
          <nav className="mt-4">
            <Link href="/" className="text-white hover:underline">
              How It Works
            </Link>
            <Link href="/" className="ml-4 text-white hover:underline">
              Contact Us
            </Link>
            <Link href="/" className="ml-4 text-white hover:underline">
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

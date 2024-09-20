// app/page.js

import { URL_PREFIX } from '@/consts';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata() {
  return {
    title: `GeoHunt`,
    description: 'Explore, Solve, and Compete in Fun Location-Based Games',
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/`,
    },
  };
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-300 text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">GeoHunt: Adventure Awaits!</h1>
        <p className="text-xl">
          Explore, Solve, and Compete in Fun Location-Based Games
        </p>
        <div className="m-6">
          <Image
            src="/images/geohunts.webp"
            alt="Mystery Tour"
            className="w-full mb-4"
            width={300}
            height={200}
          />
        </div>
      </header>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Featured Games</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href={`${URL_PREFIX}england/london/1/explore/`}
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
              href={`${URL_PREFIX}usa/portland/2/explore/`}
              className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition"
            >
              <Image
                src="/images/portland.jpeg"
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
            <Link
              href={`${URL_PREFIX}england/london/3/explore/`}
              className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition"
            >
              <Image
                src="/images/jack-the-ripper.webp"
                alt="Mystery Tour"
                className="w-full mb-4"
                width={300}
                height={200}
              />
              <h3 className="text-2xl font-semibold">
                Jack The Ripper London Tour
              </h3>
              <p className="mt-2 text-gray-600">Haunted London East End Tour</p>
            </Link>
            <Link
              href={`${URL_PREFIX}wales/chepstow/4/explore/`}
              className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition"
            >
              <Image
                src="/images/chepstow.jpeg"
                alt="Mystery Tour"
                className="w-full mb-4"
                width={300}
                height={200}
              />
              <h3 className="text-2xl font-semibold">Chepstow Castle</h3>
              <p className="mt-2 text-gray-600">
                Discover the History of Chepstow Castle
              </p>
            </Link>
            <Link
              href={`${URL_PREFIX}england/bristol/5/explore/`}
              className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition"
            >
              <Image
                src="/images/bristol.webp"
                alt="Mystery Tour"
                className="w-full mb-4"
                width={300}
                height={200}
              />
              <h3 className="text-2xl font-semibold">
                Bristol Pirate Adventure
              </h3>
              <p className="mt-2 text-gray-600">Your Pirate Adventure Awaits</p>
            </Link>
            <Link
              href={`${URL_PREFIX}england/chippenham/6/explore/`}
              className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition"
            >
              <Image
                src="/images/chippenham.webp"
                alt="Mystery Tour"
                className="w-full mb-4"
                width={300}
                height={200}
              />
              <h3 className="text-2xl font-semibold">
                Chippenham's Natural Beauty
              </h3>
              <p className="mt-2 text-gray-600">
                Clues about animals, trees, and rivers
              </p>
            </Link>
            <Link
              href={`${URL_PREFIX}england/chippenham/7/explore/`}
              className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition"
            >
              <Image
                src="/images/chippenham-2.jpeg"
                alt="Mystery Tour"
                className="w-full mb-4"
                width={300}
                height={200}
              />
              <h3 className="text-2xl font-semibold">
                Chippenham's Hidden History
              </h3>
              <p className="mt-2 text-gray-600">
                Discover hidden secrets along the way
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

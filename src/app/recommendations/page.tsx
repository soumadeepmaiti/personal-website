'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/solid';

export default function RecommendationsPage() {
  const [hovered, setHovered] = useState<string | null>(null);
  const router = useRouter();

  const items = [
    {
      title: 'Movies',
      image: '/movies.jpg',
      link: '/recommendations/movies',
    },
    {
      title: 'Music',
      image: '/music.jpg',
      link: '/recommendations/music',
    },
    {
      title: 'Books',
      image: '/books.jpg',
      link: '/recommendations/books',
    },
  ];

  return (
    <main className="min-h-screen w-full flex flex-col bg-black text-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4 z-10">
        <button onClick={() => router.back()}>
          <ArrowLeftIcon className="h-6 w-6 text-white hover:text-blue-400" />
        </button>
        <h1 className="text-5xl font-bold text-white text-center flex-1 -ml">Recommendations</h1>
        <Link href="/">
          <HomeIcon className="h-6 w-6 text-white hover:text-blue-400" />
        </Link>
      </div>

      {/* Panel Sections */}
      <div className="flex flex-1 w-full overflow-hidden">
        {items.map((item) => (
          <Link
            href={item.link}
            key={item.title}
            className={`relative flex-1 overflow-hidden group transform transition-transform duration-500 ease-in-out ${
              hovered
                ? hovered === item.title
                  ? 'scale-[1.05] z-10'
                  : 'scale-[0.98] z-0'
                : 'scale-100'
            }`}
            onMouseEnter={() => setHovered(item.title)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            

            {/* Title Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold drop-shadow-lg">{item.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

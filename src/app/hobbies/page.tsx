'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/solid';

export default function HobbiesPage() {
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);

  const hobbies = [
    { title: 'Chess', image: '/chess.jpg', link: '/hobbies/chess' },
    { title: 'Football', image: '/football.jpg', link: '/hobbies/football' },
    { title: 'Photography', image: '/photography.jpg', link: '/hobbies/photography' },
  ];

  return (
    <main className="min-h-screen w-full flex flex-col bg-black text-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4 z-10">
        <button onClick={() => router.back()}>
          <ArrowLeftIcon className="h-6 w-6 text-white hover:text-blue-400" />
        </button>
        <h1 className="text-5xl font-bold text-white text-center flex-1 -ml">Hobbies</h1>
        <Link href="/">
          <HomeIcon className="h-6 w-6 text-white hover:text-blue-400" />
        </Link>
      </div>

      {/* Hobby panels */}
      <div className="flex h-[calc(100vh-100px)]">
        {hobbies.map((hobby) => (
          <Link
            key={hobby.title}
            href={hobby.link}
            className={`flex-1 relative transition-all duration-300 overflow-hidden ${
              hovered && hovered !== hobby.title ? 'opacity-40' : 'opacity-100'
            }`}
            onMouseEnter={() => setHovered(hobby.title)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-300"
              style={{ backgroundImage: `url(${hobby.image})` }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold">{hobby.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

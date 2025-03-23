'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function InterestPanel({ title, link }: { title: string; link: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={link}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`transition-all duration-300 p-6 w-40 h-32 rounded-lg cursor-pointer flex items-center justify-center text-center font-semibold text-gray-800 ${
          hovered ? 'scale-110 z-20 bg-blue-100 shadow-lg' : 'bg-white shadow-md'
        }`}
      >
        {title}
      </div>
    </Link>
  );
}

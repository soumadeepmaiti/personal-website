'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/solid';

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen text-black">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100 -z-10"
        style={{ backgroundImage: 'url("/web.png")' }}
      ></div>
      {/* Top bar with Back and Home */}
      <div className="flex justify-between items-center px-6 py-4 z-10">
        <button onClick={() => router.back()}>
          <ArrowLeftIcon className="h-6 w-6 text-white hover:text-blue-400" />
        </button>
        <h1 className="text-5xl font-bold text-white text-center flex-1 -ml">Projects</h1>
        <Link href="/">
          <HomeIcon className="h-6 w-6 text-white hover:text-blue-400" />
        </Link>
      </div>

      {/* Projects List */}
      <div className="relative z-10 max-w-4xl mx-auto mt-10 px-4 flex flex-col gap-10 pb-16">
        {/* Project 1 */}
        <Link href="/projects/project1">
          <div className="bg-white bg-opacity-70 hover:bg-opacity-90 transition-all p-10 rounded-xl shadow-md border border-black/20 hover:scale-[1.01] backdrop-blur-sm cursor-pointer">
            <h2 className="text-4xl font-bold flex items-center gap-3">
                Dark Matter Halo Finder
            </h2>
            <p className="mt-4 text-xl text-gray-800">
                A machine learning tool to detect dark matter halos in cosmological simulation.
            </p>
          </div>
        </Link>

        {/* Project 2 */}
        <Link href="/projects/project2">
          <div className="bg-white bg-opacity-70 hover:bg-opacity-90 transition-all p-10 rounded-xl shadow-md border border-black/20 hover:scale-[1.01] backdrop-blur-sm cursor-pointer">
            <h2 className="text-4xl font-bold flex items-center gap-3">
              Project 2
            </h2>
            <p className="mt-4 text-xl text-gray-800">
                Description of project 2
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}

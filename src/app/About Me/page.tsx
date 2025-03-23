import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <p className="mb-6">Here are some of my projects.</p>

      {/* Example project links */}
      <ul className="list-disc list-inside space-y-2">
        <li><Link href="/projects/project1" className="text-blue-600 hover:underline">Project 1</Link></li>
        <li><Link href="/projects/project2" className="text-blue-600 hover:underline">Project 2</Link></li>
      </ul>

      <Link href="/" className="text-blue-500 hover:underline block mt-8">← Back to Home</Link>
    </main>
  );
}

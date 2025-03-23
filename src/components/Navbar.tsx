import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black shadow-md p-4 sticky top-0 z-50">
      <ul className="flex flex-wrap gap-6 justify-center font-medium text-sm">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/hobbies">Hobbies</Link></li>
        <li><Link href="/recommendations">Recommendations</Link></li>
      </ul>
    </nav>
  );
}

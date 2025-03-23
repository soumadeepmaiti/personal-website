import Link from 'next/link';

export default function ChessPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Chess</h1>
      <p>This is my Chess hobby page.</p>
      <Link href="/" className="text-blue-600 hover:underline mt-6 inline-block">← Back to Home</Link>
    </main>
  );
}

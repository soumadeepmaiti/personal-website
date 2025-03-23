import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InterestPanel from '@/components/InterestPanel';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="flex-grow flex flex-col items-center justify-center relative bg-transparent text-center px-4">
        <h1 className="text-5xl font-bold z-10 text-white-900">Hi, I&apos;m Soumadeep</h1>
        <p className="text-lg mt-4 z-10 max-w-xl text-white-700">
          Welcome to my personal website. Explore my works and my interests!
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10 z-10">
          <InterestPanel title="About Me" link="/about" />
          <InterestPanel title="Projects" link="/projects" />
          <InterestPanel title="Hobbies" link="/hobbies" />
          <InterestPanel title="Recommendations" link="/recommendations" />
        </div>

        {/* Background image layer */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100 -z-10"
          style={{ backgroundImage: 'url("/back.jpg")' }}
        />
      </section>
      <Footer />
    </main>
  );
}

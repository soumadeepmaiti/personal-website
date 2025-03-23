import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center py-6 text-sm text-gray-700">
      <p>&copy; {new Date().getFullYear()} Soumadeep Maiti. All rights reserved.</p>

      <div className="mt-4 flex justify-center gap-6 text-4xl opacity-60 text-gray-800">
        <a href="mailto:soumadeep@example.com" aria-label="Email" className="hover:text-blue-600 p-2">
          <MdEmail />
        </a>
        <a href="https://github.com/soumadeepmaiti" target="_blank" aria-label="GitHub" className="hover:text-blue-600 p-2">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/soumadeep" target="_blank" aria-label="LinkedIn" className="hover:text-blue-600 p-2">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/soumadeep" target="_blank" aria-label="Instagram" className="hover:text-pink-500 p-2">
          <FaInstagram />
        </a>
        <a href="https://facebook.com/soumadeep" target="_blank" aria-label="Facebook" className="hover:text-blue-700 p-2">
          <FaFacebook />
        </a>
        <a href="https://x.com/soumadeep" target="_blank" aria-label="X (Twitter)" className="hover:text-black p-2">
          <FaXTwitter />
        </a>
      </div>
    </footer>
  );
}

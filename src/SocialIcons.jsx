// src/components/SocialIcons.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function SocialIcons() {
  return (
    <div className="flex gap-4 text-xl text-primary">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className="hover:text-blue-600 cursor-pointer" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="hover:text-white-400 cursor-pointer" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="hover:text-pink-600 cursor-pointer" />
      </a>
    </div>
  );
}

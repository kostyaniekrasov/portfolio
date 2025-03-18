import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaTelegram } from 'react-icons/fa';

const socials = [
  {
    icon: <FaLinkedinIn />,
    path: 'www.linkedin.com/in/kostiantyn-niekrasov',
  },
  {
    icon: <FaGithub />,
    path: 'https://github.com/kostyaniekrasov',
  },
  {
    icon: <FaTelegram />,
    path: 'https://t.me/niekrasov_15',
  },
];

interface Props {
  containerStyles: string;
  iconStyles: string;
}

const Socials = ({ containerStyles, iconStyles }: Props) => {
  return (
    <div className={containerStyles}>
      {socials.map((social) => {
        return (
          <Link
            key={social.path}
            href={social.path}
            className={iconStyles}
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

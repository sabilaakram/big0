import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

interface NavItemProps {
  href: string;
  title: string;
  subItems?: {
    title: string;
    href: string;
  }[];
}

const navItems: NavItemProps[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  {
    title: "Services",
    href: "/services",
    subItems: [
      { title: "Business Intelligence", href: "business-intelligence" },
      { title: "Responsible AI", href: "responsible-ai" },
      { title: "Cloud", href: "cloud" },
      { title: "Internet Of Things (IOT)", href: "iot" },
    ],
  },
  // { title: "Industries", href: "/industries" },
  { title: "Resources", href: "/resources" },
  { title: "Insights", href: "/insights" },
  { title: "Careers", href: "/careers" },
];

const socialLinks = [
  { icon: <FaFacebook />, href: "https://www.facebook.com/" },
  { icon: <FaInstagram />, href: "https://www.instagram.com" },
  { icon: <FaXTwitter />, href: "https://www.twitter.com" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com" },
];

export function Footer() {
  return (
    <footer className="dark bg-custom-purple-600 text-white py-8 space-y-8">
      <div className="max-w-[1400px] px-2 sm:px-8 mx-auto flex flex-row flex-wrap gap-4 md:flex-nowrap items-center justify-center md:justify-between">
        <Logo />

        <ul className="flex items-center justify-center sm:justify-normal gap-4 flex-row flex-wrap sm:flex-nowrap">
          {navItems.map((navLink, index) => (
            <li
              key={index}
              className="text-white hover:text-gray-400 transition-all duration-300"
            >
              <Link href={navLink.href}>{navLink.title}</Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-4 flex-row">
          {socialLinks.map((link, index) => (
            <li
              key={index}
              className="text-white hover:text-gray-400 transition-all duration-300"
            >
              <Link href={link.href} target="_blank">
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex items-center justify-center gap-4 flex-wrap md:flex-nowrap">
        <li className="text-white pointer-events-none">
          © 2024 BigO. All rights reserved.
        </li>
        <li className="text-gray-400 hover:text-white">
          <Link href="/">Privacy Policy</Link>
        </li>
        <li className="text-gray-400 hover:text-white">
          <Link href="/">Terms of Service</Link>
        </li>
        <li className="text-gray-400 hover:text-white">
          <Link href="/">Cookies Settings</Link>
        </li>
      </ul>
    </footer>
  );
}

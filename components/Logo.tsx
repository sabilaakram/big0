import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Image
        src="/bigo-logo.png"
        alt=""
        height={100}
        width={100}
        className="w-full h-auto"
        priority={true}
      />
    </Link>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Link href='/' prefetch={true}>
      <Image
        // onClick={() => router.replace("/")}
        alt="logo"
        className="cursor-pointer"
        height="200"
        width="200"
        src="/icon/decomvo.png"
        />
    </Link>
  );
};

export default Logo;

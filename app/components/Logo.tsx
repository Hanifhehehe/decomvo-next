"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      alt="logo"
      className="cursor-pointer"
      height="200"
      width="200"
      src="/icon/decomvo.png"
    />
  );
};

export default Logo;

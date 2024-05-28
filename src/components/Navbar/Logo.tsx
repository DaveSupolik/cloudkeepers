import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src="/logo.svg"
        alt=""
        width={120}
        height={120}
        className="mr-6 pt-5 lg:pt-0"
      />
    </Link>
  );
};

export default Logo;

import Link from "next/link";
import logo from "../../public/image/air-company-logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={logo} width={80} height={25} alt="image" />
    </Link>
  );
};

export default Logo;

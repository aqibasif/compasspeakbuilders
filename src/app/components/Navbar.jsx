import Image from "next/image";
import { Logo } from "../Utils/images";
import { routes } from "../Utils/routes";
import AnimatedLink from "./Common/AnimatedLink";

const Navbar = () => {
  return (
    <>
      <div className="nav-blur" />
      <nav>
        <AnimatedLink href={routes.HOME}>
          <Image
            src={Logo}
            className="nav-logo"
            height={200}
            width={200}
            alt="logo"
          />
        </AnimatedLink>

        <div className="nav-links">
          <AnimatedLink href={routes.HOME}>Home</AnimatedLink>
          <AnimatedLink href={routes.ABOUT}>About</AnimatedLink>
          <AnimatedLink href={routes.SERVICES}>services</AnimatedLink>
          <AnimatedLink href={routes.CONTACT}>Contact</AnimatedLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

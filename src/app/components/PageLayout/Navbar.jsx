import Image from "next/image";
import { Logo } from "../../Utils/images";
import { routes } from "../../Utils/routes";
import AnimatedLink from "../Common/AnimatedLink";

const Navbar = () => {
  return (
    <nav>
      <AnimatedLink href={routes.HOME}>
        <img src={Logo} className='nav-logo' alt='logo' />
        {/* <Image
          src={Logo}
          className='nav-logo'
          height={400}
          width={400}
          alt='logo'
        /> */}
      </AnimatedLink>

      <div className='nav-links'>
        <AnimatedLink showCustomLink href={routes.HOME}>
          Home
        </AnimatedLink>
        <AnimatedLink showCustomLink href={routes.SERVICES}>
          Services
        </AnimatedLink>
        <AnimatedLink showCustomLink href={routes.ABOUT}>
          About
        </AnimatedLink>
        <AnimatedLink showCustomLink href={routes.CONTACT}>
          Contact
        </AnimatedLink>
      </div>
    </nav>
  );
};

export default Navbar;

import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@src/assets/svgs";
import { Container } from "@src/components/shared/Container";

const Footer = () => {
  const quickLinks = [
    {
      title: "About",
    },
    {
      title: "Partners",
    },
    {
      title: "Solutions",
    },
    {
      title: "Contact",
    },
  ];
  const socialMedia = [
    {
      icon: FacebookIcon,
      title: "Facebook",
    },
    {
      icon: InstagramIcon,
      title: "Instagram",
    },
    {
      icon: TwitterIcon,
      title: "X",
    },
    {
      icon: YoutubeIcon,
      title: "Youtube",
    },
  ];
  return (
    <Container className="mt-20">
      <div className="flex max-sm:flex-col mb-10 gap-x-28 gap-y-10">
        <div>
          <div className="text-transparent max-md:text-2xl text-4xl font-sans font-semibold bg-clip-text bg-gradient-to-r from-[var(--button-gradient-start)]  to-[var(--button-gradient-end)]">
            Securitywise
          </div>
          <div className="text-white max-md:text-base text-xl font-sans font-light mt-4 max-md:mt-2">
            Built for communities. Designed for organisations. Powered by Wyse
            intelligence.
          </div>
        </div>
        <div>
          <div className="text-[#A1A1A1] text-base max-sm:text-sm font-medium">
            QUICK LINKS
          </div>
          <div className="grid grid-cols-2 gap-x-20 gap-y-3.5 mt-3.5">
            {quickLinks.map((item) => {
              return (
                <div className="text-white text-lg font-light max-sm:text-base">
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="text-[#A1A1A1] text-base max-sm:text-sm font-medium">
            FOLLOW US
          </div>
          <div className="flex gap-2 mt-3.5">
            {socialMedia.map((item) => {
              return <img src={item.icon} />;
            })}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#191919] h-[1px]" />
      <div className="flex max-sm:flex-col justify-between gap-y-4 items-center my-8">
        <div className="text-white text-base text-center">
          © Copyright 2025. All Rights Reserved
        </div>
        <div className="text-transparent text-base text-center bg-clip-text bg-gradient-to-r from-[var(--button-gradient-start)]  to-[var(--button-gradient-end)]">
          info@securitywyse.ai
        </div>
      </div>
    </Container>
  );
};
export default Footer;

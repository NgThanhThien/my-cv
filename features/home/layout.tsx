import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { PagePath } from '@/layout/shared';
import { Meta } from '@/components/Meta';
import { motion } from 'framer-motion';
const HomePageLayout = () => {
  const Socials = [
    {
      name: 'GitHub',
      icon: faGithub,
      link: 'https://github.com/NgThanhThien',
    },
    {
      name: 'Facebook',
      icon: faFacebook,
      link: 'https://www.facebook.com/tieuquy.xunghe/',
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/nguyen-thanh-thien-112707200/',
    },
    {
      name: 'Instagram',
      icon: faInstagram,
      link: 'https://www.instagram.com/thien.nt95/',
    },
  ];
  const spinTransition = {
    // loop: Infinity,
    repeat: Infinity,
    duration: 1,
    ease: 'linear',
  };
  return (
    <>
      <Meta title="NgThanhThien" description="NgThanhThien" />
      <div
        className="tw-bg-cover tw-bg-no-repeat tw-flex tw-justify-center tw-items-center"
        style={{
          minHeight: 'calc(100vh - 112px)',
          backgroundImage: 'url(/background.jpg)',
        }}
      >
        <div className="tw-relative tw-px-2 md:tw-px-0 tw-flex tw-h-full tw-w-[700px] tw-mx-auto tw-flex-col tw-space-y-5  tw-justify-center">
          <div className="tw-absolute tw--top-20 tw-right-0">
            <div className="tw-relative tw-w-full tw-h-full">
              <div
                className="tw-rounded-full tw-w-[200px] tw-h-[200px] tw-bg-center tw-bg-cover tw-z-10"
                style={{ backgroundImage: 'url(/thien.jpg)' }}
              ></div>
              <motion.span
                className="tw-block tw-w-full tw-h-full tw-rounded-full tw-border-[8px] tw-z-20 tw-bg-transparent tw-border-gray-300 tw-border-t-purple-500 tw-absolute tw-top-0 tw-left-0"
                animate={{ rotate: 360 }}
                transition={spinTransition}
              ></motion.span>
            </div>
          </div>
          <div className="tw-text-[40px] md:tw-text-[60px] tw-leading-[50px] md:tw-leading-[70px]">
            Xin chào.
            <br />
            Mình tên là Thiên.
          </div>
          <div className="tw-text-lg md:tw-text-xl tw-leading-6 md:tw-leading-8 tw-text-black/60 tw-font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <Link href={PagePath.workPage}>
            <div className="tw-flex tw-items-center tw-space-x-2 tw-text-xl  tw-border-b-[2px] tw-border-black tw-border-dashed tw-w-max">
              <span>Check out my work</span>
              <FontAwesomeIcon className="tw-w-4" icon={faArrowRight} />
            </div>
          </Link>

          <ul className="tw-flex tw-items-center tw-space-x-5">
            {Socials.map((social) => {
              return (
                <li key={social.name}>
                  <Link href={social.link} target="_blank">
                    <FontAwesomeIcon className="tw-w-10" icon={social.icon} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePageLayout;

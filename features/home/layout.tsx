import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
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
  return (
    <>
      <Head>
        <title>NgThanhThien</title>
        <meta name="description" content="NgThanhThien" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="tw-bg-cover tw-bg-no-repeat tw-flex tw-justify-center tw-items-center"
        style={{
          minHeight: 'calc(100vh - 112px)',
          backgroundImage: 'url(/background.jpg)',
        }}
      >
        <div className="tw-flex tw-h-full tw-w-[700px] tw-mx-auto tw-flex-col tw-space-y-5  tw-justify-center">
          <div className="tw-text-[60px] tw-leading-[70px]">
            Xin chào.
            <br />
            Mình tên là Thiên.
          </div>
          <div className="tw-text-xl tw-leading-8 tw-text-black/60 tw-font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <Link href="/">
            <div className="tw-flex tw-items-center tw-space-x-2 tw-text-xl  tw-border-b-[2px] tw-border-black tw-border-dashed tw-w-max">
              <span>Check out my work</span>
              <FontAwesomeIcon className="tw-w-4" icon={faArrowRight} />
            </div>
          </Link>

          <ul className="tw-flex tw-items-center tw-space-x-5">
            {Socials.map((social) => {
              return (
                <li key={social.name}>
                  <Link href={social.link}>
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

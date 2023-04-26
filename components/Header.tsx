import { PagePath } from '@/layout/shared';
import Link from 'next/link';
import React from 'react';
type HeaderProps = {
  keyActive: String;
};
export const Header = ({ keyActive }: HeaderProps) => {
  return (
    <header className="tw-py-6">
      <div className="tw-container tw-mx-auto tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-center">
        <Link
          href="/"
          className="tw-w-16 tw-h-16 tw-rounded-full tw-bg-black tw-text-white tw-flex tw-justify-center tw-items-center tw-text-4xl"
        >
          t.
        </Link>
        <nav className="tw-mt-5 lg:tw-mt-0">
          <ul className="tw-flex tw-text-xl tw-space-x-[50px] tw-text-black/60 tw-leading-4">
            <li
              className={`${
                keyActive === 'home'
                  ? 'tw-text-black after:tw-bg-black after:tw-w-full'
                  : 'after:tw-w-0 hover:tw-text-black'
              } tw-py-2 tw-px-[5px] tw-relative after:tw-absolute after:tw-h-[2px] hover:after:tw-w-full after:tw-bg-black  after:tw-bottom-0 after:tw-left-0 after:tw-transform after:tw-duration-200 after:tw-ease-in-out`}
            >
              <Link href={'/'}>About</Link>
            </li>
            <li
              className={`${
                keyActive === 'work'
                  ? 'tw-text-black after:tw-bg-black after:tw-w-full'
                  : 'after:tw-w-0 hover:tw-text-black'
              } tw-py-2 tw-px-[5px] tw-relative after:tw-absolute after:tw-h-[2px] hover:after:tw-w-full after:tw-bg-black  after:tw-bottom-0 after:tw-left-0 after:tw-transform after:tw-duration-200 after:tw-ease-in-out`}
            >
              <Link href={PagePath.workPage}>Work</Link>
            </li>
            <li
              className={`${
                keyActive === 'contact'
                  ? 'tw-text-black after:tw-bg-black after:tw-w-full'
                  : 'after:tw-w-0 hover:tw-text-black'
              } tw-py-2 tw-px-[5px] tw-relative after:tw-absolute after:tw-h-[2px] hover:after:tw-w-full after:tw-bg-black  after:tw-bottom-0 after:tw-left-0 after:tw-transform after:tw-duration-200 after:tw-ease-in-out`}
            >
              <Link href={PagePath.contactPage}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

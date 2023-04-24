import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header className="tw-py-6">
      <div className="tw-container tw-mx-auto tw-flex tw-justify-between tw-items-center">
        <div className="tw-w-16 tw-h-16 tw-rounded-full tw-bg-black tw-text-white tw-flex tw-justify-center tw-items-center tw-text-4xl">
          t.
        </div>
        <nav>
          <ul className="tw-flex tw-text-xl tw-space-x-[50px] tw-text-black/60">
            <li className="tw-py-2 tw-px-[5px] tw-relative after:tw-absolute after:tw-w-0 after:tw-h-[2px] hover:after:tw-w-full after:tw-bg-black hover:tw-text-black after:tw-bottom-0 after:tw-left-0 after:tw-transform after:tw-duration-200 after:tw-ease-in-out">
              <Link href={'/'}>About</Link>
            </li>
            <li className="tw-py-2 tw-px-[5px] tw-relative after:tw-absolute after:tw-w-0 after:tw-h-[2px] hover:after:tw-w-full after:tw-bg-black hover:tw-text-black after:tw-bottom-0 after:tw-left-0 after:tw-transform after:tw-duration-200 after:tw-ease-in-out">
              <Link href={'/'}>Work</Link>
            </li>
            <li className="tw-py-2 tw-px-[5px] tw-relative after:tw-absolute after:tw-w-0 after:tw-h-[2px] hover:after:tw-w-full after:tw-bg-black hover:tw-text-black after:tw-bottom-0 after:tw-left-0 after:tw-transform after:tw-duration-200 after:tw-ease-in-out">
              <Link href={'/'}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

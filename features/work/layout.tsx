import { Meta } from '@/components/Meta';
import { PagePath } from '@/layout/shared';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

export const WorkPageLayout = () => {
  const TIMELINES = [
    {
      time: '2019 - 6/2022',
      company: 'Eye Solution',
      toolAndLanguage: 'Javascript, HTML, CSS, Vuejs, NuxtJs',
    },
    {
      time: '6/2022 - nay',
      company: 'An Thư Technology',
      toolAndLanguage: 'TypeScript, ReactJs, NextJs',
    },
  ];
  return (
    <>
      <Meta title="NgThanhThien - work" description="NgThanhThien - work" />
      <div
        className="tw-bg-cover tw-bg-no-repeat"
        style={{
          minHeight: 'calc(100vh - 112px)',
          backgroundImage: 'url(/background.jpg)',
        }}
      >
        <div className="tw-flex tw-h-full tw-w-[700px] tw-mx-auto tw-flex-col tw-space-y-5 tw-py-12">
          <ul className="tw-list-disc tw-space-y-4 tw-ps-5">
            {TIMELINES.map((t) => {
              return (
                <li key={t.time} className="tw-space-y-4">
                  <div className="tw-text-2xl tw-font-semibold tw-text-black">
                    {t.time}:
                  </div>
                  <div className="tw-flex tw-flex-col tw-space-y-2">
                    <span>- {t.company}</span>
                    <span>- {t.toolAndLanguage}</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <Link href={PagePath.contactPage}>
            <div className="tw-flex tw-items-center tw-space-x-2 tw-text-xl  tw-border-b-[2px] tw-border-black tw-border-dashed tw-w-max">
              <span>Contact me</span>
              <FontAwesomeIcon className="tw-w-4" icon={faArrowRight} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

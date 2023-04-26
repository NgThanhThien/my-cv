import { Meta } from '@/components/Meta';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const ContactPageLayout = () => {
  const contacts = [
    {
      key: 'phone',
      icon: faPhone,
      value: '0902-531-995',
    },
    {
      key: 'email',
      icon: faEnvelope,
      value: 'thanhthienbk13@gmail.com',
    },
  ];
  return (
    <>
      <Meta
        title="NgThanhThien - contact"
        description="NgThanhThien - contact"
      />
      <div
        className="tw-bg-cover tw-bg-no-repeat tw-flex tw-items-center"
        style={{
          minHeight: 'calc(100vh - 112px)',
          backgroundImage: 'url(/background.jpg)',
        }}
      >
        <div className="tw-px-2 md:tw-px-0 tw-flex tw-h-full tw-w-[700px] tw-mx-auto tw-flex-col tw-space-y-5 tw-py-12">
          <ul className="tw-space-y-4 tw-ps-5">
            {contacts.map((contact) => {
              return (
                <li
                  key={contact.key}
                  className="tw-flex tw-items-center tw-space-x-4 tw-text-xl md:tw-text-2xl"
                >
                  <FontAwesomeIcon icon={contact.icon} className="tw-w-6" />
                  <span>{contact.value}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

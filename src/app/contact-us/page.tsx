import PageLayout from "@/components/Layout/PageLayout";
import Button from "@/shared/Button/Button";
import React from "react";

const CONTACT_OPTIONS = [
  {
    name: "mail",
    value: "contact@gmail.com",
  },

  {
    name: "telephone",
    value: "+977 9821991011",
  },

  {
    name: "address",
    value: "07 Typanglaphat, kathmandu - Nepal",
  },
];

const ContactUs = () => {
  return (
    <div className="mx-auto w-[80%] pt-5 lg:w-[90%]">
      <h1 className="mb-[5rem] flex flex-col text-[6.5rem] font-thin leading-[1.35] lg:text-[5.5rem] md:mb-[2.5rem] md:text-[4rem] sm:text-[3rem] xs:text-[2.5rem]">
        <div className="self-start">What if we met?</div>
        <div className="self-center">We are excited</div>
        <div className="self-end">to discover yourself.</div>
      </h1>

      <ul className="md:mb-[2.5rem] mb-[5rem]">
        {CONTACT_OPTIONS.map((item, i) => (
          <li
            key={i}
            className="flex cursor-pointer items-center justify-between border-b border-black/40 py-4 first:border-t dark:border-white/40"
          >
            <div className="text-3xl font-light capitalize text-black dark:text-white sm:text-2xl">
              {item.name}
            </div>
            <div className="text-md font-bold uppercase text-light-primary dark:text-dark-secondary sm:text-xs">
              {item.value}
            </div>
          </li>
        ))}
      </ul>

      <form className="mx-auto mb-[5rem] w-[70%] rounded-3xl bg-white p-6 drop-shadow-sm dark:bg-dark-layoutElement md:w-full sm:rounded-2xl sm:px-4 sm:py-5">
        <div className="grid grid-cols-12 gap-4 sm:gap-0 sm:gap-y-4">
          <div className="col-span-6 xs:col-span-12">
            <div className="font-bold lowercase text-light-primary first-letter:capitalize dark:text-dark-secondary">
              your fullname*
            </div>
            <input
              className="mt-[3px] h-[4rem] w-full  rounded-md border border-black/30 px-3 text-light-primary drop-shadow-sm focus:outline-none dark:border-white/0 dark:bg-dark-input dark:text-dark-primary xs:h-[3.5rem]"
              type="text"
              placeholder=""
            />
          </div>

          <div className="col-span-6 xs:col-span-12">
            <div className="font-bold lowercase text-light-primary first-letter:capitalize dark:text-dark-secondary">
              your email*
            </div>
            <input
              className="mt-[3px] h-[4rem] w-full  rounded-md border border-black/30 px-3 text-light-primary drop-shadow-sm focus:outline-none dark:border-white/0 dark:bg-dark-input dark:text-dark-primary xs:h-[3.5rem]"
              type="text"
              placeholder=""
            />
          </div>

          <div className="col-span-12">
            <div className="font-bold lowercase text-light-primary first-letter:capitalize dark:text-dark-secondary">
              your message*
            </div>
            <textarea
              className="mt-[3px] h-[10rem] w-full resize-none rounded-md border border-black/30 px-3 py-3 text-light-primary drop-shadow-sm focus:outline-none dark:border-white/0 dark:bg-dark-input dark:text-dark-primary"
              placeholder=""
            />
          </div>
        </div>

        <button className="group relative mt-6 flex h-[5rem] w-[20rem] items-center justify-start rounded-full bg-black pl-5 text-[1rem] font-semibold capitalize tracking-normal text-white transition-all xs:mt-5 xs:h-[4rem] xs:w-[16rem] xs:text-xs">
          <span className="relative z-20">send message</span>
          <div className="absolute right-[.75rem] top-[.75rem] z-10 flex h-[3.5rem] w-[3.5rem] origin-center items-center justify-center rounded-full bg-accent text-white transition-all duration-700 group-hover:right-0 group-hover:top-0 group-hover:h-full group-hover:w-full xs:right-[.5rem] xs:top-[.5rem] xs:h-[3rem] xs:w-[3rem]"></div>

          <div className="absolute right-[.75rem] top-[.75rem] z-20 flex h-[3.5rem] w-[3.5rem] items-center justify-center overflow-hidden bg-transparent xs:right-[.5rem] xs:top-[.5rem] xs:h-[3rem] xs:w-[3rem]">
            <img
              className="absolute left-[50%] top-[50%] h-auto w-[1.25rem] translate-x-[-50%] translate-y-[-50%] invert transition-all duration-500 group-hover:left-[150%]"
              src="/icons/arrow.svg"
              alt=""
            />

            <img
              className="absolute left-[-150%] top-[50%] h-auto w-[1.25rem] translate-y-[-50%] invert transition-all duration-500 group-hover:left-[50%]"
              src="/icons/arrow.svg"
              alt=""
            />
          </div>
        </button>
      </form>
    </div>
  );
};

export default ContactUs;

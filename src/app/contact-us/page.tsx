import React from "react";
import Image from "next/image";
import supabase from "@/utils/supabase";
import Form from "./Form";

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

      <ul className="mb-[5rem] md:mb-[2.5rem]">
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

      <Form />
    </div>
  );
};

export default ContactUs;

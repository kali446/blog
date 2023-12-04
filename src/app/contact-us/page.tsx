import PageLayout from "@/components/Layout/PageLayout";
import Button from "@/shared/Button/Button";
import React from "react";

const ContactUs = () => {
  return (
    <PageLayout title="Get in touch">
      <form>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 h-[3.25rem] overflow-hidden">
            <input
              className="h-full w-full rounded-md bg-white px-3 text-light-primary drop-shadow-sm placeholder:text-sm placeholder:font-semibold placeholder:capitalize placeholder:text-light-secondary focus:outline-none dark:bg-dark-layoutElement dark:text-dark-primary dark:placeholder:text-dark-secondary/70"
              type="text"
              placeholder="full name"
            />
          </div>

          <div className="col-span-6 h-[3.25rem] overflow-hidden">
            <input
              className="h-full w-full rounded-md bg-white px-3 text-light-primary drop-shadow-sm placeholder:text-sm placeholder:font-semibold placeholder:capitalize placeholder:text-light-secondary focus:outline-none dark:bg-dark-layoutElement dark:text-dark-primary dark:placeholder:text-dark-secondary/70"
              type="text"
              placeholder="your email"
            />
          </div>

          <div className="col-span-12">
            <textarea
              className="h-[10rem] w-full rounded-xl bg-white p-3 text-light-primary drop-shadow-sm placeholder:text-sm placeholder:font-semibold placeholder:capitalize placeholder:text-light-secondary focus:outline-none dark:bg-dark-layoutElement dark:text-dark-primary dark:placeholder:text-dark-secondary/70"
              placeholder="your message"
            />
          </div>
        </div>

        <button className="dark:bg-accent mt-5 rounded-md bg-black px-5 py-2 text-sm font-medium uppercase tracking-normal text-white transition-all hover:bg-accent hover:text-white">
          send message
        </button>
      </form>
    </PageLayout>
  );
};

export default ContactUs;

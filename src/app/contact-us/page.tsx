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
              className="h-full w-full rounded-md bg-white px-3 text-light-primary drop-shadow-sm placeholder:text-sm placeholder:font-semibold placeholder:capitalize placeholder:text-light-secondary focus:outline-none"
              type="text"
              placeholder="full name"
            />
          </div>

          <div className="col-span-6 h-[3.25rem] overflow-hidden">
            <input
              className="h-full w-full rounded-md bg-white px-3 text-light-primary drop-shadow-sm placeholder:text-sm placeholder:font-semibold placeholder:capitalize placeholder:text-light-secondary focus:outline-none"
              type="text"
              placeholder="your email"
            />
          </div>

          <div className="col-span-12">
            <textarea
              className="h-[10rem] w-full rounded-xl bg-white p-3 text-light-primary drop-shadow-sm placeholder:text-sm placeholder:font-semibold placeholder:capitalize placeholder:text-light-secondary focus:outline-none"
              placeholder="your message"
            />
          </div>
        </div>

        <button className="mt-5 bg-black text-white py-2 px-5 uppercase text-sm font-medium tracking-normal transition-all hover:bg-accent hover:text-white rounded-md">
          send message
        </button>
      </form>
    </PageLayout>
  );
};

export default ContactUs;

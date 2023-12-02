import React from "react";
import Image from "next/image";
import Input from "@/shared/Input";
import Button from "@/shared/Button/Button";
import Checkbox from "@/shared/Checkbox";

const Newsletter = () => {
  return (
    <div className="sidebarCard dark:bg-dark-layoutElement">
      <div className="mb-3 h-[3.5rem] w-full overflow-hidden">
        <Image
          className="h-[100%] w-auto bg-contain"
          src="/images/newsletter.png"
          width={400}
          height={400}
          alt="Subscribe to our newsletter"
        />
      </div>

      <p className="dark:text-dark-contrast-700 w-[90%] text-[.8rem] font-light leading-relaxed text-light-secondary">
        Get the latest gadget scoop! Subscribe for top-notch reviews, news, and
        exclusive offers. Join our tech-savvy community now!
      </p>

      <form className="mt-[3rem] w-full">
        <div className="mb-2">
          <Input type="text" placeholder="Enter your name" />
        </div>

        <div className="mb-2">
          <Input type="text" placeholder="Enter your email" />
        </div>

        <Button layout="full" pattern="primary">
          Subscribe
        </Button>
      </form>

      <div className="mt-1">
        <Checkbox />
      </div>
    </div>
  );
};

export default Newsletter;

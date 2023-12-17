"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/shared/Button/Button";
import Checkbox from "@/shared/Checkbox";
import { useFormik, FormikProvider } from "formik";
import { NewsletterYupSchema } from "../Newsletter";

const Newsletter = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success || error) {
      setTimeout(() => {
        setSuccess(false);
        setError(null);
        formik.setFieldValue("email", "");
      }, 4000);
    }
  }, [success, error]);

  const formik = useFormik({
    initialValues: {
      email: "",
      checkbox: false,
    },
    validationSchema: NewsletterYupSchema,
    onSubmit: async (values) => {
      if (loading) {
        return;
      }

      setLoading(true);
      try {
        const response = await fetch("/api/newsletter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values?.email,
          }),
        });

        const data = await response.json();

        if (data?.status === 400) {
          setLoading(false);
          setError(
            "This email is already subscribed to our newsletter. Please use another one!",
          );
        }

        if (data?.status === 401) {
          setLoading(false);
          setError(data.detail);
        }

        if (data?.status === "subscribed") {
          setLoading(false);
          setSuccess(true);
        }
      } catch (error) {
        setError("Something went wrong, please try again!");
        setLoading(false);
      }
    },
  });

  return (
    <FormikProvider value={formik}>
      <div className="sidebarCard dark:bg-dark-layoutElement">
        <div className="mb-3 h-[3.75rem] w-full overflow-hidden">
          <Image
            className="h-[100%] w-auto bg-contain"
            src="/images/newsletter.png"
            width={400}
            height={400}
            alt="Subscribe to our newsletter"
          />
        </div>

        <p className="w-[90%] text-[.8rem] font-light leading-relaxed text-light-secondary dark:text-dark-contrast-700">
          Get the latest gadget scoop! Subscribe for top-notch reviews, news,
          and exclusive offers. Join our tech-savvy community now!
        </p>

        <form onSubmit={formik.handleSubmit} className="mt-[3rem] w-full">
          <div className="relative mb-2">
            <input
              className={` h-[2.5rem] w-full rounded-md bg-light-contrast-200 px-3 text-xs font-medium outline-none placeholder:text-light-primary dark:bg-dark-input dark:placeholder:text-white ${
                formik.errors.email &&
                formik.touched.email &&
                "border border-red-600"
              }`}
              type="text"
              placeholder="Enter your email"
              name={"email"}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.email && formik.touched.email && (
              <div className="absolute left-0 top-[-1.15rem] text-[.65rem] font-semibold lowercase text-red-600 first-letter:capitalize">
                {formik.errors.email}
              </div>
            )}
          </div>

          {(error || success) && (
            <div
              className={`${
                error
                  ? "text-red-600"
                  : success
                    ? "text-green-600"
                    : "text-light-primary"
              } translate-y-[-8px] text-xs font-semibold lowercase first-letter:capitalize`}
            >
              {error ? error : "Thank you for joining our newsletter."}
            </div>
          )}

          <Button type="submit" layout="full" pattern="primary">
            {loading ? "Please wait..." : "Subscribe"}
          </Button>
        </form>

        <div className="mt-1 pb-3">
          <Checkbox
            label="By checking this box, you confirm that you have read and are agreeing to
        our terms of use regarding the storage of the data submitted through
        this form."
            id="checkbox"
            name="checkbox"
            value={formik.values.checkbox}
            onChange={formik.handleChange}
            error={formik.errors.checkbox || ""}
          />
        </div>
      </div>
    </FormikProvider>
  );
};

export default Newsletter;

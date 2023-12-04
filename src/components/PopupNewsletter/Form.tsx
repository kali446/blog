"use client";
import React, { useState, useEffect } from "react";
import Checkbox from "@/shared/Checkbox";
import { useFormik, FormikProvider } from "formik";
import { NewsletterYupSchema } from "../Newsletter";

const Form = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success || error) {
      setTimeout(() => {
        setSuccess(false);
        setError(null);
        formik.resetForm();
      }, 4000);
    }
  }, [success, error]);

  const formik = useFormik({
    initialValues: {
      email: "",
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

        console.log(data);

        if (data?.status === 400) {
          setLoading(false);
          setError("Email is realready used, Use another one!");
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
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-12 items-center gap-1 pb-2 sm:gap-0 sm:gap-y-1"
      >
        <div className="relative col-span-8 sm:col-span-12">
          <input
            className={`sm:dark:placeholder:text-light-primary h-[2.5rem] w-full rounded-md bg-light-contrast-200 px-3 text-xs font-medium outline-none placeholder:text-light-primary dark:bg-dark-input dark:placeholder:text-white sm:dark:bg-light-contrast-200 ${
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

        <button
          className="hover:buttonHoverContrast col-span-4 flex h-[2.5rem] items-center justify-center rounded-md bg-button px-4 text-sm font-medium text-buttonContrast hover:bg-buttonHover sm:col-span-12"
          type="submit"
        >
          {loading ? "Loading..." : "Subscribe"}
        </button>
      </form>

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

      <div className="mb-[5rem] w-[90%] md:mb-[4rem]">
        <div className="flex cursor-pointer select-none items-center gap-2">
          <input
            id="checkbox"
            type="checkbox"
            value=""
            className="h-[1.8rem] w-[1.8rem] rounded outline-none"
          />
          <label
            htmlFor="checkbox"
            className="text-xs font-medium leading-4 text-light-secondary dark:text-dark-contrast-800/80 sm:text-dark-contrast-700"
          >
            By checking this box, you confirm that you have read and are
            agreeing to our terms of use regarding the storage of the data
            submitted through this form.
          </label>
        </div>
      </div>
    </FormikProvider>
  );
};

export default Form;

"use client";
import React, { useEffect, useState } from "react";
import Checkbox from "@/shared/Checkbox";
import * as Yup from "yup";
import { useFormik, FormikProvider } from "formik";

export const NewsletterYupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please provide valid email address!")
    .required("Email is required!"),
  checkbox: Yup.boolean().oneOf(
    [true],
    "You must agree to our terms and conditions.",
  ),
});

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
      <div className="mb-section flex items-center rounded-xl bg-white px-[4rem]  py-[6rem] dark:bg-dark-layoutElement lg:flex-col lg:p-[4rem] sm:p-[2.5rem] mobile414:px-[1.5rem] mobile414:py-[2rem]">
        <div className="flex w-[50%] flex-col gap-5 pr-5 lg:mb-6  lg:w-full lg:pr-0">
          <h1 className="text-6xl font-extrabold leading-[3.5rem] text-light-primary dark:text-white sm:text-5xl xs:text-4xl">
            <div className="mb-5 text-accent xs:mb-4">
              <svg
                className="h-auto w-[40px]"
                width={37}
                height={37}
                viewBox="0 0 512 461"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M51.1999 128L11.71 152.512L51.1999 173.109V128ZM460.799 128V173.11L500.276 152.512L460.799 128ZM261.925 305.75C260.095 306.703 258.063 307.2 255.999 307.2C253.936 307.2 251.904 306.703 250.074 305.75L0 175.277V448C0 455.07 5.72999 460.8 12.8 460.8H499.199C506.269 460.8 511.999 455.07 511.999 448V175.277L261.925 305.75Z"
                  fill="currentColor"
                />
                <path
                  d="M435.2 186.469V12.8005C435.2 5.73049 429.468 0.000488281 422.397 0.000488281H89.602C82.532 0.000488281 76.8 5.73049 76.8 12.8005V186.47L256 279.973L435.2 186.469ZM140.8 51.1995H371.2C378.27 51.1995 384 56.9295 384 64.0005C384 71.0715 378.27 76.8005 371.2 76.8005H140.8C133.73 76.8005 128 71.0705 128 64.0005C128 56.9305 133.73 51.1995 140.8 51.1995ZM128 115.199C128 108.133 133.73 102.402 140.8 102.402H371.2C378.27 102.402 384 108.132 384 115.199C384 122.269 378.27 128 371.2 128H140.8C133.73 128 128 122.269 128 115.199ZM179.2 166.399C179.2 159.332 184.93 153.602 192 153.602H320C327.07 153.602 332.8 159.332 332.8 166.398C332.8 173.468 327.07 179.199 320 179.199H192C184.93 179.199 179.2 173.469 179.2 166.399Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            Subcribe to Our <br /> Newsletter
          </h1>

          <div>
            <form
              onSubmit={formik.handleSubmit}
              className="grid grid-cols-12 items-center gap-2 pb-2 sm:flex-col"
            >
              <div className="relative col-span-9 mobile414:col-span-12">
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

              <button
                className="font-lora hover:buttonHoverContrast col-span-3 flex h-[2.5rem] items-center justify-center rounded-lg bg-button px-4 text-sm italic text-buttonContrast hover:bg-buttonHover mobile414:col-span-6 mobile375:col-span-12"
                type="submit"
              >
                {loading ? "Please wait..." : "Subscribe"}
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

            <div className="w-[90%]">
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
        </div>

        <div className="flex w-[50%] flex-col gap-6 lg:w-full  xs:gap-4">
          {Array.from({ length: 3 }).map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="pt-1 text-light-primary dark:text-white">
                <svg
                  className="h-auto w-[28px] xs:w-[24px] mobile414:w-[20px]"
                  width={28}
                  height={28}
                  viewBox="0 0 512 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M256 0C115.39 0 0 115.39 0 256C0 396.61 115.39 512 256 512C396.61 512 512 396.61 512 256C512 115.39 396.61 0 256 0ZM225.019 372.44L112.914 260.336L155.336 217.914L226.982 289.56L370.815 158.808L411.186 203.193L225.019 372.44Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <p className="text-2xl font-semibold xs:text-[1.25rem] xs:leading-[1.2] mobile414:text-[1rem]">
                <span className="pr-1 text-light-primary dark:text-dark-contrast-900">
                  Stay Up-to-Date.
                </span>
                <span className="text-light-secondary dark:text-dark-contrast-900">
                  Receive regular updates on the latest technology and gadget
                  news.
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </FormikProvider>
  );
};

export default Newsletter;

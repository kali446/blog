"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import * as Yup from "yup";
import { useFormik, FormikProvider } from "formik";
import supabase from "@/utils/supabase";
import ButtonV2 from "@/shared/Button/ButtonV2";

export const ContactYupSchema = Yup.object().shape({
  name: Yup.string().required("Please provide your fullname!"),
  email: Yup.string()
    .email("Please provide valid email address!")
    .required("Email is required!"),
  message: Yup.string()
    .required("Please type your message here!")
    .max(1000, "You can only type upto 1000 characters"),
});

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
      name: "",
      email: "",
      message: "",
    },
    validationSchema: ContactYupSchema,
    onSubmit: async (values) => {
      if (loading) {
        return;
      }

      setLoading(true);
      try {
        const obj = {
          name: formik.values.name,
          email: formik.values.email,
          message: formik.values.message,
        };

        const { data, error } = await supabase
          .from("blogContact")
          .insert([obj])
          .select();

        if (error) {
          setError("Please fill in all the fields correctly.");
          return;
        }

        if (data) {
          setSuccess(true);
          setLoading(false);
          formik.resetForm();
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
        className="mx-auto mb-[5rem] w-[70%] rounded-3xl bg-white p-6 drop-shadow-sm dark:bg-dark-layoutElement md:w-full sm:rounded-lg sm:px-4 sm:py-5"
      >
        <div className="grid grid-cols-12 gap-4 sm:gap-0 sm:gap-y-4">
          <div className="relative col-span-6 xs:col-span-12">
            <div className="text-xs font-medium uppercase tracking-[5px] text-light-primary drop-shadow-sm first-letter:capitalize dark:text-dark-secondary">
              fullname
            </div>
            <input
              className={`mt-[3px] h-[4rem] w-full  rounded-md border border-black/30 px-3 text-light-primary drop-shadow-sm focus:outline-none dark:border-white/0 dark:bg-dark-input dark:text-dark-primary xs:h-[3rem] ${
                formik.errors.name &&
                formik.touched.name &&
                "border border-red-600"
              }`}
              type="text"
              placeholder=""
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.name && formik.touched.name && (
              <div className="absolute bottom-[-1rem] left-0 text-[.65rem] font-semibold lowercase text-red-600 first-letter:capitalize">
                {formik.errors.name}
              </div>
            )}
          </div>

          <div className="relative col-span-6 xs:col-span-12">
            <div className="text-xs font-medium uppercase tracking-[5px] text-light-primary drop-shadow-sm first-letter:capitalize dark:text-dark-secondary">
              email
            </div>
            <input
              className={`mt-[3px] h-[4rem] w-full  rounded-md border border-black/30 px-3 text-light-primary drop-shadow-sm focus:outline-none dark:border-white/0 dark:bg-dark-input dark:text-dark-primary xs:h-[3rem] ${
                formik.errors.email &&
                formik.touched.email &&
                "border border-red-600"
              }`}
              type="text"
              placeholder=""
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.email && formik.touched.email && (
              <div className="absolute bottom-[-1rem] left-0 text-[.65rem] font-semibold lowercase text-red-600 first-letter:capitalize">
                {formik.errors.email}
              </div>
            )}
          </div>

          <div className="relative col-span-12">
            <div className="text-xs font-medium uppercase tracking-[5px] text-light-primary drop-shadow-sm first-letter:capitalize dark:text-dark-secondary">
              message
            </div>
            <textarea
              className={`mt-[3px] h-[10rem] w-full resize-none rounded-md border border-black/30 px-3 py-3 text-light-primary drop-shadow-sm focus:outline-none dark:border-white/0 dark:bg-dark-input dark:text-dark-primary ${
                formik.errors.message &&
                formik.touched.message &&
                "border border-red-600"
              }`}
              placeholder=""
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.message && formik.touched.message && (
              <div className="absolute bottom-[-.6rem] left-0 text-[.65rem] font-semibold lowercase text-red-600 first-letter:capitalize">
                {formik.errors.message}
              </div>
            )}
          </div>
        </div>

        {success && (
          <span className="font-semibold text-green-600">
            Thank you! we just got your message. We will response soon :)
          </span>
        )}

        <div className="mt-6 xs:mt-4">
        <ButtonV2 text={`${loading ? "Please wait..." : "Send message"}`} />
        </div>
      </form>
    </FormikProvider>
  );
};

export default Form;

import React from "react";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import PageLayout from "@/components/Layout/PageLayout";

const PrivacyPolicy = () => {
  const source = fs.readFileSync(
    path.join("src", "data", "pages", "privacy-policy.mdx" as string),
    "utf8",
  );
  const { data, content } = matter(source);

  return <PageLayout content={content} title={data.title}></PageLayout>;
};

export default PrivacyPolicy;

import React from "react";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import PageLayout from "@/components/Layout/PageLayout";

const Terms = () => {
  const source = fs.readFileSync(
    path.join("src", "data", "pages", "terms.mdx" as string),
    "utf8",
  );
  const { data, content } = matter(source);

  return <PageLayout content={content} title={data.title}></PageLayout>;
};

export default Terms;

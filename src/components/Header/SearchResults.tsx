"use client";
import Loader from "@/shared/Loader";
import React from "react";

const SearchResults = () => {
  return (
    <div className="absolute left-[50%] top-[100%] z-[1000] w-[95%] translate-x-[-50%] rounded-b-[.75rem] bg-white p-5">
      <Loader error={true} />
    </div>
  );
};

export default SearchResults;

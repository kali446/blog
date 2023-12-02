import React from "react";

interface Props {
  value: string;
  setValue: (val: string) => void;
}

const SearchInput = ({ value, setValue }: Props) => {
  return (
    <div className="absolute top-[0px] left-[0px] h-[100%]">
      <input
        type="text"
        placeholder="Enter keyword"
        className="text-black placeholder:text-light-secondary h-[100%] w-[50vw] text-xl font-light outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;

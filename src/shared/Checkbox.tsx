import React from "react";

interface Props {}

const Checkbox = ({}: Props) => {
  return (
    <div className="flex cursor-pointer select-none items-center gap-2">
      <input
        id="checkbox"
        type="checkbox"
        value=""
        className="h-[1.8rem] w-[1.8rem] rounded outline-none"
      />
      <label
        htmlFor="checkbox"
        className="text-xs font-medium leading-4 text-light-secondary dark:text-dark-contrast-800/80"
      >
        By checking this box, you confirm that you have read and are agreeing to
        our terms of use regarding the storage of the data submitted through
        this form.
      </label>
    </div>
  );
};

export default Checkbox;

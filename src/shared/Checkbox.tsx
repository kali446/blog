import React from "react";

const Checkbox = ({
  id,
  label,
  name,
  value,
  onChange,
  checked,
  error,
}: any) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex cursor-pointer select-none items-center gap-2">
        <input
          checked={checked}
          name={name}
          value={value}
          onChange={onChange}
          id={id}
          type="checkbox"
          className="h-[1.8rem] w-[1.8rem] rounded outline-none"
        />
        <label
          htmlFor={id}
          className="text-xs font-medium leading-4 text-light-secondary dark:text-dark-contrast-800/80"
        >
          {label}
        </label>
      </div>
      {error.length > 0 && (
        <div
          className={`translate-y-[-8px] text-[.65rem] font-semibold lowercase text-red-600 first-letter:capitalize`}
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default Checkbox;

interface Props {
  close?: () => void;
}

export const Backdrop = ({ close }: Props) => {
  return (
    <div
      onClick={() => {
        if (close) {
          close();
        }
      }}
      className="top-0 left-0 fixed z-[1004] h-full w-full bg-black/[.3]"
    ></div>
  );
};

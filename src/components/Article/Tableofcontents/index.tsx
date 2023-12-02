"use client";
import React, { useState, useEffect } from "react";
import Item from "./Item";
import CardTitle from "@/shared/CardTitle";
import { useHeadsObserver } from "@/hooks/useHeadsObserver";

type HeadingElement = {
  text: string;
  level: number;
  id: string;
};

const Tableofcontents = () => {
  const { activeId } = useHeadsObserver();
  const [headings, setHeadings] = useState<HeadingElement[]>([]);

  useEffect(() => {
    const content = document.getElementById("markdownContent");

    if (content) {
      const elements = Array.from(content.querySelectorAll("h2, h3, h4")).map(
        (elem) => ({
          text: (elem as HTMLElement).innerText,
          id: elem.id,
          level: Number(elem.nodeName.charAt(1)),
        }),
      );
      setHeadings(elements);
    }
  }, []);

  const getClassName = (level: number) => {
    switch (level) {
      case 2:
        return "head2";
      case 3:
        return "head3";
      case 4:
        return "head4";
      default:
        return null;
    }
  };

  if (!headings?.length) {
    return null;
  }

  return (
    <div className="w-full overflow-hidden rounded-lg bg-white py-2 shadow-md dark:bg-dark-layoutElement">
      <div className="px-4">
      <CardTitle>Table of contents</CardTitle>
      </div>

      <ul className="mt-3">
        {headings?.map((item, i) => {
          const id = item?.text.replace(/ /g, "-").toLowerCase();

          return (
            <Item
              num={i + 1}
              active={activeId === item?.id ? true : false}
              id={id}
              text={item?.text}
              level={item?.level}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Tableofcontents;

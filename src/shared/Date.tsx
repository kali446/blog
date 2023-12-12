"use client";
import { DATE_FORMAT } from "@/utils";
import React from "react";
import Moment from "react-moment";
import { date } from "yup";

interface Props {
  date: Date;
}

const Date = ({ date }: Props) => {
  return (
    <>
      <Moment format={DATE_FORMAT}>{date}</Moment>
    </>
  );
};

export default Date;

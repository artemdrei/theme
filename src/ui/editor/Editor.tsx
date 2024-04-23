import { TextField } from "@mui/material";
import React from "react";
import { Content } from "../../assets/content";

interface Props {
  content: Content;
  setContent: React.Dispatch<
    React.SetStateAction<{
      title: string;
      subTitle: string;
      note: string;
    }>
  >;
}

export const Editor: React.FC<Props> = ({ content, setContent }) => {
  return (
    <TextField
      label="Title"
      placeholder="title"
      onChange={(e) =>
        setContent((prev) => {
          return { ...prev, title: e.target.value };
        })
      }
      value={content.title}
    />
  );
};

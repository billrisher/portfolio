import React, { type ReactNode } from "react";

type ArticleProps = {
  id: string;
  title: string;
  body: ReactNode;
  onClose: () => void;
  isActive: boolean;
  isTimeout: boolean;
};

export const Article = ({ id, title, body, onClose, isActive, isTimeout }) => {
  return (
    <article
      id={id}
      className={`${isActive ? "active" : ""} ${isTimeout ? "timeout" : ""}`}
      style={{ display: "none" }}
    >
      <h2 className="major">{title}</h2>
      {body}
      <div
        className="close"
        onClick={() => {
          onClose();
        }}
      ></div>
    </article>
  );
};

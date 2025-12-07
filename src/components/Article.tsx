import React, { type ReactNode } from "react";

type ArticleProps = {
  id: string;
  title: string;
  body: ReactNode;
  onClose: () => void;
  isActive: boolean;
  isTimeout: boolean;
};

export const Article = ({
  id,
  title,
  body,
  onClose,
  isActive,
  isTimeout,
}: ArticleProps) => {
  return (
    <article
      id={id}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${id}-title`}
      className={`${isActive ? "active" : ""} ${isTimeout ? "timeout" : ""}`}
      style={{ display: "none" }}
    >
      <h2 id={`${id}-title`} className="major">
        {title}
      </h2>
      {body}
      <button
        type="button"
        className="close"
        onClick={onClose}
        aria-label="Close"
      >
        <span aria-hidden="true"></span>
      </button>
    </article>
  );
};

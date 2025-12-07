import React, { useCallback, useEffect, useRef, useState } from "react";
import { HeadFC } from "gatsby";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Layout from "../components/layout";
import { TIMEOUT_TIME_MS, LOADING_TIME_MS } from "../constants";

const IndexPage = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [lastFocusedElement, setLastFocusedElement] =
    useState<HTMLElement | null>(null);

  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState("is-loading");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading("");
    }, LOADING_TIME_MS);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const setWrapperRef = (node: HTMLDivElement | null) => {
    wrapperRef.current = node;
  };

  const handleOpenArticle = useCallback((article: string) => {
    // Store the currently focused element before opening modal
    setLastFocusedElement(document.activeElement as HTMLElement);

    setIsArticleVisible(true);
    setArticle(article);

    setTimeout(() => {
      setIsTimeout(true);
    }, TIMEOUT_TIME_MS);

    setTimeout(() => {
      setArticleTimeout(true);
      // Focus on the close button after modal opens
      const modal = document.getElementById(article);
      const closeButton = modal?.querySelector(".close") as HTMLElement;
      closeButton?.focus();
    }, TIMEOUT_TIME_MS);
  }, []);

  const handleCloseArticle = useCallback(() => {
    setIsArticleVisible(false);
    setArticle("");
    setTimeout(() => {
      setIsTimeout(false);
    }, TIMEOUT_TIME_MS);
    setTimeout(() => {
      setArticleTimeout(false);
    }, TIMEOUT_TIME_MS);
  }, []);

  // Return focus after closing with a separate effect
  useEffect(() => {
    if (!isArticleVisible && lastFocusedElement) {
      const timeoutId = setTimeout(() => {
        lastFocusedElement.focus();
      }, TIMEOUT_TIME_MS);
      return () => clearTimeout(timeoutId);
    }
  }, [isArticleVisible, lastFocusedElement]);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (wrapperRef && !wrapperRef.current?.contains(event.target as Node)) {
        if (isArticleVisible) {
          handleCloseArticle();
        }
      }
    },
    [isArticleVisible, handleCloseArticle],
  );

  // Click outside to close
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  // Keyboard event handler for Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isArticleVisible) {
        handleCloseArticle();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isArticleVisible, handleCloseArticle]);

  return (
    <Layout>
      <div
        className={`body ${loading} ${isArticleVisible ? "is-article-visible" : ""}`}
      >
        {/* Screen reader announcements */}
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {isArticleVisible && article && `${article} section opened`}
        </div>

        <div id="wrapper">
          <Header
            onOpenArticle={handleOpenArticle}
            timeout={isTimeout}
            article={article}
            isArticleVisible={isArticleVisible}
          />
          <Main
            isArticleVisible={isArticleVisible}
            timeout={isTimeout}
            articleTimeout={articleTimeout}
            article={article}
            onCloseArticle={handleCloseArticle}
            setWrapperRef={setWrapperRef}
          />
          <Footer timeout={isTimeout} isArticleVisible={isArticleVisible} />
        </div>
        <div id="bg"></div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Bill Risher</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="A developer with a dedication to keep software free and open forever."
    />
    <meta name="keywords" content="developer, software, open source" />
  </>
);

import React, { useEffect, useRef, useState } from "react";
import { HeadFC } from "gatsby";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Layout from "../components/layout";

const IndexPage = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState("is-loading");

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    const timeoutId = setTimeout(() => {
      setLoading("");
    }, 100);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timeoutId);
    };
  }, []);

  const setWrapperRef = (node: HTMLDivElement | null) => {
    wrapperRef.current = node;
  };

  const handleOpenArticle = (article: string) => {
    setIsArticleVisible(!isArticleVisible);
    setArticle(article);
    setTimeout(() => {
      setIsTimeout(!isTimeout);
    }, 325);
    setTimeout(() => {
      setArticleTimeout(!articleTimeout);
    }, 350);
  };

  const handleCloseArticle = () => {
    handleOpenArticle("");
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef && !wrapperRef.current?.contains(event.target as Node)) {
      if (isArticleVisible) {
        handleCloseArticle();
      }
    }
  };

  return (
    <Layout>
      <div
        className={`body ${loading} ${isArticleVisible ? "is-article-visible" : ""}`}
      >
        <div id="wrapper">
          <Header onOpenArticle={handleOpenArticle} timeout={isTimeout} />
          <Main
            isArticleVisible={isArticleVisible}
            timeout={isTimeout}
            articleTimeout={articleTimeout}
            article={article}
            onCloseArticle={handleCloseArticle}
            setWrapperRef={setWrapperRef}
          />
          <Footer timeout={isTimeout} />
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

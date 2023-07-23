import React from "react";
import { Toaster } from "../ui";
import { Header } from "./Header";
import { Footer } from "./Footer";

type PageLayoutProps = {} & React.HTMLAttributes<HTMLDivElement>;

const PageLayout: React.FC<PageLayoutProps> = ({ children, ...rest }) => {
  return (
    <main {...rest}>
      <div className="mx-auto max-w-5xl">
        <Header />
        {children}
        <Footer />
      </div>
      <Toaster />
    </main>
  );
};

export { PageLayout };

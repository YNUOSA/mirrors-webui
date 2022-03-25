import type { ReactElement } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

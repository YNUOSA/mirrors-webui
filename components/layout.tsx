import type { ReactElement } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Box from "@mui/material/Box";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Box
        sx={{
          paddingTop: "3rem",
        }}
      >
        <main>{children}</main>
      </Box>
      <Footer />
    </Box>
  );
}

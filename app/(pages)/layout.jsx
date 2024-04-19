import "@globals/globals.scss";
import fonts from "@globals/fonts";
import metadata from "@globals/metadata";

import navLinks from "@data/navLinks.json";
import Navbar from "@components/Navbar/Navbar";
import { NextAuthProvider } from "./providers";
export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fonts}>
        <NextAuthProvider>
            <Navbar navLinks={navLinks} />
            {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}

import "@globals/globals.scss";
import fonts from "@globals/fonts";
import metadata from "@globals/metadata";

import navLinks from "@data/navLinks.json";
import Navbar from "@components/Navbar/Navbar";
import { Authentication } from "./Authentication";

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fonts}>
        <Authentication>
            <Navbar navLinks={navLinks} />
            {children}
        </Authentication>
        {/* <Navbar navLinks={navLinks} />
        {children} */}
      </body>
    </html>
  );
}

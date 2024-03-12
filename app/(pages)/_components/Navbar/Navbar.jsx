"use client";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import webtool from "../../../../public/index/webtool.png";
import styles from "./Navbar.module.scss";
import useToggle from "@hooks/useToggle";

export default function Navbar({ navLinks }) {
  const [active, toggleActive] = useToggle(false);

  const groupedLinks = navLinks.reduce((acc, link) => {
    acc[link.type] = [...(acc[link.type] || []), link];
    return acc;
  }, {});


  return (
    <div className={styles.relative_wrapper}>
      <div className={styles.container}>
        <h2 className={styles.hello}>
          Erin
          <h4 className={styles.email}>erin@email.com</h4>{" "}
        </h2>
        <div className={styles.nav_container}>
          <div className={`${styles.links} ${active ? styles.active : null}`}>
            {Object.entries(groupedLinks).map(([type, links]) => (
              <div key={type}>
                <h4 className={styles.type}>{type}</h4>
                {links.map((link) => (
                  <Link key={link.slug} href={link.slug}>
                    <div className={styles.link}>
                      {link.image && (
                        <Image
                          className={styles.linkImage}
                          src={link.image}
                          width={30}
                          height={30}
                          alt={link.name}
                        />
                      )}
                      {link.name}
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <button className={styles.menu} onClick={toggleActive}>
            {active ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>
        <Image
          className={styles.Webtool}
          src={webtool}
          width={200}
          height={100}
          alt="Logo"
        />
      </div>
    </div>
  );
}

import Link from "next/link";
import Logo from "./logo";
import classes from "../../styles/layout/main-navigation.module.css";
import { useState, useEffect, useCallback } from "react";

export default function MainNavigation() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const onScroll = useCallback((event) => {
    const { pageYOffset } = window;
    setIsScrolled(pageYOffset > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <header
      className={`${classes["c-header"]} 
        ${isScrolled ? classes["c-header--scrolled"] : ""} `}
    >
      <Link href="/">
        <Logo />
      </Link>
      <nav className={classes["c-header-list"]}>
        <ul>
          <li>
            <Link href="/#about" scroll={false}>
              Úvod
            </Link>
          </li>
          <li>
            <Link href="/#members" scroll={false}>
              Kapela
            </Link>
          </li>
          <li>
            <Link href="/#tour" scroll={false}>
              Koncerty
            </Link>
          </li>
          <li>
            <Link href="/#contact" scroll={false}>
              Kontakt
            </Link>
          </li>
          <li>
            <Link href="/playlist" scroll={false}>
              Playlist
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={classes["c-mobile-header"]}>
        <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
          <div
            className={`${classes["c-menu-toggle-wrap"]} ${
              isMobileNavOpen ? classes["c-menu-toggle-wrap-rotate"] : ""
            }`}
          ></div>
        </button>
        {isMobileNavOpen && (
          <div className={classes["c-mobile-list"]}>
            <ul>
              <li>
                <Link
                  href="/#about"
                  scroll={false}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Úvod
                </Link>
              </li>
              <li>
                <Link
                  href="/#members"
                  scroll={false}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Kapela
                </Link>
              </li>
              <li>
                <Link
                  href="/#tour"
                  scroll={false}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Koncerty
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  scroll={false}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/playlist"
                  scroll={false}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Playlist
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

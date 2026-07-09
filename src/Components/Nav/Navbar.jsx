import React, { Fragment, useState } from "react";
import useHostname from "../Provider/HostnameProvider";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Navbar = ({ step = 0 }) => {
  const originalUrl = useHostname();

  const router = useRouter();

  const isActive = (path) => {
    if (path === "/") {
      return router.pathname === "/";
    }
    return router.pathname.startsWith(path) && router.pathname !== "/";
  };

  const [ToogleMenu, setToogleMenu] = useState(false);

  return (
    <Fragment>
      <div className="fixed w-full py-4 bg-white z-[80] border-b !border-Mgrayscale_200 lg:!border-none">
        <Container className="overflow-hidden">
          <div
            className={
              "flex items-center justify-between relative text__16 uppercase transition-all duration-700 " +
              (step > 3 ? "" : "-translate-y-[2rem]")
            }
          >
            <Link href={"/"} className="text-Mgrayscale_900 flex items-center gap-2">
              <img src={originalUrl + "/favicon.png"} alt="" className="w-4 h-4 rounded-full" />
              ANASTASIA
            </Link>

            <div className="hidden md:flex items-center gap-4">
              <a href={"https://t.me/ankutina"} target="_blank" rel="noopener noreferrer">CONTACT</a>
              <a href={"https://www.dropbox.com/scl/fi/njgqjuctfritzsm14aapn/CV.pdf?rlkey=x6caremxnzggtu5krxqtx6ipd&st=y50aduid&dl=0"} target="_blank" rel="noopener noreferrer">
                CV
              </a>
            </div>
            <div
              onClick={() => setToogleMenu(!ToogleMenu)}
              className="font-medium text__14 md:hidden cursor-pointer"
            >
              {ToogleMenu ? (
                <>
                  <img src={originalUrl + "/images/Close.svg"} alt="" />
                </>
              ) : (
                "МЕНЮ"
              )}
            </div>
          </div>
        </Container>
      </div>
      <div
        className={
          "fixed z-[75] bg-white w-full left-0 pt-[70px] transition-all duration-300 md:hidden " +
          (ToogleMenu ? "top-0" : "-top-[50rem]")
        }
      >
        <Container className="py-4">
          <div className="grid grid-cols-1 gap-y-[20px]">
            <a href={"https://t.me/ankutina"} target="_blank" rel="noopener noreferrer" className="text-[32px]">
              CONTACT
            </a>
            <a href={"https://www.dropbox.com/scl/fi/njgqjuctfritzsm14aapn/CV.pdf?rlkey=x6caremxnzggtu5krxqtx6ipd&st=y50aduid&dl=0"} target="_blank" rel="noopener noreferrer" className="text-[32px]">
              CV
            </a>

          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default Navbar;

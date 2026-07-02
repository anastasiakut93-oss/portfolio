import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useHostname from "../Provider/HostnameProvider";
import Link from "next/link";
import BannerContact from "../Path/BannerContact";

const Footer = () => {
  const originalUrl = useHostname();
  return (
    <Fragment>
      <BannerContact />
      <section className="pb-[80px]">
        <Container>
          <div className="flex flex-col ss:flex-row justify-between gap-8">
            <div>
              <p className="text__18 opacity-60 mb-2">EMAIL</p>
              <a href="mailto:anastasia.kut93@gmail.com" className="text__24 hover:opacity-60 transition-opacity">anastasia.kut93@gmail.com</a>
            </div>
            <div>
              <p className="text__18 opacity-60 mb-2">TELEGRAM</p>
              <a href="https://t.me/ankutina" target="_blank" rel="noopener noreferrer" className="text__24 hover:opacity-60 transition-opacity">@ankutina</a>
            </div>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default Footer;

import React, { Fragment, useState } from "react";
import { Container } from "react-bootstrap";
import useHostname from "../Provider/HostnameProvider";
import { motion } from "framer-motion";

const BannerContact = () => {
  const originalUrl = useHostname() + "/images/";
  const [onHoverBtn, setonHoverBtn] = useState(false);
  return (
    <Fragment>
      <section>
        <Container>
          <h4 className="text-[24px] ss:text-[36px] md:text-[46px] lg:text-[64px] xl:text-[80px] text-left">
            Открыта к новым <br /> возможностям
          </h4>
          <div
            className="flex justify-end py-6"
            onMouseEnter={() => setonHoverBtn(true)}
            onMouseLeave={() => setonHoverBtn(false)}
          >
            <a href={"https://t.me/ankutina"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <div className="inline-block">
                <img
                  src={originalUrl + "Project image.png"}
                  className="h-[115px] w-auto md:block hidden"
                  alt=""
                />
              </div>
              <span className="text-[36px] xx:text-[56px] ss:text-[64px] lg:text-[110px] xl:text-[136px]">
                Связаться.
              </span>

              <div className="overflow-hidden relative w-[56px] ss:w-[86px] xs:w-[110px] lg:w-[140px] xl:w-[160px] h-[56px] ss:h-[86px] xs:h-[110px] lg:h-[140px] xl:h-[160px]">
                <motion.img
                  initial={{ x: "-50%", y: "-50%", left: "50%", top: "50%" }}
                  animate={{
                    x: onHoverBtn ? "100%" : "-50%",
                    y: onHoverBtn ? "-100%" : "-50%",
                    left: onHoverBtn ? "100%" : "50%",
                    top: onHoverBtn ? "-100%" : "50%",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  src={originalUrl + "carbon_arrow-up-right copy.svg"}
                  alt=""
                  className="w-[56px] ss:w-[86px] xs:w-[110px] lg:w-[140px] xl:w-auto absolute"
                />
                <motion.img
                  initial={{ x: "-100%", y: "100%", left: "50%", top: "50%" }}
                  animate={{
                    x: onHoverBtn ? "-50%" : "-100%",
                    y: onHoverBtn ? "-50%" : "100%",
                    left: onHoverBtn ? "50%" : "-50%",
                    top: onHoverBtn ? "50%" : "100%",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  src={originalUrl + "carbon_arrow-up-right copy 2.svg"}
                  alt=""
                  className="w-[56px] ss:w-[86px] xs:w-[110px] lg:w-[140px] xl:w-auto absolute"
                />
              </div>
            </a>
          </div>
          <p className="text__24 opacity-60">
            Рассматриваю предложения на позицию Product Designer <br />и буду рада обсудить возможное сотрудничество.
          </p>
        </Container>
      </section>
    </Fragment>
  );
};

export default BannerContact;

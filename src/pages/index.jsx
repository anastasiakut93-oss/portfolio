import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import WrapImageLogo from "@/Components/Path/WrapImageLogo";
import Link from "next/link";
import WrapWork from "@/Components/Path/WrapWork";
import TextAnimation from "@/Components/Path/TextAnimation";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";
import LazyVideo from "@/Components/Path/LazyVideo";

const Index = () => {
  const originalUrl = useHostname() + "/images/";

  const step = 4;
  return (
    <Fragment>
      <Layout
        title="ANASTASIIA KUTINA"
        description="✱ Anastasia Kutina — Product Designer"
        navbar={true}
        useHeight={step >= 3 ? false : true}
        step={step}
      >


        <section className="h-[90vh] md:h-[80vh] pt-[40px] md:pt-0 pb-[40px] md:pb-[80px]">
          <Container>
            <svg
              className="w-full md:max-w-[88%] md:mx-auto block"
              viewBox="0 0 1000 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className={"transition-all duration-500 " + (step > 3 ? "" : "-translate-x-[30%] translate-y-[13rem] opacity-0")}>
                <text
                  x="0"
                  y="112"
                  textLength="1000"
                  lengthAdjust="spacingAndGlyphs"
                  fill="#1A1A1A"
                  style={{ fontSize: "115px", fontWeight: 800, fontFamily: "inherit" }}
                >
                  Анастасия Кутина
                </text>
              </g>
            </svg>

            <div className="grid md:grid-cols-2 gap-4 mt-[40px] md:mt-[80px]">
              <div className="h-full flex flex-wrap">
                <p className="text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] overflow-hidden">
                  <span
                    className={
                      "transition-all duration-700 inline-block " +
                      (step > 3
                        ? " translate-x-0"
                        : "-translate-x-[5rem] translate-y-[2rem] opacity-0")
                    }
                  >
                    Привет! Я продуктовый дизайнер
                  </span>{" "}
                  <br />{" "}
                  <span
                    className={
                      "transition-all duration-700 inline-block " +
                      (step > 3
                        ? " translate-x-0"
                        : "translate-x-[5rem] translate-y-[2rem] opacity-0")
                    }
                  >
                    с опытом в нагруженных B2B и B2C продуктах.
                  </span>
                </p>
                <div className="w-full self-end inline-block">
                  <p
                    className={
                      "text__20 opacity-60 md:inline-block hidden overflow-hidden transition-all duration-700 " +
                      (step > 3 ? "max-w-[100vw]" : "max-w-0")
                    }
                  >
                    <span className="w-max inline-block">
                      Листай, чтобы увидеть кейсы
                    </span>
                  </p>
                </div>
              </div>
              <div className="md:mt-0 mt-[100px]">
                <div
                  className={
                    "overflow-hidden w-[150px] ss:w-[190px] md:w-[260px] transition-all duration-700 " +
                    (step > 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]")
                  }
                >
                  <img
                    src={originalUrl + "hero-photo.webp"}
                    className="w-full object-cover"
                    alt=""
                  />
                </div>

                <p className="text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] mt-[20px] md:mt-[40px] overflow-hidden">
                  <span
                    className={
                      "transition-all duration-700 inline-block " +
                      (step > 3
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-[5rem] translate-y-[2rem] opacity-0")
                    }
                  >
                    Превращаю сложные сценарии в понятные интерфейсы.
                  </span>
                </p>
              </div>
            </div>

            <div className="text-center md:hidden">
              <p className="text__20 opacity-60 w-full mt-[48px]">Листай, чтобы увидеть кейсы</p>
            </div>
          </Container>
        </section>

        {[
          { img: "consignment-cover.webp", title: "Редизайн формы бронирования: с 58 полей до 10 обязательных", href: "/work/detail/consignment-form", desc: "Разобралась, что реально нужно на этапе подачи заявки, и сократила форму с 58 полей до 10 обязательных." },
          { video: "hubstr-cover.mp4", img: "gg1.webp", title: "Запуск нового клуба за 2 часа вместо недели: что поменялось в Figma", href: "/work/detail/milan-portraits", desc: "Навела порядок в захламлённых макетах с помощью Claude Code. Адаптация под новый клуб сократилась с 6 часов до 30 минут." },
          { img: "alcohol-retail-cover.webp", title: "Два приложения для алкогольной сети: B2C и B2B", href: "/work/detail/alcohol-retail", desc: "Спроектировала два приложения с нуля — B2C для покупателей и B2B для дистрибьютора — с разной логикой под разные задачи." },
          { video: "bankruptcy-cover.mp4", img: "Container.webp", title: "Банкротство за несколько шагов: мобильное приложение для сложного процесса", href: "/work/detail/bankruptcy", desc: "Спроектировала мобильное приложение, которое ведёт пользователя через весь процесс банкротства — от договора до завершения процедуры." },
          { img: "prism-1.png", title: "Сервис, который открывают раз в месяц: как сделать его понятным без инструкции", href: "/work/detail/prism", desc: "Спроектировала MVP сервиса аналитики, который должен работать без инструкции — аудитория открывает его раз в месяц." },
          { video: "dmp-cover-3.mp4", img: "dmp-cover.webp", title: "DMP.ONE: CRM для лидогенерации с геймификацией", href: "/work/detail/dmp-one", desc: "Спроектировала CRM с нуля и переделала партнёрский кабинет: вместо голого рейтинга — уровни, миссии и прогресс, который понятен партнёру." },
          { video: "vkfest-cover.mp4", img: "ee2.webp", title: "100К пользователей и Топ-1 в Google Play: приложение VK Fest 2024", href: "/work/detail/vkfest", desc: "Обновила мобильное приложение фестиваля под новый фирменный стиль в сжатый срок, держа дизайн в синхроне с параллельно разрабатывавшимся брендингом." },
          { video: "kidride-cover.mp4", img: "bb1.webp", title: "KidRide: приложение для водителей 45+", href: "/work/detail/kidride", desc: "Спроектировала приложение для водителей 45+ на основе глубинных интервью: крупный шрифт, тёмная тема, три действия на весь флоу поездки." },
        ].map(({ img, video, title, href, desc }) => (
          <section key={title}>
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2">
                  {video ? (
                    <LazyVideo src={originalUrl + video} className="w-full aspect-[3/2] object-cover rounded-2xl" />
                  ) : (
                    <img src={originalUrl + img} className="w-full aspect-[3/2] object-cover rounded-2xl" alt={title} loading="lazy" />
                  )}
                </div>
                <div className="lg:pl-8">
                  <h5 className="text__40">{title}</h5>
                  <p className="text__20 opacity-60 mt-3 mb-8">{desc}</p>
                  <Link href={href} className="group inline-block px-[24px] py-[10px] rounded-full border !border-Mneutral_900">
                    <div className="flex items-center gap-2 text__18">
                      Посмотреть
                      <div className="relative overflow-hidden w-[18px] h-[18px]">
                        <img src={originalUrl + "carbon_arrow-up-right copy.svg"} className="absolute top-0 left-0 w-[18px] transition-all duration-300 group-hover:translate-x-full group-hover:-translate-y-full" alt="" />
                        <img src={originalUrl + "carbon_arrow-up-right copy 2.svg"} className="absolute top-0 left-0 w-[18px] -translate-x-full translate-y-full transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0" alt="" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </Container>
          </section>
        ))}
      </Layout>
    </Fragment>
  );
};

export default Index;

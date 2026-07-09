import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import Link from "next/link";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";
import LazyVideo from "@/Components/Path/LazyVideo";

const Prism = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  return (
    <Fragment>
      <Layout
        step={step}
        title="Сервис, который открывают раз в месяц: как сделать его понятным без инструкции"
        description="Prism — сервис сквозной аналитики"
        navbar={true}
      >
        <section>
          <Container>
            <WrapAnimateUp step={step}>
              <Link href={"/"}>
                <div className="flex items-center gap-2">
                  <img src={originalUrl + "Back.svg"} alt="" />
                  <p className="opacity-40">На главную</p>
                </div>
              </Link>
            </WrapAnimateUp>

            <WrapAnimateUp step={step}>
              <h2 className="text__64 mt-[2rem]">Сервис, который открывают раз в месяц: как сделать его понятным без инструкции</h2>
            </WrapAnimateUp>

            <WrapAnimateUp step={step}>
              <img
                src={originalUrl + "prism-1.png"}
                className="w-full aspect-[3/2] object-cover rounded-2xl mt-[2rem] mb-[2rem] md:mb-[4rem]"
                alt=""
              />
            </WrapAnimateUp>

            <WrapAnimateUp step={step}>
              <p className="text-[13px] sm:text-[16px] lg:text-[18px] italic opacity-60 text-center w-full mb-[3rem] md:mb-[6rem]">
                Prism — сервис сквозной аналитики, который собирает данные из всех рекламных кабинетов клиента в одном месте.
              </p>
            </WrapAnimateUp>

            <div className="grid grid-cols-1 md:grid-cols-5 mb-[3rem] md:mb-[8rem]">
              <div className="hidden md:block md:col-span-2"></div>
              <div className="md:col-span-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="pt-6">
                    <p className="text__32 font-bold">4 месяца</p>
                    <p className="text-[13px] sm:text-[16px] lg:text-[18px] opacity-60 mt-1">от старта до запуска MVP</p>
                  </div>
                  <div className="pt-6">
                    <p className="text__32 font-bold">20</p>
                    <p className="text-[13px] sm:text-[16px] lg:text-[18px] opacity-60 mt-1">клиентов опрошено до старта проектирования</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-[3rem] md:gap-[8rem]">

              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">Проблема</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Вместо того чтобы переключаться между десятком рекламных источников — всё в одной системе.
                  </h5>
                  <h5 className="text__32">
                    Задача: спроектировать MVP. Главное ограничение — сервис открывают нерегулярно, значит каждый раз почти как первый, а интерфейс должен работать без инструкции. Две особенности аудитории сразу задали ограничения: офисные работники с некачественными мониторами — не абстракция, а реальная целевая аудитория, у которой контраст на экране далёк от нормы.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "prism-research.webp"}
                className="w-full object-cover rounded-2xl"
                alt=""
                loading="lazy"
              />

              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">С чего начала</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Перед проектированием опросила 20 действующих клиентов — как они работают с рекламными данными сейчас, где теряют время, что важно видеть в первую очередь.
                  </h5>
                  <h5 className="text__32">
                    Собрала референсы, набросала концепцию и перешла к прототипам — на них проверяла основные гипотезы, прежде чем переходить к макетам.
                  </h5>
                  <h5 className="text__32">
                    Пустое состояние главного экрана оказалось нетривиальной задачей: пока нет ни одного подключения, система показывает процесс обработки данных, и был реальный риск баннерной слепоты. Рассмотрела несколько вариантов и остановилась на горизонтальном расположении блоков с анимацией — движение не даёт взгляду соскользнуть.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "prism-2.webp"}
                className="w-full object-cover rounded-2xl"
                alt=""
                loading="lazy"
              />

              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">Что сделала</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Для нерегулярного использования онбординг встроила прямо в интерфейс: не отдельный экран «добро пожаловать», а контекстные подсказки там, где они нужны. Пользователь не должен помнить, как что работает — нужное объяснение рядом.
                  </h5>
                  <h5 className="text__32">
                    Контраст и типографику проверяла не только на калиброванных экранах. То, что читается на MacBook, на офисном мониторе с выкрученной яркостью может стать нечитаемым — это проверялось отдельно.
                  </h5>
                  <h5 className="text__32">
                    После прототипов я тестировала макеты на пользователях, вносила правки и итерировала.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "prism-4.webp"}
                className="w-full object-cover rounded-2xl"
                alt=""
                loading="lazy"
              />

              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">Результат</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Мы запустили MVP за 4 месяца. Ключевой клиент, который был под вопросом, остался — интерфейс стал достаточно понятным, чтобы работать без звонка в поддержку при каждом входе.
                  </h5>
                </div>
              </div>

            </div>
          </Container>
        </section>
        <section>
          <Container>
            <Link href="/work/detail/dmp-one" className="group block border-t !border-Mneutral_200 pt-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text__18 opacity-40 mb-2">Следующий проект</p>
                  <h5 className="text__40">DMP.ONE: CRM для лидогенерации с геймификацией</h5>
                </div>
                <div className="relative overflow-hidden w-10 h-10 shrink-0 ml-8">
                  <img
                    src={originalUrl + "carbon_arrow-up-right copy.svg"}
                    alt=""
                    className="absolute top-0 left-0 w-10 transition-all duration-300 group-hover:translate-x-full group-hover:-translate-y-full"
                  />
                  <img
                    src={originalUrl + "carbon_arrow-up-right copy 2.svg"}
                    alt=""
                    className="absolute top-0 left-0 w-10 -translate-x-full translate-y-full transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
                  />
                </div>
              </div>
              <LazyVideo
                src={originalUrl + "dmp-cover-3.mp4"}
                className="w-full aspect-[3/2] object-cover rounded-2xl"
              />
            </Link>
          </Container>
        </section>
      </Layout>
    </Fragment>
  );
};

export default Prism;

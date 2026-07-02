import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import Link from "next/link";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const Prism = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  return (
    <Fragment>
      <Layout
        step={step}
        title="Сервис, который открывают раз в месяц: как сделать его понятным без инструкции"
        description="Prism — сервис сквозной аналитики"
        navbar={true}
      >
        <section>
          <Container>
            <WrapAnimateUp step={step}>
              <Link href={"/"}>
                <div className="flex items-center gap-2">
                  <img src={originalUrl + "Back.svg"} alt="" />
                  <p className="opacity-40">На главную</p>
                </div>
              </Link>
            </WrapAnimateUp>

            <WrapAnimateUp step={step}>
              <h2 className="text__64 mt-[2rem]">Сервис, который открывают раз в месяц: как сделать его понятным без инструкции</h2>
            </WrapAnimateUp>

            <WrapAnimateUp step={step}>
              <img
                src={originalUrl + "prism-1.png"}
                className="w-full aspect-[3/2] object-cover rounded-2xl mt-[2rem] mb-[4rem]"
                alt=""
              />
            </WrapAnimateUp>

            <div className="grid grid-cols-1 md:grid-cols-5 mb-[4rem]">
              <div className="hidden md:block md:col-span-2"></div>
              <div className="md:col-span-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="pt-6">
                    <p className="text__32 font-bold">4 месяца</p>
                    <p className="text-[13px] sm:text-[16px] lg:text-[18px] opacity-60 mt-1">от старта до запуска MVP</p>
                  </div>
                  <div className="pt-6">
                    <p className="text__32 font-bold">20</p>
                    <p className="text-[13px] sm:text-[16px] lg:text-[18px] opacity-60 mt-1">клиентов опрошено до старта проектирования</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-[6rem] md:gap-[8rem]">

              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">Задача</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Prism — сервис сквозной аналитики: собирает данные из всех рекламных кабинетов клиента в одно место. Вместо того чтобы переключаться между десятком источников — всё в одной системе.
                  </h5>
                  <h5 className="text__32">
                    Задача: спроектировать MVP. Главное ограничение — сервис открывают нерегулярно, значит каждый раз почти как первый. Интерфейс должен работать без инструкции.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "prism-3.png"}
                className="w-full object-cover rounded-2xl"
                alt=""
              />

              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">С чего начинали</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Две особенности аудитории сразу задали ограничения. Офисные работники с некачественными мониторами — не абстракция, а реальная целевая аудитория, у которой контраст на экране далёк от нормы. И сервис открывают раз в неделю или реже: паттерны, которые кажутся очевидными при ежедневном использовании, здесь не работают.
                  </h5>
                  <h5 className="text__32">
                    Перед проектированием опросила 20 действующих клиентов — как они работают с рекламными данными сейчас, где теряют время, что важно видеть в первую очередь.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "prism-2.png"}
                className="w-full object-cover rounded-2xl"
                alt=""
              />

              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">Что сделала</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Пустое состояние главного экрана оказалось нетривиальной задачей. Пока нет ни одного подключения, система показывает процесс обработки данных — и был реальный риск баннерной слепоты: пользователь смотрит и не считывает, что происходит. Рассмотрела несколько вариантов, остановилась на горизонтальном расположении блоков с анимацией — движение не даёт взгляду соскользнуть.
                  </h5>
                  <h5 className="text__32">
                    Для нерегулярного использования онбординг встроила прямо в интерфейс: не отдельный экран "добро пожаловать", а контекстные подсказки там, где они нужны. Пользователь не должен помнить, как что работает — нужное объяснение рядом.
                  </h5>
                  <h5 className="text__32">
                    Контраст и типографику проверяла не только на калиброванных экранах. То, что читается на MacBook, на офисном мониторе с выкрученной яркостью может стать нечитаемым — это проверялось отдельно.
                  </h5>
                  <h5 className="text__32">
                    После прототипов — тестирование на пользователях, правки, итерация.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "prism-4.png"}
                className="w-full object-cover rounded-2xl"
                alt=""
              />

              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">Результат</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    MVP запустили за 4 месяца. Ключевой клиент, который был под вопросом, остался — интерфейс стал достаточно понятным, чтобы работать без звонка в поддержку при каждом входе.
                  </h5>
                </div>
              </div>

            </div>
          </Container>
        </section>
        <section>
          <Container>
            <Link href="/work/detail/vkfest" className="group block border-t !border-Mneutral_200 pt-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text__18 opacity-40 mb-2">Следующий проект</p>
                  <h5 className="text__40">100К пользователей и Топ-1 в Google Play: приложение VK Fest 2024</h5>
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
              <video
                src={originalUrl + "vkfest-cover.mp4"}
                className="w-full aspect-[3/2] object-cover rounded-2xl"
                autoPlay
                muted
                loop
                playsInline
              />
            </Link>
          </Container>
        </section>
      </Layout>
    </Fragment>
  );
};

export default Prism;

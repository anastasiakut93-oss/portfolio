import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import Link from "next/link";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const MilanPortraits = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  return (
    <Fragment>
      <Layout
        step={step}
        title="Запуск нового клуба за 2 часа вместо недели: что поменялось в Figma"
        description="Hubstr — редизайн дизайн-системы на переменных"
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
              <h2 className="text__64 mt-[2rem]">Запуск нового клуба за 2 часа вместо недели: что поменялось в Figma</h2>
            </WrapAnimateUp>

            <WrapAnimateUp step={step}>
              <video
                src={originalUrl + "hubstr-cover.mp4"}
                className="w-full aspect-[3/2] object-cover rounded-2xl mt-[2rem] mb-[4rem]"
                autoPlay
                muted
                loop
                playsInline
              />
            </WrapAnimateUp>

            <div className="grid grid-cols-1 md:grid-cols-5 mb-[4rem]">
              <div className="hidden md:block md:col-span-2"></div>
              <div className="md:col-span-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="pt-6">
                    <p className="text__32 font-bold">30 мин</p>
                    <p className="text-[13px] sm:text-[16px] lg:text-[18px] opacity-60 mt-1">адаптация под новый клуб вместо 6 часов</p>
                  </div>
                  <div className="pt-6">
                    <p className="text__32 font-bold">2 часа</p>
                    <p className="text-[13px] sm:text-[16px] lg:text-[18px] opacity-60 mt-1">запуск клуба разработчиками вместо недели</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-[6rem] md:gap-[8rem]">

              {/* ЗАДАЧА */}
              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">Задача</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Hubstr — внутренний продукт студии, мобильное приложение для бизнес-клубов и сообществ. Макеты копились с 2022 года: часть файлов потерялась, часть экранов появлялась вообще без дизайнера. Нужно было разобраться, что есть, и привести в состояние, с которым можно работать.
                  </h5>
                  <h5 className="text__32">
                    Параллельно — системная проблема: каждый новый клуб требовал полной переработки под брендбук. Цвета, шрифты, компоненты — вручную, экран за экраном, около 6 часов. И всё равно что-то ловили на проде.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "hubstr-3.png"}
                className="w-full object-cover rounded-2xl"
                alt=""
              />

              {/* С ЧЕГО НАЧИНАЛИ */}
              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">С чего начинали</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Файлы без системы вообще. Цвета не в стилях, компоненты в группах, auto layout не использовался. Смена шрифта ломала верстку по всему файлу. Плагины немного ускоряли, но принципиально ничего не меняли — перекрашивать всё равно приходилось руками, экран за экраном.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "hubstr-2.png"}
                className="w-full object-cover rounded-2xl"
                alt=""
              />

              {/* ЧТО СДЕЛАЛА */}
              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">Что сделала</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Сначала собрала все экраны в один файл — просто чтобы понять, что вообще есть. Часть восстанавливала по скриншотам из продакшна, других источников не было.
                  </h5>
                  <h5 className="text__32">
                    Дальше аудит и перестройка: атомарные элементы, компоненты с правильными вариантами, переменные для цветов и типографики. Рутинные части — проверку именования, поиск несоответствий — делала с Claude через Figma MCP. То, что руками заняло бы пару часов, закрывалось за 15 минут.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "hubstr-1.png"}
                className="w-full object-cover rounded-2xl"
                alt=""
              />

              {/* КАК ЭТО РАБОТАЕТ ТЕПЕРЬ */}
              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">Как это работает теперь</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Теперь когда приходит новый клуб с брендбуком, меняю значения переменных — цвета, шрифты, радиусы — и смотрю результат глазами. Полчаса вместо шести часов.
                  </h5>
                  <h5 className="text__32">
                    Разработчики забирают переменные через Figma MCP напрямую в код. Запуск клуба занимает 2 часа там, где раньше уходила неделя.
                  </h5>
                </div>
              </div>

            </div>
          </Container>
        </section>

        <section>
          <Container>
            <Link href="/work/detail/consignment-form" className="group block border-t !border-Mneutral_200 pt-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text__18 opacity-40 mb-2">Следующий проект</p>
                  <h5 className="text__40">Редизайн формы бронирования: с 58 полей до 10 обязательных</h5>
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
              <img
                src={originalUrl + "consignment-cover.png"}
                className="w-full aspect-[3/2] object-cover rounded-2xl"
                alt=""
              />
            </Link>
          </Container>
        </section>
      </Layout>
    </Fragment>
  );
};

export default MilanPortraits;

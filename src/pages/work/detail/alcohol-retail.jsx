import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import Link from "next/link";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";
import LazyVideo from "@/Components/Path/LazyVideo";

const AlcoholRetail = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  return (
    <Fragment>
      <Layout
        step={step}
        title="Два приложения для алкогольной сети: B2C и B2B"
        description="Мобильные приложения для крупной алкогольной сети, NDA"
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
              <h2 className="text__64 mt-[2rem]">Два приложения для алкогольной сети: B2C и B2B</h2>
            </WrapAnimateUp>

            <WrapAnimateUp step={step}>
              <img
                src={originalUrl + "alcohol-retail-cover.webp"}
                className="w-full aspect-[3/2] object-cover rounded-2xl mt-[2rem] mb-[2rem] md:mb-[4rem]"
                alt=""
              />
            </WrapAnimateUp>

            <div className="grid grid-cols-1 md:grid-cols-5 mb-[3rem] md:mb-[8rem]">
              <div className="hidden md:block md:col-span-2"></div>
              <div className="md:col-span-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="pt-6">
                    <p className="text__32 font-bold">2</p>
                    <p className="text-[13px] sm:text-[16px] lg:text-[18px] opacity-60 mt-1">приложения: B2C и B2B</p>
                  </div>
                  <div className="pt-6">
                    <p className="text__32 font-bold">С нуля</p>
                    <p className="text-[13px] sm:text-[16px] lg:text-[18px] opacity-60 mt-1">до запуска — проектирование и сопровождение разработки</p>
                  </div>
                  <div className="border-t !border-Mneutral_200 pt-6">
                    <p className="text__32 font-bold">3</p>
                    <p className="text-[13px] sm:text-[16px] lg:text-[18px] opacity-60 mt-1">уровня цены на один товар в B2B</p>
                  </div>
                  <div className="border-t !border-Mneutral_200 pt-6">
                    <p className="text__32 font-bold">До 150</p>
                    <p className="text-[13px] sm:text-[16px] lg:text-[18px] opacity-60 mt-1">точек продаж в одном кабинете менеджера</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-[3rem] md:gap-[8rem]">

              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">Задача</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Крупная алкогольная розничная сеть, NDA. Склады по всей стране, тысячи клиентов, десятки тысяч точек продаж. Нужны были два продукта параллельно: B2C-приложение для покупателей и B2B — для дистрибьютора и его клиентов. Оба с нуля, вместе с аналитиком. Я отвечала за проектирование и сопровождение разработки.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "alcohol-retail-2.webp"}
                className="w-full object-cover rounded-2xl"
                alt=""
                loading="lazy"
              />

              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">С чего начинали</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Два продукта — две разные аудитории с противоположными задачами. В B2C покупатель исследует, сравнивает, выбирает под настроение. В B2B — точка продаж заходит со списком на закупку и дедлайном, а менеджеры самого дистрибьютора одновременно ведут десятки, а то и сотню с лишним клиентов.
                  </h5>
                  <h5 className="text__32">
                    Один интерфейс для обоих не работает. Пришлось проектировать два отдельных продукта с разной логикой, параллельно, без потери контекста между ними.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "alcohol-retail-3.webp"}
                className="w-full object-cover rounded-2xl"
                alt=""
                loading="lazy"
              />

              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">Что сделала</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    В B2C разобрала сценарии покупки: по настроению, к блюду, по акции, по рекомендации. Аудитория неоднородная — кто-то берёт одно и то же каждую неделю, кто-то идёт исследовать. Для «исследователей» сделала систему бейджей на карточках товаров — новинки, редкие позиции, выбор сомелье. Не поп-ап с объяснением, а метка, которую считываешь мимоходом. Отдельно собрала уровни лояльности — от «Ценителя» до «Эксперта» — и акции так, чтобы всплывали в нужный момент, а не засоряли уведомления.
                  </h5>
                  <h5 className="text__32">
                    В B2B логика другая: точке продаж некогда разбираться с интерфейсом, а менеджеру дистрибьютора — переключаться между аккаунтами клиентов. Сделала три уровня цены на один товар — гостевая, базовая, персональная по контракту — и мультиклиентский режим для менеджера: заходит в приложение, выбирает нужную точку из своего списка, работает с ней без отдельного логина.
                  </h5>
                  <h5 className="text__32">
                    Документы, счета и задолженность вынесла прямо в приложение, с разбивкой на текущую и просроченную — чтобы клиент не звонил менеджеру спросить, сколько он должен. Добавила дозаказ: если что-то забыли, можно дополнить уже оформленный заказ, а не начинать новый с нуля.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "alcohol-retail-1.webp"}
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
                    Оба приложения запущены. Клиент остался доволен — продолжили работу.
                  </h5>
                </div>
              </div>

            </div>
          </Container>
        </section>
        <section>
          <Container>
            <Link href="/work/detail/milan-portraits" className="group block border-t !border-Mneutral_200 pt-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text__18 opacity-40 mb-2">Следующий проект</p>
                  <h5 className="text__40">Запуск нового клуба за 2 часа вместо недели: что поменялось в Figma</h5>
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
                src={originalUrl + "hubstr-cover.mp4"}
                className="w-full aspect-[3/2] object-cover rounded-2xl"
              />
            </Link>
          </Container>
        </section>
      </Layout>
    </Fragment>
  );
};

export default AlcoholRetail;

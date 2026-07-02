import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import Link from "next/link";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const DmpOne = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  return (
    <Fragment>
      <Layout
        step={step}
        title="DMP.ONE: CRM для лидогенерации с геймификацией"
        description="DMP.ONE: CRM для лидогенерации с геймификацией"
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
              <h2 className="text__64 mt-[2rem]">DMP.ONE: CRM для лидогенерации с геймификацией</h2>
            </WrapAnimateUp>

            <WrapAnimateUp step={step}>
              <video
                src={originalUrl + "dmp-cover-3.mp4"}
                className="w-full aspect-[3/2] object-cover rounded-2xl mt-[2rem] mb-[4rem]"
                autoPlay
                muted
                loop
                playsInline
              />
            </WrapAnimateUp>

            <div className="grid grid-cols-1 gap-[6rem] md:gap-[8rem]">

              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">Задача</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    DMP.ONE ищет клиентам лиды: берёт куки с сайта, сверяет с базами данных, передаёт контакт менеджеру. У сервиса своя сеть из полутора сотен партнёров-реселлеров. Мне нужно было спроектировать CRM с нуля — работу с лидами, статистику, управление проектами — и отдельно партнёрский кабинет с реферальной программой и геймификацией.
                  </h5>
                  <h5 className="text__32">
                    Цель простая: меньше писем в поддержку и больше партнёров, которые заходят в кабинет сами, а не только проверить выплату.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "dmp-1.png"}
                className="w-full object-cover rounded-2xl"
                alt=""
              />

              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">С чего начинали</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Продукт новый, а данные — старые. У пользователей уже была история в прежней системе. При переходе появился новый уровень вложенности — проекты. В старых каналах их не было, и было неясно, куда они денутся при миграции. Риск простой: человек заходит, не находит своё, уходит.
                  </h5>
                  <h5 className="text__32">
                    С геймификацией беда была другая. В старой версии партнёрского кабинета — только рейтинг среди остальных. Не в топе — мотивации расти нет. Механика удерживала тех, кто и так уже активен, остальных не трогала.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "dmp-2.png"}
                className="w-full object-cover rounded-2xl"
                alt=""
              />

              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">Что сделала</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Начала с архитектуры: кому что нужно в первую очередь. Клиенту — лиды и статистика. Партнёру — рефералы и бонусы. Задачи разные, интерфейс один.
                  </h5>
                  <h5 className="text__32">
                    Миграцию тестировала на 9 пользователях, три варианта подряд. Победили вкладки «Проекты / Каналы» на одной странице: старое и новое рядом, ничего не потерялось. Без теста угадать этот вариант из трёх было бы сложно.
                  </h5>
                  <h5 className="text__32">
                    Геймификацию переделала целиком: уровни, миссии с понятной наградой, рейтинг по активности — а не только по числу приведённых людей. Партнёр видит свой прогресс и понимает, что делать дальше.
                  </h5>
                </div>
              </div>

              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">Результат</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Запустились без потерь: ни один пользователь не потерял данные при переходе. Обращений в поддержку стало меньше. Партнёрский кабинет из таблицы с рейтингом превратился в отдельный продукт — туда заходят не только за выплатами.
                  </h5>
                </div>
              </div>

            </div>
          </Container>
        </section>
        <section>
          <Container>
            <Link href="/work/detail/kidride" className="group block border-t !border-Mneutral_200 pt-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text__18 opacity-40 mb-2">Следующий проект</p>
                  <h5 className="text__40">KidRide: приложение для водителей 45+</h5>
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
                src={originalUrl + "kidride-cover.mp4"}
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

export default DmpOne;

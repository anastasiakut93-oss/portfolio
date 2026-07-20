import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import Link from "next/link";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";
import LazyVideo from "@/Components/Path/LazyVideo";

const ConsignmentForm = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  return (
    <Fragment>
      <Layout
        step={step}
        title="Редизайн формы бронирования"
        description="Редизайн формы бронирования: с 58 полей до 10 обязательных"
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
              <h2 className="text__64 mt-[2rem]">Редизайн формы бронирования: с 58 полей до 10 обязательных</h2>
            </WrapAnimateUp>

            <WrapAnimateUp step={step}>
              <img
                src={originalUrl + "consignment-cover.webp"}
                srcSet={`${originalUrl}consignment-cover-800.webp 800w, ${originalUrl}consignment-cover-1600.webp 1600w, ${originalUrl}consignment-cover.webp 3240w`}
                sizes="(min-width: 1200px) 1140px, 100vw"
                className="w-full aspect-[3/2] object-cover rounded-2xl mt-[2rem] mb-[2rem] md:mb-[4rem]"
                alt=""
              />
            </WrapAnimateUp>

            <WrapAnimateUp step={step}>
              <p className="text-[13px] sm:text-[16px] lg:text-[18px] italic opacity-60 text-center w-full mb-[3rem] md:mb-[6rem]">
                Крупная шведская логистическая компания, NDA. Платформа обрабатывает до нескольких сотен заказов в день, а раздел Consignment data — точка входа: здесь клиент оформляет заявку на перевозку.
              </p>
            </WrapAnimateUp>

            <div className="grid grid-cols-1 md:grid-cols-5 mb-[3rem] md:mb-[8rem]">
              <div className="hidden md:block md:col-span-2"></div>
              <div className="md:col-span-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="pt-6">
                    <p className="text__32 font-bold">+16%</p>
                    <p className="text-[13px] sm:text-[16px] lg:text-[18px] opacity-60 mt-1">completion rate формы</p>
                  </div>
                  <div className="pt-6">
                    <p className="text__32 font-bold">В 5 раз</p>
                    <p className="text-[13px] sm:text-[16px] lg:text-[18px] opacity-60 mt-1">быстрее заполнение формы</p>
                  </div>
                  <div className="border-t !border-Mneutral_200 pt-6">
                    <p className="text__32 font-bold">58 → 38</p>
                    <p className="text-[13px] sm:text-[16px] lg:text-[18px] opacity-60 mt-1">полей в форме</p>
                  </div>
                  <div className="border-t !border-Mneutral_200 pt-6">
                    <p className="text__32 font-bold">10</p>
                    <p className="text-[13px] sm:text-[16px] lg:text-[18px] opacity-60 mt-1">обязательных полей</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-[3rem] md:gap-[8rem]">

              {/* ПРОБЛЕМА */}
              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">Проблема</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Я обратила внимание, что форма растянута на 58 полей, а какие из них обязательные — не видно: обязательные отмечены только звёздочкой, которую легко проскочить взглядом, а прогресса не видно вообще — скроллишь вниз и не понимаешь, сколько ещё осталось. Четыре адресных блока показывались всегда, даже когда Pickup и Delivery совпадали с основными адресами. Заполнение занимало по несколько минут.
                  </h5>
                  <h5 className="text__32">
                    Новые пользователи не доходили до конца или звонили в поддержку. <strong>Я предложила разобраться, что реально нужно на этапе подачи заявки, и убрать всё остальное с пути.</strong>
                  </h5>
                </div>
              </div>

              {/* С ЧЕГО НАЧАЛА */}
              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">С чего начала</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Начала с аналитики: где пользователи уходят, какие поля оставляют пустыми, где зависают дольше всего. Посмотрела, как это решают в похожих freight forwarding системах. Вместе с бизнес-аналитиком и стейкхолдерами прошла по каждому полю: нужно ли оно прямо сейчас, или это данные для финального документа. Часть убрала совсем, часть перенесла дальше по флоу.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "consignment-1.webp"}
                srcSet={`${originalUrl}consignment-1-800.webp 800w, ${originalUrl}consignment-1-1600.webp 1600w, ${originalUrl}consignment-1.webp 3240w`}
                sizes="(min-width: 1200px) 1140px, 100vw"
                className="w-full object-cover rounded-2xl"
                alt=""
                loading="lazy"
              />

              {/* ЧТО СДЕЛАЛА */}
              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">Что сделала</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Pickup и Delivery спрятала за «Add additional» — они появляются, только если нужны. Адреса компаний подтягиваются из базы, ручной ввод стал опцией, а не правилом. Справа добавила панель прогресса: видно все шаги и где находишься сейчас. В блоке с габаритами груза — иллюстрация коробки, размеры вводятся как Д × Ш × В.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "consignment-2.webp"}
                srcSet={`${originalUrl}consignment-2-800.webp 800w, ${originalUrl}consignment-2-1600.webp 1600w, ${originalUrl}consignment-2.webp 3240w`}
                sizes="(min-width: 1200px) 1140px, 100vw"
                className="w-full object-cover rounded-2xl"
                alt=""
                loading="lazy"
              />

              {/* РЕЗУЛЬТАТ */}
              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">Результат</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Новый пользователь видит 10 обязательных полей, заполняет их и отправляет заявку — там, где раньше уходило несколько минут, теперь в 5 раз быстрее. Всё остальное подтягивается по необходимости. A/B-тест подтвердил рост completion rate и заметное сокращение времени заполнения.
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
                  <h5 className="text__40">Запуск нового клуба за 2 часа вместо недели: что поменялось в Figma</h5>
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

export default ConsignmentForm;

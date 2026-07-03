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
                  <p className="opacity-40">На главную</p>
                </div>
              </Link>
            </WrapAnimateUp>

            <WrapAnimateUp step={step}>
              <h2 className="text__64 mt-[2rem]">Редизайн формы бронирования: с 58 полей до 10 обязательных</h2>
            </WrapAnimateUp>

            <WrapAnimateUp step={step}>
              <img
                src={originalUrl + "consignment-cover.webp"}
                className="w-full aspect-[3/2] object-cover rounded-2xl mt-[2rem] mb-[2rem] md:mb-[4rem]"
                alt=""
              />
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
                    <p className="text__32 font-bold">−22%</p>
                    <p className="text-[13px] sm:text-[16px] lg:text-[18px] opacity-60 mt-1">среднее время заполнения</p>
                  </div>
                  <div className="border-t !border-Mneutral_200 pt-6">
                    <p className="text__32 font-bold">58 → 38</p>
                    <p className="text-[13px] sm:text-[16px] lg:text-[18px] opacity-60 mt-1">полей в форме</p>
                  </div>
                  <div className="border-t !border-Mneutral_200 pt-6">
                    <p className="text__32 font-bold">10</p>
                    <p className="text-[13px] sm:text-[16px] lg:text-[18px] opacity-60 mt-1">обязательных полей</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-[3rem] md:gap-[8rem]">

              {/* ЗАДАЧА */}
              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">Задача</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Крупная шведская логистическая компания, NDA. Платформа держит до нескольких сотен заказов в день, и раздел Consignment data — точка входа: здесь клиент оформляет заявку на перевозку. 58 полей, и какие из них обязательные, визуально было не очевидно.
                  </h5>
                  <h5 className="text__32">
                    Новые пользователи не доходили до конца или звонили в поддержку. Нужно было разобраться, что реально нужно на этапе подачи заявки, и убрать всё остальное с пути.
                  </h5>
                </div>
              </div>

              {/* С ЧЕГО НАЧИНАЛИ */}
              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">С чего начинали</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Форма выглядела как внутренний инструмент, случайно выложенный наружу. Четыре адресных блока показывались всегда — даже когда Pickup и Delivery совпадали с основными адресами. Обязательные поля отмечены только звёздочкой, которую легко проскочить взглядом. Прогресса нет: скроллишь вниз и не понимаешь, сколько ещё осталось.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "consignment-1.webp"}
                className="w-full object-cover rounded-2xl"
                alt=""
                loading="lazy"
              />

              {/* ЧТО СДЕЛАЛА */}
              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">Что сделала</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Начала с аналитики: где пользователи уходят, какие поля оставляют пустыми, где зависают дольше всего. Посмотрела, как это решают в похожих freight forwarding системах.
                  </h5>
                  <h5 className="text__32">
                    Вместе с бизнес-аналитиком и стейкхолдерами прошлись по каждому полю. Нужно ли оно прямо сейчас, или это данные для финального документа. Часть убрали совсем, часть перенесли дальше по флоу.
                  </h5>
                  <h5 className="text__32">
                    Pickup и Delivery спрятала за «Add additional» — появляются только если нужны. Адреса компаний подтягиваются из базы, ручной ввод стал опцией, а не правилом. Справа — панель прогресса: видно все шаги и где находишься сейчас. В блоке с габаритами груза — иллюстрация коробки, размеры вводятся как Д × Ш × В.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "consignment-2.webp"}
                className="w-full object-cover rounded-2xl"
                alt=""
                loading="lazy"
              />

              {/* КАК СТАЛО */}
              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">Результат</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Новый пользователь видит 10 обязательных полей, заполняет их и отправляет заявку. Всё остальное подтягивается по необходимости. A/B тест показал рост completion rate и заметное сокращение времени заполнения.
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
                  <h5 className="text__40">DMP.ONE: CRM для лидогенерации с геймификацией</h5>
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

export default ConsignmentForm;

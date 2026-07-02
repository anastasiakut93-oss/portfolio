import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import Link from "next/link";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const KidRide = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  return (
    <Fragment>
      <Layout
        step={step}
        title="KidRide: приложение для водителей 45+"
        description="KidRide: приложение для водителей 45+"
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
              <h2 className="text__64 mt-[2rem]">KidRide: приложение для водителей 45+</h2>
            </WrapAnimateUp>

            <WrapAnimateUp step={step}>
              <video
                src={originalUrl + "kidride-cover.mp4"}
                className="w-full aspect-[3/2] object-cover rounded-2xl mt-[2rem] mb-[4rem]"
                autoPlay
                muted
                loop
                playsInline
              />
            </WrapAnimateUp>

            <div className="grid grid-cols-1 md:grid-cols-5 mb-[6rem] md:mb-[8rem]">
              <div className="hidden md:block md:col-span-2"></div>
              <div className="md:col-span-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="pt-6">
                    <p className="text__32 font-bold">3</p>
                    <p className="text-[13px] sm:text-[16px] lg:text-[18px] opacity-60 mt-1">обязательных действия в флоу поездки</p>
                  </div>
                  <div className="pt-6">
                    <p className="text__32 font-bold">45+</p>
                    <p className="text-[13px] sm:text-[16px] lg:text-[18px] opacity-60 mt-1">целевая аудитория водителей</p>
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
                    KidRide — сервис сопровождения детей профессиональными водителями от двери до двери. Нужно было спроектировать мобильное приложение для водителей: понятное, безопасное и не отвлекающее от дороги.
                  </h5>
                  <h5 className="text__32">
                    Прозрачность маршрута и статусов должна была повысить доверие родителей к сервису.
                  </h5>
                </div>
              </div>

              <div className="grid gap-y-6 grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="text__24 opacity-40">С чего начинали</p>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <h5 className="text__32">
                    Аудитория нестандартная: большинству водителей за 45, часть имеет проблемы со зрением. При этом многие раньше работали в агрегаторах — и главная их жалоба была одна: приложение постоянно требует что-то нажать. На маршруте, на светофоре, в пробке.
                  </h5>
                  <h5 className="text__32">
                    Чтобы не проектировать под воображаемого пользователя, провела глубинные интервью — отдельно с руководителями сервиса, отдельно с водителями. Выяснилось, что задачи бизнеса и реальные боли водителей в нескольких местах расходились. Эти данные легли в основу функционала вместе с аналитиком.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "kidride-2.webp"}
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
                    Три проблемы решались параллельно, и каждая влияла на дизайн-решения.
                  </h5>
                  <h5 className="text__32">
                    Под возрастную аудиторию адаптировала интерфейс с первого экрана: крупная типографика, высокий контраст, большие зоны касания. Не как доработка после — а как базовое требование с MVP.
                  </h5>
                  <h5 className="text__32">
                    Ночные поездки закрыли тёмной темой в качестве единственного варианта на старте. Светлая тема запланирована в следующих версиях, но для MVP это было лишним — сначала безопасность.
                  </h5>
                  <h5 className="text__32">
                    Флоу поездки сократили до трёх обязательных действий. Водитель принял заказ, подтвердил посадку, закрыл поездку. Всё остальное — опционально или автоматически. Это принципиальное отличие от агрегаторов, где приложение живёт своей жизнью рядом с водителем.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "kidride-1.webp"}
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
                    Приложение спроектировано под конкретную аудиторию, а не под абстрактного пользователя. Решения по шрифту, контрасту и количеству взаимодействий — не эстетика, а функциональные требования, которые вышли из интервью.
                  </h5>
                  <h5 className="text__32">
                    Проект не вышел в продакшн: клиент приостановил финансирование. Дизайн готов к разработке.
                  </h5>
                </div>
              </div>

            </div>
          </Container>
        </section>
        <section>
          <Container>
            <Link href="/work/detail/prism" className="group block border-t !border-Mneutral_200 pt-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text__18 opacity-40 mb-2">Следующий проект</p>
                  <h5 className="text__40">Сервис, который открывают раз в месяц: как сделать его понятным без инструкции</h5>
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
                src={originalUrl + "prism-1.png"}
                className="w-full aspect-[3/2] object-cover rounded-2xl"
                alt=""
                loading="lazy"
              />
            </Link>
          </Container>
        </section>
      </Layout>
    </Fragment>
  );
};

export default KidRide;

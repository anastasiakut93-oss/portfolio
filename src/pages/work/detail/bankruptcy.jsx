import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import Link from "next/link";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const Bankruptcy = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  return (
    <Fragment>
      <Layout
        step={step}
        title="Банкротство за несколько шагов: мобильное приложение для сложного процесса"
        description="Мобильное приложение для сопровождения процедуры банкротства"
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
              <h2 className="text__64 mt-[2rem]">Банкротство за несколько шагов: мобильное приложение для сложного процесса</h2>
            </WrapAnimateUp>

            <WrapAnimateUp step={step}>
              <video
                src={originalUrl + "bankruptcy-cover.mp4"}
                className="w-full aspect-[3/2] object-cover rounded-2xl mt-[2rem] mb-[6rem] md:mb-[8rem]"
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
                    Оформление банкротства — это стресс, бумаги и юридические термины, в которых обычный человек не разбирается. Клиент хотел мобильное приложение, которое ведёт пользователя через весь процесс: от договора до завершения процедуры. Понятно, прозрачно, без лишней нагрузки.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "bankruptcy-1.webp"}
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
                    Предметная область сложная сама по себе. Пришлось глубоко разобраться в процессе банкротства, чтобы правильно расставить приоритеты в интерфейсе: что показать сразу, что убрать глубже, где нужна подсказка, а где хватит чёткого статуса.
                  </h5>
                  <h5 className="text__32">
                    Двигались итеративно — от первых прототипов и концептов до финальных экранов, и по пути даже поменяли визуальное направление.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "bankruptcy-2.webp"}
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
                    Работала ведущим дизайнером: выстраивала процесс, ставила задачи, проводила ревью работы дизайнера в команде и участвовала в ключевых решениях вместе с заказчиком.
                  </h5>
                  <h5 className="text__32">
                    Покрыли весь путь пользователя — от первого касания с сервисом до завершения процедуры. Заключение договора и подписание документов вынесли на интеграцию с внешними сервисами: подписываешь прямо в приложении, без распечаток и офиса. Загрузка документов — с трекером статусов: что принято, что отклонено, что ещё ждёт. Оплата разбита на этапы: сколько внесено, сколько осталось, из чего складывается итог.
                  </h5>
                  <h5 className="text__32">
                    Отдельно сделали коммуникацию с командой — пользователь всегда может написать, не выходя из своего дела.
                  </h5>
                  <h5 className="text__32">
                    Логика везде одна: в любой момент понятно, на каком этапе дело, что требуется от пользователя и что будет дальше. Стадия процесса всегда на виду, прогресс виден по каждому направлению — документы, платежи, подписание.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "bankruptcy-3.webp"}
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
                    Сложный многоэтапный процесс стал для пользователя линейным и предсказуемым. Человек в стрессовой ситуации понимает, что происходит, что от него ждут, и держит под контролем всё, что вообще можно контролировать в процессе банкротства.
                  </h5>
                </div>
              </div>

            </div>
          </Container>
        </section>
        <section>
          <Container>
            <Link href="/work/detail/alcohol-retail" className="group block border-t !border-Mneutral_200 pt-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text__18 opacity-40 mb-2">Следующий проект</p>
                  <h5 className="text__40">Два приложения для алкогольной сети: B2C и B2B</h5>
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
                src={originalUrl + "alcohol-retail-cover.webp"}
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

export default Bankruptcy;

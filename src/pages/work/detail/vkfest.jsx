import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import Link from "next/link";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";
import LazyVideo from "@/Components/Path/LazyVideo";

const VkFest = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  return (
    <Fragment>
      <Layout
        step={step}
        title="VK Fest: редизайн мобильного приложения под новый фирменный стиль"
        description="VK Fest — редизайн мобильного приложения под новый фирменный стиль"
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
              <h2 className="text__64 mt-[2rem]">VK Fest: редизайн мобильного приложения под новый фирменный стиль</h2>
            </WrapAnimateUp>

            <WrapAnimateUp step={step}>
              <video
                src={originalUrl + "vkfest-cover.mp4"}
                className="w-full aspect-[3/2] object-cover rounded-2xl mt-[2rem] mb-[2rem] md:mb-[4rem]"
                autoPlay
                muted
                loop
                playsInline
              />
            </WrapAnimateUp>

            <WrapAnimateUp step={step}>
              <p className="text-[13px] sm:text-[16px] lg:text-[18px] italic opacity-60 text-center w-full mb-[3rem] md:mb-[6rem]">
                VK Fest — крупнейший музыкальный фестиваль России на платформе ВКонтакте. Мобильное приложение фестиваля с расписанием, сценами и артистами.
              </p>
            </WrapAnimateUp>

            <div className="grid grid-cols-1 md:grid-cols-5 mb-[3rem] md:mb-[8rem]">
              <div className="hidden md:block md:col-span-2"></div>
              <div className="md:col-span-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="pt-6">
                    <p className="text__32 font-bold">4 месяца</p>
                    <p className="text-[13px] sm:text-[16px] lg:text-[18px] opacity-60 mt-1">от старта до релиза в проде</p>
                  </div>
                  <div className="pt-6">
                    <p className="text__32 font-bold">2025</p>
                    <p className="text-[13px] sm:text-[16px] lg:text-[18px] opacity-60 mt-1">продолжили сотрудничество на новый сезон</p>
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
                    Нужно было обновить мобильное приложение под новый фирменный стиль и подтянуть UX в сжатый срок. Фестивальное приложение живёт три-четыре дня: скачали, сходили на фест, удалили. Второго шанса на первое впечатление нет — интерфейс должен быть понятным с первого открытия: расписание, сцены, артисты без лишних шагов.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "vkfest-4.webp"}
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
                    Фирменный стиль разрабатывался параллельно с приложением, поэтому с самого начала работала в связке с маркетологами: синхронизировала дизайн с брендингом на ходу, уточняла детали по мере того, как утверждались новые гайдлайны.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "vkfest-2.webp"}
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
                    Проанализировала, что самое важное должен увидеть пользователь на фестивале: в полевых условиях нельзя заставлять человека долго что-то искать. Сделала крупные, заметные плашки в меню и ярко подсветила артистов, которые скоро выступают, — чтобы нужное считывалось с одного взгляда, а не терялось в списке.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "vkfest-1.webp"}
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
                    Приложение вышло в прод за 4 месяца, ни разу не упало во время фестиваля, и пользователи не жаловались на проблемы с юзабилити. В 2025 году продолжили совместную работу: концепт для нового сезона подготовила студия Артемия Лебедева, а я адаптировала его под разработку.
                  </h5>
                </div>
              </div>

              <img
                src={originalUrl + "vkfest-3.webp"}
                className="w-full object-cover rounded-2xl"
                alt=""
                loading="lazy"
              />

            </div>
          </Container>
        </section>
        <section>
          <Container>
            <Link href="/work/detail/kidride" className="group block border-t !border-Mneutral_200 pt-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text__18 opacity-40 mb-2">Следующий проект</p>
                  <h5 className="text__40">KidRide: приложение для водителей 45+</h5>
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
                src={originalUrl + "kidride-cover.mp4"}
                className="w-full aspect-[3/2] object-cover rounded-2xl"
              />
            </Link>
          </Container>
        </section>
      </Layout>
    </Fragment>
  );
};

export default VkFest;

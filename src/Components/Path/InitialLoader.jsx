import React, { useEffect, useState } from "react";

const TEXT = "Раскладываю макеты и двигаю пиксели...";

const InitialLoader = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      i += 1;
      setTyped(TEXT.slice(0, i));
      if (i >= TEXT.length) {
        clearInterval(typeInterval);
        setTimeout(() => setFading(true), 500);
      }
    }, 45);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    if (!fading) return;
    const t = setTimeout(() => setVisible(false), 400);
    return () => clearTimeout(t);
  }, [fading]);

  if (!visible) return null;

  return (
    <div
      className={
        "fixed inset-0 z-[999] bg-white flex items-center justify-center transition-opacity duration-500 " +
        (fading ? "opacity-0 pointer-events-none" : "opacity-100")
      }
    >
      <p className="text__24 text-Mgrayscale_900 px-8 text-center">
        {typed}
        <span className="inline-block w-[2px] h-[1em] bg-Mgrayscale_900 ml-1 align-middle animate-pulse" />
      </p>
    </div>
  );
};

export default InitialLoader;

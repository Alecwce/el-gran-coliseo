"use client";

import { useEffect, useState } from "react";

export function Countdown({ target }: { target: string }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date(target).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft("EN VIVO AHORA");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(
        `${days.toString().padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  if (!timeLeft) return <div className="h-8 font-serif text-3xl font-bold tracking-widest text-[#D4AF37]">--:--:--:--</div>;

  if (timeLeft === "EN VIVO AHORA") {
    return (
      <div className="font-serif text-3xl md:text-5xl font-bold tracking-widest text-[#53FC18] drop-shadow-[0_0_12px_rgba(83,252,24,0.6)]">
        {timeLeft}
      </div>
    );
  }

  return (
    <div className="font-serif text-3xl md:text-5xl font-bold tracking-widest text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
      {timeLeft}
    </div>
  );
}

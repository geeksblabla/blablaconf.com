"use client";

import { useState, useEffect, useRef } from "react";
import morocco from "@/images/morocco.png";
import Image from "next/image";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Digit = ({ value }: { value: string }) => {
  const [visualPrevValue, setVisualPrevValue] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);

  const lastValueRef = useRef(value);

  if (value !== lastValueRef.current) {
    lastValueRef.current = value;
    setIsAnimating(true);
  }

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
        setVisualPrevValue(value);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating, value]);

  const bottomStaticValue = isAnimating ? visualPrevValue : value;

  return (
    <div className="relative w-24 h-36 flex flex-col items-center justify-center perspective-1000">
      {/* Top Half - Static New Value */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-gray-800 to-black rounded-t-lg overflow-hidden">
        <span className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-gray-300 to-white bg-clip-text text-transparent text-8xl font-digital font-black">
          {value}
        </span>
      </div>

      {/* Bottom Half - Static Old Value */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-gray-800 to-black rounded-b-lg overflow-hidden">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-8xl font-digital font-black">
          {bottomStaticValue}
        </span>
      </div>

      {/* Flipping Top (Old Value) */}
      <div
        key={`top-${visualPrevValue}`}
        className={`absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-gray-800 to-black rounded-t-lg overflow-hidden z-20 backface-hidden ${isAnimating ? "flip-top" : "invisible"}`}
      >
        <span className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-gray-300 to-white bg-clip-text text-transparent text-8xl font-digital font-black">
          {visualPrevValue}
        </span>
      </div>

      {/* Flipping Bottom (New Value) */}
      <div
        key={`bottom-${value}`}
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-gray-800 to-black rounded-b-lg overflow-hidden z-20 backface-hidden ${isAnimating ? "flip-bottom" : "invisible"}`}
      >
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-8xl font-digital font-black">
          {value}
        </span>
      </div>

      {/* Horizontal Shadow/Depth Line */}
      <div className="absolute inset-x-0 top-1/2 h-[6px] blur-[6px] bg-black/20 z-30" />

      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20 pointer-events-none z-40 rounded-lg" />
    </div>
  );
};

const TimerGroup = ({ label, value }: { label: string; value: number }) => {
  const digits = value.toString().padStart(2, "0").split("");
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-3">
        {digits.map((d, i) => (
          <Digit key={`${label}-${i}`} value={d} />
        ))}
      </div>
      <div className="bg-gray-900 w-full flex items-center justify-center rounded-lg py-2">
        <span className="bg-gradient-to-l from-gray-300 via-white/90 to-gray-300 bg-clip-text text-transparent font-black text-3xl">
          {label}
        </span>
      </div>
    </div>
  );
};

export default function Timer() {
  const targetDate = new Date("2026-02-02T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center mt-20 md:mt-32 lg:mt-[22rem] pb-20">
      <Image
        src={morocco}
        alt="Morocco Flag"
        className="h-32 md:h-42 w-auto max-w-[80vw] object-contain"
        data-sal="slide-down"
        data-sal-duration="800"
      />
      <div className="mt-32 bg-tertiary w-full py-20">
        {" "}
        <div className="title-style leading-[0.95] mb-16">
          <span className="mx-auto text-primary">شحال باقي؟</span>
          <span className="mx-auto text-secondary">Starting in...</span>
        </div>
        <div
          className="flex flex-wrap justify-center items-center gap-6"
          data-sal="slide-up"
          data-sal-duration="800"
          data-sal-delay="200"
        >
          <TimerGroup label="يـــــــــــــــــــوم" value={timeLeft.days} />
          <div className="text-gray-800 text-4xl font-bold hidden md:block -mt-14">
            -
          </div>
          <TimerGroup label="ساعــــــــــــــــة" value={timeLeft.hours} />
          <div className="text-gray-800 text-4xl font-bold hidden md:block -mt-14">
            -
          </div>
          <TimerGroup label="دقيــــــــــــــقة" value={timeLeft.minutes} />
          <div className="text-gray-800 text-4xl font-bold hidden md:block -mt-14">
            -
          </div>
          <TimerGroup
            label="ثانيــــــــــــــــــة"
            value={timeLeft.seconds}
          />
        </div>
      </div>
    </div>
  );
}

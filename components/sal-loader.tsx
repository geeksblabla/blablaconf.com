"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import sal from "sal.js";

export const SalLoader = () => {
  const pathname = usePathname();
  const salRef = useRef<sal.API>(undefined);

  useEffect(() => {
    if (salRef.current) {
      salRef.current.update();
    } else {
      salRef.current = sal();
    }
  }, [pathname]);

  return null;
};

"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import sal from "sal.js";

export const SalLoader = () => {
  const pathname = usePathname();

  useEffect(() => {
    sal();
  }, []);

  useEffect(() => {
    sal().update();
  }, [pathname]);
  return null;
};

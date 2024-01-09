"use client";
import { useEffect } from "react";
import sal from "sal.js";

export const SalLoader = () => {
  useEffect(() => {
    sal();
  }, []);

  return null;
};

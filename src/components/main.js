"use client";

import Image from "next/image";
import { useContext } from "react";
import { ConfigContext } from "@/app/config-provider";

export default function Main() {
  const { prefix } = useContext(ConfigContext);
  return <main></main>;
}

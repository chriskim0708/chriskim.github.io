"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import CloseBtn from "./close-btn";
import OpenBtn from "./open-btn";
import Menu from "./menu";
import { routes } from "@/constants/route";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const wrapperStyles = twMerge(
    "fixed z-10 top-0 p-[20px] w-[300px] h-screen bg-[#111] text-white box-border"
  );
  const hoverStyles = "hover:bg-[#fff]";
  const defaultButtonStyles = "text-white";

  const buttonStyles = twMerge(defaultButtonStyles, hoverStyles);

  const handleClickMenu = (event) => {
    const hasHref = event.target.hasAttribute("href");
    if (!hasHref) return;
    setIsOpenNav(false);
  };

  return (
    <>
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpenNav ? 0 : -300 }}
        className={wrapperStyles}
      >
        <div className="flex flex-col">
          <div className="flex justify-end">
            <CloseBtn
              className={buttonStyles}
              onClick={() => setIsOpenNav(false)}
            />
          </div>
          <div>
            <Menu routes={routes} onClick={handleClickMenu} />
          </div>
        </div>
      </motion.div>
      <OpenBtn onClick={() => setIsOpenNav(true)} />
    </>
  );
}

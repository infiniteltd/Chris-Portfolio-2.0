"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

type skillsDataProps = (typeof skillsData)[number];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 cursor-pointer">
        {skillsData.map(({ id, skill, percentage }: skillsDataProps) => (
          <motion.li
            className="group bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 "
            key={id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={id}
          >
            {skill}

            <p className="text-[16px] text-red-700 font-semibold dark:text-blue-700">
              {percentage}%
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

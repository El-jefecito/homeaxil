"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import { motion, useScroll, useTransform } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import { useRef } from "react";

const page = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div>
      <div className="bg-[url('/image/whoweare.jpg')] bg-center bg-cover">
        <h1 className="container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64">
          Who are we?
        </h1>
      </div>

      <div className="container">
        <div className="pt-4">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl"
          >
            We have a great idea & Interior Designs
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="text-2xl text-center font-medium pb-10 mt-5"
          >
            Our Interior design company is a company that provides interior
            design services for homes, offices, apartment, and others. We
            provide the best interior design services for you. We have a team
            that is experienced in the field of interior.
          </motion.p>
        </div>

        <div className="items-center lg:flex gap-x-8">
          {/* left image section */}
          <motion.div style={{ scale }} ref={ref} className="w-full">
            <Image src="/image/gallery1123.jpg" width={700} height={700} />
          </motion.div>

          {/* right content section */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
          >
            <p className="pb-8 tracking-wide mt-6">
              We are internation Architects. We believe that today it is
              fundamental to totally rethink archi-tectural education.
              Confluence not only integrates new visions on society but also
              incorporates new methods and contemporary tools linked to
              creativity, production and communication. De-signed and
              handcrafted to hold and showcase my year two architecture
              portfolio, the unfolding box allows portfolio sheets... <br />
              <br />{" "}
              <span className="text-xl font-extrabold tracking-tight">
                The backpiperARCH, we share a belief in the transformational
                power of people united in a common purpose.
              </span>
            </p>

            <Button className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
              Read More <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="lg:py-20">
          <div className="pt-8 pb-4">
            <motion.h1
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="text-4xl font-bold tracking-wider text-center uppercase"
            >
              Team
            </motion.h1>
          </div>

          <div className="grid py-8 gap-20 lg:grid-cols-3">
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="border-2 border-primary"
            >
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                <Image
                  src="/image/profile2.jpg"
                  width={200}
                  height={200}
                  className="mx-auto rounded-full"
                  alt=""
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Building Surveys
                </h2>
                <p className="text-sm">
                  Creativity is the ability to generate, create, or discover new
                  ideas, solutions and possibilities
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="border-2 border-primary"
            >
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                <Image
                  src="/image/profile1.jpg"
                  width={200}
                  height={200}
                  className="mx-auto rounded-full"
                  alt=""
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Building Surveys
                </h2>
                <p className="text-sm">
                  Creativity is the ability to generate, create, or discover new
                  ideas, solutions and possibilities
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="border-2 border-primary"
            >
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                <Image
                  src="/image/profile3.jpg"
                  width={200}
                  height={200}
                  className="mx-auto rounded-full"
                  alt=""
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Building Surveys
                </h2>
                <p className="text-sm">
                  Creativity is the ability to generate, create, or discover new
                  ideas, solutions and possibilities
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

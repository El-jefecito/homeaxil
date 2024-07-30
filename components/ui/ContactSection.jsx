"use client";

import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "It is a fantastic theme with tons of design and layout options, and the customer service is simply outstanding. They respond immediately and solve any inconvenience, no matter how small.",
    date: "July 2024",
    datetime: "2024-07-26",
    category: { title: "4.7", href: "#" },
    author: {
      name: "Natasha",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "/image/profile1.jpg",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "From all point of views one of the best theme I have ever bought. It is also very flexible, I am thinking about using it for a photograph portfolio as well in the future",
    date: "July 2024",
    datetime: "2024-07-26",
    category: { title: "4.9", href: "#" },
    author: {
      name: "Michael Chris",
      role: "Co-Founder / CEO",
      href: "#",
      imageUrl: "/image/profile2.jpg",
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Well, I had to choose a main reason for rating your great theme. Everything in this theme is customizable, easy to use and it has a very high quality styling",
    date: "July 2024",
    datetime: "2024-07-26",
    category: { title: "4.2", href: "#" },
    author: {
      name: "Samuel JOS",
      role: "Co-Founder / CEO",
      href: "#",
      imageUrl: "/image/profile3.jpg",
    },
  },
];

export default function ContactSection() {
  return (
    <div className="pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Customer Reviews
        </motion.h2>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="mt-2 text-lg leading-8 text-muted-foreground"
        >
          Learn how to grow your business with our expert advice.
        </motion.p>

        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="mx-auto mt-10 grid lg:grid-cols-3 grid-cols-1 gap-x-8 lg:max-w-none lg:mx-0 sm:py-16 sm:mt-16 py-10 border-b border-gray-250 border-t gap-y-16"
        >
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time datetime={post.datetime}>
                  <Image src="/image/star.svg" width={80} height={5} />
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 bg-primary rounded-full text-white px-3 py-1.5 font-medium hover:bg-gray-100 hover:text-black transition-all"
                >
                  {post.category.title}
                </a>
              </div>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span>{post.title}</span>
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {post.description}
                </p>
              </div>

              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-500"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold">
                    <a href={post.author.href}>
                      <span />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

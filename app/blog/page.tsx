"use client"
import { useAppDispatch } from "../hooks";
import Link from "next/link";
import { setBlog } from "@lib/features/blogs/blog";
import { blogs } from "@data/blogtech/blogTech";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@components/ui/card";
import Image from "next/image";
import type { blogtype } from "../../types/blogtype";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Blog() {

  const dispatch = useAppDispatch();

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleBlog = (blog: blogtype) => {
    dispatch(setBlog(blog))
  }

  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-white text-5xl font-bold">Blog</h1>

          <div className="blogList grid grid-cols-3 my-6 gap-6">
            {
              blogs.map((blog, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer"
                >
                  <Link href={`/blog/${blog.slug}`} key={index}
                    onClick={() => handleBlog(blog)}
                  >
                    <Card key={index} className="bg-[#1a1a1a] border border-[#2c2c2c]">
                      <CardHeader>
                        <CardTitle className="text-white">{blog.title}</CardTitle>
                        <CardDescription>{blog.description.substring(0, 300)}...</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image src={blog.image.src} alt={blog.title} width={300} height={300} />
                      </CardContent>
                      <CardFooter className="text-white">
                        {blog.date}
                      </CardFooter>
                    </Card>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </motion.div>
    </section >
  );
}
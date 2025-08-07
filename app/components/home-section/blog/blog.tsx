'use client'
import { Button } from "@components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@components/ui/card";
import { blogs } from "@data/blogtech/blogTech";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch } from "../../../hooks";
import { setBlog } from "@lib/features/blogs/blog";
import { blogtype } from "../../../../types/blogtype";
import { motion } from "framer-motion";

export default function Blogs() {

    const dispatch = useAppDispatch()

    const handleBlog = (blog: blogtype) => {
        dispatch(setBlog(blog))
    }

    return (
        <section className="py-24 px-4">
            <div
                data-test-id="blogs-id"
                className="project-container max-w-[1079px] mx-auto w-full"
            >
                <div className="text-center">
                    <h1 className="text-white uppercase font-bold text-4xl sm:text-5xl md:text-6xl mb-2">
                        Blogs
                    </h1>
                    <p className="bg-gradient-to-r from-[#C11E1E] to-[#C9C9C9] bg-clip-text text-transparent uppercase text-base sm:text-lg">
                        Explore Now.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-3 mt-14" data-testid="blog-grid">
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
                                            <CardTitle className="text-white font-bold text-lg leading-6">{blog.title}</CardTitle>
                                            <CardDescription className="text-base font-normal leading-5">{blog.description.substring(0, 100)}...</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Image
                                                src={blog.image.src}
                                                alt="blog"
                                                width={400}
                                                height={400}
                                                className="rounded-lg"
                                                loading="lazy"
                                            />
                                        </CardContent>
                                        <CardFooter className="text-white">
                                            Posted on {blog.date}
                                        </CardFooter>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))
                    }
                </div>

                <div className="my-8 flex justify-center">
                    <Button asChild>
                        <Link href="/blog">View All</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
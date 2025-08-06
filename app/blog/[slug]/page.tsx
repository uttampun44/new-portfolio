"use client"
import Link from "next/link";
import { useAppSelector } from "../../hooks";
import { Button } from "@components/ui/button";

export default function BlogPage() {


    const blog = useAppSelector((state) => state.blog)

    console.log(blog)
    return (
        <section>
            <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <strong className="text-white font-medium text-lg">Blog <span className="text-[#878787] ml-1.5 font-normal text-base">{blog.date}</span></strong>
                <h1 className="text-white my-8 text-5xl">{blog.title}</h1>
                <div className="image flex justify-center">
                    <picture>
                        <img src={blog.image.src} alt={blog.title}
                            className="min-w-fit w-full h-auto rounded-lg object-contain"
                        />
                    </picture>
                </div>
                <p className="text-center text-white text-lg my-10">{blog.description}</p>
                <div className="author my-4">
                    <strong className="text-white font-medium text-lg my-8">Author : </strong>
                    <span className="text-white text-lg ml-1 font-light">{blog.author}</span>
                </div>
                <Button asChild
                className="my-2"
                >
                    <Link href={blog.url} target="_blank">Read More</Link>
                </Button>
            </div>
        </section>
    )
}
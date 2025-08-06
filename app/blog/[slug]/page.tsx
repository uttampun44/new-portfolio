"use client"
import { useAppSelector } from "../../hooks";

export default function BlogPage() {


    const blog = useAppSelector((state) => state.blog)

    return (
        <section>
            <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <strong className="text-white font-medium text-lg">Blog <span className="text-[#878787] ml-1.5 font-normal text-base">{blog.date}</span></strong>
                <h1 className="text-white my-8 text-5xl">{blog.title}</h1>
            </div>
        </section>
    )
}
"use client"

import { useRouter } from "next/navigation";
import { useAppSelector } from "../../hooks";

export default function BlogPage() {
    const router = useRouter()

    const selector = useAppSelector((state) => state.blog.blog)

    console.log(selector);

    console.log(router);
    return (
        <div>
            <h1>Blog Page</h1>
        </div>
    )
}
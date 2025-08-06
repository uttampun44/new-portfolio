import { Button } from "@components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@components/ui/card";
import { blogs } from "@data/blogtech/blogTech";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
    return (
        <section className="py-24 px-4">
            <div
                data-test-id="blogs-id"
                className="project-container max-w-[979px] mx-auto w-full"
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
                            <Card key={index} className="bg-[#1a1a1a] border border-[#2c2c2c]">
                                <CardHeader>
                                    <CardTitle className="text-white">{blog.title}</CardTitle>
                                    <CardDescription>{blog.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {/* <Image src={blog.image} alt={blog.title} width={100} height={100} /> */}
                                </CardContent>
                                <CardFooter className="text-white">
                                    {blog.date}
                                </CardFooter>
                            </Card>
                        ))
                    }
                </div>

                <div className="my-8 flex justify-center">
                    <Button asChild>
                        <Link href="/blogs">View All</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
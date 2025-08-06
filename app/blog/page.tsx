  "use client"
import { useAppDispatch} from "../hooks";
import Link from "next/link";
import { setBlog } from "@lib/features/blogs/blog";
import { blogs } from "@data/blogtech/blogTech";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@components/ui/card";


type blogsType = {
  id: number;
  category: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  url: string;
}

export default function Blog() {
    
  const dispatch = useAppDispatch();

   const handleBlog = (blog: blogsType) => {
     dispatch(setBlog(blog))
   }
   
    return (
   <section>
     <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
       <h1 className="text-white text-5xl font-bold">Blog</h1>
       {
         blogs.map((blog, index) => (
       <div className="blogList grid grid-cols-3 my-6 gap-6">
           <Link href={`/blog/${blog.slug}`} key={index}
           onClick={() => handleBlog(blog)}
           >
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
           </Link>
       </div>
         ))
       }
     </div>
   </section>
  );
}
  "use client"
import { useSelector } from "react-redux";
import { useAppSelector } from "../hooks";

export default function Blog() {

  const blog = useAppSelector((state) => state.blog.blog)

  console.log(blog)
  return (
   <section>
    <h1>Blog</h1>
   </section>
  );
}
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="px-4 py-6 ">
      <div className="max-w-[1168px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        <div className="text-white text-2xl font-bold text-center sm:text-left w-full sm:w-auto">
          <Link href="/">Uttam Pun</Link>
        </div>

        <div className="flex flex-wrap justify-center sm:justify-end gap-3">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-black text-white hover:bg-transparent hover:text-white font-medium"
          >
            <Link href="/blogs">Blog</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-black text-white hover:bg-transparent hover:text-white font-medium"
          >
            <Link href="/about">About me</Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-black bg-white hover:bg-gray-200 font-medium"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

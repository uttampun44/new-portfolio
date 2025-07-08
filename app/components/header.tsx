import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="px-4 py-6">
      <div className="header-container max-w-[1168px] mx-auto flex flex-wrap justify-between items-center gap-y-4">
        <div className="title text-white text-xl sm:text-2xl font-bold w-full sm:w-auto text-center sm:text-left">
          <h1><Link href="/">Uttam Pun</Link></h1>
        </div>

        <div className="buttonRow flex gap-x-4 w-full sm:w-auto justify-center sm:justify-end">
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
            className="font-medium text-black bg-white hover:bg-gray-200"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

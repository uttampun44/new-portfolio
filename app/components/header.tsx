import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header>
      <div className="header-container max-w-[1168.1px] mx-auto flex justify-between my-8">
        <div className="title text-white text-2xl font-bold">
          <h1>Uttam Pun</h1>
        </div>
        <div className="buttonRow flex gap-x-4">
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
            className="font-medium text-black"
            >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

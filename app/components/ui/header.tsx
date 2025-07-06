import { Button } from "./button";

export default function Header() {
  return (
    <header>
      <div className="header-container max-w-[1168.1px] mx-auto flex justify-between my-8">
        <div className="title">
          <h1>Uttam Pun</h1>
        </div>
        <div className="buttonRow flex gap-x-4">
          <Button size="lg" variant="outline">
            About Me
          </Button>
          <Button size="lg" variant="outline">
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}

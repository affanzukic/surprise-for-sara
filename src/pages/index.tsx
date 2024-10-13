import { Button } from "flowbite-react";
import { Updock } from "next/font/google";
import Link from "next/link";

const updock = Updock({ subsets: ["latin"], weight: "400" });

const Home = () => {
  return (
    <div className="flex flex-col justify-center gap-16">
      <h1 className={`text-center text-8xl font-black ${updock.className}`}>
        Hi, Sweetie!
      </h1>
      <div className="flex flex-col gap-16 px-8 text-center text-3xl font-light">
        <p>
          So... yeah, I've kinda lied to you, nisam morao projekat za fakultet
          da uradim, but this is something that I've been planning for a while
          to make it as a gift to you, since I know how much you love gifts.
        </p>
        <p>
          We're going to play a little game now, call it a quiz if you would
          like. I wish you the very best of luck :)
        </p>
      </div>
      <Link href="/quiz">
        <Button color="pink" className="m-auto w-96 bg-buttonOk">
          Let's begin →
        </Button>
      </Link>
    </div>
  );
};

export default Home;

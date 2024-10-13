import { Updock } from "next/font/google";

const updock = Updock({ subsets: ["latin"], weight: "400" });

const Congrats = () => {
  return (
    <div className="flex flex-col justify-center gap-16">
      <h1 className={`text-center text-8xl font-black ${updock.className}`}>
        Bravo srce moje!
      </h1>
      <div className="flex flex-col gap-16 px-8 text-center text-3xl font-light">
        <p>
          You did it!!! I'm so so SO! proud of you!!! :) Thank you for playing
          and I really hope you've liked this!
        </p>
        <p>
          Oh... btw - check that little smiley face at the bottom right of your
          screen :)
        </p>
      </div>
    </div>
  );
};

export default Congrats;

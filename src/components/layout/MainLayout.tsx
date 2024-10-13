import { Modal, Tooltip } from "flowbite-react";
import { Figtree } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { PropsWithChildren, useState } from "react";

import img from "@/assets/us1.jpeg";
import { useEmojis, useModalText } from "@/utils";

const modalText1 = [
  "Anyways, nasla si hidden menu, svaka cast srce! (Osim ako ti ja vec nisam rekao da postoji...)",
  "I just wanted to let you know that I'm absolutely proud of you for everything that you do and no matter how hard things get, I'll always be there for you.",
  "And... ovo mi je nasa najdraza slika do sad :)",
];

const figtree = Figtree({
  weight: "variable",
  subsets: ["latin", "latin-ext"],
});

const MainLayout = ({ children }: PropsWithChildren) => {
  const [modal, setModal] = useState(false);
  const emojis = useEmojis();

  const text1 = useModalText(modalText1);
  const text2 = useModalText(["Thank you for being so wonderful :)"]);

  const handleClick = () => setModal(true);
  const handleClose = () => setModal(false);

  return (
    <>
      <Head>
        <title>Hi, Sweetie!</title>
        <link rel="icon" href="/real_favicon/favicon.ico" sizes="any" />
      </Head>
      <div className="relative h-screen w-full overflow-hidden p-2">
        <div
          className={`absolute flex size-full flex-col justify-center align-middle ${figtree.className}`}
        >
          {children}
          <Modal show={modal} onClose={handleClose}>
            <Modal.Header className="bg-modalBg">
              How did you find me?
            </Modal.Header>
            <Modal.Body className="bg-modalBg">
              <div className="space-y-6 pb-2">{text1}</div>
              <div className="space-y-6">
                <Image src={img} alt="us" />
              </div>
              <div className="space-y-6 pt-2">{text2}</div>
            </Modal.Body>
          </Modal>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <div
            className="absolute bottom-4 right-4 cursor-pointer p-4 font-black text-purple-500"
            onClick={handleClick}
          >
            <Tooltip content="Huh! I guess you've found me!">:)</Tooltip>
          </div>
        </div>
        <div
          id="emojis"
          className="pointer-events-none fixed -z-50 flex select-none flex-row flex-wrap justify-evenly gap-6 pr-2 align-middle text-4xl opacity-20"
        >
          {emojis}
        </div>
      </div>
    </>
  );
};

export default MainLayout;

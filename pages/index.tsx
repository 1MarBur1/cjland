import Image from "next/image";
import Header from "@/components/Header";
import Head from "next/head";

import MinionImage from "@/assets/main_picture.webp";
import Button from "@/components/Button";

import CopyIcon from "@/assets/copy.svg";
import Snackbar from "@/components/Snackbar";
import { useState } from "react";

export default function Home() {
  const [showSnackbar, setShowSnakbar] = useState(false);

  const onClick = () => {
    navigator.clipboard.writeText('87.228.1.98:25597')
    setShowSnakbar(true)

    setTimeout(() => {
      setShowSnakbar(false)
    }, 2000)
  }

  return (
    <>
      <Head>
        <title>
          CJ LAND | Сервер майнкрафт
        </title>
      </Head>
      <div
        className='h-screen w-screen overflow-x-hidden'
      >
        <Snackbar onClick={() => setShowSnakbar(false)} show={showSnackbar} />
        <Header />

        <div className="flex h-[calc(100%-125px)] items-center justify-between">
          <div className="relative w-[40%] hidden lg:block aspect-[1.11/1]">
            <Image alt='' fill src={MinionImage.src} />
          </div>
          <div className="px-8 lg:pr-72 lg:pl-0">
            <h1 className="text-white text-center lg:text-left font-extrabold mt-20 lg:mt-0 text-6xl lg:text-5xl">
              Не просто
              <br />
              cервер в minecraft
            </h1>

            <div className="flex flex-col lg:flex-row gap-3 mt-20 lg:mt-5">
              <Button onClick={() => window.open('https://www.donationalerts.com/r/padsjasdlskad')} className='px-8 py-4 w-full lg:w-[232px]'>
                <p>
                  Проходка
                </p>
              </Button>
              <Button onClick={onClick} className='pl-5 pr-3 !bg-[#0d0d11] flex justify-between border-4 border-primary text-primary  py-4 w-full lg:w-[232px]'>
                <p>
                  87.228.1.98:25597
                </p>
                <CopyIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

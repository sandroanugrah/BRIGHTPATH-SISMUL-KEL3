"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { Quicksand } from "next/font/google";
import latarMasuk from "@/assets/img/masuk/bgLogin.png";
import partikel1 from "@/assets/img/masuk/vektor1.png";
import partikel2 from "@/assets/img/masuk/vektor2.png";
import { useRouter } from "next/navigation";

const quicksand = Quicksand({
  weight: "700",
  subsets: ["latin"],
});

function Page() {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const router = useRouter();

  const soundClick = new Audio("/suara.wav");
  const soundMusik = new Audio("/musik.wav");

  const startBackgroundMusic = () => {
    if (!musicPlaying) {
      soundMusik.loop = true;
      soundMusik.play();
      setMusicPlaying(true);
    }
  };

  const navigateToBeranda = async () => {
    try {
      await soundClick.play();
      setTimeout(() => {
        router.push("/Beranda");
      }, soundClick.duration * 1000);
    } catch (error) {
      router.push("/Beranda");
    }
  };

  const handleButtonClick = async () => {
    await navigateToBeranda();
    startBackgroundMusic();
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${latarMasuk.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="w-full h-full flex justify-center items-center text-center text-black px-4">
        <div className="w-full flex justify-center">
          <Image src={partikel1} alt="vektor1" width={300} height={300} />
        </div>

        <div className="flex flex-col justify-center items-center text-center gap-4 h-full w-full">
          <Typography
            variant="h3"
            className="text-black"
            style={{
              fontSize: "6rem",
              fontFamily: "More Sugar",
            }}
          >
            BrightPath
          </Typography>
          <Typography variant="h4" className={quicksand.className}>
            Inspirasi untuk Hidup Lebih Baik
          </Typography>
          <Button
            onClick={handleButtonClick}
            className={`px-28 flex items-center gap-2 rounded-full mt-4 border-2 border-orange-900 bg-orange-900 text-md hover:bg-transparent hover:border-2 hover:border-orange-900 hover:shadow-none hover:text-orange-900 ${quicksand.className}`}
          >
            Masuk
          </Button>
        </div>

        <div className="w-full flex justify-center">
          <Image src={partikel2} alt="vektor2" width={400} height={400} />
        </div>
      </div>
    </div>
  );
}

export default Page;

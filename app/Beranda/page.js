"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Typography } from "@material-tailwind/react";
import { Quicksand } from "next/font/google";
import latarBeranda from "@/assets/img/beranda/bgBeranda.png";
import partikel1 from "@/assets/img/beranda/vektor1.png";

const quicksand = Quicksand({
  weight: "700",
  subsets: ["latin"],
});

function Page() {
  const router = useRouter();

  const soundClick = new Audio("/suara.wav");

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const gainNode = audioContext.createGain();
  gainNode.gain.setValueAtTime(2, audioContext.currentTime);

  const playSoundAndNavigate = (navigateFunction) => {
    soundClick
      .play()
      .then(() => {
        const audioSource = audioContext.createMediaElementSource(soundClick);
        audioSource.connect(gainNode);
        gainNode.connect(audioContext.destination);
        navigateFunction();
      })
      .catch(() => {
        navigateFunction();
      });
  };

  const handleNavKuliah = () => {
    playSoundAndNavigate(() => router.push("/MKuliah"));
  };

  const handleNavKehidupan = () => {
    playSoundAndNavigate(() => router.push("/MKehidupan"));
  };

  const handleNavBisnis = () => {
    playSoundAndNavigate(() => router.push("/MBisnis"));
  };

  const handleNavMental = () => {
    playSoundAndNavigate(() => router.push("/MMental"));
  };

  const handleNavTips = () => {
    playSoundAndNavigate(() => router.push("/TipsHarian"));
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${latarBeranda.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="w-full h-full flex justify-center items-center text-center text-black px-4">
        <div className="w-full flex justify-center">
          <Image
            src={partikel1}
            alt="vektor1"
            className="transform translate-y-28 translate-x-24"
            width={450}
            height={450}
          />
        </div>

        <div className="flex flex-col justify-center items-center text-center h-full w-full">
          <div className="bg-gray-300 bg-opacity-50 p-8 rounded-xl shadow-md">
            <div>
              <Typography
                className="text-black"
                style={{
                  fontSize: "4rem",
                  fontFamily: "More Sugar",
                }}
              >
                Hello!
              </Typography>
            </div>
            <div className="-mt-3 mb-2">
              <Typography
                className={`text-black ${quicksand.className}`}
                style={{
                  fontSize: "2rem",
                }}
              >
                Ayo, Jadikan Harimu Lebih Cerah Bersama Kami.
              </Typography>
              <Typography className={`text-black ${quicksand.className}`}>
                Pilih topik yang ingin Anda jelajahi untuk mendapatkan motivasi
                dan inspirasi!
              </Typography>
            </div>
            <div className="space-y-10">
              <Button
                onClick={handleNavKuliah}
                className={`px-44 rounded-full mt-4 border-2 border-black bg-yellow-700 text-lg text-black hover:scale-110 transition-all duration-300 ${quicksand.className}`}
              >
                Motivasi Kuliah
              </Button>
              <Button
                onClick={handleNavBisnis}
                className={`px-44 rounded-full mt-4 border-2 border-black bg-yellow-700 text-lg text-black hover:scale-110 transition-all duration-300 ${quicksand.className}`}
              >
                Motivasi Bisnis
              </Button>
              <Button
                onClick={handleNavKehidupan}
                className={`px-40 rounded-full mt-4 border-2 border-black bg-yellow-700 text-lg text-black hover:scale-110 transition-all duration-300 ${quicksand.className}`}
              >
                Motivasi Kehidupan
              </Button>
              <Button
                onClick={handleNavMental}
                className={`px-44 rounded-full mt-4 border-2 border-black bg-yellow-700 text-lg text-black hover:scale-110 transition-all duration-300 ${quicksand.className}`}
              >
                Mental Health
              </Button>
            </div>
            <div className="w-full flex justify-center">
              <Typography
                onClick={handleNavTips}
                className={`text-blue-800 bg-transparent shadow-none mt-5 text-lg underline cursor-pointer hover:text-blue-400 transition duration-300 ease-in-out  ${quicksand.className}`}
              >
                Tips Harian?
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

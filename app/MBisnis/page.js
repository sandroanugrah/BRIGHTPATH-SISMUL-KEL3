"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Quicksand } from "next/font/google";
import { Typography } from "@material-tailwind/react";
import latarBisnis from "@/assets/img/bgmotivasi.png";
import partikel from "@/assets/img/bisnis/vektor.png";
import { FaArrowAltCircleLeft } from "react-icons/fa";

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

  const handleBack = () => {
    playSoundAndNavigate(() => router.back());
  };

  const handleNavArtikel1 = () => {
    playSoundAndNavigate(() => router.push("MBisnis/Artikel1"));
  };
  const handleNavArtikel2 = () => {
    playSoundAndNavigate(() => router.push("MBisnis/Artikel2"));
  };
  const handleNavArtikel3 = () => {
    playSoundAndNavigate(() => router.push("MBisnis/Artikel3"));
  };

  const handleNavCerita1 = () => {
    playSoundAndNavigate(() => router.push("MBisnis/Cerita1"));
  };
  const handleNavCerita2 = () => {
    playSoundAndNavigate(() => router.push("MBisnis/Cerita2"));
  };

  return (
    <div
      className="w-full h-full flex justify-center items-center"
      style={{
        backgroundImage: `url(${latarBisnis.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="w-full h-full justify-center items-center">
        <div className="w-full flex items-center text-start self-start p-4">
          <FaArrowAltCircleLeft
            onClick={() => playSoundAndNavigate(handleBack)}
            className="cursor-pointer mx-3 hover:scale-110 transition duration-300 ease-in-out"
            color="black"
            style={{ fontSize: "3rem" }}
          />
          <Typography
            className="text-black"
            style={{
              fontSize: "4rem",
              fontFamily: "More Sugar",
            }}
          >
            Motivasi Bisnis
          </Typography>
        </div>
        <div className="w-[80%] ml-40 flex text-start">
          <Typography className={`text-black text-2xl ${quicksand.className}`}>
            Kesuksesan dalam bisnis tidak datang dari keberuntungan semata,
            tetapi dari keberanian untuk bermimpi besar, kerja keras tanpa
            henti, dan tekad untuk bangkit setiap kali menghadapi kegagalan
          </Typography>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full flex justify-center items-center">
            <div className="bg-gray-300 bg-opacity-45 p-8 w-[100%] h-[50%] ml-10 mt-10 rounded-xl">
              <Typography
                className={`text-black text-2xl mb-3 ${quicksand.className}`}
              >
                Ingin Membaca Artikel ?
              </Typography>
              <div className="w-[95%]">
                <Typography
                  onClick={() => playSoundAndNavigate(handleNavArtikel1)}
                  className={`text-blue-800 bg-gray-300 rounded-lg text-2xl underline cursor-pointer hover:text-blue-400 transition duration-300 ease-in-out mb-2 ${quicksand.className}`}
                >
                  Meraih Sukses Bisnis dari Nol: Cara Memulai dengan Penuh
                  Percaya Diri
                </Typography>
              </div>
              <div className="w-[40%]">
                <Typography
                  onClick={() => playSoundAndNavigate(handleNavArtikel2)}
                  className={`text-blue-800 bg-gray-300 rounded-lg text-2xl underline cursor-pointer hover:text-blue-400 transition duration-300 ease-in-out mb-2 ${quicksand.className}`}
                >
                  Bangkit dari Kegagalan
                </Typography>
              </div>
              <div className="w-[98%]">
                <Typography
                  onClick={() => playSoundAndNavigate(handleNavArtikel3)}
                  className={`text-blue-800 text-2xl bg-gray-300 rounded-lg underline cursor-pointer hover:text-blue-400 transition duration-300 ease-in-out mb-5 ${quicksand.className}`}
                >
                  Mengubah Gagal Menjadi Kesuksesan: Pelajaran Berharga dari
                  Bisnis yang Tidak Mudah
                </Typography>
              </div>
              <Typography
                className={`text-black text-2xl mb-3 ${quicksand.className}`}
              >
                Ingin Membaca Cerita Inspiratif ?
              </Typography>
              <div className="w-[97%]">
                <Typography
                  onClick={() => playSoundAndNavigate(handleNavCerita1)}
                  className={`text-blue-800 text-2xl bg-gray-300 rounded-lg underline cursor-pointer hover:text-blue-400 transition duration-300 ease-in-out mb-2 ${quicksand.className}`}
                >
                  Dari Garasi ke Puncak: Perjalanan Seorang Pengusaha Muda
                </Typography>
              </div>
              <div className="w-[100%]">
                <Typography
                  onClick={() => playSoundAndNavigate(handleNavCerita2)}
                  className={`text-blue-800 text-2xl bg-gray-300 rounded-lg underline cursor-pointer hover:text-blue-400 transition duration-300 ease-in-out  ${quicksand.className}`}
                >
                  Langkah Kecil Menuju Impian Besar: Kisah Seorang Mahasiswa
                  yang Tak Pernah Menyerah
                </Typography>
              </div>
            </div>
          </div>
          <div className="justify-center p-10 items-start flex w-[80%] h-full">
            <Image src={partikel} width={450} height={450} alt="partikel" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

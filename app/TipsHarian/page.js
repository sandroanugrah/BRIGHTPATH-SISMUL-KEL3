"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Quicksand } from "next/font/google";
import { Typography } from "@material-tailwind/react";
import latarKuliah from "@/assets/img/bgtips.png";
import partikel from "@/assets/img/tips/vektor.png";
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

  const handleNavToDo = () => {
    playSoundAndNavigate(() => router.push("/ToDo"));
  };

  return (
    <div
      className="w-full h-full flex justify-center items-center"
      style={{
        backgroundImage: `url(${latarKuliah.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="w-full h-full justify-center items-center">
        <div className="w-full items-center text-start self-start">
          <div className="flex items-center p-4">
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
              Tips Harian
            </Typography>
          </div>
          <Typography
            className={`text-black text-2xl ml-14 ${quicksand.className}`}
          >
            Hasil besar dimulai dari langkah kecil. Lanjutkan langkahmu !
          </Typography>
        </div>
        <div className="w-full flex justify-center">
          <div className="bg-gray-400 bg-opacity-45 p-8 w-full h-[70%] ml-10 rounded-xl space-y-5">
            <Typography
              className={`text-black text-2xl mb-3 bg-gray-200 p-4 rounded-lg ${quicksand.className}`}
            >
              Gunakan teknik Pomodoro untuk meningkatkan fokus saat belajar
            </Typography>
            <Typography
              className={`text-black text-2xl mb-3 bg-gray-200 p-4 rounded-lg ${quicksand.className}`}
            >
              Sediakan waktu 10 menit untuk relaksasi setiap hari
            </Typography>
            <Typography
              className={`text-black text-2xl mb-3 bg-gray-200 p-4 rounded-lg ${quicksand.className}`}
            >
              Tulis to-do list setiap pagi
            </Typography>
            <Typography
              className={`text-black text-2xl mb-3 bg-gray-200 p-4 rounded-lg ${quicksand.className}`}
            >
              Atur ruang belajar yang nyaman dan bebas gangguan
            </Typography>
            <Typography
              className={`text-black text-2xl mb-3 bg-gray-200 p-4 rounded-lg ${quicksand.className}`}
            >
              Berikan penghargaan pada dirimu setelah menyelesaikan tugas
            </Typography>
            <div className="w-[97%]">
              <Typography
                onClick={() => playSoundAndNavigate(handleNavToDo)}
                className={`text-blue-800 text-2xl p-3 rounded-lg underline cursor-pointer hover:text-blue-400 transition duration-300 ease-in-out ${quicksand.className}`}
              >
                Lebih Banyak?
              </Typography>
            </div>
          </div>
          <div className="justify-center items-start flex w-[40%] pt-[50px] h-full">
            <Image src={partikel} width={300} height={300} alt="partikel" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

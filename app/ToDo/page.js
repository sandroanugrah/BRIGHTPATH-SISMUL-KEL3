"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Quicksand } from "next/font/google";
import { Typography } from "@material-tailwind/react";
import latarToDo from "@/assets/img/bgtodo.png";
import partikel from "@/assets/img/todo/vektor.png";
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

  return (
    <div
      className="w-full h-full flex justify-center items-center"
      style={{
        backgroundImage: `url(${latarToDo.src})`,
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
            Tulis to-do list setiap pagi
          </Typography>
        </div>
        <div className="flex justify-center">
          <div className="justify-center items-start flex w-[40%] pt-16 h-full">
            <Image src={partikel} width={260} height={260} alt="partikel" />
          </div>
          <div className="w-full mr-32 mt-20">
            <Typography
              className={`text-black text-justify text-2xl ${quicksand.className}`}
            >
              Cobalah untuk menulis to-do list di setiap pagi. Ini bukan hanya
              tentang mencatat tugas yang harus diselesaikan, tapi juga membantu
              kamu memulai hari dengan lebih terstruktur. Dengan menuliskan apa
              yang ingin dicapai, kamu bisa merasa lebih fokus dan siap
              menghadapi hari. Mulailah dengan hal-hal kecil, seperti tugas yang
              cepat selesai, lalu lanjutkan ke yang lebih besar. Setiap kali
              kamu mencentang satu tugas, kamu akan merasa lebih puas dan
              termotivasi untuk menyelesaikan yang berikutnya. Selain itu, to-do
              list juga bisa membantu kamu melihat dengan jelas apa yang perlu
              dilakukan, sehingga tidak ada yang terlupakan. Jadi, cobalah untuk
              memberi diri kamu waktu beberapa menit di pagi hari untuk
              merencanakan apa yang akan dilakukan. Hal kecil ini bisa sangat
              membantu agar hari terasa lebih ringan dan terorganisir.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

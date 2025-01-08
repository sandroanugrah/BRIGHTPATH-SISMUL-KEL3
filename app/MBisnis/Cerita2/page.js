"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Quicksand } from "next/font/google";
import { Button, Typography } from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";
import latarArtikel from "@/assets/img/bgartikel.png";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const quicksand = Quicksand({
  weight: "700",
  subsets: ["latin"],
});

const articles = [
  {
    title: "Langkah Kecil Menuju Impian Besar:",
    sectitle: "Kisah Seorang Mahasiswa yang Tak Pernah Menyerah",
    content: `
      Kisah seorang mahasiswa yang memulai langkah kecil menuju impian
      besarnya adalah contoh nyata bahwa tidak ada mimpi yang terlalu
      besar untuk dicapai, asalkan ada usaha dan ketekunan. Dengan modal
      ilmu yang didapat di bangku kuliah dan semangat yang tinggi, ia
      mulai merintis bisnis kecil-kecilan di sela-sela waktu kuliahnya.
      Meskipun menghadapi berbagai tantangan, seperti waktu yang
      terbatas dan dana yang terbatas, ia tetap gigih berusaha dan tidak
      pernah menyerah. Keberanian untuk memulai, meskipun dalam
      keterbatasan, menjadi landasan kuat yang menggerakkannya maju
      menuju kesuksesan.
    `,
    additionalContent: `
      Setiap kegagalan yang dialami selama perjalanan bisnisnya dianggap
      sebagai pelajaran berharga. Alih-alih merasa putus asa, ia
      menggunakan kegagalan tersebut untuk memperbaiki strategi dan
      menemukan solusi baru. Perlahan namun pasti, bisnis kecilnya
      tumbuh dan berkembang seiring berjalannya waktu. Kisahnya
      mengajarkan bahwa langkah kecil yang diambil dengan tekad dan
      ketekunan akan membawa seseorang lebih dekat menuju impian
      besarnya, dan bahwa kesuksesan bukan hanya tentang berapa banyak
      yang dicapai, tetapi juga tentang seberapa besar tekad untuk terus
      berusaha, meskipun dihadapkan pada rintangan.
    `,
  },
  {
    title: "Dari Garasi ke Puncak:",
    sectitle: "Perjalanan Seorang Pengusaha Muda",
    content: `
      Perjalanan seorang pengusaha muda sering kali dimulai dari tempat
      yang sederhana, bahkan terkadang dari sebuah garasi. Banyak kisah
      sukses besar dimulai dengan visi yang jelas dan tekad yang kuat,
      meskipun dengan sumber daya yang terbatas. Seperti halnya
      perusahaan teknologi besar yang bermula dari garasi rumah, seorang
      pengusaha muda yang memiliki semangat dan keinginan untuk belajar
      dapat meraih impian mereka meskipun menghadapi banyak hambatan.
      Mereka tidak takut untuk memulai dari nol, karena mereka tahu
      bahwa setiap langkah kecil yang mereka ambil adalah bagian dari
      proses menuju tujuan besar.
    `,
    additionalContent: `
      Kesulitan dan tantangan yang dihadapi dalam perjalanan ini
      bukanlah penghalang, melainkan batu loncatan menuju kesuksesan.
      Dalam proses tersebut, penting untuk tetap fokus pada visi jangka
      panjang dan tidak menyerah pada kegagalan sementara. Setiap
      kegagalan justru memberi wawasan dan pemahaman yang lebih mendalam
      tentang pasar dan diri sendiri. Dari garasi kecil hingga puncak
      kesuksesan, perjalanan seorang pengusaha muda adalah bukti nyata
      bahwa kerja keras, kreativitas, dan ketekunan akan selalu
      membuahkan hasil yang luar biasa.
    `,
  },
];

function ArtikelPage() {
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextArtikel = () => {
    playSoundAndNavigate(() =>
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length)
    );
  };

  const handlePrevArtikel = () => {
    playSoundAndNavigate(() =>
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? articles.length - 1 : prevIndex - 1
      )
    );
  };

  return (
    <div
      className="w-full h-full flex justify-center items-center"
      style={{
        backgroundImage: `url(${latarArtikel.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="w-full h-full justify-center items-center">
        <div className="w-full flex items-center justify-center mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`title-${currentIndex}`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.5,
              }}
            >
              <Typography
                className="text-black text-center underline"
                style={{
                  fontSize: "3rem",
                  fontFamily: "More Sugar",
                }}
              >
                {articles[currentIndex].title}
              </Typography>
              <Typography
                className="text-black underline"
                style={{
                  fontSize: "3rem",
                  fontFamily: "More Sugar",
                }}
              >
                {articles[currentIndex].sectitle}
              </Typography>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex w-full justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentIndex}`}
              className="bg-gray-300 w-[80%] p-4 rounded-lg shadow-lg"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            >
              <Typography
                style={{ lineHeight: "1.8" }}
                className={`text-black bg-orange-900 bg-opacity-25 p-1 rounded-lg text-xl mb-3 text-justify ${quicksand.className}`}
              >
                {articles[currentIndex].content}
              </Typography>
              <Typography
                style={{ lineHeight: "1.8" }}
                className={`text-black bg-gray-400 p-1 rounded-lg text-xl text-justify ${quicksand.className}`}
              >
                {articles[currentIndex].additionalContent}
              </Typography>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex w-full justify-center items-center gap-2 mt-5 fixed bottom-8">
          <AiOutlineDoubleLeft
            onClick={() => playSoundAndNavigate(handlePrevArtikel)}
            className={`${
              currentIndex === 0 ? "hidden" : "block"
            } hover:scale-110 text-black p-1 hover:bg-gray-700 hover:text-orange-900 rounded-full transition duration-300 ease-in-out cursor-pointer`}
            size={35}
          />
          <Button
            onClick={() => playSoundAndNavigate(handleBack)}
            className={`w-[15%] rounded-full border-2 border-orange-900 bg-orange-900 normal-case text-md hover:border-2 hover:border-white hover:scale-110 transition duration-500 ease-in-out ${quicksand.className}`}
          >
            Kembali
          </Button>
          <AiOutlineDoubleRight
            onClick={() => playSoundAndNavigate(handleNextArtikel)}
            className={`${
              currentIndex === articles.length - 1 ? "hidden" : "block"
            } hover:scale-110 text-black p-1 hover:bg-gray-700 hover:text-orange-900 rounded-full transition duration-300 ease-in-out cursor-pointer`}
            size={35}
          />
        </div>
      </div>
    </div>
  );
}

export default ArtikelPage;

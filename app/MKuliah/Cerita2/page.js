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
    title: "Dari Mahasiswa Biasa Menjadi Luar Biasa",
    content: `
      Siti, seorang mahasiswa yang awalnya dianggap biasa oleh banyak
      orang, membuktikan bahwa setiap orang memiliki potensi besar untuk
      berkembang. Dia berasal dari kota kecil dengan latar belakang
      keluarga sederhana. Ketika pertama kali memasuki dunia
      perkuliahan, Siti merasa cemas dan tidak percaya diri. Namun, dia
      segera menyadari bahwa untuk bisa sukses, dia harus keluar dari
      zona nyaman. Dengan tekad yang kuat, Siti mulai lebih aktif
      mengikuti berbagai kegiatan kampus, baik akademik maupun
      non-akademik. Selain belajar dengan giat, ia juga berusaha
      membangun jaringan dengan dosen dan teman-teman yang memiliki visi
      yang sama.
    `,
    additionalContent: `
      Perubahan besar terjadi pada Siti ketika dia mulai mengembangkan
      minat di bidang teknologi dan mulai ikut serta dalam
      kompetisi-kompetisi inovasi yang diadakan oleh kampus. Meski tidak
      langsung menang, setiap pengalaman memberikan pembelajaran
      berharga yang semakin membentuk karakternya. Perlahan, Siti
      dikenal sebagai mahasiswa yang tidak hanya cerdas, tetapi juga
      kreatif dan memiliki kepemimpinan yang kuat. Berkat kegigihan dan
      keberaniannya untuk mengambil peluang, Siti kini menjadi seorang
      pemimpin di organisasi kemahasiswaan dan sukses menciptakan
      startup teknologi yang mendapatkan perhatian banyak pihak. Siti
      membuktikan bahwa siapa pun bisa menjadi luar biasa asalkan berani
      berusaha lebih keras, percaya pada diri sendiri, dan tidak takut
      untuk mencoba hal-hal baru.
    `,
  },
  {
    title: "Cerita inspiratif mahasiswa sukses",
    content: `
      Di sebuah universitas ternama, ada seorang mahasiswa bernama Dika
      yang berasal dari keluarga sederhana. Meskipun hidup dengan
      keterbatasan, Dika memiliki impian besar untuk menjadi seorang
      pengusaha sukses. Saat pertama kali masuk kuliah, Dika menghadapi
      banyak tantangan—dari kesulitan biaya hingga tuntutan akademik
      yang berat. Namun, Dika tidak menyerah. Ia memanfaatkan setiap
      kesempatan untuk belajar, baik dari dosen, teman, maupun berbagai
      sumber lain. Di tengah kesibukannya, ia juga mulai mengembangkan
      ide bisnis kecil-kecilan yang dimulai dengan menjual produk-produk
      lokal melalui media sosial. Meski awalnya sulit, Dika terus
      berusaha dan mengatur waktu antara kuliah dan bisnis dengan sangat
      bijak.
    `,
    additionalContent: `
      Seiring berjalannya waktu, bisnis Dika mulai berkembang. Ia
      mendapatkan banyak pelanggan dan bahkan beberapa investor tertarik
      untuk bekerja sama. Namun, keberhasilannya tidak datang begitu
      saja. Dika sering bekerja lembur hingga larut malam, membaca buku,
      dan belajar dari kegagalan yang ia alami. Tidak hanya itu, ia juga
      aktif dalam organisasi kampus, menjalin relasi dengan berbagai
      pihak yang akhirnya membantu dalam pengembangan bisnisnya.
      Ketekunan, kerja keras, dan tekad untuk tidak menyerah membawanya
      pada kesuksesan. Kini, Dika sudah memiliki usaha yang berkembang
      pesat dan menjadi inspirasi bagi banyak mahasiswa lainnya. Ia
      membuktikan bahwa dengan semangat yang kuat dan konsistensi,
      segala rintangan dapat diatasi, dan impian bisa terwujud. 
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
        <div className="w-full flex items-center justify-center self-start mt-10">
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
                className="text-black underline"
                style={{
                  fontSize: "3rem",
                  fontFamily: "More Sugar",
                }}
              >
                {articles[currentIndex].title}
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
                className={`text-black bg-light-blue-900 bg-opacity-25 p-1 rounded-lg text-xl mb-3 text-justify ${quicksand.className}`}
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

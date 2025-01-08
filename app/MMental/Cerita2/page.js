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
    title: "Bangkit dari Kegelapan:",
    sectitle: "Perjalanan Seseorang Menghadapi Depresi dan Menemukan Cahaya",
    content: `
    Dalam sebuah kota kecil, seorang pemuda bernama Arman pernah merasa hidupnya tidak lagi berarti. Depresi yang ia alami membuatnya merasa seperti terperangkap dalam kegelapan tanpa akhir. Setiap hari terasa seperti perjuangan untuk sekadar bangun dari tempat tidur. Namun, titik balik datang ketika seorang teman mengulurkan tangan dan membawanya ke sebuah komunitas dukungan kesehatan mental. Di sana, Arman mulai berbagi ceritanya dan menemukan bahwa ia tidak sendirian.
    `,
    additionalContent: `
    Melalui perjalanan yang penuh perjuangan, Arman perlahan-lahan membangun kembali hidupnya. Ia belajar untuk menerima dirinya apa adanya, tanpa tekanan untuk terlihat sempurna. Menemukan hobi baru, seperti melukis dan bermain gitar, membantunya mengekspresikan emosi yang sulit ia ungkapkan dengan kata-kata. Kini, Arman tidak hanya menemukan cahaya di ujung kegelapan, tetapi ia juga menjadi cahaya bagi orang lain yang sedang berjuang. Dengan pengalaman dan keberaniannya, ia menjadi inspirasi bahwa tidak ada kegelapan yang tidak dapat ditembus oleh harapan dan cinta.
    `,
  },
  {
    title: "Membangun Kesehatan Mental yang Kuat di Tengah Tantangan Hidup",
    content: `
      Kesehatan mental yang kuat tidak selalu hadir sejak awal, tetapi dibangun melalui berbagai tantangan yang dihadapi dalam kehidupan. Banyak orang menemukan kekuatan mereka justru setelah melewati masa-masa sulit. Contohnya, seorang mahasiswa bernama Dina yang harus menghadapi tekanan akademis, ekspektasi keluarga, dan rasa kesepian saat jauh dari rumah. Dina merasa dirinya tenggelam dalam kekhawatiran dan ketidakpastian. Namun, dengan bantuan teman dekat dan seorang konselor, ia mulai mempraktikkan mindfulness dan mengenali pentingnya mengambil jeda untuk merawat dirinya sendiri. Langkah kecil, seperti menulis jurnal harian atau melakukan olahraga ringan, membantu Dina menemukan stabilitas emosional.
    `,
    additionalContent: `
      Kesehatan mental tidak hanya tentang mengatasi masalah, tetapi juga membangun ketahanan untuk menghadapi masa depan. Ketika Dina mulai memprioritaskan dirinya sendiri, ia menemukan bahwa tantangan tidak lagi terasa seperti beban berat, melainkan peluang untuk bertumbuh. Pengalaman ini mengajarkannya bahwa menjaga keseimbangan antara kebutuhan fisik dan emosional adalah kunci untuk menghadapi hidup dengan lebih percaya diri. Kini, Dina menjadi advokat kesehatan mental di kampusnya, berbagi pengalaman dan menginspirasi orang lain untuk merawat diri mereka dengan lebih baik.
    `,
  },
];

function ArtikelPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextArtikel = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const handlePrevArtikel = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
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
                className={`text-black bg-purple-900 bg-opacity-25 p-1 rounded-lg text-xl mb-3 text-justify ${quicksand.className}`}
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
            onClick={handlePrevArtikel}
            className={`${
              currentIndex === 0 ? "hidden" : "block"
            } hover:scale-110 text-black p-1 hover:bg-gray-700 hover:text-orange-900 rounded-full transition duration-300 ease-in-out cursor-pointer`}
            size={35}
          />
          <Button
            onClick={handleBack}
            className={`w-[15%] rounded-full border-2 border-orange-900 bg-orange-900 normal-case text-md hover:border-2 hover:border-white hover:scale-110 transition duration-500 ease-in-out ${quicksand.className}`}
          >
            Kembali
          </Button>
          <AiOutlineDoubleRight
            onClick={handleNextArtikel}
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

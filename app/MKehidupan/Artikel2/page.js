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
    title: "Perubahan Kecil untuk Hidup Lebih Bermakna",
    content: `
      Terkadang, kita merasa hidup berjalan begitu monoton, seolah
      kehilangan makna di tengah rutinitas sehari-hari. Namun, makna
      hidup tidak selalu ditemukan dalam perubahan besar atau pencapaian
      spektakuler. Justru, perubahan kecil yang konsisten dapat membawa
      dampak luar biasa pada kebahagiaan dan kualitas hidup kita.
      Mulailah dengan hal sederhana, seperti meluangkan waktu untuk
      bersyukur setiap hari atau memberikan senyuman kepada orang lain.
      Kebiasaan kecil ini mampu menciptakan energi positif yang
      menjalar, mengubah cara kita memandang dunia dan menjalani hidup.
    `,
    additionalContent: `
      Selain itu, perubahan kecil juga dapat berupa meningkatkan
      kesadaran diri melalui refleksi dan evaluasi rutin. Luangkan waktu
      untuk bertanya pada diri sendiri apa yang benar-benar penting dan
      apa yang hanya membebani. Dengan memprioritaskan hal-hal yang
      membawa kebahagiaan sejati, seperti hubungan yang bermakna atau
      mengejar passion, kita dapat menciptakan kehidupan yang lebih
      bermakna dan memuaskan. Ingatlah, perjalanan menuju perubahan
      besar selalu dimulai dari langkah kecil, tetapi setiap langkah
      membawa kita lebih dekat pada hidup yang lebih baik.
    `,
  },
  {
    title: "Menemukan Kebahagiaan dalam Kesederhanaan",
    content: `
      Menemukan kebahagiaan dalam kesederhanaan adalah salah satu jalan
      hidup yang sering kali terlupakan di tengah hiruk-pikuk dunia
      modern. Banyak dari kita terjebak dalam keinginan untuk memiliki
      lebih banyak, yang pada akhirnya justru membawa kecemasan dan
      ketidakpuasan. Namun, kebahagiaan sejati sering kali terletak pada
      hal-hal sederhana yang kita nikmati setiap hari. Sebuah senyuman
      tulus dari orang yang kita cintai, secangkir kopi hangat di pagi
      hari, atau waktu luang yang dihabiskan bersama keluarga—hal-hal
      ini bisa membawa kebahagiaan yang jauh lebih mendalam daripada
      harta benda yang kita kejar tanpa henti.
    `,
    additionalContent: `
      Kebahagiaan dalam kesederhanaan bukan berarti kita harus hidup
      dalam kekurangan atau menghindari kemajuan, tetapi lebih pada
      memilih untuk mensyukuri apa yang kita miliki dan menikmati momen
      kecil dalam hidup. Ketika kita berhenti mengejar kesempurnaan atau
      kepemilikan materi yang berlebihan, kita mulai menyadari bahwa
      kebahagiaan sejati datang dari dalam diri kita. Dengan merangkul
      kesederhanaan, kita bisa hidup lebih damai, lebih bijaksana, dan
      lebih bahagia, karena kebahagiaan tidak selalu ditemukan dalam
      kepemilikan, tetapi dalam cara kita menikmati dan mensyukuri hidup
      yang sederhana namun penuh makna.
    `,
  },
  {
    title: "Menghadapi Tantangan Hidup dengan Kepala Tegak:",
    sectitle: "Kekuatan dalam Ketabahan",
    content: `
      Hidup sering kali mempertemukan kita dengan situasi yang sulit dan
      penuh tantangan, yang menguji batas ketahanan fisik, emosional,
      dan mental kita. Dalam momen seperti itu, penting untuk tidak
      menyerah pada keputusasaan. Ketabahan bukan hanya tentang
      bertahan, tetapi juga tentang menjaga kepala tetap tegak meski
      badai datang menghantam. Dengan keyakinan pada kemampuan diri dan
      dukungan dari orang-orang terdekat, kita dapat menemukan jalan
      keluar dari kegelapan. Ketabahan memungkinkan kita untuk melihat
      peluang di balik setiap kesulitan dan memberikan kekuatan untuk
      melangkah maju.
    `,
    additionalContent: `
      Orang-orang yang berhasil melewati masa-masa sulit sering kali
      menyadari bahwa kekuatan sejati mereka terletak pada kemauan untuk
      terus berusaha, meskipun dunia tampak tidak adil. Kisah seorang
      ayah yang bekerja keras untuk keluarganya, seorang siswa yang
      belajar tanpa lelah demi masa depan yang lebih baik, atau seorang
      ibu yang berjuang demi anak-anaknya, mengajarkan kita arti
      sebenarnya dari ketabahan. Mereka adalah bukti bahwa menghadapi
      tantangan dengan kepala tegak tidak hanya mengubah hidup mereka
      sendiri, tetapi juga menginspirasi orang lain untuk tidak menyerah
      pada perjuangan hidup.
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
                className={`text-black bg-green-900 bg-opacity-25 p-1 rounded-lg text-xl mb-3 text-justify ${quicksand.className}`}
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

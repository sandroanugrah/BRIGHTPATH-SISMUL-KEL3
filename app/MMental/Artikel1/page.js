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
    title: "Mengelola Stres:",
    sectitle: "Kunci Menuju Kesehatan Mental yang Lebih Baik",
    content: `
      Stres adalah bagian tak terpisahkan dari kehidupan, tetapi cara kita mengelolanya dapat menentukan kualitas kesehatan mental kita. Dalam menghadapi tekanan sehari-hari, penting untuk mengenali tanda-tanda stres agar dapat menanganinya dengan efektif. Teknik seperti meditasi, latihan pernapasan, atau sekadar berjalan-jalan di alam terbuka bisa menjadi langkah awal yang sederhana namun bermanfaat. Selain itu, menjaga keseimbangan antara pekerjaan dan kehidupan pribadi, serta menciptakan waktu untuk aktivitas yang menyenangkan, dapat membantu mengurangi beban pikiran dan meningkatkan suasana hati secara keseluruhan.
    `,
    additionalContent: `
      Tidak kalah pentingnya adalah memiliki dukungan sosial yang kuat. Berbagi cerita dengan teman atau keluarga dapat memberikan perspektif baru dan mengurangi rasa tertekan. Jika stres terasa sulit diatasi, mencari bantuan profesional seperti konselor atau terapis adalah langkah bijak. Mengelola stres bukan hanya soal menghilangkan tekanan, tetapi juga membangun ketahanan mental agar kita dapat menghadapi tantangan hidup dengan lebih percaya diri dan penuh semangat.
    `,
  },
  {
    title: "Pentingnya Menjaga Pikiran Positif dalam Kehidupan Sehari-Hari",
    content: `
      Pikiran positif memiliki kekuatan luar biasa untuk mengubah cara kita melihat dunia dan merespons berbagai situasi. Ketika kita fokus pada hal-hal baik yang ada dalam hidup, kita menciptakan energi positif yang mendukung kesehatan mental dan fisik. Berlatih bersyukur setiap hari, bahkan untuk hal-hal kecil, seperti secangkir kopi hangat atau sinar matahari pagi, dapat membantu menumbuhkan pandangan hidup yang lebih optimis. Pikiran positif juga membantu mengurangi stres dan meningkatkan kemampuan kita untuk mengatasi masalah dengan kepala dingin.
    `,
    additionalContent: `
      Namun, menjaga pikiran positif bukan berarti mengabaikan kenyataan atau menghindari emosi negatif. Sebaliknya, ini tentang menerima kenyataan dengan lapang dada dan tetap percaya bahwa setiap masalah memiliki solusi. Mengelilingi diri dengan orang-orang yang mendukung dan menginspirasi dapat memperkuat sikap positif kita. Dengan menjaga pikiran yang optimis, kita tidak hanya meningkatkan kualitas hidup kita sendiri tetapi juga menyebarkan energi positif kepada orang-orang di sekitar kita.
    `,
  },
  {
    title: "Mengubah Gagal Menjadi Kesuksesan:",
    sectitle: "Pelajaran Berharga dari Bisnis yang Tidak Mudah",
    content: `
      Setiap perjalanan bisnis penuh dengan lika-liku, dan kegagalan adalah bagian yang tak terhindarkan. Namun, kegagalan bukanlah akhir dari segalanya; justru, ini adalah awal dari pelajaran yang berharga. Banyak pengusaha sukses memulai dari kegagalan, tetapi mereka menggunakan pengalaman tersebut untuk bangkit lebih kuat. Ketika sebuah bisnis menghadapi tantangan besar, seperti penurunan penjualan atau kerugian finansial, inilah saatnya untuk mengevaluasi strategi, menemukan solusi kreatif, dan beradaptasi dengan perubahan. Dalam proses ini, pengusaha sering kali menemukan peluang baru yang sebelumnya tak terlihat.
    `,
    additionalContent: `
      Kegigihan dan keberanian untuk terus mencoba adalah kunci utama dalam mengubah kegagalan menjadi kesuksesan. Mengakui kesalahan tanpa takut untuk belajar darinya adalah langkah penting menuju pertumbuhan. Contoh nyata bisa dilihat dari para inovator yang tidak menyerah meski berkali-kali ditolak, hingga akhirnya menciptakan produk atau layanan yang revolusioner. Kegagalan hanyalah batu loncatan, dan dengan mindset yang tepat, setiap rintangan dapat diubah menjadi pelajaran yang membawa kita lebih dekat pada tujuan yang diimpikan.
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

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
    title: "Mengubah Gagal Menjadi Kesuksesan:",
    sectitle: "Pelajaran Berharga dari Bisnis yang Tidak Mudah",
    content: `
      Mengubah kegagalan menjadi kesuksesan adalah perjalanan yang tidak
      selalu mudah, tetapi sangat mungkin dicapai. Setiap kegagalan
      dalam bisnis memberi kita pelajaran berharga yang dapat
      mengarahkan kita menuju pencapaian lebih besar. Dalam setiap
      rintangan, ada kesempatan untuk belajar, beradaptasi, dan menjadi
      lebih kuat. Bisnis yang sukses bukanlah tentang tidak pernah
      gagal, tetapi tentang bagaimana kita bangkit setelah setiap
      kegagalan, dengan pemahaman yang lebih baik dan semangat yang
      lebih kuat untuk maju.
    `,
    additionalContent: `
      Kesuksesan sering kali datang setelah melalui berbagai cobaan dan
      tantangan. Tidak ada jalan pintas menuju keberhasilan, dan setiap
      langkah yang diambil—baik itu langkah besar maupun kecil—membentuk
      fondasi yang kokoh. Ketekunan, keberanian untuk mencoba lagi, dan
      kemampuan untuk menyesuaikan strategi adalah kunci utama untuk
      mengubah kegagalan menjadi kemenangan. Ingat, kesuksesan tidak
      diukur dari seberapa cepat kita mencapai tujuan, tetapi seberapa
      kuat kita bangkit setelah jatuh.
    `,
  },
  {
    title: "Meraih Sukses Bisnis dari Nol:",
    sectitle: "Cara Memulai dengan Penuh Percaya Diri",
    content: `
      Meraih sukses bisnis dari nol memang bukan perjalanan yang mudah,
      namun dengan keyakinan dan langkah yang tepat, semua tantangan
      bisa diatasi. Memulai bisnis tanpa pengalaman atau modal besar
      seringkali terasa menakutkan, namun yang terpenting adalah
      memiliki keberanian untuk memulai. Ketika memulai dari bawah, kita
      diajak untuk lebih kreatif dan fokus pada solusi, bukan masalah.
      Mengambil langkah pertama dengan penuh percaya diri adalah kunci
      untuk mengubah ide bisnis menjadi kenyataan. Keberanian untuk
      mencoba adalah awal dari segalanya.
    `,
    additionalContent: `
      Selain itu, penting untuk selalu belajar dan beradaptasi dengan
      kondisi pasar. Banyak pengusaha sukses yang memulai dengan sumber
      daya terbatas, tetapi dengan semangat yang tak pernah padam,
      mereka mampu mengembangkan bisnis mereka. Memahami pasar,
      berinovasi, dan terus menerus meningkatkan kualitas produk atau
      layanan adalah cara untuk mencapai kesuksesan. Dalam proses
      tersebut, kegagalan mungkin datang, namun itu bukan akhir,
      melainkan pelajaran berharga yang akan mematangkan kita untuk
      mencapai tujuan yang lebih besar. Dengan sikap percaya diri,
      semangat pantang menyerah, dan tekad yang kuat, meraih sukses
      bisnis dari nol bukanlah hal yang mustahil.
    `,
  },
  {
    title: "Bangkit dari Kegagalan",
    content: `
      Kegagalan adalah bagian yang tak terpisahkan dari perjalanan
      menuju kesuksesan, terutama dalam dunia bisnis. Setiap pengusaha
      pasti pernah merasakan kegagalan, baik itu dalam bentuk kehilangan
      pelanggan, kerugian finansial, atau ide yang gagal diterima pasar.
      Namun, penting untuk diingat bahwa kegagalan bukanlah akhir dari
      segalanya. Sebaliknya, kegagalan memberi pelajaran berharga yang
      akan membentuk mentalitas yang lebih kuat dan memperkuat strategi
      bisnis ke depan. Dengan menganalisis kesalahan yang terjadi, kita
      dapat mengidentifikasi area yang perlu perbaikan dan mengubah
      kegagalan menjadi peluang untuk tumbuh.
    `,
    additionalContent: `
      Bangkit dari kegagalan memerlukan ketekunan dan keyakinan yang
      kuat. Banyak pengusaha besar yang pernah gagal sebelum akhirnya
      meraih kesuksesan yang gemilang. Contohnya, Walt Disney dipecat
      karena dianggap tidak memiliki kreativitas, dan Steve Jobs diusir
      dari perusahaan yang ia dirikan. Namun, mereka tidak menyerah.
      Mereka belajar dari kesalahan dan terus maju dengan ide-ide baru.
      Begitu pula dengan Anda, jangan biarkan kegagalan menghalangi
      langkah Anda. Gunakan pengalaman tersebut untuk memperbaiki diri,
      mencari peluang baru, dan tetap fokus pada tujuan akhir Anda.
      Ingat, setiap kegagalan adalah batu loncatan menuju kesuksesan
      yang lebih besar.
    `,
  },
  {
    title: "Mengubah Gagal Menjadi Kesuksesan:",
    sectitle: "Pelajaran Berharga dari Bisnis yang Tidak Mudah",
    content: `
      Mengubah kegagalan menjadi kesuksesan adalah perjalanan yang tidak
      selalu mudah, tetapi sangat mungkin dicapai. Setiap kegagalan
      dalam bisnis memberi kita pelajaran berharga yang dapat
      mengarahkan kita menuju pencapaian lebih besar. Dalam setiap
      rintangan, ada kesempatan untuk belajar, beradaptasi, dan menjadi
      lebih kuat. Bisnis yang sukses bukanlah tentang tidak pernah
      gagal, tetapi tentang bagaimana kita bangkit setelah setiap
      kegagalan, dengan pemahaman yang lebih baik dan semangat yang
      lebih kuat untuk maju.
    `,
    additionalContent: `
      Kesuksesan sering kali datang setelah melalui berbagai cobaan dan
      tantangan. Tidak ada jalan pintas menuju keberhasilan, dan setiap
      langkah yang diambil—baik itu langkah besar maupun kecil—membentuk
      fondasi yang kokoh. Ketekunan, keberanian untuk mencoba lagi, dan
      kemampuan untuk menyesuaikan strategi adalah kunci utama untuk
      mengubah kegagalan menjadi kemenangan. Ingat, kesuksesan tidak
      diukur dari seberapa cepat kita mencapai tujuan, tetapi seberapa
      kuat kita bangkit setelah jatuh.
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

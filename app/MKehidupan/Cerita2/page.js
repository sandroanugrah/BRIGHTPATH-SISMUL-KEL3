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
    title: "Kekuatan dalam Keterbatasan:",
    sectitle: "Perjalanan Seorang Wanita yang Menginspirasi",
    content: `
      Dalam hidupnya yang penuh keterbatasan, seorang wanita bernama
      Aisyah membuktikan bahwa kekuatan sejati berasal dari tekad dan
      keberanian. Terlahir dengan hambatan fisik yang membuatnya berbeda
      dari kebanyakan orang, Aisyah tidak pernah melihat keterbatasannya
      sebagai penghalang. Dengan semangat pantang menyerah, ia mulai
      menjahit sebagai cara untuk mengekspresikan kreativitasnya dan
      membangun masa depannya. Lambat laun, hasil karyanya mulai dikenal
      banyak orang, dan usahanya berkembang menjadi bisnis yang sukses.
      Keterbatasannya tidak hanya menjadi motivasi untuk bekerja lebih
      keras, tetapi juga menjadi inspirasi bagi banyak orang untuk tidak
      menyerah pada keadaan.
    `,
    additionalContent: `
      Aisyah percaya bahwa hidup ini tentang bagaimana kita merespons
      tantangan, bukan sekadar menghindarinya. Dengan penuh kasih, ia
      menggunakan kesuksesannya untuk membantu orang-orang yang
      menghadapi tantangan serupa. Melalui cerita hidupnya, ia
      mengajarkan bahwa setiap orang memiliki kekuatan dalam diri
      mereka, meskipun terkadang tersembunyi di balik keterbatasan.
      Perjalanan hidup Aisyah adalah bukti nyata bahwa tidak ada batasan
      yang cukup kuat untuk menghentikan seseorang yang memiliki
      keyakinan, kerja keras, dan harapan.
    `,
  },
  {
    title: "Pelangi Setelah Hujan:",
    sectitle: "Kisah Perjuangan Hidup",
    content: `
      Hidup tidak selalu berjalan sesuai rencana, dan sering kali kita
      dihadapkan pada badai yang menguji kekuatan hati dan mental.
      Namun, di balik setiap tantangan, ada peluang untuk tumbuh dan
      menjadi lebih kuat. Sama seperti hujan yang menyegarkan tanah dan
      menghidupkan kembali alam, kesulitan dalam hidup sering kali
      membawa pelajaran berharga yang tidak bisa kita dapatkan dengan
      cara lain. Ketika menghadapi cobaan, penting untuk terus bergerak
      maju, meski langkah terasa berat. Percayalah, setelah hujan deras
      berlalu, pelangi yang indah selalu menunggu untuk menyapa.
    `,
    additionalContent: `
      Kisah mereka yang berhasil bangkit dari keterpurukan adalah bukti
      nyata bahwa perjuangan tidak pernah sia-sia. Seorang ibu yang
      kehilangan pekerjaannya, namun kemudian membangun bisnis kecil
      dari dapurnya sendiri; seorang pemuda yang gagal di sekolah,
      tetapi menemukan kesuksesan melalui keterampilan yang ia
      kembangkan sendiri. Kisah-kisah ini mengingatkan kita bahwa setiap
      hujan dalam hidup hanyalah sementara, dan jika kita terus
      berusaha, cahaya akan kembali bersinar. Pelangi setelah hujan
      bukan hanya keindahan yang tampak di langit, tetapi juga simbol
      harapan yang menguatkan jiwa.
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

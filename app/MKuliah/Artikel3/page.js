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
    title: "Menjaga Semangat Kuliah di Tengah Kesibukan dan Tekanan",
    content: `
      Menjaga semangat kuliah di tengah kesibukan dan tekanan memang
      menjadi tantangan yang besar, terutama ketika menghadapi tugas
      yang menumpuk, ujian yang semakin dekat, serta berbagai kegiatan
      organisasi atau sosial. Pada saat seperti ini, seringkali motivasi
      mulai menurun dan rasa lelah mulai menghampiri. Namun, untuk tetap
      semangat, penting untuk memiliki tujuan yang jelas dan alasan yang
      kuat mengapa kita memilih untuk melanjutkan pendidikan. Menetapkan
      tujuan jangka panjang, seperti impian karir atau pencapaian
      pribadi, dapat membantu Anda melihat gambaran besar dan memberikan
      dorongan untuk bertahan meski menghadapi berbagai tantangan. Fokus
      pada pencapaian tersebut, dan ingatkan diri Anda bahwa setiap
      usaha yang dilakukan, meskipun kecil, membawa Anda lebih dekat
      menuju tujuan tersebut.
    `,
    additionalContent: `
      Selain itu, penting untuk menciptakan rutinitas yang mendukung
      kesehatan fisik dan mental. Cobalah untuk menjaga pola tidur yang
      baik, makan dengan bergizi, dan meluangkan waktu untuk
      berolahraga, meskipun hanya sejenak. Jangan ragu untuk mengambil
      istirahat ketika dibutuhkan, karena tubuh dan pikiran yang segar
      akan lebih produktif. Dengan keseimbangan yang baik antara studi,
      istirahat, dan kegiatan sosial, Anda dapat menjaga semangat kuliah
      dan tetap termotivasi meskipun di tengah kesibukan dan tekanan
      yang datang.
    `,
  },
  {
    title: "Cara Tetap Termotivasi di Tengah Tugas yang Menumpuk",
    content: `
      Ketika tugas menumpuk dan rasa kewalahan mulai menguasai, penting
      untuk tetap tenang dan mengambil langkah strategis. Pecah tugas
      besar menjadi langkah-langkah kecil yang lebih terukur, sehingga
      Anda dapat fokus pada satu hal dalam satu waktu tanpa merasa
      terbebani. Menetapkan tujuan harian yang realistis, seperti
      menyelesaikan dua hingga tiga tugas utama, dapat membantu Anda
      tetap berada di jalur yang benar. Selain itu, beri diri Anda
      penghargaan kecil setelah setiap pencapaian, seperti secangkir
      kopi favorit atau waktu singkat untuk bersantai. Jangan lupa
      menjaga kesehatan fisik dan mental—pastikan Anda cukup tidur,
      makan makanan bergizi, dan berolahraga ringan agar tubuh tetap
      bugar dan pikiran jernih.
    `,
    additionalContent: `
      Atur lingkungan belajar Anda agar kondusif dengan menghilangkan
      gangguan, seperti notifikasi ponsel, dan tambahkan elemen yang
      menenangkan, seperti musik lembut atau aromaterapi. Jika merasa
      terjebak, jangan ragu untuk mencari dukungan dari teman, keluarga,
      atau mentor. Bergabung dengan kelompok belajar juga dapat membantu
      menciptakan suasana yang saling mendukung. Yang terpenting, selalu
      ingatkan diri Anda tentang tujuan akhir dan mimpi besar yang
      sedang Anda perjuangkan. Memvisualisasikan hasil positif dari
      upaya Anda dapat menjadi motivasi kuat untuk terus maju, meskipun
      tantangan terasa berat. Akhirnya, ingatlah bahwa perjalanan ini
      adalah bagian dari proses menuju kesuksesan—nikmati setiap
      langkahnya.
    `,
  },
  {
    title: "Mengatur Prioritas: Kunci Sukses Kuliah",
    content: `
      Mengatur prioritas adalah keterampilan penting yang harus dimiliki
      oleh mahasiswa untuk menghadapi berbagai tuntutan akademik dan
      kehidupan pribadi. Dalam keseharian yang penuh dengan tugas,
      ujian, dan kegiatan organisasi, kemampuan untuk menentukan apa
      yang penting dan mendesak sangat membantu mengelola waktu secara
      efektif. Salah satu cara yang bisa diterapkan adalah menggunakan
      Matriks Eisenhower untuk memisahkan tugas berdasarkan tingkat
      urgensi dan kepentingannya. Dengan fokus pada tugas penting dan
      mendesak terlebih dahulu, Anda dapat mengurangi tekanan serta
      menyelesaikan pekerjaan secara lebih efisien.
    `,
    additionalContent: `
      Selain itu, penting untuk membuat jadwal harian yang realistis dan
      memanfaatkan teknologi pendukung seperti Google Calendar atau
      Notion untuk mengorganisir kegiatan. Metode time blocking, yaitu
      mengalokasikan waktu khusus untuk setiap aktivitas, juga dapat
      membantu menghindari multitasking yang sering kali menurunkan
      produktivitas. Jangan lupa untuk memberikan ruang bagi istirahat
      dan kegiatan santai agar tetap seimbang. Mengelola prioritas
      dengan baik bukan hanya membantu meraih kesuksesan akademik,
      tetapi juga menjaga kesejahteraan mental selama menjalani
      kehidupan kuliah.
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

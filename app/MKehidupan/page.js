"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Quicksand } from "next/font/google";
import { Typography } from "@material-tailwind/react";
import latarKehidupan from "@/assets/img/bgmotivasi.png";
import partikel from "@/assets/img/kehidupan/vektor.png";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const quicksand = Quicksand({
  weight: "700",
  subsets: ["latin"],
});

function Page() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleNavArtikel1 = () => {
    router.push("MKehidupan/Artikel1");
  };
  const handleNavArtikel2 = () => {
    router.push("MKehidupan/Artikel2");
  };
  const handleNavArtikel3 = () => {
    router.push("MKehidupan/Artikel3");
  };

  const handleNavCerita1 = () => {
    router.push("MKehidupan/Cerita1");
  };
  const handleNavCerita2 = () => {
    router.push("MKehidupan/Cerita2");
  };

  return (
    <div
      className="w-full h-full flex justify-center items-center"
      style={{
        backgroundImage: `url(${latarKehidupan.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="w-full h-full justify-center items-center">
        <div className="w-full flex items-center text-start self-start p-4">
          <FaArrowAltCircleLeft
            onClick={handleBack}
            className="cursor-pointer mx-3 hover:scale-110 transition duration-300"
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
            Motivasi Kehidupan
          </Typography>
        </div>
        <div className="w-[80%] ml-40 flex text-start">
          <Typography className={`text-black text-2xl ${quicksand.className}`}>
            Jangan takut gagal, karena setiap langkah yang kamu ambil, baik itu
            kecil atau besar, adalah bagian dari perjalanan menuju sukses. Hidup
            ini tentang terus mencoba, belajar, dan menjadi lebih baik dari hari
            kemarin.
          </Typography>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full flex justify-center items-center">
            <div className="bg-gray-300 bg-opacity-45 p-8 w-[100%] h-[50%] ml-10 mt-10 rounded-xl">
              <Typography
                className={`text-black text-2xl mb-3 ${quicksand.className}`}
              >
                Ingin Membaca Artikel ?
              </Typography>
              <div className="w-[81%]">
                <Typography
                  onClick={handleNavArtikel1}
                  className={`text-blue-800 bg-gray-300 rounded-lg text-2xl underline cursor-pointer hover:text-blue-400 transition duration-300 ease-in-out mb-2 ${quicksand.className}`}
                >
                  Menemukan Kebahagiaan dalam Kesederhanaan
                </Typography>
              </div>
              <div className="w-[74%]">
                <Typography
                  onClick={handleNavArtikel2}
                  className={`text-blue-800 bg-gray-300 rounded-lg text-2xl underline cursor-pointer hover:text-blue-400 transition duration-300 ease-in-out mb-2 ${quicksand.className}`}
                >
                  Perubahan Kecil untuk Hidup Lebih Bermakna
                </Typography>
              </div>
              <div className="w-[86%]">
                <Typography
                  onClick={handleNavArtikel3}
                  className={`text-blue-800 text-2xl bg-gray-300 rounded-lg underline cursor-pointer hover:text-blue-400 transition duration-300 ease-in-out mb-5 ${quicksand.className}`}
                >
                  Menghadapi Tantangan Hidup dengan Kepala Tegak: Kekuatan dalam
                  Ketabahan
                </Typography>
              </div>
              <Typography
                className={`text-black text-2xl mb-3 ${quicksand.className}`}
              >
                Ingin Membaca Cerita Inspiratif ?
              </Typography>
              <div className="w-[76%]">
                <Typography
                  onClick={handleNavCerita1}
                  className={`text-blue-800 text-2xl bg-gray-300 rounded-lg hover:undereline underline cursor-pointer hover:text-blue-400 transition duration-300 ease-in-out mb-2 ${quicksand.className}`}
                >
                  Pelangi Setelah Hujan: Kisah Perjuangan Hidup
                </Typography>
              </div>
              <div className="w-[96%]">
                <Typography
                  onClick={handleNavCerita2}
                  className={`text-blue-800 text-2xl bg-gray-300 rounded-lg hover:undereline underline cursor-pointer hover:text-blue-400 transition duration-300 ease-in-out  ${quicksand.className}`}
                >
                  Kekuatan dalam Keterbatasan: Perjalanan Seorang Wanita yang
                  Menginspirasi
                </Typography>
              </div>
            </div>
          </div>
          <div className="justify-center pt-28 items-start flex w-[80%] h-full">
            <Image src={partikel} width={550} height={550} alt="partikel" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

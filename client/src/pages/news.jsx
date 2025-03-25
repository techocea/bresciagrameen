import React, { useState } from "react";
import { newsImages } from "../utils";
import { motion } from "framer-motion";

const News = () => {
  const ImageVariants = {
    hidden: { scale: 1 },
    visible: {
      scale: 0.9,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <section className="bg-dark-gray flex flex-col items-center justify-center gap-24 px-4 py-8 lg:p-16 lg:py-20">
      {/* 10th aniversary */}
      <div>
        <h1 className="text-3xl lg:text-4xl text-white pb-6">
          RASISE THE BAR - 10th Anniversary
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-around gap-10">
          {newsImages.anniversary.slice(6, 15).map((update, index) => (
            <div key={index}>
              <motion.img
                variants={ImageVariants}
                initial="hidden"
                whileHover="visible"
                src={update.source}
                alt={update.name}
                onClick={() => handleImageClick(update.source)}
                className="object-contain cursor-pointer"
              />
            </div>
          ))}
          {isModalOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
              onClick={handleCloseModal}
            >
              <span
                className="absolute top-4 right-4 text-white text-4xl cursor-pointer"
                onClick={handleCloseModal}
              >
                &times;
              </span>
              <img
                src={selectedImage}
                alt="Enlarged"
                className="max-w-full max-h-full"
              />
            </div>
          )}
        </div>
      </div>
      {/* 9th aniversary */}
      <div>
        <h1 className="text-3xl lg:text-4xl text-white pb-6">
          Brescia Grameen - 9th Anniversary
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-around gap-10">
          {newsImages.anniversary.slice(0, 5).map((update, index) => (
            <div key={index}>
              <motion.img
                variants={ImageVariants}
                initial="hidden"
                whileHover="visible"
                src={update.source}
                alt={update.name}
                onClick={() => handleImageClick(update.source)}
                className="object-contain cursor-pointer"
              />
            </div>
          ))}
          {isModalOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
              onClick={handleCloseModal}
            >
              <span
                className="absolute top-4 right-4 text-white text-4xl cursor-pointer"
                onClick={handleCloseModal}
              >
                &times;
              </span>
              <img
                src={selectedImage}
                alt="Enlarged"
                className="max-w-full max-h-full"
              />
            </div>
          )}
        </div>
      </div>

      {/* annual trip */}
      <div>
        <h1 className="text-3xl lg:text-4xl text-white pb-6">
          Brescia Grameen - Annual Staff Trip 2023
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center justify-around gap-10">
          {newsImages.trip.map((update, index) => (
            <div key={index}>
              <motion.img
                variants={ImageVariants}
                initial="hidden"
                whileHover="visible"
                src={update.source}
                alt={update.name}
                onClick={() => handleImageClick(update.source)}
                className="object-contain cursor-pointer"
              />
            </div>
          ))}
          {isModalOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
              onClick={handleCloseModal}
            >
              <span
                className="absolute top-4 right-4 text-white text-4xl cursor-pointer"
                onClick={handleCloseModal}
              >
                &times;
              </span>
              <img
                src={selectedImage}
                alt="Enlarged"
                className="max-w-full max-h-full"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default News;

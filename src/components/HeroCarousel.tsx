import { useEffect, useState } from "react";

import img1 from "../images/museo1.jpg"
import img2 from "../images/museo2.jpg";
import img3 from "../images/museo3.jpg";
import img4 from "../images/museo4.jpg";
import img5 from "../images/museo5.jpg";

const images = [img1, img2, img3, img4, img5];

export const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.wrapper}>
      <img src={images[index]} style={styles.image} />
    </div>
  );
};

const styles: any = {
  wrapper: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: "20px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 0.8s ease",
  },
};
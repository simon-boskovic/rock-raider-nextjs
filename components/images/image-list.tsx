import FsLightbox from "fslightbox-react";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function ImageList(props) {
  const imageLinks = props.imageLinks;
  const [toggler, setToggler] = useState(false);
  const [imageIndex, setImageIndex] = useState(null);

  return (
    <div>
      <ul className={styles["image-gallery"]}>
        {imageLinks?.map((image, index) => (
          <li key={index}>
            <Image
              loading="lazy"
              data-aos="fade-right"
              onClick={() => {
                setImageIndex(index);
                setToggler(!toggler);
              }}
              src={image.image}
              width={350}
              height={200}
              alt="Image"
            />
          </li>
        ))}
      </ul>

      <FsLightbox
        toggler={toggler}
        sourceIndex={imageIndex}
        sources={imageLinks.map((res) => res.image)}
      />
    </div>
  );
}

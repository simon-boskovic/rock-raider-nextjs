import FsLightbox from "fslightbox-react";
import { useState } from "react";
import styles from "@/styles/Home.module.css";

export default function ImageList(props) {
  const imageLinks = props.imageLinks;
  const [toggler, setToggler] = useState(false);
  const [imageIndex, setImageIndex] = useState(null);

  return (
    <div>
      <ul className={styles["image-gallery"]}>
        {imageLinks?.map((imageSrc, index) => (
          <li key={index}>
            <img
              data-aos="fade-right"
              onClick={() => {
                setImageIndex(index);
                setToggler(!toggler);
              }}
              src={imageSrc}
              alt="Image"
            />
          </li>
        ))}
      </ul>

      <FsLightbox
        toggler={toggler}
        sourceIndex={imageIndex}
        sources={imageLinks}
      />
    </div>
  );
}

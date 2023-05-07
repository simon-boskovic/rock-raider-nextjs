import styles from "@/styles/Home.module.css";
import ImageList from "@components/images/image-list";

export default function HomepageImages(props) {
  const imageLinks = props.imageLinks;
  return (
    <div className={styles["c-section-margin-top"]}>
      <h2 id="about" data-aos="fade-down">
        Fotky
      </h2>
      <div className={styles["c-section-image-gallery-wrapper"]}>
        <ImageList imageLinks={imageLinks} />
      </div>
    </div>
  );
}

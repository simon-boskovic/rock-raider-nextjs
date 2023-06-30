import styles from "@/styles/Home.module.css";

export default function Videos() {
  const videoPath1 = "videos/video1.mp4";
  return (
    <div className={styles["c-section-margin-top"]}>
      <h2 id="about" data-aos="fade-down">
        Videa
      </h2>
      <div className={styles["c-section-videos-wrapper"]}>
        <video controls loop style={{ width: "100%" }} data-aos="fade-down">
          <source src={videoPath1} />
        </video>
      </div>
    </div>
  );
}

import styles from "@/styles/Home.module.css";

export default function Videos() {
  const videoPath1 = "videos/video1.MOV";
  return (
    <div className={styles["c-section-margin-top"]}>
      <h2 id="about" data-aos="fade-down">
        Videa
      </h2>
      <div className={styles["c-section-videos-wrapper"]}>
        <div
          className={styles["c-video-container"]}
          data-aos="fade-down"
          data-aos-delay="150"
        >
          <iframe src="https://www.youtube.com/embed/Fu7Y-FW2op0"></iframe>
        </div>

        <video
          controls
          loop
          style={{ width: "100%" }}
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <source src={videoPath1} />
        </video>
      </div>
    </div>
  );
}

import styles from "@/styles/pages/homepage/info.module.css";
import Image from "next/image";

export default function Info(props) {
  const { networkImagesPaths } = props;

  return (
    <div className={styles["c-info-main-wrapper"]}>
      <div className={styles["info-contact"]}>
        <h3
          className={styles["c-info-header"]}
          id="contact"
          data-aos="fade-right"
        >
          Kontakt
        </h3>
        <div className={styles["c-info-date-reservation"]}>
          Rezervace termínů
        </div>
        <div>
          <strong>+420 603 852 160</strong>
        </div>
        <div>
          <strong>al.cala@seznam.cz</strong>
        </div>
      </div>
      <div className={styles["c-info-downloads"]}>
        <h3 className={styles["c-info-header"]} data-aos="fade-left">
          Ke stažení
        </h3>
        {/* <div>NO CONTENT YET</div> */}
      </div>
      <div className={styles["c-info-follow-us"]}>
        <h3
          className={styles["c-info-header"]}
          data-aos="fade-right"
          data-aos-offset="0"
        >
          Sledujte nás
        </h3>
        <div className={styles["c-info-follow-us-images"]}>
          {networkImagesPaths.map((path, index) => (
            <a key={index} className={styles["c-info-follow-us-image"]}>
              <Image
                data-aos="zoom-in"
                data-aos-offset="-100"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/rockraider.zlin",
                    "_blank"
                  )
                }
                src={path}
                style={{ cursor: "pointer" }}
                height={50}
                width={50}
                alt="Facebook link"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

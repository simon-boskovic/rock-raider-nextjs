import styles from "@/styles/layout/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["c-footer"]}>
      <div> Copyright © 2023 Raider Rock . Všechna práva vyhrazena.</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Developed by Sajmon
        <img
          style={{
            height: "40px",
            cursor: "pointer",
          }}
          loading="lazy"
          src={"/images/footer/links/linkedin.svg"}
          alt={"Creator linkedin link"}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/%C5%A1imon-bo%C5%A1kovi%C4%8D-469599183/",
              "_blank"
            )
          }
        />
      </div>
    </footer>
  );
}

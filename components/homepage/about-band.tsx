import styles from "@/styles/Home.module.css";

export default function AboutBand() {
  return (
    <div className={styles["c-section-margin-top"]}>
      <h2 id="about" data-aos="fade-down">
        O kapele
      </h2>
      <div className={styles["c-section-about-brand-wrapper"]}>
        <span>
          Jsme zábavová kapela na Zlínsku, která se specializuje na český
          repertoár. Hrajeme oblíbené skladby od tvrdého rocku po melodické
          songy pro širokou škálu posluchačů. S nadšením vystupujeme na
          zábavách, oslavách, plesech a svatbách, přinášejíce energickou a živou
          hudbu, která taneční parket rozproudí. Přijďte si s námi užít
          nezapomenutelné hudební zážitky.
        </span>
      </div>
    </div>
  );
}

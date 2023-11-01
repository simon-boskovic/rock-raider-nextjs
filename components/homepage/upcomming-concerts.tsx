import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function UpcommingConcerts(props) {
  const facebookIconpath = "images/homepage/links/facebook.svg";
  const { closestShows } = props;
  return (
    <div className={styles["c-concert-wrapper"]}>
      <h2 id="tour" data-aos="fade-down">
        Budoucí koncerty
      </h2>
      <span className={styles["c-soonest-dates"]}>
        {closestShows?.length ? (
          closestShows.map((show, index) => (
            <div key={index} className={styles["c-soonest-date"]}>
              <strong>{show.day + " " + show.date + " " + show.place}</strong>
              {show?.link && (
                <Image
                  onClick={() => window.open(show?.link, "_blank")}
                  src={facebookIconpath}
                  style={{ cursor: "pointer" }}
                  height={20}
                  width={20}
                  alt="Facebook link"
                />
              )}
            </div>
          ))
        ) : (
          <h3>V nejbližší době nejsou žádné koncerty</h3>
        )}
        <div className={styles["c-all-concert-btn-wrapper"]}>
          <Link href="/tour">
            <button className={styles["c-all-concert-btn"]}>
              <p>
                <strong>všechny koncerty</strong>
              </p>
            </button>
          </Link>
        </div>
      </span>
    </div>
  );
}

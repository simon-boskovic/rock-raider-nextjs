import styles from "@/styles/pages/tour/tour.module.css";
import fs from "fs/promises";
import Head from "next/head";
import Image from "next/image";
import path from "path";

export default function TourPage(props) {
  const { tour } = props;
  const facebookIconpath = "images/homepage/links/facebook.svg";

  return (
    <>
      <Head>
        <title>Koncerty Raider Rock </title>
        <meta name="description" content="Koncerty skupiny Raider Rock " />
      </Head>
      <section id="tour" className={styles["c-tour-wrapper"]}>
        <div>
          <h2>Koncerty</h2>
          <div className={styles["c-tour-info"]}>
            <span>
              Pro booking termínů pište na <strong>al.cala@seznam.cz </strong>
              nebo volejte <strong>+420 603 852 160</strong>
            </span>
          </div>
        </div>

        {Object.keys(tour).map((year) => {
          return tour[year].map((tourItem, index) => (
            <div key={index} className={styles["c-tour-items-wrapper"]}>
              <div>
                {tourItem.month === "Leden" && (
                  <div className={styles["c-tour-year"]}>
                    <h2>{year}</h2>
                  </div>
                )}

                <div className={styles["c-tour-month"]}>
                  <h3>{tourItem.month}</h3>
                </div>
                <div className={styles["c-tour-items"]}>
                  {!!tourItem.events?.length &&
                    tourItem.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className={styles["c-tour-item-wrapper"]}
                      >
                        <div className={styles["c-tour-item"]}>
                          <strong>{`${event.day} ${event.date} ${event.place}`}</strong>
                          <div>
                            <span>{`${event.description}`}</span>
                          </div>
                        </div>
                        {event?.link && (
                          <Image
                            onClick={() => window.open(event.link, "_blank")}
                            src={facebookIconpath}
                            style={{ cursor: "pointer" }}
                            height={20}
                            width={20}
                            alt="Facebook link"
                          />
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ));
        })}
      </section>
    </>
  );
}

export async function getStaticProps() {
  const translatedMonths = [
    "Leden",
    "Únor",
    "Březen",
    "Duben",
    "Květen",
    "Červen",
    "Červenec",
    "Srpen",
    "Září",
    "Říjen",
    "Listopad",
    "Prosinec",
  ];

  const pathToTours: string = path.join(
    process.cwd(),
    "data",
    "tour-data.json"
  );
  const file = JSON.parse(await fs.readFile(pathToTours, "utf-8"));
  const date = new Date();
  const currentMonthIndex = date.getMonth();

  const result = {};
  Object.keys(file).forEach((year) => {
    result[year] = [];
    Object.keys(file[year]).forEach((monthIndex) => {
      if (
        +monthIndex >= +currentMonthIndex ||
        file[year] !== date.getFullYear()
      ) {
        result[year].push({
          month: translatedMonths[monthIndex],
          events: file[year][monthIndex],
        });
      }
    });
  });
  return {
    props: {
      tour: result,
    },
  };
}

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
        {tour.map((tourItem, index) => (
          <div key={index} className={styles["c-tour-items-wrapper"]}>
            <div>
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
        ))}
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

  const currentMonthIndex = new Date().getMonth();

  const tmpArray: any[] = [];
  Object.keys(file).forEach((monthIndex, index) => {
    if (+monthIndex >= +currentMonthIndex) {
      tmpArray.push({
        month: translatedMonths[monthIndex],
        events: file[monthIndex],
      });
    }
  });

  return {
    props: {
      tour: tmpArray,
    },
  };
}

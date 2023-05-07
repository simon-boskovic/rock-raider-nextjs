import Head from "next/head";
import styles from "@/styles/Home.module.css";
import UpcommingConcerts from "@components/homepage/upcomming-concerts";
import AboutBand from "@components/homepage/about-band";
import BandMembers from "@components/homepage/band-members";
import Info from "@components/homepage/info";
import ImageSwiper from "@components/homepage/image-swiper";
import fs from "fs/promises";
import path from "path";
import Videos from "@components/homepage/videos";
import HomepageImages from "@components/homepage/homepage-images";

export default function Homepage(props) {
  const {
    swiperImagePaths,
    networkImagesPaths,
    closestShows,
    resolvedLightboxPaths,
  } = props;
  return (
    <>
      <Head>
        <title>Hudební skupina Raider Rock </title>
        <meta name="description" content="Hudební skupina Raider Rock" />
      </Head>
      <section className={styles["c-image-swiper"]} id="section1">
        <ImageSwiper swiperImagePaths={swiperImagePaths}></ImageSwiper>
      </section>
      <div className={styles["c-main-wrapper"]}>
        <section>
          <UpcommingConcerts closestShows={closestShows} />
        </section>
        <section>
          <AboutBand />
        </section>
        <section>
          <BandMembers />
        </section>
        <section>
          <HomepageImages imageLinks={resolvedLightboxPaths} />
        </section>
        <section>
          <Videos />
        </section>
        <section>
          <Info networkImagesPaths={networkImagesPaths}></Info>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const tourDataPath = path.join(process.cwd(), "data", "tour-data.json");

  const swiperImagesPath = path.join(
    process.cwd(),
    "public",
    "images",
    "homepage",
    "swiper"
  );

  const socialNetworkLinks = path.join(
    process.cwd(),
    "public",
    "images",
    "homepage",
    "links"
  );

  const lightboxImagesPath = path.join(
    process.cwd(),
    "public",
    "images",
    "homepage",
    "lightbox"
  );

  const resolvedLightboxPaths = await fs.readdir(lightboxImagesPath);

  const resolvedNetworkPaths = await fs.readdir(socialNetworkLinks);

  const resolvedImagesPaths = await fs.readdir(swiperImagesPath);

  const tourDataJson = await fs
    .readFile(tourDataPath, "utf-8")
    .then((res) => JSON.parse(res));

  const getClosesTourShows = (): any[] => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // add 1 to the month because it is zero-indexed
    const day = currentDate.getDate();
    const currentDateWithoutTimezone = `${year}-${month}-${day}`;

    const upcomingShows: any = [];

    const todayDate = new Date(currentDateWithoutTimezone).getTime();

    for (const month in tourDataJson) {
      for (const show of tourDataJson[month]) {
        const [day, monthStr, year] = show.date.split(".");
        const showDate = new Date(year, monthStr - 1, day).getTime();
        if (showDate >= todayDate) {
          upcomingShows.push({ date: showDate, ...show });
        }
      }
    }
    upcomingShows.sort((a, b) => a.date - b.date);
    return upcomingShows.slice(0, 4);
  };

  const closestShows = getClosesTourShows();

  return {
    props: {
      swiperImagePaths: resolvedImagesPaths.map(
        (res) => `/images/homepage/swiper/${res}`
      ),
      networkImagesPaths: resolvedNetworkPaths.map(
        (res) => `/images/homepage/links/${res}`
      ),
      resolvedLightboxPaths: resolvedLightboxPaths.map(
        (res) => `/images/homepage/lightbox/${res}`
      ),
      closestShows: closestShows,
    },
  };
}

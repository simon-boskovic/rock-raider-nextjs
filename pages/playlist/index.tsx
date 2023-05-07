import Head from "next/head";
import styles from "@/styles/pages/playlist/playlist.module.css";

export default function PlaylistPage(props) {
  return (
    <>
      <Head>
        <title>Playlist Raider Rock </title>
        <meta name="description" content="Playlist skupiny Raider Rock " />
      </Head>
      <section id="tour" className={styles["c-playlist-wrapper"]}>
        <h2>Playlist</h2>
        <div className={styles["c-song-list"]}>
          <ul>
            <li>Bruce Willis</li>
            <li>Díky já jdu dál</li>
            <li>Houby magický</li>
            <li>Já jsem Aleš</li>
            <li>Jsi můj anděl</li>
            <li>Cesta</li>
            <li>Magdaléna</li>
            <li>Pohoda</li>
            <li>Proč zrovna ty</li>
            <li>Síla starých vín</li>
            <li>Slunečný hrob</li>
            <li>Šaman</li>
            <li>V tu ránu</li>
            <li>Závislosti</li>
            <li>Černá růže</li>
            <li>Eldorádo</li>
            <li>Chameleon</li>
            <li>Jarošovský pivovar</li>
            <li>Jsi to jediný</li>
            <li>L.A.G. song</li>
            <li>Moderní děvče</li>
            <li>Poslední cigareta</li>
            <li>Přirození</li>
            <li>Slibuju, že nebudu pít</li>
            <li>Sraž nás na kolena</li>
            <li>Zatancuj si so mou</li>
            <li>Hledá se žena</li>
            <li>Slivovica</li>
            <li>Svařák</li>
            <li>Špinavý záda</li>
            <li>Zalubil sa chlapec</li>
            <li>Ženy</li>
            <li>Dej mi víc své lásky</li>
            <li>Až tady jednou s váma nebudu</li>
            <li>Hlupák váhá</li>
            <li>Chtěl jsem mít</li>
            <li>Jdi domů Ivane</li>
            <li>Krásným dívkám</li>
            <li>Lupič Willy</li>
            <li>Neříkej</li>
            <li>Pověste ho vejš</li>
            <li>S větrem v zádech</li>
            <li>Slnko stoj</li>
            <li>Svět jsou báry</li>
            <li>Tráva</li>
            <li>Žízeň</li>
            <li>Víš</li>
            <li>Thajská</li>
            <li>Zafúkané</li>
            <li>Princess</li>
            <br />
            ... a další
          </ul>
        </div>
      </section>
    </>
  );
}

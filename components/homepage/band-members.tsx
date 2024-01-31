import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function BandMembers() {
  const members = [
    {
      image: `/images/homepage/band-members/alois_cala.webp`,
      name: "Alois Čala",
      role: "basa, zpěv",
    },
    {
      image: `/images/homepage/band-members/petr_zerzan.webp`,
      name: "Petr Zerzan",
      role: "kytara",
    },
    {
      image: `/images/homepage/band-members/ondra_hudecek.webp`,
      name: "Ondra Hudeček",
      role: "bicí, zpěv",
    },
    {
      image: `/images/homepage/band-members/petr_svehlik.webp`,
      name: "Petr Švehlík",
      role: "klávesy, zpěv",
    },
    {
      image: `/images/homepage/band-members/petr_zavodsky.webp`,
      name: "Petr Závodský",
      role: "zvuk, zpěv",
    },
  ];

  return (
    <div className={styles["c-section-margin-top"]}>
      <h2 id="members" data-aos="fade-down">
        Členové
      </h2>
      <div
        data-aos="fade-right"
        className={styles["c-section-group-members-wrapper"]}
      >
        {members.map((member, index) => (
          <div key={index} className={styles["c-group-members"]}>
            <div className={styles["c-group-member-image"]}>
              <Image
                loading="lazy"
                src={member.image}
                height={150}
                width={150}
                alt={member.name}
              />
            </div>
            <div className={styles["c-group-member-name"]}>
              <strong> {member.name}</strong>
            </div>
            <div className={styles["c-group-member-role"]}>{member.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

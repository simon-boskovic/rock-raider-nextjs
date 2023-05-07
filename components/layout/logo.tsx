import Image from "next/image";

export default function Logo() {
  const imagePath = `/images/layout/header/band_logo.webp`;
  return (
    <div>
      <Image src={imagePath} alt="Logo" width={80} height={40}></Image>
    </div>
  );
}

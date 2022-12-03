import { Banner } from "../components/Banner";
import { Gallery } from "../components/Gallery";
import banner from "../assets/images/banner.webp";
import data from "../assets/logements.json";

export const Home = () => {
  return (
    <>
      <Banner
        src={banner}
        alt="Kasa Banner"
        text="Chez vous, partout et ailleurs"
      />
      <Gallery data={data} />
    </>
  );
};

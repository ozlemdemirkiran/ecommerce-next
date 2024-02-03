import HomeContainer from "../../components/HomeContainer";
import Banner from "../../components/Banner";
import Trending from "../../components/Trending";

export default function Home() {
  return (
    <>
    <div className="flex flex-col">
      <HomeContainer/>
      <Banner/>
      <Trending/>
    </div>
    </>
  );
}

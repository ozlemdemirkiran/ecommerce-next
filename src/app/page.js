import HomeContainer from "../../components/HomeContainer";
import Banner from "../../components/Banner";
import Trending from "../../components/Trending";

export default function Home() {
  return (
    <>
    <div style={{display:"flex", flexDirection: "column"}}>
      <div>Merhabaa Home</div>
      <HomeContainer/>
      <Banner/>
      <Trending/>
    </div>
    </>
  );
}

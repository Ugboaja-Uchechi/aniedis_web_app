import Header from "../components/Header";
import { ReactComponent as Arrow } from "../images/arrow.svg"
import aniedi from "../images/aniedi.png";
import speaking from "../images/aniedi_speaking.png";
import Testimonial from "../components/Testimonial";
import siderectangle from "../images/side_rectangle.svg";
import toprectangle from "../images/top_rectangle.svg";
import Alt from "../components/Alt";
import Articles from "../components/Articles";

const Home = () => {
  return (
    <>
      <Header />
      <main className="bg-[#1a1a1a] grid grid-cols-2 items-center px-inlinepadding py-12 google-image max-[660px]:grid-cols-1 max-[660px]:py-4">
        {/* grid then a flex for the 2nd div */}
        <div className="max-[660px]:order-2">
          <h1 className="text-white text-herotext font-syne max-[660px]:text-mobileHeroText max-[660px]:text-center">Empowering Innovation; Forging Success!</h1>
          <button className="uppercase text-[#f4f7fa] px-6 py-3 rounded-3xl border flex items-center text-[13px] mt-4 font-rubik tracking-wider max-[660px]:mx-auto">
            Check it out
            <Arrow className="ms-8" />
          </button>
        </div>
        <div className="justify-self-end max-[660px]:order-1">
          <img src={aniedi} alt="A face art of Aniedi Udo-Obong" className="h-[calc(11rem + 25vw)]" />
        </div>
      </main>
      <section className="bg-[#1a1a1a] px-exploreinline pt-20 flex items-center discover-container max-[660px]:flex-col">
        <div className="grid max-[660px]:order-2">
          <div className="col-[1/5] row-[2/4]">
            <img src={speaking} alt="Aniedi speaking at a conference" className="grayscale h-exploreimgheight w-exploreImage" />
          </div>
          <img src={siderectangle} alt="Rectangle with a rounded radius" className="col-[1/4] row-[3/5] z-[2] relative bottom-3.5 right-5 w-sideRectangle" />
          <img src={toprectangle} alt="Rectangle with a rounded radius" className="col-[4] row-[2/4] z-[2] relative bottom-2.5" />
        </div>

        <div className="w-exploreh2width ps-explorestart max-[660px]:order-1 max-[660px]:text-center">
          <h2 className="text-white text-exploreh2 leading-tight font-syne max-[660px]:text-mobileSize24">Peel back the layers and explore my world....</h2>
          <p className="font-normal font-rubik text-[#a8a8a8] text-large pt-4 max-[660px]:textmobileSize16">Aniedi Udo-Obong is a California-based Google Developer, Passionate about newbies, developers & startups.</p>
          <button className="uppercase text-white bg-[#030304] bg-opacity-50 border-white border border-opacity-50 px-6 py-3 rounded-3xl tracking-wide mt-4 text-discoverBtn font-rubik max-[660px]:order-3">Discover more about me</button>
        </div>
      </section>
      <Alt />
      <Testimonial />
      <Articles />
    </>

  );
};

export default Home
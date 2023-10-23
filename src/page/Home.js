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
      <main className="bg-[#1a1a1a] grid grid-cols-2 items-center px-16 pb-4 google-image">
        {/* grid then a flex for the 2nd div */}
        <div className="w-3/4">
          <h1 className="text-white text-[64px] font-bold">Done is better than perfect!</h1>
          <button className="uppercase text-[#f4f7fa] px-6 py-3 rounded-3xl border flex items-center text-[13px] mt-4">
            Check it out
            <Arrow className="ms-8" />
          </button>
        </div>
        <div className="justify-self-end">
          <img src={aniedi} alt="A face art of Aniedi Udo-Obong" />
        </div>
      </main>
      <section className="bg-[#1a1a1a] ps-24 pt-20 flex discover-container">
        <div className="grid">
          <div className="col-[1/5] row-[2/4]">
            <img src={speaking} alt="Aniedi speaking at a conference" className="grayscale" />
          </div>
          <img src={siderectangle} alt="Rectangle with a rounded radius" className="col-[1/4] row-[3/5] z-[2] relative bottom-3.5 right-[30px]" />
          <img src={toprectangle} alt="Rectangle with a rounded radius" className="col-[4] row-[2/4] z-[2] relative bottom-[15px] left-[70px]" />
        </div>

        <div className="w-[50%] ps-32 mt-16">
          <h2 className="text-white text-[56px] font-bold leading-tight">Peel back the layers and explore my world....</h2>
          <p className="font-normal text-[#a8a8a8] text-lg pt-4">Aniedi Udo-Obong is a California-based Google Developer, Passionate about newbies, developers & startups.</p>
          <button className="uppercase text-white bg-[#030304] bg-opacity-50 border-white border border-opacity-50 px-6 py-2 rounded-3xl tracking-wide mt-4">Discover more about me</button>
        </div>
      </section>
      <Alt />
      <Testimonial />
      <Articles />
    </>

  );
};

export default Home
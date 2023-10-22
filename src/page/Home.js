import Header from "../components/Header";
import { ReactComponent as Arrow } from "../images/arrow.svg"
import aniedi from "../images/aniedi.png"
import Testimonial from "../components/Testimonial";
import Alt from "../components/Alt";

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
      <Alt />
      <Testimonial />
    </>

  );
};

export default Home
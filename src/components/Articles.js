import MainImg from "../images/blog_img1.png";
import SideImg from "../images/blog_img2.png";
import SideImgTwo from "../images/blog_img3.png";
import { ReactComponent as Arrow } from "../images/arrow.svg"

const Articles = () => {
  return (
    <section className="bg-[#1a1a1a] pl-inlinepadding py-20 grid grid-cols-twoColumns justify-items-end article-container">
      <div>
        <h2 className="text-white font-extrabold text-exploreh2 mb-8 leading-none font-syne">Latest Blog Articles</h2>
        <img src={MainImg} alt="A man giving a speech at the eket tech event" className="h-articleMainImageHeight w-articleMainImageWidth" />
        <p className="mt-2 mb-1 font-normal text-white text-xtralarge font-rubik">Tech Events</p>
        <h4 className="text-white font-extrabold font-syne text-size40 mb-1">Eket Tech Day 2023</h4>
        <p className="font-normal text-white text-base opacity-60 font-rubik">29 June, 2023</p>
      </div>
      <div>
        <button className="uppercase font-rubik text-[#f4f7fa] px-6 py-3 rounded-3xl border flex items-center text-[13px] mb-btnBottom">
          Discover More
          <Arrow className="ms-4" />
        </button>
        <div>
          <img src={SideImg} alt="" className="w-articleSubImages" />
          <h5 className="text-white font-normal text-xtralarge font-rubik mt-4">Tech Talks</h5>
          <p className="text-white font-bold text-articleParagraph w-3/5 mb-2 font-syne leading-tight">Growing your Career in Technology</p>
          <p className="font-normal font-rubik text-white text-base opacity-60 mb-8">22 Sept, 2023</p>
        </div>
        <div>
          <img src={SideImgTwo} alt="" className="w-articleSubImages" />
          <h5 className="text-white font-normal text-xtralarge font-rubik mt-4">Stories</h5>
          <p className="text-white font-bold text-articleParagraph w-3/5 mb-2 font-syne leading-tight">Google Extended | North America</p>
          <p className="font-normal font-rubik text-white text-base opacity-60">21 Oct, 2021</p>
        </div>
      </div>
    </section>
  );
};

export default Articles;
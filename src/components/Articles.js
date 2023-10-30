import MainImg from "../images/blog_img1.png";
import SideImg from "../images/blog_img2.png";
import SideImgTwo from "../images/blog_img3.png";
import { ReactComponent as Arrow } from "../images/arrow.svg"

const Articles = () => {
  return (
    <section className="bg-[#1a1a1a] pl-inlinepadding py-20 article-container max-[660px]:px-mobileinlinepadding max-[660px]:py-12">
      <div className="grid grid-cols-twoColumns justify-items-end w-[95%]">
        <div>
          <h2 className="text-white font-extrabold text-exploreh2 mb-8 leading-none font-syne">Latest Blog Articles</h2>
        </div>
        <div className="max-[660px]:hidden">
          <button className="uppercase font-rubik text-[#f4f7fa] px-6 py-3 rounded-3xl border flex items-center text-[13px] mb-btnBottom">
            Discover More
            <Arrow className="ms-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-twoColumns justify-items-end max-[660px]:grid-cols-1">
        <div className="max-[660px]:order-2">
          {/* <h2 className="text-white font-extrabold text-exploreh2 mb-8 leading-none font-syne">Latest Blog Articles</h2> */}
          <img src={MainImg} alt="A man giving a speech at the eket tech event" className="h-articleMainImageHeight w-articleMainImageWidth max-[660px]:w-full max-[660px]:h-auto" />
          <p className="mt-2 mb-1 font-normal text-white text-xtralarge font-rubik max-[660px]:text-mobileSize16">Tech Events</p>
          <h4 className="text-white font-extrabold font-syne text-size40 mb-1 max-[660px]:text-mobileArticleText">Eket Tech Day 2023</h4>
          <p className="font-normal text-white text-base opacity-60 font-rubik">29 June, 2023</p>
        </div>
        <div className="max-[660px]:order-1 max-[660px]:w-full max-[660px]:mb-8">
          {/* <button className="uppercase font-rubik text-[#f4f7fa] px-6 py-3 rounded-3xl border flex items-center text-[13px] mb-btnBottom">
            Discover More
            <Arrow className="ms-4" />
          </button> */}
          <div>
            <img src={SideImg} alt="" className="w-articleSubImages max-[660px]:w-full" />
            <h5 className="text-white font-normal text-xtralarge font-rubik mt-4 max-[660px]:text-mobileSize16">Tech Talks</h5>
            <p className="text-white font-bold text-articleParagraph w-3/5 mb-2 font-syne leading-tight max-[660px]:text-mobileArticleText">Growing your Career in Technology</p>
            <p className="font-normal font-rubik text-white text-base opacity-60 mb-8">22 Sept, 2023</p>
          </div>
          <div>
            <img src={SideImgTwo} alt="" className="w-articleSubImages max-[660px]:w-full" />
            <h5 className="text-white font-normal text-xtralarge font-rubik mt-4 max-[660px]:text-mobileSize16">Stories</h5>
            <p className="text-white font-bold text-articleParagraph w-3/5 mb-2 font-syne leading-tight max-[660px]:text-mobileArticleText">Google Extended | North America</p>
            <p className="font-normal font-rubik text-white text-base opacity-60">21 Oct, 2021</p>
          </div>
        </div> 
      </div>

      <button className="uppercase font-rubik text-[#f4f7fa] px-6 py-3 rounded-3xl border items-center text-[13px] mb-btnBottom hidden max-[660px]:flex max-[660px]:mt-8">
        Discover More
        <Arrow className="ms-4" />
      </button>

    </section>
  );
};

export default Articles;
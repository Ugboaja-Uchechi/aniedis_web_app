import { ReactComponent as Quote } from "../images/quote.svg";

const Testimonial = () => {
  return (
    <section className="bg-[#1a1a1a] flex justify-between px-12 py-20 testimonial-container max-[660px]:px-mobileinlinepadding max-[660px]:flex-col max-[660px]:pt-12 max-[660px]:py-12">
      <div className="w-2/3 max-[660px]:w-full max-[660px]:order-2">
        <h2 className="font-bold font-syne text-white text-[56px] max-[660px]:text-mobileSize24 max-[660px]:text-center">Testimonial</h2>
        <p className="text-large text-[#949494] font-normal mt-6 font-rubik max-[660px]:text-mobileSize16 max-[660px]:text-center">“Working with Aniedi Google has been a game-changer for our team. He consistently demonstrated an extraordinary level of expertise, creativity, and dedication to our projects. His ability to solve complex problems and deliver innovative solutions is nothing short of remarkable. Aniedi played a pivotal role in enhancing the functionality and user experience of our products, making them more efficient and user-friendly. He is a true asset to any team, and his contributions have been invaluable in helping us achieve our goals. We look forward to continued collaboration and can't recommend Aniedi highly enough!”</p>
        <h5 className="font-bold font-syne text-white text-2xl mt-3 tracking-wide max-[660px]:text-mobileSize16 max-[660px]:text-center">
          -Geoffrey Jones
        </h5>
      </div>
      <div className="max-[660px]:order-1 max-[660px]:mb-4 max-[660px]:mx-auto">
        <Quote className="opacity-50 mt-16 w-quote max-[660px]:mt-0" />
      </div>
    </section>
  );
};

export default Testimonial;
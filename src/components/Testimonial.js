import { ReactComponent as Quote } from "../images/quote.svg";

const Testimonial = () => {
  return (
    <section className="bg-[#1a1a1a] flex justify-between px-12 py-20 testimonial-container">
      <div className="w-2/3">
        <h2 className="font-bold text-white text-[56px]">Testimonial</h2>
        <p className="text-large text-[#949494] font-normal mt-6">“Working with Aniedi Google has been a game-changer for our team. He consistently demonstrated an extraordinary level of expertise, creativity, and dedication to our projects. His ability to solve complex problems and deliver innovative solutions is nothing short of remarkable. Aniedi played a pivotal role in enhancing the functionality and user experience of our products, making them more efficient and user-friendly. He is a true asset to any team, and his contributions have been invaluable in helping us achieve our goals. We look forward to continued collaboration and can't recommend Aniedi highly enough!”</p>
        <h5 className="font-bold text-white text-2xl mt-3 tracking-wide">
          -Geoffrey Jones
        </h5>
      </div>
      <div>
        <Quote className="opacity-50 mt-16" />
      </div>
    </section>
  );
};

export default Testimonial;
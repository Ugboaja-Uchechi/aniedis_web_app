import Adept from "../images/adept_analyzer_img.png";
import Learner from "../images/lifelong_learner_img.png";
import TeamPlayer from "../images/team_player_img.png";

const Alt = () => {
  return (
    <section className="bg-[#1a1a1a] px-inlinepadding alt-container py-16 max-[660px]:px-mobileinlinepadding">
      <h2 className="text-white text-center font-bold font-syne pb-6 text-[56px]">&lt; alt &gt;</h2>
      <div className="grid grid-cols-threeColumns gap-[1.625rem]">
        <div className="grid justify-items-stretch">
          <img src={Adept} alt="" className="col-[1/1] row-[1/5]" />
          <p className="text-white py-4 rounded-lg w-[90%] bg-black bg-opacity-70 mx-auto text-center text-white font-bold text-size32 col-[1/1] row-[3/3] font-syne">Adept Analyzer</p>
        </div>
        <div className="grid justify-items-stretch">
          <img src={Learner} alt="" className="col-[1/1] row-[1/5]" />
          <p className="text-white py-4 rounded-lg w-[90%] bg-black bg-opacity-70 mx-auto text-center text-white font-bold text-size32 col-[1/1] row-[3/3] font-syne">Lifelong Learner</p>
        </div>
        <div className="grid justify-items-stretch grayscale">
          <img src={TeamPlayer} alt="" className="col-[1/1] row-[1/5]" />
          <p className="text-white py-4 rounded-lg w-[90%] bg-black bg-opacity-70 mx-auto text-center text-white font-bold text-size32 col-[1/1] row-[3/3] font-syne">Team Player</p>
        </div>
      </div>
    </section>
  );
};

export default Alt;
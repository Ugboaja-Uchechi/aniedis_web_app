const Alt = () => {
  return (
    <section className="bg-[#1a1a1a] px-16 alt-container">
      <h2 className="text-white text-center font-bold py-6 text-[56px]">&lt; alt &gt;</h2>
      <div className="grid grid-cols-3">
        <div className="bg-img1 py-48">
          <p className="text-white mt-24 py-4 rounded-lg w-2/3 bg-black bg-opacity-70 mx-auto text-center text-white font-bold text-[32px]">Adept Analyzer</p>
        </div>
        <div className="bg-img2 py-48">
          <p className="text-white mt-24 py-4 rounded-lg w-2/3 bg-black bg-opacity-70 mx-auto text-center text-white font-bold text-[32px]">Lifelong Learner</p>
        </div>
        <div className="bg-img3 py-48 grayscale">
          <p className="text-white mt-24 py-4 rounded-lg w-2/3 bg-black bg-opacity-70 mx-auto text-center text-white font-bold text-[32px]">Team Player</p>
        </div>
      </div>
    </section>
  );
};

export default Alt;
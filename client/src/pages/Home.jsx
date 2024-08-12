import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="grid grid-rows-2">
      <article className="flex justify-around items-center">
        <div className="w-[600px]">
          <h1 className="text-4xl">
            Books are the keys that unlock the doors of the mind.
          </h1>
        </div>
        <img
          className="w-[450px]"
          src="./public/img/mainbook.png"
          alt="main-book"
        />
      </article>
      <article>
        <Slider />
      </article>
    </div>
  );
};

export default Home;

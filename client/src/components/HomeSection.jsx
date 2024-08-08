const HomeSection = () => {
  return (
    <section className="flex justify-around items-center">
      <div className="w-[500px] ">
        <h1 className="text-4xl font-medium ">
          Books are the keys that unlock the doors of the mind.
        </h1>

        <button className="uppercase font-medium text-slate-100 mt-12 bg-green-400 rounded-md px-4 py-2">
          Order
        </button>
      </div>

      <img
        className="w-96"
        src="./public/img/AdobeStock_303445028.png"
        alt="book-photo"
      />
    </section>
  );
};

export default HomeSection;

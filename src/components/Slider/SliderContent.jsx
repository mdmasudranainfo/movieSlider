import { FaPlay } from "react-icons/fa";

const SliderContent = ({ movie }) => {
  return (
    <div>
      <div className="">
        <h1 className="uppercase md:text-[50px] text-[30px] font-bold">
          Coming Soon
        </h1>
        <h2 className="uppercase md:text-[40px] text-[30px] font-bold py-3">
          {movie?.name}
        </h2>
        <div className="flex justify-between py-5 border-y border-stone-500 text-lg">
          <div className="">
            <p>2019-Movie-2h 10m</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="bg-yellow-200 px-2 text-black font-bold rounded ">
              IMDh
            </p>
            <p>7.4</p>
          </div>
        </div>
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
          architecto pariatur deserunt. Modi mollitia a, tempore numquam velit
          culpa pariatur nam earum itaque magnam sed praesentium nostrum! Rem ut
          aliquid laudantium officia hic quibusdam quae delectus rerum quis
          culpa illo nihil quasi...
          <button className="text-yellow-300 mx-1">Read more</button>
        </p>
        <button className="flex items-center gap-1 bg-yellow-300 font-bold p-2 rounded mt-3 ">
          <FaPlay color="white" /> <span>Watch Now</span>
        </button>
      </div>
    </div>
  );
};

export default SliderContent;

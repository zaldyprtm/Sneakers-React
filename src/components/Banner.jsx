import "animate.css";

function Banner() {
  return (
    <>
      <div className="flex flex-wrap gap-6">
        <div
          className="w-80 h-36 mx-auto bg-stone-300 bg-no-repeat bg-contain rounded-lg bg-[200px] animate__animated animate__bounceIn"
          style={{ backgroundImage: `url(/collection1.png)` }}
        >
          <h1 className="font-poppins font-semibold p-3 m-3">Nike</h1>
          <p className="font-poppins m-3 p-3 font-semibold -mt-6">
            New collection 2024
          </p>
          <div className="p-3 m-3 -mt-6 animate__animated animate__bounceIn">
            <button className="p-2 bg-black text-white rounded-md text-center font-poppins font-semibold hover:bg-slate-400 hover:text-black transition-all wabease-in-out duration-300">
              Buy Now
            </button>
          </div>
        </div>
        <div
          className="w-80 h-36 mx-auto bg-stone-300 bg-no-repeat bg-contain rounded-lg bg-[180px] animate__animated animate__bounceIn"
          style={{ backgroundImage: `url(/collection2.png)` }}
        >
          <h1 className="font-poppins font-semibold p-3 m-3">Adidas</h1>
          <p className="font-poppins m-3 p-3 font-semibold -mt-6">
            New collection 2024
          </p>
          <div className="p-3 m-3 -mt-6 animate__animated animate__bounceIn">
            <button className="p-2 bg-black text-white rounded-md text-center font-poppins font-semibold hover:bg-slate-400 hover:text-black transition-all wabease-in-out duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;

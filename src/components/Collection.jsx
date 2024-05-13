import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NewCollect from "./NewCollect";

function Collection() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="flex flex-wrap mb-10">
        <div className="rounded-lg bg-stone-300 w-80 mx-auto mt-5">
        <img src="/new1.png" className="w-48 h-48 mx-auto hover:-rotate-12 transiton-all ease-in-out duration-300" />
        <h1 className="mt-3 p-2 font-poppins font-semibold text-2xl m-3">Men Shoes</h1>
        <p className=" p-2 m-3 -mt-3 font-poppins font-semibold">From IDR 500,000</p>
        <div className="p-2">
            <button className="font-poppins font-semibold text-center bg-sky-400 text-white rounded-md hover:bg-sky-300 transition-all ease-in-out duration-300 w-40 m-3 -mt-4 h-8">View Collection</button>
        </div>
        </div>
        {NewCollect.map((item) => (
          <div
            data-aos="zoom-out-down"
            key={item.id}
            className="bg-stone-200 rounded-lg mb-10 w-72 h-56 mx-auto mt-5 "
          >
            <img src={item.image} className="mx-auto hover:-rotate-12 transition-all ease-in-out duration-300"/>
            </div>
        ))}
      </div>
    </>
  );
}

export default Collection;

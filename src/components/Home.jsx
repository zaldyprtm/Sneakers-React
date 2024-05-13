import "animate.css";

function Home() {
  return (
    <>
      <div className="md:flex flex flex-wrap gap-20 justify-evenly mt-20  items-center">
        <div className="animate__animated animate__backInLeft">
          <h1 className="font-bold font-poppins">New in</h1>
          <p className="font-bold text-2xl font-poppins">
            YEEZY BOOST <br /> SPLY - 350
          </p>
          <div className="mt-2">
            <button className="bg-sky-500 text-white font-poppins font-semibold py-2 px-4 rounded-lg hover:bg-sky-300 transition-all ease-in-out duration-300">Get Now</button>
          </div>
        </div>
        <div className="animate__animated animate__backInRight mb-10">
          <img src="/home_img.png" className="w-80 h-80 hover:scale-110 transition-all ease-in-out  duration-300" />
        </div>
      </div>
    </>
  );
}

export default Home;

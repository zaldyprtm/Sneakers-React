import "animate.css";

function Diskon() {
  return (
    <>
      <div className="mb-20 mx-auto">
        <div
          style={{
            backgroundImage: `url(/offert.png)`,
            backgroundRepet: `no-repeat`,
          }}
          className="w-80 h-36 mx-auto bg-stone-300 bg-no-repeat bg-contain rounded-lg bg-[240px]"
        >
          <h1 className="font-poppins font-semibold text-2xl text-center p-3">
            50% OFF
          </h1>
          <p className="font-poppins font-semibold text-sm text-center -mt-3">
            In Adidas Superstar sneakers
          </p>

          <div className="mt-3 flex justify-center animated__animate animate__bounceIn">
            <button className="mx-auto p-3 bg-black text-white rounded-md text-center font-poppins font-semibold hover:bg-slate-400 hover:text-black transition-all wabease-in-out duration-300">
              Show Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Diskon;

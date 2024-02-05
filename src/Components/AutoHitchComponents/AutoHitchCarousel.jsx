import { Carousel } from "@material-tailwind/react";

function AutoHitchCarousel() {
  return (
    <>
      <Carousel
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-40 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src="./images/AutoEngine/engine1.jpg"
          alt="banner1"
          className="h-auto w-full object-cover lg:w-full lg:h-screen"
        />
        <img
          src="./images/AutoEngine/engine2.jpg"
          alt="banner2"
          className="h-auto w-full object-cover lg:h-screen"
        />
        <img
          src="./images/AutoEngine/engine3.jpg"
          alt="banner3"
          className="h-auto w-full object-cover lg:h-screen"
        />
      </Carousel>
      <div className="lg:absolute lg:top-56 mt-1 bg-blue-200 px-1 lg:mt-1 lg:left-20 lg:border lg:rounded-2xl lg:border-yellow-400 lg:py-40 border border-blue-700 rounded-lg py-5 mb-1 lg:bg-blue-400 lg:opacity-45 hover:opacity-70">
        <div className="text-3xl text-blue-900 lg:text-white font-bold text-center">
          Buscador de autos
        </div>
        <div className="flex flex-col p-2 py-6 m-h-screen">
          <div className="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-5 sticky">
            <div>
              <div className="p-2 mr-1 rounded-full hover:bg-gray-100 cursor-pointer">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <input
              className="font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
              type="text"
              placeholder="Buscar en"
            />

            <div className="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AutoHitchCarousel;

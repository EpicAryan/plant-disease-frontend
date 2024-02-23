import { potato1, potato2, bgland } from "../assets/index";
import { About } from "../section/About";
import AboutFacts from "../section/AboutFacts";

export default function Home() {
  return (
    <>
      <div className="w-full h-full relative pt-40 z-0">
        <div
          className="absolute top-0 right-0 bottom-[-10rem] left-0 bg-no-repeat "
          style={{
            backgroundImage: `url(${bgland})`,
            transform: "rotate(180deg)",
            backgroundSize: "90%",
          }}
        />
        <div className="w-full relative">
          <h1 className="flex justify-center text-txtColor font-bold text-8xl tracking-[0.36rem] z-30">
            Unleash Agriculture's Future
          </h1>

          <div className="mix-blend-luminosity w-1/2 grid justify-items-stretch mx-auto mt-14 z-20">
            <h3 className="justify-self-end flex flex-col text-black font-logo-bold font-2xl mr-24 mb-24">
              <span>Batata</span>
              <span>картофель</span>
              <span>Uralaikilangu</span>
            </h3>
            <h3 className="justify-self-start flex flex-col text-black font-logo-bold font-2xl mt-24">
              <span>Kartoffel</span>
              <span>Aardappel</span>
              <span>Pomme de terre</span>
            </h3>
          </div>

          <h1 className="flex justify-center text-txtColor font-logo-bold text-[18rem] mx-auto z-0">
            P<span>O</span>TAT<span>O</span>
          </h1>
          {/* Animate this */}
          <div className="absolute top-[-9rem] left-[-6rem] right-0 bottom-10 z-10">
            <div className=" flex relative justify-center">
              
                <img
                  src={potato1}
                  alt="potato1"
                  className=" w-[57rem] h-[57rem]  z-10 absolute left-1/4"
                />
             
                <img
                  src={potato2}
                  alt="potato2"
                  className=" w-[37rem] h-[37rem] absolute right-[30%] top-64"
                />
              
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full ">
        <About />
      </div>
      <div className="w-full h-full ">
        <AboutFacts />
      </div>
    </>
  );
}

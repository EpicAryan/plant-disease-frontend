import React from "react";
import { diseases1, diseases2, diseases3, bgland, bulkPotato, cblogo2 } from "../assets";
import {SVG1, SVG2} from '../component/SVGComponent';
export default function AboutFacts() {
  const svgData =[
    {id: 'svg1', text: 'The word "potato" comes from the Spanish word "patata," which comes from the Quechua word "papa."'},
    {id: 'svg2', text: 'The largest potato ever grown weighed over 14 pounds. It was grown in Idaho in 1975.'},
    { id: 'svg1', text: 'Potatoes were the first vegetable to be grown in space. In 1995, NASA and the University of Wisconsin-Madison grew potatoes on the Columbia space shuttle.' },
    { id: 'svg2', text: 'Potatoes are native to the Andes Mountains of South America. They were domesticated by the Incas around 8,000 years ago.' },
    { id: 'svg1', text: 'Potatoes are a good source of antioxidants. Antioxidants can help protect the body from damage caused by free radicals.' },
    { id: 'svg2', text: "The world's largest producer of potatoes is China, followed by Russia, Ukraine, and Belarus." }
  ];
  return (
    <>
      <div className="w-full h-screen flex mt-0 pb-20 relative">
      <div
          className="absolute top-[-64rem] left-0 bottom-10 right-0  bg-no-repeat "
          style={{
            backgroundImage: `url(${bgland})`,
            
            backgroundSize: "85%",
            zIndex: -1,
          }}
        />
        <div className="w-2/3 h-full flex flex-col items-center justify-center">
        
            {svgData.map(({id,text}) => (
            <React.Fragment key={id}>
              {id === 'svg1' ? (
                <div className="mr-40 mb-8">
                  <SVG1 id={id} text={text}/>
                </div>
                ):(
                <div className="ml-28">
                  <SVG2 id={id} text={text} />
                </div>  
              )}
            </React.Fragment>))}
            
          
          
        </div>
        <div className="w-1/3 h-full flex justify-center">
          <div className=" text-txtColor text-9xl font-logo-bold flex flex-col items-center justify-center pr-32">
            <p>Fun</p>
            <p>Facts</p>
            <p>About</p>
            <p>Potato</p>
          </div>
          
        </div>
      </div>

      {/* Potato Diseases Section */}

      <div className="w-full h-screen relative ">
        <div
          className="absolute top-0 right-0 bottom-[-14rem] left-0 bg-no-repeat "
          style={{
            backgroundImage: `url(${bgland})`,
            transform: "rotate(180deg)",
            backgroundSize: "85%",
            zIndex: -1,
          }}
        />
        <div className=" pt-20 z-10">
          <div className=" text-txtColor font-bold text-7xl text-center">
            <span className="">Potato </span>
            <span>Diseases Unveiled</span>
          </div>
          <div className=" text-txtColor font-medium text-2xl mt-20 mx-52">
            <p>
              Potatoes, vital to global agriculture, face the persistent threat
              of diseases such as late blight, early blight, bacterial wilt, and
              viral infections. Late blight, notorious for its historical impact
              on the Irish Potato Famine, remains a concern. Swift detection is
              key to preserving crop health and preventing yield losses. Our
              platform employs advanced technology to empower farmers with
              timely information, enabling proactive measures against these
              potato diseases and safeguarding the future of agriculture.
            </p>
          </div>
          <div className="flex justify-between text-center mt-20 mx-52 ">
            <div className="">
              <img src={diseases1} alt="img1" />
              <p className="p-2">Healthy</p>
            </div>
            <div>
              <img src={diseases2} alt="img2" />
              <p className="p-2">Early Blight</p>
            </div>
            <div>
              <img src={diseases3} alt="img3" />
              <p className="p-2">Late Blight</p>
            </div>
          </div>
        </div>
      </div>

      {/* Potato Diseases Preventation section */}
      <div className="w-full h-screen flex flex-col items-center">
          <div className="w-2/3">
            <h1 className="text-wrap text-txtColor font-logo-bold text-7xl">Here are some tips for preventing potato diseases :</h1>
          </div>
          <div className="w-3/4 h-2/3 relative mt-16 ">
            <div 
              className="w-[45rem] h-[36rem] rounded-3xl bg-white mx-auto mr-64 border-2 border-txtColor" 
              style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 75% 87%, 0 86%)"}}
            >
              <div className="text-wrap text-txtColor px-28 py-12 text-md font-semibold flex flex-col gap-4">
                <p>Potato rot diseases are caused by either bacteria or fungi that can spread to commercial potato fields. To prevent spread, avoid planting potatoes with any signs of damage, rot or decay. Avoid carrying soil around on infected plants, shoes, vehicles or garden tools.</p>
                <p>Keep the soil moist but not soggy. Don't plant potatoes and tomatoes near each other, as they are affected by the same diseases</p>
                <p>Store potatoes in a cool, dark place with good ventilation, like a pantry or unheated basement. The ideal temperature range is 45-50°F.</p>
                <p className="pl-40">Remove infected or diseased plants from the garden.</p>
              </div>

            </div>
            <div className=" absolute bottom-0 left-0 ml-20">
              <img src={bulkPotato} alt="potatoImg" className="w-[46rem] h-[25rem]"/>
            </div>
            <div className="absolute bottom-0 right-0 ">
              <img src={cblogo2} alt="cblogo2" className="w-64 h-64"/>
            </div>
          </div>
      </div>
    </>
  );
}

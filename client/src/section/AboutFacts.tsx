import React from "react";
import { diseases1, diseases2, diseases3, bgland } from "../assets";
import {SVG1, SVG2, SVG3} from '../component/SVGComponent';
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
            <h1 className="text-wrap text-txtColor text-7xl">Here are some tips for preventing potato diseases :</h1>
          </div>
          <div>
            <div>
              <SVG3 text='heholoe '/>
            </div>
            <div>

            </div>
          </div>
      </div>
    </>
  );
}

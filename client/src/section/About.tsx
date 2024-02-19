import { Link } from "react-router-dom"
import { about1, about2, about3 } from "../assets";

export const About = () => {
  return (
    <div className="">
        <div className="flex flex-col justify-center items-center text-txtColor font-logo-bold text-9xl leading-[0.7] mt-14">
            <h1 className="pe-2">About</h1>
            <h1 className="ps-52">Potato</h1>
        </div>
        <div className="flex">
            <div className="w-1/2 h-screen flex flex-col items-center mt-10">
                <div className="flex relative ">
                
                    <img src={about3} alt="img3" className="z-10"/>
                    <div className="w-[338px] h-[226px] border-2 border-txtHead absolute bottom-5 right-5"/>
                </div>
                <div className="flex">
                    <div className="flex relative">
                        <img src={about2} alt="img2" className="z-10"/>
                        <div className="w-[236px] h-[165px] border-2 border-txtHead absolute bottom-7 right-5"/>
                    </div>
                    <div className="flex relative" style={{ transform: 'translateY(75px)' }}>
                        <img src={about1} alt="img1" className="z-10" />
                        <div className="w-[268px] h-[180px] border-2 border-txtHead absolute bottom-5 right-5"/>
                    </div>
                    
                </div>
                
            </div>


            <div className="w-1/2 h-screen flex flex-col ">
                <div className="text-txtColor text-xl font-medium mr-28 mt-36">
                    The potato is a starchy tuber that is the fourth most important food crop in the world, after rice, wheat, and maize. Potatoes are a good source of carbohydrates, <br/>potassium, fiber, vitamin C, and antioxidants. They are also low in fat and cholesterol.<br />
                    <br/>
                    Potatoes are native to the Andes Mountains of South America, where they were domesticated by the Incas around 8,000 years ago. The potato was introduced to Europe in the 16th century, and it quickly became a staple food crop. Today, potatoes are grown all over the world, and they are used in a variety of dishes, including mashed potatoes, french fries, potato salad, and potato chips.
                </div>
                <div className="text-txtColor text-xl font-medium text-center mr-28 mt-12 pr-8 pl-6">
                    <h3 className="text-txtHead">Ready to Protect Your Potato Harvest?</h3>
                    <p>Explore our advanced disease detection platform and take control of your crop health. Boost yields, secure your harvest, and transform your farming experience.</p>
                </div>
                <div className="flex flex-col justify-center items-center mr-28 mt-10 gap-4">
                    <h3 className="text-txtColor text-xl font-medium ">Click below to get started!</h3>
                    <Link to="/diagnose">
                        <button className='text-white bg-btnColor border-btnColor text-2xl hover:bg-btnColor2 hover:font-semibold rounded-full w-60 h-16 '>Diagnose here</button>
                    </Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}

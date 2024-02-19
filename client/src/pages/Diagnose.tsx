import { potato1, potato2 } from "../assets/index";

export default function Diagnose() {
  return (
    <div className='bg-white flex relative justify-center'>
          <div className="z-10 absolute left-1/4">
             <img src={potato1} alt="potato1" className=" w-[927px] h-[927px] " />
          
          </div>
          <div  className="absolute right-1/4 top-64">
            <img src={potato2} alt="potato2" className=" w-[600px] h-[600px] " />
          </div>
            
    </div>
  )
}

import { useRef, useState } from "react";
import { dropIcon } from "../assets/index";
import { bgland } from "../assets/index";


const Diseases = () => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if(e.type === "dragenter" || e.type === "dragover"){
      setDragActive(true);
    }
    else if (e.type === "dragleave"){
      setDragActive(false);
    }
  }
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      console.log(e.dataTransfer.files);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files);
    }
  }

  const onFormClick = () => {
    inputRef.current?.click();
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative">
       <div
          className="absolute top-0 right-0 bottom-0 left-0 bg-no-repeat "
          style={{
            backgroundImage: `url(${bgland})`,
            transform: "rotate(180deg)",
            backgroundSize: "78%",
            backgroundPosition: "left 70%",
          }}
        />
      <form action="" onDragEnter={handleDrag}  onClick={onFormClick} onSubmit={(e) => e.preventDefault()}
        className="w-[69rem] h-[33rem] text-center relative"
      >
        <input ref={inputRef} type="file" multiple={true} onChange={handleChange} className="hidden"/>
        <label htmlFor="input-file-upload" className="h-full flex flex-col items-center justify-center border-4 rounded-2xl border-white cursor-pointer  shadow-2xl"
        style={{backgroundColor: "rgba(255, 255, 255, 0.1)"}}>

          <img src={dropIcon} alt="dropIcon" />
          <div className="text-txtHead">
            <button onClick={onButtonClick} className="cursor-pointer	p-1 outline-none bg-transparent font-bold text-3xl">Drag and drop or Click Here</button>
            <p>to upload your image ( max 2 MiB )</p>
          </div>

        </label>
        { dragActive && (
          <div className="absolute w-full h-full rounded-2xl top-0 right-0 bottom-0 left-0"
            onDragEnter={handleDrag} 
            onDragLeave={handleDrag} 
            onDragOver={handleDrag} 
            onDrop={handleDrop}>

          </div> )}
      </form>
      <div className="mt-8 text-lg">
        <span className="text-txtHead ">You can also provide</span>
        <span className="text-txtColor"> a link from the web</span> 
      </div>
    </div>
  )
}

export default Diseases
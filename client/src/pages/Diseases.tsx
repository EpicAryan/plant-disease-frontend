import { useRef, useState } from "react";
import { dropIcon } from "../assets/index";
import { bgland } from "../assets/index";

const Diseases = () => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageWidth, setImageWidth] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showSubmitButton, setShowSubmitButton] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePreview(reader.result as string);
          setShowSubmitButton(true);
        }
      };
      reader.readAsDataURL(file);
      console.log(e.dataTransfer.files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePreview(reader.result as string);
          setShowSubmitButton(true);
        }
      };
      reader.readAsDataURL(file);
      console.log(e.target.files);
    }
  };

  const onFormClick = () => {
    inputRef.current?.click();
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (containerRef.current && e.currentTarget) {
      const containerHeight = containerRef.current.clientHeight;
      const imageWidth = e.currentTarget.width;
      const imageHeight = e.currentTarget.height;
      const aspectRatio = imageWidth / imageHeight;

      setImageWidth(containerHeight * aspectRatio);
    }
  };

  const handleSubmit = () => {
    console.log("Submitted successfully");
    setImagePreview(null);
    setShowSubmitButton(false);
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
      <form
        action=""
        onDragEnter={handleDrag}
        onClick={onFormClick}
        onSubmit={(e) => e.preventDefault()}
        className="lg:w-[50rem] lg:h-[25rem] xl:w-[69rem] xl:h-[33rem] text-center relative"
      >
        <input
          ref={inputRef}
          type="file"
          multiple={true}
          onChange={handleChange}
          className="hidden"
        />
        <label
          htmlFor="input-file-upload"
          className="h-full flex flex-col items-center justify-center border-4 rounded-2xl border-white cursor-pointer "
          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)",
                  boxShadow: "inset 0 0 30px 15px rgba(255, 255, 255, 0.4), 10px 25px 30px -15px rgba(0, 0, 0, 0.5)", }}
        >
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Uploaded"
              onLoad={handleImageLoad}
              style={{  width: `${imageWidth}px`, maxHeight: "100%" }}
            />
          ) : (
            <>
              <img src={dropIcon} alt="dropIcon" className="lg:w-44 lg:h-44 xl:w-60 xl:h-60"/>

              <div>
                <button
                  onClick={onButtonClick}
                  className="cursor-pointer	p-1 outline-none bg-transparent font-logo-bold lg:text-2xl xl:text-3xl text-black opacity-30"
                  style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)" }}
                >
                    Drag and drop or Click Here
                </button>
                <p className="text-txtHead lg:text-sm xl:text-base opacity-80">
                  to upload your image ( max 2 MiB )
                </p>
              </div>
            </>
          )}
        </label>
        {dragActive && (
          <div
            className="absolute w-full h-full rounded-2xl top-0 right-0 bottom-0 left-0"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </form>
      {showSubmitButton && ( 
        <button onClick={handleSubmit} className="lg:w-36 xl:w-48 h-12 font-bold rounded-full flex items-center justify-center lg:text-xl xl:text-2xl mt-10 bg-txtColor text-white hover:cursor-pointer z-20">
          Submit
        </button>
      )}
      <div className="mt-8 lg:text-base xl:text-lg" style={{ display: imagePreview ? 'none' : 'block' }}>
        <span className="text-txtHead ">You can also provide</span>
        <span className="text-txtColor"> a link from the web</span>
      </div>
    </div>
  );
};

export default Diseases;

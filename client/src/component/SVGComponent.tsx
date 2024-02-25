import React from 'react';

interface SVGWithTextProps {
  id: string;
  text: string;
}

export const SVG1: React.FC<SVGWithTextProps> = ({id, text}) => {
    return (
      <svg
        id={id}
        width="681"
        height="130"
        viewBox="0 0 681 149"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M680.265 98.5C680.265 126.114 657.879 148.5 630.265 148.5L55.1082 148.5C27.494 148.5 5.10815 126.114 5.10815 98.5V28.4711C5.10815 25.8771 4.37152 23.3365 2.98395 21.1448C-3.95215 10.1889 6.80573 -3.37634 19.0536 0.881622L81.1456 22.4678C85.0151 23.8131 89.0829 24.5 93.1796 24.5L630.265 24.5C657.879 24.5 680.265 46.8858 680.265 74.5V98.5Z"
          fill="#FDF5E6"
        />
        <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fill="#3F392D" fontSize="18" className="whitespace-pre-line">
          {text}
        </text>
      </svg>
    );
  };

export const SVG2: React.FC<SVGWithTextProps> = ({id, text}) => {
  return (
    <svg
      id={id}
      width="680"
      height="130"
      viewBox="0 0 680 149"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.0147705 50C0.0147705 22.3858 22.4005 0 50.0148 0L625.172 0C652.786 0 675.172 22.3858 675.172 50V120.029C675.172 122.623 675.908 125.164 677.296 127.355C684.232 138.311 673.474 151.876 661.226 147.618L599.134 126.032C595.265 124.687 591.197 124 587.1 124H50.0148C22.4006 124 0.0147705 101.614 0.0147705 74V50Z"
        fill="#867450"
      />
      <text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="18"   className="text-wrap" style={{ whiteSpace: 'pre-wrap' }}>
        
        {text}
      </text>
    </svg>
  );
};





export default { SVG1, SVG2};

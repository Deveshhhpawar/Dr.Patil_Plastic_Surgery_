import React from "react";
import wideImage from "@/assets/Wide image.jpg";

const Image: React.FC = () => {
  return (
    <div className="w-full overflow-hidden mt-6 mb-6"> {/* Added spacing */}
      <img src={wideImage} alt="Wide view" className="w-full object-cover" />
    </div>
  );
};

export default Image;

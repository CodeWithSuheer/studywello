import React from 'react';
// images
import img1 from "../assets/profilesImages/img1.jpg";
import img2 from "../assets/profilesImages/img2.jpg";
import img3 from "../assets/profilesImages/img3.jpg";
import img4 from "../assets/profilesImages/img4.jpg";

const ExpertsAvailable = () => {
  const experts = [
    img1, img2, img3, img4
  ];

  return (
    <div className="mt-4 bg-background py-4">
      <div className="flex items-center space-x-2">
        <div className="flex -space-x-3">
          {experts.map((expert, index) => (
            <div key={index} className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-background">
              <img
                src={expert}
                alt={`Expert ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="relative w-10 h-10 bg-primary bg-[#1A73E8] rounded-full border-2 border-background flex items-center justify-center text-primary-foreground text-sm font-semibold">
            +96
          </div>
        </div>
        <span className="text-lg font-semibold text-foreground">125+ Experts Available</span>
      </div>
    </div>
  );
};

export default ExpertsAvailable;
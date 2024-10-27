import React from 'react';

const ExpertsAvailable = () => {
  const experts = [
    'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?t=st=1730048054~exp=1730051654~hmac=70caead1fe056f96c258529ff2b9d7e4f6edef59009a30a44b5c0ebd62cd9c4d&w=740',
    'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1730048092~exp=1730051692~hmac=c7a1eb31c41079ec34fd4897e9eeb2d771af84d697ecf72bea71bf0a8c9013de&w=740',
    'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?t=st=1730048114~exp=1730051714~hmac=1852360dd7dc7995d9c8b57611c9dc9a91cfb70c3f4a4bbc0be80020f61e44ae&w=740',
    'https://img.freepik.com/free-psd/3d-illustration-business-man-with-glasses_23-2149436194.jpg?t=st=1730048152~exp=1730051752~hmac=9e361741be8b7beff419d196e43f4986837c6bad029949eddb95a65a9f984182&w=740',
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
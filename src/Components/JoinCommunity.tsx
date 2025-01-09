"use client";

const JoinCommunity = () => {
  const imageCollections = [
    {
      name: "Sunset Beach",
      image: "/Screenshot 2025-01-06 151812.png",
    },
    {
      name: "Mountain View",
      image: "/2.png",
    },
    {
      name: "City Lights",
      image: "/Screenshot 2025-01-06 151837.png",
    },
    {
      name: "Forest Trail",
      image: "/Screenshot 2025-01-06 151916.png",
    },
    {
      name: "Desert Dunes",
      image: "/Screenshot 2025-01-06 151933.png",
    },
    {
      name: "Ocean Waves",
      image: "/6.png",
    },
  ];

  return (
    <div className="w-full bg-neutral-900 text-white py-16">
      <div className="text-center max-w-3xl mx-auto mb-12 px-4">
        <h1 className="text-4xl font-bold mb-6 flex items-center justify-center space-x-2">
          <span>Join the Growing Community of Coaches</span>
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed mb-6">
          FitnEarnPal is your gateway to connect with a global community of
          health and fitness enthusiasts, share experiences and valuable
          knowledge, and grow your audience. As a coach, you have the power to
          inspire, educate, and motivate users worldwide by creating and sharing
          impactful content, workout videos, conducting live sessions, and much
          more.
        </p>

        <button className="px-6 py-2 rounded-lg text-white font-semibold bg-custom-gradient2 hover:from-pink-600 hover:to-orange-600 relative z-10">
          Join Now
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {imageCollections.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-96 rounded-2xl overflow-hidden transition-transform duration-300 ease-in-out hover:translate-y-[-10px]"
          >
            <img
              className="w-full h-full object-cover opacity-60 bg-gray-900 filter grayscale hover:filter-none transition-all duration-300 ease-in-out"
              src={item.image}
              alt={item.name}
            />
            <div className="absolute bottom-0 left-0 w-full text-center bg-black text-white text-lg font-bold py-3 z-10">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinCommunity;

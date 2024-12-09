// import React, { useState } from "react";

// const BuildingAge = () => {
//   const [images, setImages] = useState([]);
//   const [previewImages, setPreviewImages] = useState([]);

//   // Function to handle image selection
//   const handleImageChange = (event) => {
//     const files = event.target.files;
//     if (files) {
//       const fileArray = Array.from(files);
//       setImages([...images, ...fileArray]);

//       // Generate image previews
//       const previewArray = fileArray.map((file) => URL.createObjectURL(file));
//       setPreviewImages([...previewImages, ...previewArray]);
//     }
//   };

//   // Function to handle form submission
//   const handleGenerate = async () => {
//     if (images.length === 0) {
//       alert("Please upload at least one image.");
//       return;
//     }

//     const formData = new FormData();
//     images.forEach((image, index) => {
//       formData.append(`image_${index}`, image);
//     });

//     try {
//       const response = await fetch("YOUR_BACKEND_ENDPOINT", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         alert("Images uploaded successfully!");
//       } else {
//         alert("Failed to upload images.");
//       }
//     } catch (error) {
//       console.error("Error uploading images:", error);
//       alert("Error occurred while uploading images.");
//     }
//   };

//   return (
//     <div className="p-4 bg-[#00bbf1] w-full space-y-4 rounded-md text-white">
//         <h1 className="text-4xl text-white p-2 font-bold">Building Age </h1>
//       <div className="flex gap-4  items-center ">
//         <input 
//           type="file" 
//           accept="image/*" 
//           multiple 
//           onChange={handleImageChange} 
//           className="mb-4 p-2 border border-gray-300 rounded-md"
//         />
//         <h2 className="text-2xl font-semibold mb-4">Upload Images</h2>
//       </div>
  
//   <div className="flex flex-wrap gap-4 mt-4">
//     {previewImages.map((src, index) => (
//       <div key={index} className="w-1/3 sm:w-1/4 lg:w-1/5 p-2">
//         <img
//           src={src}
//           alt={`Preview ${index}`}
//           className="h-[200px] w-[200px] object-cover rounded-md"
//         />
//       </div>
//     ))}
//   </div>
  
//   <button 
//     onClick={handleGenerate} 
//     className="mt-4 p-4 bg-[#0f4b8a] text-white text-xl rounded-xl hover:bg-gray-800 transition"
//   >
//     Generate
//   </button>
// </div>

//   );
// };

// export default BuildingAge;

import React, { useState } from "react";

const BuildingAge = () => {
  const [selectedImage, setSelectedImage] = useState(null); // For storing the uploaded image
  const [predictedValue, setPredictedValue] = useState(""); // For storing the predicted value

  // Handle image upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Set preview of the uploaded image
    }
  };

  // Handle prediction (mocked for this example)
  const handlePrediction = () => {
    if (!selectedImage) {
      alert("Please upload an image before predicting.");
      return;
    }
    // Simulating a prediction value
    const mockPrediction = "240 / 500";
    setPredictedValue(mockPrediction);
  };

  return (
    <div className="p-4  mx-full rounded-md bg-[#00bbf1] shadow-lg">
      <h1 className="text-3xl font-bold text-start text-white mb-6 ">Building's Age</h1>
      {/* Upload button and preview */}
      <div className="flex items-start justify-start gap-2 mb-6 relative">
          <label
            className="w-32 h-32 flex items-center justify-center border-2 border-dashed rounded-md cursor-pointer relative group"
          >
            
          </label>
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Uploaded preview"
            className="w-32 h-32 object-cover rounded-md border border-dashed"
          />
        ) : (
          <label
            htmlFor="upload"
            className="w-32 h-32 flex items-center justify-center border-2 border-dashed rounded-md cursor-pointer relative group"
          >
            <span className="text-3xl font-bold text-white">+</span>
            {/* Tooltip */}
            <span className="absolute bottom-[-30px] bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              Upload Image
            </span>
          </label>
        )}
        <input
          id="upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>

      {/* Predict button */}
      <div className="flex justify-start gap-4 mb-6">
        <button
          onClick={handlePrediction}
          className="bg-black text-white  px-4 py-2 rounded-md shadow hover:bg-[#0f4b8a] "
        >
          Predict
        </button>
        <div className="text-lg font-semibold bg-gray-100 px-4 py-2 rounded-md shadow">
          {predictedValue || "Predicted Value"}
        </div>
      </div>

      {/* Predicted value */}
      <div className="flex justify-start">
        
      </div>
    </div>
  );
};

export default BuildingAge;
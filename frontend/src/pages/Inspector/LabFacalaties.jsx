// import React, { useState } from "react";

// const LabFacalaties = () => {
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
//     <div className="p-4 bg-[#0f4b8a] w-full space-y-4 rounded-md text-white">
//         <h1 className="text-4xl text-white p-2 font-bold">Lab Facilities </h1>
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
//     className="mt-4 p-4 bg-[#00bbf1] text-white text-xl rounded-xl hover:bg-gray-800 transition"
//   >
//     Generate
//   </button>
// </div>

//   );
// };

// export default LabFacalaties;
import React, { useState } from "react";

const LabFacilities = () => {
  const [selectedImages, setSelectedImages] = useState([]); // For storing uploaded images
  const [predictedValues, setPredictedValues] = useState([]); // For storing prediction values
  const [averagePrediction, setAveragePrediction] = useState(null); // Average prediction value

  // Handle image upload
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length + selectedImages.length > 5) {
      alert("You can only upload a maximum of 5 images.");
      return;
    }
    const previewImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setSelectedImages((prev) => [...prev, ...previewImages]);
  };

  // Clean up preview URLs to avoid memory leaks
  React.useEffect(() => {
    return () => {
      selectedImages.forEach((image) => URL.revokeObjectURL(image.preview));
    };
  }, [selectedImages]);

  // Handle prediction
  const handlePrediction = async () => {
    if (selectedImages.length !== 5) {
      alert("Please upload exactly 5 images before predicting.");
      return;
    }

    const formData = new FormData();
    selectedImages.forEach((image, index) => {
      formData.append(`image_${index}`, image.file);
    });

    try {
      // Replace this URL with your actual backend endpoint
      const response = await fetch("YOUR_BACKEND_ENDPOINT", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const predictionResults = await response.json(); // Assuming backend returns an array of predictions
        setPredictedValues(predictionResults);

        // Calculate the average prediction
        const average = (
          predictionResults.reduce((sum, val) => sum + val, 0) / predictionResults.length
        ).toFixed(2);
        setAveragePrediction(average);
      } else {
        alert("Failed to get predictions from the server.");
      }
    } catch (error) {
      console.error("Error predicting values:", error);
      alert("An error occurred while predicting.");
    }
  };

  return (
    <div className="p-4 w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Lab Facilities</h1>

      {/* Upload button and previews */}
      <div className="mb-6">
        <label
          htmlFor="upload"
          className="w-full flex flex-col items-center justify-center border-2 border-dashed rounded-md p-4 cursor-pointer"
        >
          <span className="text-lg font-bold text-gray-500">
            {selectedImages.length < 5
              ? `Upload Images (${selectedImages.length}/5)`
              : "Maximum Images Uploaded"}
          </span>
          <input
            id="upload"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="hidden"
            disabled={selectedImages.length >= 5}
          />
        </label>
      </div>

      {/* Image Previews */}
      <div className="flex flex-wrap gap-4 mb-6">
        {selectedImages.map((image, index) => (
          <div key={index} className="w-24 h-24">
            <img
              src={image.preview}
              alt={`Preview ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>

      {/* Predict button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={handlePrediction}
          className=" disabled:bg-gray-400 bg-black text-white  px-4 py-2 rounded-md shadow hover:bg-[#0f4b8a] 
          "
          disabled={selectedImages.length !== 5}
        >
          Predict
        </button>
      </div>

      {/* Predictions and Average */}
      {predictedValues.length > 0 && (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Predicted Values:</h2>
          <ul className="mb-4">
            {predictedValues.map((value, index) => (
              <li key={index} className="text-lg">
                Image {index + 1}: {value} / 500
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-bold">
            Average Prediction: {averagePrediction} / 500
          </h3>
        </div>
      )}
    </div>
  );
};

export default LabFacilities;



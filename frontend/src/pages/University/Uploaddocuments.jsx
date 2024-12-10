// import React, { useState, useRef } from 'react';
// import { Upload, FileText, Image, Clock, Building, X } from 'lucide-react';
// import { FaFlask } from 'react-icons/fa';

// const Uploaddocuments = () => {
//   // State for each model's specific uploads and results
//   const [staticDataModel, setStaticDataModel] = useState({
//     uploadedFiles: [],
//     results: null,
//   });

//   const [infrastructureAgeModel, setInfrastructureAgeModel] = useState({
//     uploadedFiles: [],
//     predictedAge: null,
//     remainingLifespan: null,
//   });

//   const [infrastructureImageModel, setInfrastructureImageModel] = useState({
//     uploadedImages: [],
//     infraConditions: [],
//   });

//   const [labFacilitiesModel, setLabFacilitiesModel] = useState({
//     uploadedFiles: [],
//     results: null,
//   });

//   // Ref for file inputs
//   const staticDataFileRef = useRef(null);
//   const infrastructureAgeFileRef = useRef(null);
//   const infrastructureImageFileRef = useRef(null);
//   const labFacilitiesFileRef = useRef(null);

//   // Generic file upload handler
//   const handleFileUpload = (modelSetter, event) => {
//     const files = Array.from(event.target.files);
//     modelSetter((prev) => ({
//       ...prev,
//       uploadedFiles: [...prev.uploadedFiles, ...files],
//     }));
//   };

//   // Image upload handler for image-based model
//   const handleImageUpload = (event) => {
//     const files = Array.from(event.target.files);
//     setInfrastructureImageModel((prev) => ({
//       ...prev,
//       uploadedImages: [...prev.uploadedImages, ...files],
//     }));
//   };

//   // Remove file handler
//   const removeFile = (modelSetter, index) => {
//     modelSetter((prev) => ({
//       ...prev,
//       uploadedFiles: prev.uploadedFiles.filter((_, i) => i !== index),
//     }));
//   };

//   // Simulation of API calls for each model
//   const runStaticDataModel = async () => {
//     if (staticDataModel.uploadedFiles.length === 0) {
//       alert('Please upload a file first.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', staticDataModel.uploadedFiles[0]);

//     try {
//       const response = await fetch('http://localhost:3000/api/static-data-model', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Failed to analyze static data');
//       }

//       const result = await response.json();
//       setStaticDataModel((prev) => ({
//         ...prev,
//         results: result,
//       }));
//     } catch (error) {
//       alert('Error: ' + error.message);
//     }
//   };

//   const runInfrastructureAgeModel = async () => {
//     if (infrastructureAgeModel.uploadedFiles.length === 0) {
//       alert('Please upload a file first.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', infrastructureAgeModel.uploadedFiles[0]);

//     try {
//       const response = await fetch('http://localhost:3000/api/infrastructure-age-model', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Failed to predict infrastructure age');
//       }

//       const result = await response.json();
//       setInfrastructureAgeModel((prev) => ({
//         ...prev,
//         predictedAge: result.predictedAge,
//         remainingLifespan: result.remainingLifespan,
//       }));
//     } catch (error) {
//       alert('Error: ' + error.message);
//     }
//   };

//   const runInfrastructureImageModel = async () => {
//     if (infrastructureImageModel.uploadedImages.length === 0) {
//       alert('Please upload an image first.');
//       return;
//     }

//     const formData = new FormData();
//     infrastructureImageModel.uploadedImages.forEach((image) =>
//       formData.append('images', image)
//     );

//     try {
//       const response = await fetch('http://localhost:3000/api/infrastructure-image-model', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Failed to analyze infrastructure images');
//       }

//       const result = await response.json();
//       setInfrastructureImageModel((prev) => ({
//         ...prev,
//         infraConditions: result.results.map((res) => res.condition),
//       }));
//     } catch (error) {
//       alert('Error: ' + error.message);
//     }
//   };

//   const runLabFacilitiesModel = async () => {
//     if (labFacilitiesModel.uploadedFiles.length === 0) {
//       alert('Please upload a file first.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', labFacilitiesModel.uploadedFiles[0]);

//     try {
//       const response = await fetch('http://localhost:3000/api/lab-facilities-model', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Failed to analyze lab facilities');
//       }

//       const result = await response.json();
//       setLabFacilitiesModel((prev) => ({
//         ...prev,
//         results: result,
//       }));
//     } catch (error) {
//       alert('Error: ' + error.message);
//     }
//   };

//   // File upload section component with Tailwind styling
//   const FileUploadSection = ({ files, fileRef, onUpload, onRemove, title, icon: Icon }) => (
//     <div className="bg-white p-4 rounded-lg shadow-md mb-4">
//       <h3 className="text-lg font-semibold mb-3">{title}</h3>
//       <input
//         type="file"
//         ref={fileRef}
//         onChange={onUpload}
//         className="hidden"
//         multiple
//       />
//       <button 
//         onClick={() => fileRef.current.click()} 
//         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center mb-3"
//       >
//         <Icon className="mr-2" /> Upload Documents
//       </button>
//       {files.length > 0 && (
//         <div className="space-y-2">
//           {files.map((file, index) => (
//             <div 
//               key={index} 
//               className="flex items-center justify-between bg-gray-100 p-2 rounded-md"
//             >
//               <div className="flex items-center">
//                 <FileText className="mr-2 text-gray-600" />
//                 <span className="truncate max-w-[200px]">{file.name}</span>
//               </div>
//               <button 
//                 onClick={() => onRemove(index)} 
//                 className="text-red-500 hover:text-red-700"
//               >
//                 <X />
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
//         University Infrastructure Multi-Model Analysis
//       </h1>

//       {/* Static Data Model */}
//       <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
//         <h2 className="text-2xl font-semibold mb-4 flex items-center">
//           <Building className="mr-3 text-blue-500" /> 
//           Static Data Infrastructure Model
//         </h2>
//         <FileUploadSection
//           files={staticDataModel.uploadedFiles}
//           fileRef={staticDataFileRef}
//           onUpload={(e) => handleFileUpload(setStaticDataModel, e)}
//           onRemove={(index) => removeFile(setStaticDataModel, index)}
//           title="Static Data Upload"
//           icon={FileText}
//         />
//         <button 
//           onClick={runStaticDataModel} 
//           className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
//         >
//           Analyze Static Data
//         </button>
//         {staticDataModel.results && (
//           <div className="mt-4 p-4 bg-gray-100 rounded-md">
//             <p className="mb-2">Complexity: {staticDataModel.results.complexity}</p>
//             <p>Recommendation: {staticDataModel.results.recommendation}</p>
//           </div>
//         )}
//       </div>

//       {/* Infrastructure Age Model */}
//       <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
//         <h2 className="text-2xl font-semibold mb-4 flex items-center">
//           <Clock className="mr-3 text-blue-500" /> 
//           Infrastructure Age Prediction Model
//         </h2>
//         <FileUploadSection 
//           files={infrastructureAgeModel.uploadedFiles}
//           fileRef={infrastructureAgeFileRef}
//           onUpload={(e) => handleFileUpload(setInfrastructureAgeModel, e)}
//           onRemove={(index) => removeFile(setInfrastructureAgeModel, index)}
//           title="Age Prediction Data Upload"
//           icon={FileText}
//         />
//         <button 
//           onClick={runInfrastructureAgeModel}
//           className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
//         >
//           Predict Infrastructure Age
//         </button>
//         {infrastructureAgeModel.predictedAge && (
//           <div className="mt-4 p-4 bg-gray-100 rounded-md">
//             <p className="mb-2">Predicted Age: {infrastructureAgeModel.predictedAge} years</p>
//             <p>Remaining Lifespan: {infrastructureAgeModel.remainingLifespan} years</p>
//           </div>
//         )}
//       </div>

//       {/* Infrastructure Image Model */}
//       <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
//         <h2 className="text-2xl font-semibold mb-4 flex items-center">
//           <Image className="mr-3 text-blue-500" />
//           Infrastructure Image Condition Model
//         </h2>
//         <input
//           type="file"
//           ref={infrastructureImageFileRef}
//           onChange={handleImageUpload}
//           accept="image/*"
//           multiple
//           className="hidden"
//         />
//         <button
//           onClick={() => infrastructureImageFileRef.current.click()}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center mb-4"
//         >
//           <Image className="mr-2" /> Upload Infrastructure Images
//         </button>
//         {infrastructureImageModel.uploadedImages.length > 0 && (
//           <div className="grid grid-cols-3 gap-4 mb-4">
//             {infrastructureImageModel.uploadedImages.map((image, index) => (
//               <img
//                 key={index}
//                 src={URL.createObjectURL(image)}
//                 alt={`Uploaded Infrastructure ${index + 1}`}
//                 className="w-full h-48 object-cover rounded-md"
//               />
//             ))}
//           </div>
//         )}
//         <button
//           onClick={runInfrastructureImageModel}
//           className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 disabled:bg-gray-400"
//           disabled={infrastructureImageModel.uploadedImages.length === 0}
//         >
//           Analyze Images Condition
//         </button>
//         {infrastructureImageModel.infraConditions && (
//           <div className="mt-4 p-4 bg-gray-100 rounded-md">
//             {infrastructureImageModel.infraConditions.map((condition, index) => (
//               <p key={index} className="mb-2">
//                 Infrastructure Condition {index + 1}: {condition}
//               </p>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Lab Facilities Model */}
//       <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
//         <h2 className="text-2xl font-semibold mb-4 flex items-center">
//           <FaFlask className="mr-3 text-blue-500" /> 
//           Lab Facilities Assessment Model
//         </h2>
//         <FileUploadSection 
//           files={labFacilitiesModel.uploadedFiles}
//           fileRef={labFacilitiesFileRef}
//           onUpload={(e) => handleFileUpload(setLabFacilitiesModel, e)}
//           onRemove={(index) => removeFile(setLabFacilitiesModel, index)}
//           title="Lab Facilities Upload"
//           icon={FileText}
//         />
//         <button 
//           onClick={runLabFacilitiesModel}
//           className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
//         >
//           Analyze Lab Facilities
//         </button>
//         {labFacilitiesModel.results && (
//           <div className="mt-4 p-4 bg-gray-100 rounded-md">
//             <p className="mb-2">Safety Rating: {labFacilitiesModel.results.safetyRating}</p>
//             <p>Equipment Status: {labFacilitiesModel.results.equipmentStatus}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Uploaddocuments;
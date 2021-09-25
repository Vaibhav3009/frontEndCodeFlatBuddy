// import React from 'react';
// import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
//   ComboboxOptionText,
// } from "@reach/combobox";
// import "@reach/combobox/styles.css";

// const libraries = ["places"];
// const mapContainerStyle = {
//   width:"100vw",
//   height:"100vh"
// };
// const center = {
//   lat: 28.704060,
//   lng: 77.102493
// }
// const options = {
//   disableDefaultUI:true,
//   zoomControl:true
// }

// export default function GoogleMapComponent(){
//   const [markers, setMarkers] = React.useState({...center})
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
//     libraries,
//   });
//   const onMapClick = React.useCallback((event) => {
//     setMarkers({ lat: event.latLng.lat(), lng: event.latLng.lng() })
//     console.log(markers)
//   },[]);
//   const mapRef = React.useRef();
//   const onMapLoad = React.useCallback((map)=>{
//     mapRef.current = map;
//   },[]);
//   const panTo = React.useCallback(({ lat, lng }) => {''
//     mapRef.current.panTo({ lat, lng });
//     mapRef.current.setZoom(14);
//     setMarkers({lat, lng});
//   }, []);
//   if(loadError) return "Error Loading maps";
//   if(!isLoaded) return "Loading maps";
//   return(
//   <div>
//       <Locate panTo={panTo} />
//       <Search panTo={panTo} />
//     <GoogleMap
//       mapContainerStyle={mapContainerStyle}
//       zoom={8}
//       center={center}
//       options={options}
//       onClick={onMapClick}
//       onLoad = {onMapLoad}
//     >
//       <Marker position={{lat:markers.lat, lng:markers.lng}} />
//     </GoogleMap>
//   </div>)

//   function Locate({ panTo }) {
//     return (
//       <button
//         className="locate"
//         onClick={() => {
//           navigator.geolocation.getCurrentPosition(
//             (position) => {
//               panTo({
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude,
//               });
//             },
//             () => null
//           );
//         }}
//       >
//         <img src="/compass.png" alt="compass" />
//       </button>
//     );
//   }
//   function Search(){
//     const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
//       requestOptions: {
//         location: {
//           lat: () => 28.704060,
//           lng: () => 77.102493
//         },
//         radius: 200 * 1000
//       }
//     });
//     const handleInput = (e) => {
//       setValue(e.target.value);
//     };

//     const handleSelect = async (address) => {
//       setValue(address, false);
//       clearSuggestions();

//       try {
//         const results = await getGeocode({ address });
//         const { lat, lng } = await getLatLng(results[0]);
//         panTo({ lat, lng });
//       } catch (error) {
//         console.log("😱 Error: ", error);
//       }
//     };
//     return (
//       <div className="search">
//         <Combobox onSelect={handleSelect}>
//           <ComboboxInput
//             value={value}
//             onChange={handleInput}
//             disabled={!ready}
//             placeholder="Search your location"
//           />
//           <ComboboxPopover>
//             <ComboboxList>
//               {console.log(data)}
//               {status === "OK" && data.map(({ id, description }) => (
//                   <ComboboxOption key={id} value={description} />
//                 ))}
//             </ComboboxList>
//           </ComboboxPopover>
//         </Combobox>
//       </div>
//     );
//   }
// }




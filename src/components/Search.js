import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { getResults, getResultsUpdate } from "../actions/hobbiesAndHabitsAction";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { onLocationChange } from "../actions/hobbiesAndHabitsAction";
const Search = (props) => {
  const state = useSelector(state => {
    return(state.hobbiesAndHabits)});
  const dispatch = useDispatch();
  const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => 28.704060,
        lng: () => 77.102493
      },
      radius: 200 * 1000
    }
  });
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    
    const payload = {
      state:{...state, location:address},
      id:localStorage.getItem('userId'),
      budgetObject:{
        budgetMin:state.budgetMin,
        budgetMax:state.budgetMax
      },
     
    }
  if(props.isOnResult){
    console.log(state);
    dispatch(getResultsUpdate(payload));
}
else{
 await dispatch(onLocationChange(address ));
}

  };
  return (
    <div>
    
    <span style={{width:'20%',margin:0,padding:'0'}}>Choose Location</span>
    
  <div>
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {/* {console.log(data)} */}
            {status === "OK" && data.map(({ id, description }) => (
              <ComboboxOption key={id} value={description} />
            ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
      </div>
    </div>
  );
}
export default Search;
import { useState } from "react";
import stateContext from "./StatesContext";

const States = (props) => {
    const [checkInDate, setCheckInDate] = useState('Add Date');
    const [checkOutDate, setCheckOutDate] = useState('Add Date');
    const [dayIn, setDayIn] = useState('');
    const [dayOut, setDayOut] = useState('');
    const [yearIn, setYearIn] = useState('');
    const [yearOut, setYearOut] = useState('');
    const [monthIn, setMonthIn] = useState('');
    const [monthOut, setMonthOut] = useState('');
    const [pickedCity, setPickedCity] = useState('');
    const [pickedGuests, setPickedGuests] = useState('');
    const [searchQuery, setSearchQuery] = useState({city: '', guests: 0, checkIn: '', checkOut: ''});

    return (
        <stateContext.Provider value={{checkInDate, setCheckInDate, checkOutDate, setCheckOutDate, dayIn, setDayIn, dayOut, setDayOut, yearIn, setYearIn, yearOut, setYearOut, monthIn, setMonthIn, monthOut, setMonthOut, pickedCity, setPickedCity, pickedGuests, setPickedGuests, searchQuery, setSearchQuery}}>
            {props.children}
        </stateContext.Provider>
    )
}

export default States;
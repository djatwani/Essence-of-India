import React, { useContext, useEffect } from 'react'
import '../../styles/check.css'
import { IoAddCircle } from 'react-icons/io5'
import stateContext from '../../Contexts/States/StatesContext';
import { useNavigate } from 'react-router-dom';

function Check(props) {
    // const [month, setMonth] = useState('01');
    const context = useContext(stateContext);
    const { dayIn, setDayIn, dayOut, setDayOut, yearIn, setYearIn, yearOut, setYearOut, monthIn, setMonthIn, monthOut, setMonthOut, checkInDate, setCheckInDate, checkOutDate, setCheckOutDate, pickedCity, setPickedCity, pickedGuests, setPickedGuests, searchQuery, setSearchQuery } = context;

    useEffect(() => {
        document.getElementById('day31Cont-in').style.display = 'none';
        document.getElementById('day30Cont-in').style.display = 'none';
        document.getElementById('day28Cont-in').style.display = 'none';
        document.getElementById('day31Cont-out').style.display = 'none';
        document.getElementById('day30Cont-out').style.display = 'none';
        document.getElementById('day28Cont-out').style.display = 'none';
        document.getElementById('date-in').style.display = 'none';
        document.getElementById('date-out').style.display = 'none';
    }, []);

    const handleMonthIn = (e) => {
        setMonthIn(e.target.value);
        switch (e.target.value) {
            case '04':
            case '06':
            case '09':
            case '11':
                document.getElementById('day30Cont-in').style.display = 'block';
                document.getElementById('day31Cont-in').style.display = 'none';
                document.getElementById('day28Cont-in').style.display = 'none';
                break;
            case '02':
                document.getElementById('day28Cont-in').style.display = 'block';
                document.getElementById('day30Cont-in').style.display = 'none';
                document.getElementById('day31Cont-in').style.display = 'none';
                break;
            default:
                document.getElementById('day31Cont-in').style.display = 'block';
                document.getElementById('day30Cont-in').style.display = 'none';
                document.getElementById('day28Cont-in').style.display = 'none';
                break;
        }
    }
    const handleMonthOut = (e) => {
        setMonthOut(e.target.value);
        switch (e.target.value) {
            case '04':
            case '06':
            case '09':
            case '11':
                document.getElementById('day30Cont-out').style.display = 'block';
                document.getElementById('day31Cont-out').style.display = 'none';
                document.getElementById('day28Cont-out').style.display = 'none';
                break;
            case '02':
                document.getElementById('day28Cont-out').style.display = 'block';
                document.getElementById('day30Cont-out').style.display = 'none';
                document.getElementById('day31Cont-out').style.display = 'none';
                break;
            default:
                document.getElementById('day31Cont-out').style.display = 'block';
                document.getElementById('day30Cont-out').style.display = 'none';
                document.getElementById('day28Cont-out').style.display = 'none';
                break;
        }
    }
    const handleDayIn = (e) => {
        setDayIn(e.target.value);
    }
    const handleDayOut = (e) => {
        setDayOut(e.target.value);
    }
    const handleYearIn = (e) => {
        setYearIn(e.target.value);
    }
    const handleYearOut = (e) => {
        setYearOut(e.target.value);
    }

    setCheckInDate(dayIn+'-'+monthIn+'-'+yearIn);
    setCheckOutDate(dayOut+'-'+monthOut+'-'+yearOut);

    const handleDateView = () => {
        if (document.getElementById('date-in').style.display == 'none') {
            document.getElementById('date-in').style.display = 'block';
            document.getElementById('date-out').style.display = 'none';
        }
        else if (document.getElementById('date-out').style.display == 'none') {
            document.getElementById('date-out').style.display = 'block';
            document.getElementById('date-in').style.display = 'none';
        }
    }

    const handleCity = (e) => {
        setPickedCity(e.target.value);
    }
    const handleGuests = (e) => {
        setPickedGuests(e.target.value);
    }

    const navigate = useNavigate();
    const handleSearch = () => {
        document.getElementById('date-in').style.display = 'none';
        document.getElementById('date-out').style.display = 'none';
        let queryObj = {
            city: pickedCity,
            guests: pickedGuests,
            checkIn: checkInDate,
            checkOut: checkOutDate
        }
        setSearchQuery(queryObj);
        console.log(queryObj, 'Query Obj');
        navigate(`/search?city=${queryObj.city}&check_in=${queryObj.checkIn}&check_out=${queryObj.checkOut}&guests=${queryObj.guests}`);

        // console.log(searchQuery, 'Search Query');
    }

    return (
        <div className='head'>
            <div className='location'>
                <div className='upper'>Location</div>
                <input type="text" placeholder='Enter City' className='bottom' id='location' name='location' onChange={(e)=> handleCity(e)} />
            </div>
            <div className='guests'>
                <div className='upper'>Guests</div>
                <input type="text" name="guests" id="guests" placeholder='Add Guests' className='bottom' onChange={(e)=> handleGuests(e)} />
            </div>
            <div className='in'>
                <div className='upper'>Check in</div>
                <div className='bottom'><IoAddCircle onClick={() => handleDateView()} id='add-check-in' /><span id='check-in'>{checkInDate}</span> </div>
                <div className="date-selector" id='date-in'>
                    <select name="month-in" id="month-in" onChange={(e) => handleMonthIn(e)}>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                    <div id="day31Cont-in">
                        <select name="day31" id="day31-in" onChange={(e) => handleDayIn(e)}>
                            <option value="01">1</option>
                            <option value="02">2</option>
                            <option value="03">3</option>
                            <option value="04">4</option>
                            <option value="05">5</option>
                            <option value="06">6</option>
                            <option value="07">7</option>
                            <option value="08">8</option>
                            <option value="09">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                    </div>
                    <div id="day30Cont-in">
                        <select name="day30-in" id="day30-in" onChange={(e) => handleDayIn(e)} >
                            <option value="01">1</option>
                            <option value="02">2</option>
                            <option value="03">3</option>
                            <option value="04">4</option>
                            <option value="05">5</option>
                            <option value="06">6</option>
                            <option value="07">7</option>
                            <option value="08">8</option>
                            <option value="09">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                        </select>
                    </div>
                    <div id="day28Cont-in">
                        <select name="day28-in" id="day28-in" onChange={(e) => handleDayIn(e)}>
                            <option value="01">1</option>
                            <option value="02">2</option>
                            <option value="03">3</option>
                            <option value="04">4</option>
                            <option value="05">5</option>
                            <option value="06">6</option>
                            <option value="07">7</option>
                            <option value="08">8</option>
                            <option value="09">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                        </select>
                    </div>
                    <input type="text" name="year-in" id="year-in" placeholder='Year' onChange={(e) => handleYearIn(e)} />
                </div>
            </div>
            <div className='out'>
                <div className='upper'>Check Out</div>
                <div className='bottom'><IoAddCircle onClick={() => handleDateView()} id='add-check-out' /><span id='check-in'>{checkOutDate}</span> </div>
                <div className="date-selector" id='date-out'>
                    <select name="month-out" id="month-out" onChange={(e) => handleMonthOut(e)}>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                    <div id="day31Cont-out">
                        <select name="day31-out" id="day31-out" onChange={(e) => handleDayOut(e)}>
                            <option value="01">1</option>
                            <option value="02">2</option>
                            <option value="03">3</option>
                            <option value="04">4</option>
                            <option value="05">5</option>
                            <option value="06">6</option>
                            <option value="07">7</option>
                            <option value="08">8</option>
                            <option value="09">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                    </div>
                    <div id="day30Cont-out">
                        <select name="day30-out" id="day30-out" onChange={(e) => handleDayOut(e)}>
                            <option value="01">1</option>
                            <option value="02">2</option>
                            <option value="03">3</option>
                            <option value="04">4</option>
                            <option value="05">5</option>
                            <option value="06">6</option>
                            <option value="07">7</option>
                            <option value="08">8</option>
                            <option value="09">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                        </select>
                    </div>
                    <div id="day28Cont-out">
                        <select name="day28-out" id="day28-out" onChange={(e) => handleDayOut(e)}>
                            <option value="01">1</option>
                            <option value="02">2</option>
                            <option value="03">3</option>
                            <option value="04">4</option>
                            <option value="05">5</option>
                            <option value="06">6</option>
                            <option value="07">7</option>
                            <option value="08">8</option>
                            <option value="09">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                        </select>
                    </div>
                    <input type="text" name="year-out" id="year-out" placeholder='Year' onChange={(e) => handleYearOut(e)} />
                </div>
            </div>
            <div className='search' onClick={() => handleSearch()}>
                Search
            </div>
        </div>
    )
}

export default Check
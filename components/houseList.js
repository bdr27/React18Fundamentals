import { useState, useEffect } from "react";
import HouseRow, { HouseRowMem } from "./houseRow";
import AddHouseButton from "./addHouseButton.js";



const HouseList = () => {
    const [houses, setHouses] = useState([]);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const fetchHouses = async () => {
            const response = await fetch("/api/houses");
            const houses = await response.json();
            setHouses(houses);
        }
        fetchHouses();        
    }, []);

    const addHouse = () => {
        setHouses([...houses, { 
            id: 3, 
            address: "21 Valley Way, New York", 
            country: "USA", 
            price: 1000000
         },
        ]);        
        setCounter(current => counter + 1)
    }
    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map(house => <HouseRow key={house.id} {...house} />)}
                </tbody>
            </table>
            <AddHouseButton addHouse={addHouse}/>
            
            <div>Counter: {counter}</div>
        </>
    )
}

export default HouseList;
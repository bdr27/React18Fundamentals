import { useState } from "react";
import HouseRow from "./houseRow";

const houseArray = [
    {
        id: 1,
        address: "12 Vallery of Kings, Geneva",
        country: "Switzerland",
        price: 900000,
    },
    {
        id: 2,
        address: "89 Road of Forks, Bern",
        country: "Switzerland",
        price: 500000,
    }
]

const HouseList = () => {
    const [houses, setHouses] = useState(houseArray);
    const [counter, setCounter] = useState(0);

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
            <button className="btn btn-primary" onClick={addHouse}>
                Add
            </button>
            <div>Counter: {counter}</div>
        </>
    )
}

export default HouseList;
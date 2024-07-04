import { useState, useEffect } from "react";

const AddHouseButton = ({houses, addHouse}) => {
    const [counter, setCounter] = useState(0);
    
    return (
        <>
            <button className="btn btn-primary" onClick={addHouse}>
                Add
            </button>
        </>
    )
}

export default AddHouseButton;
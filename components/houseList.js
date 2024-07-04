import HouseRow, { HouseRowMem } from "./houseRow";
import AddHouseButton from "./addHouseButton.js";
import useHouses from "@/hooks/useHouses";
import loadingStatus from "@/helpers/loadingStatus";
import LoadingIndicator from "./loadingIndicatior";



const HouseList = ({selectedHouse}) => {
    //const [houses, setHouses] = useState([]);
    //const counter = useRef(0);
    const {houses, setHouses, loadingState} = useHouses();

    if(loadingState !== loadingStatus.loaded){
        return <LoadingIndicator loadingState = {loadingState} />
    }

    // useEffect(() => {
    //     const fetchHouses = async () => {
    //         const response = await fetch("/api/houses");
    //         const houses = await response.json();
    //         setHouses(houses);
    //     }
    //     fetchHouses();
    //     counter.current++;
    // }, []);

    const addHouse = () => {
        setHouses([...houses, { 
            id: 3, 
            address: "21 Valley Way, New York", 
            country: "USA", 
            price: 1000000
         },
        ]);
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
                    {houses.map(house => <HouseRow key={house.id} house={house} selectHouse={selectedHouse}/>)}
                </tbody>
            </table>
            <AddHouseButton addHouse={addHouse}/>
{/*             
            <div>Counter: {counter.current}</div> */}
        </>
    )
}

export default HouseList;
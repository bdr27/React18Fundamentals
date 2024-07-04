import { useCallback, useState } from "react"
import Banner from "./banner"
import HouseList from "./houseList";
import House from "./house";

const App = () => {
    const jsx = <div>Hello World</div>
    const [selectedHouse, setSelectedHouse] = useState();

    //const setSelectedHouseWrapper = useCallback((house) => setSelectedHouse(house), []);
    const setSelectedHouseWrapper = (house) => {
        // Check that it is a house
        setSelectedHouse(house);
    }
    return (        
        <div>
            {jsx}
            <Banner>Providing houses all over the world</Banner>
            {selectedHouse ? (
                <House house={selectedHouse}/> 
                ) : (
                <HouseList selectedHouse={setSelectedHouseWrapper}/>
                )}
        </div>
    );
};

export default App;
import Banner from "./banner"
import HouseList from "./houseList";

const App = () => {
    const jsx = <div>Hello World</div>
    return (        
        <div>
            {jsx}
            <Banner>Providing houses all over the world</Banner>
            <HouseList/>
        </div>
    );
};

export default App;
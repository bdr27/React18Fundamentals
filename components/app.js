import Banner from "./banner"

const App = () => {
    const jsx = <div>Hello World</div>
    return (        
        <div>
            {jsx}
            <Banner>Providing houses all over the world</Banner>
            <Banner headerText="Some other header" />
        </div>
    );
};

export default App;
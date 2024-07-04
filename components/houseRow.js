import currencyFormatter from "@/helpers/currencyFormatter";
const HouseRow = ({house, selectHouse}) => {
    let priceTd;
    if(house.price < 500000){
        priceTd = <td>{currencyFormatter.format(house.price)}</td>        
    }
    else{
        priceTd = <td className="text-primary">{currencyFormatter.format(house.price)}</td>    
    }
    return (
        <tr onClick={() => selectHouse(house)}>
            <td>{house.address}</td>
            <td>{house.country}</td>
            {house.price && (<td className={`${house.price >= 500000 ? "text-primary" : ""}`}>{currencyFormatter.format(house.price)}</td>)} 
        </tr>
    )
};

export default HouseRow;
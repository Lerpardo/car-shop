import ICar from "../../../../src/Interfaces/ICar";
import Car from "../../../../src/Domains/Car";

const newCarInput: ICar = {
    "model": "Marea",
    "year": 2002,
    "color": "Black",
    "status": true,
    "buyValue": 15.990,
    "doorsQty": 4,
    "seatsQty": 5
}

const newCarOutput: Car = new Car(
    {
        "id": "6348513f34c397abcad040b2",
        "model": "Marea",
        "year": 2002,
        "color": "Black",
        "status": true,
        "buyValue": 15.990,
        "doorsQty": 4,
        "seatsQty": 5
    }
)

export { newCarInput, newCarOutput }
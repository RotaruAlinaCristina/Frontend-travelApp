export interface ITour {
    id: number;
    departureDate: string;
    dateOfReturn: string;
    numberOfDays: number;
    priceAdult: number;
    priceChildren: number;
    promoted: string;
    numberSeatAdult: number;
    numberSeatChildren: number;
    departureCity: {
        id: number;
        name: string
    };
    arrivalCity: {
        id:number;
        name: string
    };
    departureAirport: {
        id: number;
        name: string
    };
    arrivalAirport: {
        id: number;
        name: string
    };
    hotel: {
        id: number;
        name: string
    }

}


export interface Tour extends ITour{
    id: number;
}

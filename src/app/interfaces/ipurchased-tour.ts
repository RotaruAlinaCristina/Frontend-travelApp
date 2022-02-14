import { NumberStorageTranscoder } from "ngx-webstorage-service"

export interface IpurchasedTour {
    id: number;
    userName: string;
    adultSeats: number;
    childrenSeats: number;
    amount: number;
    tour:{
        id: number;  
    };
    user:{
        id: number;
        name: string;
    }


}

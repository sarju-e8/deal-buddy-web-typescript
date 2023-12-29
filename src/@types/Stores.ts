export interface Stores {
    id: string;
    name: string;
    imageUrl: string;
    activeDealsCount: number;
    address: {
        city: string;
        fillAddress: string;
        latitude: number;
        longitude: number;
    };
    storeModes: {
        name: string;
    }[];
}[];
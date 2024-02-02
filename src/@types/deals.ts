import { Category } from "./category";
import { Stores } from "./Stores";
import { ProductImages } from "./ProductImages";
import { Locations } from "./Locations";
import { ProductModes } from "./ProductModes";

export interface Deal {
    category: Category | any;
    productImages: ProductImages | any;
    id: string;
    name: string;
    NZWide: boolean;
    // imageUrl: string;
    // categoryName: string;
    clicks: string;
    productType: string;
    productModes: ProductModes[]
    endDate: Date;
    stores: Stores | any;
    locations: Locations[];
    couponCode?: string;
    dealsLgSize?: number;
    dealsMdSize?: number;
    circleBottomClass?: string;
    slug: string;
}


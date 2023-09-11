import { TypeItem } from "./MockData";

export type InfoItem = {
    icon: string;
    text: string;
}

export type Dish = {
    name: string;
    type: string;
    description: string,
    score: number;
    img: string;
    price: number;
}

export type Restaurant = {
    name: string;
    shippingCost: number;
    score: number;
    numberRatings: number;
    estimatedTime: string;
    typeFood: string;
    img: string;
    dishes: Dish[];
};
export type RestaurantItem = Restaurant & { type: TypeItem };

export type Ad = {
    title: string;
    subtitle: string;
    img: string;
    bg: string;
};
export type FoodOption = {
    title: string;
    img: string;
};

export type FoodOptionItem = { options: FoodOption[] } & { type: TypeItem };


export type AdsItem = {
    type: TypeItem,
    ads: Ad[]
};


export type DataItem = FoodOptionItem | RestaurantItem | AdsItem

export type CategoryItem = {
    name: string,
    typeItem: string,
    index: number,
    hasFocus: boolean
}

export type ItemViewRestaurant = CategoryItem | Dish & { typeItem: string } | { typeItem: string }
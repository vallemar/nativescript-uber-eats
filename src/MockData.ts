import { DataItem, Dish, InfoItem, Restaurant } from "./types";

export enum TypeItem {
    Option = "option",
    Restaurant = "default",
    Ad = "ad",
}

const americanRestaurantDishes: Dish[] = [
    {
        name: "Burger Deluxe",
        type: "Burger",
        description: "A classic beef burger with all the fixings. This mouthwatering burger is made with 100% Angus beef, topped with lettuce, tomato, onion, pickles, and your choice of cheese. Served with a side of crispy fries.",
        score: 4.5,
        img: "https://example.com/images/burger.jpg",
        price: 12.99
    },
    {
        name: "BBQ Ribs",
        type: "Ribs",
        description: "Slow-cooked BBQ ribs with a tangy sauce. Our tender, fall-off-the-bone ribs are slathered in a smoky BBQ sauce and served with coleslaw and cornbread.",
        score: 4.3,
        img: "https://example.com/images/ribs.jpg",
        price: 16.99
    },
    {
        name: "Chicken Wings",
        type: "Appetizer",
        description: "Crispy chicken wings with your choice of sauce. These delicious wings are fried to perfection and can be tossed in buffalo, honey mustard, or BBQ sauce. Served with celery sticks and ranch dressing.",
        score: 4.2,
        img: "https://example.com/images/wings.jpg",
        price: 9.99
    },
    {
        name: "Mac and Cheese",
        type: "Pasta",
        description: "Creamy macaroni and cheese baked to perfection. Our mac and cheese is made with a blend of cheddar and mozzarella cheeses, topped with breadcrumbs, and baked until golden brown.",
        score: 4.0,
        img: "https://example.com/images/macandcheese.jpg",
        price: 10.99
    },
    {
        name: "Caesar Salad",
        type: "Salad",
        description: "Fresh romaine lettuce with Caesar dressing and croutons. Our classic Caesar salad is a light and refreshing choice. Add grilled chicken or shrimp for an extra kick.",
        score: 4.1,
        img: "https://example.com/images/caesarsalad.jpg",
        price: 8.99
    },
    {
        name: "Buffalo Burger",
        type: "Burger",
        description: "Spicy buffalo burger with blue cheese dressing. If you're a fan of spicy food, you'll love our buffalo burger. It's topped with blue cheese dressing and served with sweet potato fries.",
        score: 4.4,
        img: "https://example.com/images/buffaloburger.jpg",
        price: 14.99
    },
    {
        name: "Fried Chicken",
        type: "Chicken",
        description: "Crispy fried chicken served with mashed potatoes. Our fried chicken is marinated in a special blend of herbs and spices, then fried to a perfect golden brown. It's served with creamy mashed potatoes and gravy.",
        score: 4.6,
        img: "https://example.com/images/friedchicken.jpg",
        price: 13.99
    },
    {
        name: "Mashed Potatoes",
        type: "Side Dish",
        description: "Creamy mashed potatoes with gravy. Our mashed potatoes are made with real butter and cream, then topped with savory gravy.",
        score: 4.3,
        img: "https://example.com/images/mashedpotatoes.jpg",
        price: 5.99
    },
    {
        name: "Apple Pie",
        type: "Dessert",
        description: "Homemade apple pie with a flaky crust. Our apple pie is made from scratch with fresh apples and a hint of cinnamon, all baked in a buttery, flaky crust. Served warm with a scoop of vanilla ice cream.",
        score: 4.7,
        img: "https://example.com/images/applepie.jpg",
        price: 6.99
    },
    {
        name: "Chili Cheese Fries",
        type: "Appetizer",
        description: "Crispy fries smothered in chili and cheese. Our chili cheese fries are a hearty and satisfying appetizer. They're loaded with chili, melted cheese, sour cream, and green onions.",
        score: 4.2,
        img: "https://example.com/images/chilicheesefries.jpg",
        price: 8.99
    },
    {
        name: "Pulled Pork Sandwich",
        type: "Sandwich",
        description: "A savory pulled pork sandwich served on a toasted bun with coleslaw and pickles. Slow-cooked to perfection and smothered in BBQ sauce.",
        score: 4.4,
        img: "https://example.com/images/pulledporksandwich.jpg",
        price: 11.99
    },
    {
        name: "Fried Pickles",
        type: "Appetizer",
        description: "Crispy fried pickles served with a zesty dipping sauce. A tangy and crunchy snack that's perfect for sharing.",
        score: 4.0,
        img: "https://example.com/images/friedpickles.jpg",
        price: 6.99
    },
    {
        name: "Chicken Pot Pie",
        type: "Pie",
        description: "A comforting chicken pot pie filled with tender chicken, vegetables, and a creamy sauce, all baked in a flaky pastry crust.",
        score: 4.5,
        img: "https://example.com/images/chickenpotpie.jpg",
        price: 13.99
    },
    {
        name: "Baked Beans",
        type: "Side Dish",
        description: "Homemade baked beans with smoky bacon and brown sugar. The perfect accompaniment to any barbecue meal.",
        score: 3.8,
        img: "https://example.com/images/bakedbeans.jpg",
        price: 4.99
    },
    {
        name: "Buffalo Chicken Wrap",
        type: "Wrap",
        description: "A spicy buffalo chicken wrap with lettuce, tomato, and ranch dressing. Served with a side of crispy sweet potato fries.",
        score: 4.2,
        img: "https://example.com/images/buffalowrap.jpg",
        price: 10.99
    },
    {
        name: "Fried Okra",
        type: "Appetizer",
        description: "Sliced okra coated in seasoned cornmeal and fried until golden brown. A Southern classic that's both crispy and delicious.",
        score: 4.1,
        img: "https://example.com/images/friedokra.jpg",
        price: 7.99
    },
    {
        name: "Key Lime Pie",
        type: "Dessert",
        description: "A refreshing key lime pie with a graham cracker crust and a tart lime filling. Topped with whipped cream and lime zest.",
        score: 4.7,
        img: "https://example.com/images/keylimepie.jpg",
        price: 6.99
    },
    {
        name: "Corn on the Cob",
        type: "Side Dish",
        description: "Grilled corn on the cob brushed with garlic butter and sprinkled with Parmesan cheese. A flavorful side that's perfect for summer.",
        score: 4.3,
        img: "https://example.com/images/cornonthecob.jpg",
        price: 3.99
    },
    {
        name: "Chicken Fried Steak",
        type: "Steak",
        description: "Tenderized steak breaded and fried to a crispy golden brown. Served with creamy country gravy and mashed potatoes.",
        score: 4.6,
        img: "https://example.com/images/chickenfriedsteak.jpg",
        price: 15.99
    },
    {
        name: "Pecan Pie",
        type: "Dessert",
        description: "A rich and nutty pecan pie with a flaky crust. Served warm with a scoop of vanilla ice cream and a drizzle of caramel sauce.",
        score: 4.8,
        img: "https://example.com/images/pecanpie.jpg",
        price: 7.99
    },
    {
        name: "Cornbread Muffins",
        type: "Side Dish",
        description: "Homemade cornbread muffins served warm with honey butter. The perfect complement to any Southern meal.",
        score: 4.5,
        img: "https://example.com/images/cornbreadmuffins.jpg",
        price: 4.99
    },
    {
        name: "Texas BBQ Brisket",
        type: "BBQ",
        description: "Tender smoked brisket seasoned with a blend of Texas spices and slathered in BBQ sauce. Served with coleslaw and baked beans.",
        score: 4.6,
        img: "https://example.com/images/texasbbqbrisket.jpg",
        price: 17.99
    },
    {
        name: "Southern Fried Catfish",
        type: "Fish",
        description: "Fried catfish fillets with a crispy cornmeal coating. Served with hushpuppies and tartar sauce.",
        score: 4.3,
        img: "https://example.com/images/friedcatfish.jpg",
        price: 12.99
    },
    {
        name: "Southern Sweet Tea",
        type: "Beverage",
        description: "A classic Southern sweet tea made with freshly brewed black tea and sweetened with sugar. Served over ice with a lemon wedge.",
        score: 4.8,
        img: "https://example.com/images/sweettea.jpg",
        price: 2.99
    },
    {
        name: "Sausage Gravy Biscuits",
        type: "Breakfast",
        description: "Flaky biscuits smothered in creamy sausage gravy. A hearty Southern breakfast favorite.",
        score: 4.4,
        img: "https://example.com/images/sausagegravybiscuits.jpg",
        price: 6.99
    },
    {
        name: "Pulled Chicken Sandwich",
        type: "Sandwich",
        description: "Tender pulled chicken smothered in BBQ sauce and served on a toasted bun. Topped with coleslaw for extra flavor.",
        score: 4.5,
        img: "https://example.com/images/pulledchickensandwich.jpg",
        price: 10.99
    },
    {
        name: "Banana Pudding",
        type: "Dessert",
        description: "Homemade banana pudding with layers of vanilla wafers, sliced bananas, and creamy vanilla pudding. Topped with whipped cream.",
        score: 4.7,
        img: "https://example.com/images/bananapudding.jpg",
        price: 5.99
    },
    {
        name: "Spicy Chicken Tenders",
        type: "Chicken",
        description: "Crispy chicken tenders coated in a fiery hot sauce. Served with ranch dressing and celery sticks.",
        score: 4.4,
        img: "https://example.com/images/spicychickentenders.jpg",
        price: 8.99
    },
    {
        name: "Cornbread Muffins",
        type: "Side Dish",
        description: "Homemade cornbread muffins served warm with honey butter. The perfect complement to any Southern meal.",
        score: 4.5,
        img: "https://example.com/images/cornbreadmuffins.jpg",
        price: 4.99
    },
    {
        name: "Texas BBQ Brisket",
        type: "BBQ",
        description: "Tender smoked brisket seasoned with a blend of Texas spices and slathered in BBQ sauce. Served with coleslaw and baked beans.",
        score: 4.6,
        img: "https://example.com/images/texasbbqbrisket.jpg",
        price: 17.99
    },
    {
        name: "Southern Fried Catfish",
        type: "Fish",
        description: "Fried catfish fillets with a crispy cornmeal coating. Served with hushpuppies and tartar sauce.",
        score: 4.3,
        img: "https://example.com/images/friedcatfish.jpg",
        price: 12.99
    },
    {
        name: "Southern Sweet Tea",
        type: "Beverage",
        description: "A classic Southern sweet tea made with freshly brewed black tea and sweetened with sugar. Served over ice with a lemon wedge.",
        score: 4.8,
        img: "https://example.com/images/sweettea.jpg",
        price: 2.99
    },
    {
        name: "Sausage Gravy Biscuits",
        type: "Breakfast",
        description: "Flaky biscuits smothered in creamy sausage gravy. A hearty Southern breakfast favorite.",
        score: 4.4,
        img: "https://example.com/images/sausagegravybiscuits.jpg",
        price: 6.99
    },
    {
        name: "Fried Green Tomatoes",
        type: "Side Dish",
        description: "Sliced green tomatoes coated in cornmeal and fried until crispy. Served with a tangy remoulade sauce.",
        score: 4.0,
        img: "https://example.com/images/friedgreentomatoes.jpg",
        price: 7.99
    },
    {
        name: "Banana Pudding",
        type: "Dessert",
        description: "Homemade banana pudding with layers of vanilla wafers, sliced bananas, and creamy vanilla pudding. Topped with whipped cream.",
        score: 4.7,
        img: "https://example.com/images/bananapudding.jpg",
        price: 5.99
    },
    {
        name: "Chicken Fried Steak",
        type: "Steak",
        description: "Tenderized steak breaded and fried to a crispy golden brown. Served with creamy country gravy and mashed potatoes.",
        score: 4.6,
        img: "https://example.com/images/chickenfriedsteak.jpg",
        price: 15.99
    },
    {
        name: "Pulled Chicken Sandwich",
        type: "Sandwich",
        description: "Tender pulled chicken smothered in BBQ sauce and served on a toasted bun. Topped with coleslaw for extra flavor.",
        score: 4.5,
        img: "https://example.com/images/pulledchickensandwich.jpg",
        price: 10.99
    },
    {
        name: "Spicy Chicken Tenders",
        type: "Chicken",
        description: "Crispy chicken tenders coated in a fiery hot sauce. Served with ranch dressing and celery sticks.",
        score: 4.4,
        img: "https://example.com/images/spicychickentenders.jpg",
        price: 8.99
    },
    {
        name: "Texas BBQ Brisket",
        type: "BBQ",
        description: "Tender smoked brisket seasoned with a blend of Texas spices and slathered in BBQ sauce. Served with coleslaw and baked beans.",
        score: 4.6,
        img: "https://example.com/images/texasbbqbrisket.jpg",
        price: 17.99
    },
    {
        name: "Southern Fried Catfish",
        type: "Fish",
        description: "Fried catfish fillets with a crispy cornmeal coating. Served with hushpuppies and tartar sauce.",
        score: 4.3,
        img: "https://example.com/images/friedcatfish.jpg",
        price: 12.99
    },
    {
        name: "Southern Sweet Tea",
        type: "Beverage",
        description: "A classic Southern sweet tea made with freshly brewed black tea and sweetened with sugar. Served over ice with a lemon wedge.",
        score: 4.8,
        img: "https://example.com/images/sweettea.jpg",
        price: 2.99
    },
    {
        name: "Sausage Gravy Biscuits",
        type: "Breakfast",
        description: "Flaky biscuits smothered in creamy sausage gravy. A hearty Southern breakfast favorite.",
        score: 4.4,
        img: "https://example.com/images/sausagegravybiscuits.jpg",
        price: 6.99
    },
    {
        name: "Chicken Fried Steak",
        type: "Steak",
        description: "Tenderized steak breaded and fried to a crispy golden brown. Served with creamy country gravy and mashed potatoes.",
        score: 4.6,
        img: "https://example.com/images/chickenfriedsteak.jpg",
        price: 15.99
    },
    {
        name: "Pulled Chicken Sandwich",
        type: "Sandwich",
        description: "Tender pulled chicken smothered in BBQ sauce and served on a toasted bun. Topped with coleslaw for extra flavor.",
        score: 4.5,
        img: "https://example.com/images/pulledchickensandwich.jpg",
        price: 10.99
    },
   
    {
        name: "Fried Green Tomatoes",
        type: "Side Dish",
        description: "Sliced green tomatoes coated in cornmeal and fried until crispy. Served with a tangy remoulade sauce.",
        score: 4.0,
        img: "https://example.com/images/friedgreentomatoes.jpg",
        price: 7.99
    },
    {
        name: "Banana Pudding",
        type: "Dessert",
        description: "Homemade banana pudding with layers of vanilla wafers, sliced bananas, and creamy vanilla pudding. Topped with whipped cream.",
        score: 4.7,
        img: "https://example.com/images/bananapudding.jpg",
        price: 5.99
    }
];

export const items: DataItem[] = [
    {
        type: TypeItem.Option,
        options: [
            {
                title: "Food",
                img: "~/assets/img/poke.png"
            },
            {
                title: "Market",
                img: "~/assets/img/uber_grocery.png"
            },
            {
                title: "Specials",
                img: "~/assets/img/specialy_transparent_background.png"
            },
        ]
    },
    {
        type: TypeItem.Restaurant,
        name: "Delicious Bites",
        shippingCost: 3.5,
        score: 4,
        estimatedTime: "10-20 min",
        numberRatings: 120,
        typeFood: "Italian",
        img: "https://plus.unsplash.com/premium_photo-1678897742200-85f052d33a71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        dishes: americanRestaurantDishes
    },
    {
        type: TypeItem.Restaurant,
        name: "Savory Haven",
        shippingCost: 4.2,
        score: 4.3,
        estimatedTime: "20-30 min",
        numberRatings: 98,
        typeFood: "American",
        img: "https://plus.unsplash.com/premium_photo-1683121324403-a7a235e72612?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fEFtZXJpY2FuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",

        dishes: americanRestaurantDishes
    },
    {
        type: TypeItem.Ad,
        ads: [
            {
                title: "Enjoy a 10% discount (up to €2)",
                subtitle: "View details",
                img: "https://d3ktknrqa34sgg.cloudfront.net/uploads/images/f6cSh4SFiGpJKI2LBNBdZdAiE/AFcHgsOneI+EsYz4E=/2022-07-01/promo_billboard_image_v3%403x-8e8bcdb0-f966-11ec-8b6b-65dc0eb062ea.png",
                bg: "#addec9"
            },
            {
                title: "0 € Delivery Fee + 0€ Service Fee with Uber One",
                subtitle: "Free for a month",
                img: "https://cn-geo1.uber.com/static/mobile-content/membership/U1SP_billboard_and_genie.png",
                bg: "#fff2d9"
            },
            {
                title: "Enjoy a 10% discount (up to €2)",
                subtitle: "View details",
                img: "https://d3ktknrqa34sgg.cloudfront.net/uploads/images/f6cSh4SFiGpJKI2LBNBdZdAiE/AFcHgsOneI+EsYz4E=/2022-07-01/promo_billboard_image_v3%403x-8e8bcdb0-f966-11ec-8b6b-65dc0eb062ea.png",
                bg: "#addec9"
            },
            {
                title: "0 € Delivery Fee + 0€ Service Fee with Uber One",
                subtitle: "Free for a month",
                img: "https://cn-geo1.uber.com/static/mobile-content/membership/U1SP_billboard_and_genie.png",
                bg: "#fff2d9"
            },
        ]
    },



    {
        type: TypeItem.Restaurant,
        name: "Culinary Junction",
        shippingCost: 5.0,
        score: 4,
        estimatedTime: "40-60 min",
        numberRatings: 205,
        typeFood: "Asian",
        //https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fEFzaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60
        img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXNpYW4lMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",

        dishes: americanRestaurantDishes
    },
    {
        type: TypeItem.Restaurant,
        name: "Tasty Tandoor",
        shippingCost: 4.5,
        score: 3.8,
        estimatedTime: "10-20 min",
        numberRatings: 88,
        typeFood: "Indian",
        img: "https://images.unsplash.com/photo-1564149504298-00c351fd7f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dishes: americanRestaurantDishes
    },
    // Restaurante 5
    {
        type: TypeItem.Restaurant,
        name: "Sushi Symphony",
        shippingCost: 3.7,
        score: 4.2,
        estimatedTime: "15-35 min",
        numberRatings: 112,
        typeFood: "Japanese",
        img: "https://images.unsplash.com/photo-1607246749106-0a2b287f7245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fEphcGFuZXNlJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        dishes: americanRestaurantDishes
    },
    // Restaurante 6
    {
        type: TypeItem.Restaurant,
        name: "Mamma Mia Pizzeria",
        shippingCost: 3.2,
        score: 4.6,
        estimatedTime: "25-40 min",
        numberRatings: 154,
        typeFood: "Italian",
        img: "https://images.unsplash.com/photo-1625467150224-673f708dd8e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fEl0YWxpYW4lMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        dishes: americanRestaurantDishes
    },
    {
        type: TypeItem.Ad,
        ads: [
            {
                title: "0 € Delivery Fee + 0€ Service Fee with Uber One",
                subtitle: "Free for a month",
                img: "https://cn-geo1.uber.com/static/mobile-content/membership/U1SP_billboard_and_genie.png",
                bg: "#fff2d9"
            },
            {
                title: "Enjoy a 10% discount (up to €2)",
                subtitle: "View details",
                img: "https://d3ktknrqa34sgg.cloudfront.net/uploads/images/f6cSh4SFiGpJKI2LBNBdZdAiE/AFcHgsOneI+EsYz4E=/2022-07-01/promo_billboard_image_v3%403x-8e8bcdb0-f966-11ec-8b6b-65dc0eb062ea.png",
                bg: "#addec9"
            },

            {
                title: "0 € Delivery Fee + 0€ Service Fee with Uber One",
                subtitle: "Free for a month",
                img: "https://cn-geo1.uber.com/static/mobile-content/membership/U1SP_billboard_and_genie.png",
                bg: "#fff2d9"
            },
            {
                title: "Enjoy a 10% discount (up to €2)",
                subtitle: "View details",
                img: "https://d3ktknrqa34sgg.cloudfront.net/uploads/images/f6cSh4SFiGpJKI2LBNBdZdAiE/AFcHgsOneI+EsYz4E=/2022-07-01/promo_billboard_image_v3%403x-8e8bcdb0-f966-11ec-8b6b-65dc0eb062ea.png",
                bg: "#addec9"
            },
        ]
    },
    // Restaurante 7
    {
        type: TypeItem.Restaurant,
        name: "Casa de Tacos",
        shippingCost: 3.8,
        score: 4.3,
        estimatedTime: "10-20 min",

        numberRatings: 98,
        typeFood: "Mexican",
        img: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWV4aWNhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        dishes: americanRestaurantDishes
    },
    // Restaurante 8
    {
        type: TypeItem.Restaurant,
        name: "Chez Croissant",
        shippingCost: 4.0,
        score: 4.8,
        estimatedTime: "20-30 min",

        numberRatings: 143,
        typeFood: "French",
        img: "https://images.unsplash.com/photo-1608855238293-a8853e7f7c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RnJlbmNoJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        dishes: americanRestaurantDishes
    },
    {
        type: TypeItem.Restaurant,
        name: "Flame Grillhouse",
        shippingCost: 4.5,
        score: 4.2,
        estimatedTime: "10-20 min",

        numberRatings: 92,
        typeFood: "Steakhouse",
        img: "https://images.unsplash.com/photo-1690983323238-0b91789e1b5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fFN0ZWFraG91c2UlMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        dishes: americanRestaurantDishes
    },
    // Restaurante 10
    {
        type: TypeItem.Restaurant,
        name: "Wok Star",
        shippingCost: 3.7,
        score: 4.0,
        estimatedTime: "50-60 min",

        numberRatings: 105,
        typeFood: "Chinese",
        img: "https://images.unsplash.com/photo-1550303659-a777c03a27bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fENoaW5lc2UlMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        dishes: americanRestaurantDishes
    },
    // Restaurante 11
    {
        type: TypeItem.Restaurant,
        name: "Mediterranean Delights",
        shippingCost: 4.2,
        score: 4.5,
        estimatedTime: "35-45 min",

        numberRatings: 132,
        typeFood: "Mediterranean",
        img: "https://images.unsplash.com/photo-1608480695771-c4bb16a829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWVkaXRlcnJhbmVhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        dishes: americanRestaurantDishes
    },
    // Restaurante 12
    {
        type: TypeItem.Restaurant,
        name: "Sabor Mexicano",
        shippingCost: 3.8,
        score: 4.3,
        estimatedTime: "45-55 min",

        numberRatings: 118,
        typeFood: "Mexican",
        img: "https://images.unsplash.com/photo-1625167359766-1514a5bc6618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fE1leGljYW4lMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        dishes: americanRestaurantDishes
    },
    // Restaurante 13
    {
        type: TypeItem.Restaurant,
        name: "Tokyo Sushi",
        shippingCost: 4.1,
        score: 4.6,
        estimatedTime: "25-45 min",
        numberRatings: 149,
        typeFood: "Japanese",
        img: "https://images.unsplash.com/photo-1509680859026-7d8cfc6894f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxKYXBhbmVzZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        dishes: americanRestaurantDishes
    },







];



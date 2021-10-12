import tea from './tea.jpeg';
import coffee from './coffee.jpg';
import coldPress from './coldPress.jpg';
import smoothies from './smoothies.jpg';
import chef from './chef.jpeg';
import sushi from './sushi.jpeg';
import soup from './soup.jpeg';
import salad from './salad.jpg';
import mains from './mains.jpeg';
import pizza from './pizza.jpg';
import sweet from './sweet.jpeg';

export const Menudata = [
    {
        index: 0,
        image: tea,
        tabName: "Hot Drinks",
        backgroundFill: "",
        displayWidth: "50vw",
        tabValues: [
            {
                title: "Wisdom of the Monks",
                detailedText: "Lavender, turmeric, lime zest and lime",
                subTextLeft: "Cup/Pot",
                subTextRight: "80/200"
            },
            {
                title: "Tea from the God's Pot",
                detailedText: "A delicious infusion of green cardamom, cinnamon, cloves and mint",
                subTextLeft: "Cup/Pot",
                subTextRight: "80/200"
            },
            {
                title: "Masala Chai",
                detailedText: "Chai made with our homemade indian spice mix and soy and coconut milk",
                subTextLeft: "Cup/Pot",
                subTextRight: "60/180"
            },
            {
                title: "Apple Cinnamon",
                detailedText: "Apples infused with cinnamon and mint",
                subTextLeft: "Cup/Pot",
                subTextRight: "100/260"
            },
            {
                title: "Hibiscus",
                detailedText: "Organic Rosella flowers intelligently brewed",
                subTextLeft: "Cup/Pot",
                subTextRight: "60/180"
            },
            {
                title: "Lavender",
                detailedText: "Lavender flowers infused in hot water",
                subTextLeft: "Cup/Pot",
                subTextRight: "80/240"
            },
            {
                title: "Matcha",
                detailedText: "Japanese ceremonial matcha tea",
                subTextLeft: "Cup/Pot",
                subTextRight: "80/120"
            },
          ]
    },
    {
        index: 1,
        image: coffee,
        tabName: "Coffee & Speciality Lattes",
        backgroundFill: "",
        displayWidth: "50vw",
        tabValues: [
            {
                title: "Espresso",
                detailedText: "Brewed using medium dark roasted 100% arabica beans",
                subTextLeft: "30ml",
                subTextRight: "100"
            },
            {
                title: "Doppio",
                detailedText: "Double shot espresso",
                subTextLeft: "50ml",
                subTextRight: "120"
            },
            {
                title: "Espresso Lungo",
                detailedText: "Espresso pulled long",
                subTextLeft: "60ml",
                subTextRight: "120"
            },
            {
                title: "Risteretto",
                detailedText: "A short shot of espresso",
                subTextLeft: "20ml",
                subTextRight: "100"
            },
            {
                title: "Black",
            },
            {
                title: "Americano",
                subTextRight: "100"
            },
            {
                title: "French Press",
                subTextRight: "150"
            },
            {
                title: "Aeropress",
                subTextRight: "150"
            },
            {
                title: "V60 Pour-Over",
                subTextRight: "150"
            },
            {
                title: "Beverages with our Signature Soy & Coconut Milk Blend recipe",
            },
            {
                title: "Cappuccino",
                detailedText: "Espresso, steamed milk, thick foam",
                subTextRight: "150"
            },
            {
                title: "Cafe Latte",
                detailedText: "Espresso, steamed milk, thin dense foam",
                subTextRight: "150"
            },
            {
                title: "Machhiato",
                detailedText: "Espresso, soy milk foam",
                subTextRight: "150"
            },
            {
                title: "Latte Machhiato",
                detailedText: "Cafe latte, thick foam",
                subTextRight: "140"
            },
            {
                title: "Cafe Au Lait",
                detailedText: "Filter coffee, warm milk",
                subTextRight: "160"
            },
            {
                title: "Cortado",
                detailedText: "1 oz Espresso, 1oz Steamed milk",
                subTextRight: "130"
            },
            {
                title: "Cafe Mocha",
                detailedText: "Espresso, cacao, steamed milk",
                subTextRight: "200"
            },
            {
                title: "Hot Chocolate",
                detailedText: "Cacao, sweet aromatic spices, steamed milk",
                subTextRight: "200"
            },
            {
                title: "Turmeric Latte",
                detailedText: "Organic turmeric, sweet aromatic spices, signature milk blend",
                subTextRight: "180"
            },
            {
                title: "Matcha Latte",
                detailedText: "Japanese matcha, signature milk blend, organic jaggery",
                subTextRight: "270"
            },
            {
                title: "Speciality Cold Coffee",
            },
            {
                title: "Cold Brew",
                subTextRight: "180"
            },
            {
                title: "Ice Latte",
                subTextRight: "180"
            },
            {
                title: "Ice Americano",
                subTextRight: "140"
            },
            {
                title: "Ice Mocha",
                subTextRight: "220"
            },
            {
                title: "Frappe",
                subTextRight: "220"
            },
            {
                title: "Affogato",
                subTextRight: "250"
            },
          ]
    },
    {
        index: 2,
        image: coldPress,
        tabName: "Cold Pressed Juices",
        displayWidth: "100vw",
        backgroundFill: "#0c460e",
        tabValues: [
            {
                title: "Wisdom of the Monks",
                detailedText: "Lavender, turmeric, lime zest and lime",
                subTextLeft: "Cup/Pot",
                subTextRight: "80/200"
            },
          ]
    },
    {
        index: 3,
        image: smoothies,
        tabName: "Smoothies",
        displayWidth: "34vw",
        backgroundFill: "",
        tabValues: [
            {
                title: "Wisdom of the Monks",
                detailedText: "Lavender, turmeric, lime zest and lime",
                subTextLeft: "Cup/Pot",
                subTextRight: "80/200"
            },
          ]
    },
    {
        index: 4,
        image: soup,
        tabName: "Soups",
        displayWidth: "32vw",
        backgroundFill: "",
        tabValues: [
            {
                title: "Wisdom of the Monks",
                detailedText: "Lavender, turmeric, lime zest and lime",
                subTextLeft: "Cup/Pot",
                subTextRight: "80/200"
            },
          ]
    },
    {
        index: 5,
        image: salad,
        tabName: "Salads",
        displayWidth: "34vw",
        backgroundFill: "",
        tabValues: [
            {
                title: "Wisdom of the Monks",
                detailedText: "Lavender, turmeric, lime zest and lime",
                subTextLeft: "Cup/Pot",
                subTextRight: "80/200"
            },
          ]
    },
    {
        index: 6,
        image: pizza,
        tabName: "Pizza",
        displayWidth: "100vw",
        backgroundFill: "",
        tabValues: [
            {
                title: "Wisdom of the Monks",
                detailedText: "Lavender, turmeric, lime zest and lime",
                subTextLeft: "Cup/Pot",
                subTextRight: "80/200"
            },
          ]
    },
    {
        index: 7,
        image: chef,
        tabName: "Chef's Creations",
        displayWidth: "67vw",
        backgroundFill: "",
        tabValues: [
            {
                title: "Wisdom of the Monks",
                detailedText: "Lavender, turmeric, lime zest and lime",
                subTextLeft: "Cup/Pot",
                subTextRight: "80/200"
            },
          ]
    },
    {
        index: 8,
        image: sushi,
        tabName: "Sushi Rolls",
        displayWidth: "33vw",
        backgroundFill: "",
        tabValues: [
            {
                title: "Wisdom of the Monks",
                detailedText: "Lavender, turmeric, lime zest and lime",
                subTextLeft: "Cup/Pot",
                subTextRight: "80/200"
            },
          ]
    },
    {
        index: 9,
        image: mains,
        tabName: "Mains",
        displayWidth: "50vw",
        backgroundFill: "",
        tabValues: [
            {
                title: "Wisdom of the Monks",
                detailedText: "Lavender, turmeric, lime zest and lime",
                subTextLeft: "Cup/Pot",
                subTextRight: "80/200"
            },
          ]
    },
    {
        index: 10,
        image: sweet,
        tabName: "Sweet Treats",
        displayWidth: "50vw",
        backgroundFill: "",
        tabValues: [
            {
                title: "Hazlenut Chocolate Mousse",
                detailedText: "Lavender, turmeric, lime zest and lime",
                subTextLeft: "Cup/Pot",
                subTextRight: "80/200"
            },
          ]
    },
];
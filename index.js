const menu = [
    {
        id: 1,
        title: "Fruits",
        category: "breakfast",
        price: 150.00,
        img: "img/fruit-salad.avif",
        desc: "A refreshing mix of seasonal fruits, perfect for a healthy start to your day.",
    },
    {
        id: 2,
        title: "Kachori",
        category: "lunch",
        price: 130.00,
        img: "img/recipe.webp",
        desc: "Crispy fried pastry filled with spicy lentils, served with tangy tamarind chutney.",
    },
    {
        id: 3,
        title: "French Fries",
        category: "snack",
        price: 100.00,
        img: "img/French images.jpeg",
        desc: "Golden and crispy French fries, seasoned to perfection, served with ketchup.",
    },
    {
        id: 4,
        title: "Idli",
        category: "breakfast",
        price: 150.00,
        img: "img/Idli.jpeg",
        desc: "Soft and fluffy steamed rice cakes, traditionally served with sambar and chutney.",
    },
    {
        id: 5,
        title: "Poha",
        category: "breakfast",
        price: 80.00,
        img: "img/poha.jpeg",
        desc: "Light and flavorful flattened rice, cooked with onions, mustard seeds, and spices.",
    },
    {
        id: 6,
        title: "Maggi",
        category: "snack",
        price: 100.00,
        img: "img/maggi.jpeg",
        desc: "Instant noodles cooked with vegetables and spices, a quick and tasty treat.",
    },
    {
        id: 7,
        title: "Samosa",
        category: "snack",
        price: 100.00,
        img: "img/Samosa.jpeg",
        desc: "Triangular pastry filled with spiced potatoes and peas, deep-fried to golden perfection.",
    },
    {
        id: 8,
        title: "Jeera Rice",
        category: "lunch",
        price: 200.00,
        img: "img/jeera.jpeg",
        desc: "Fragrant basmati rice tempered with cumin seeds, a perfect side dish for curries.",
    },
    {
        id: 9,
        title: "Matar Pulao",
        category: "Dinner",
        price: 250.00,
        img: "img/matar.jpeg",
        desc: "Aromatic rice cooked with green peas and spices, a delightful vegetarian dish.",
    },
    {
        id: 10,
        title: "Paneer Poori",
        category: "Dinner",
        price: 199.00,
        img: "img/Matar-Paneer.jpg",
        desc: "Fluffy deep-fried bread served with a rich and creamy paneer curry.",
    },
    {
        id: 11,
        title: "Dalia",
        category: "breakfast",
        price: 100.00,
        img: "img/dalia.jpeg",
        desc: "Healthy cracked wheat porridge, cooked with milk and nuts, a nutritious choice.",
    },
    {
        id: 12,
        title: "Egg",
        category: "breakfast",
        price: 150.00,
        img: "img/egg.jpeg",
        desc: "Classic boiled eggs, served with salt and pepper, simple and satisfying.",
    },
    {
        id: 13,
        title: "Dosa",
        category: "breakfast",
        price: 199.00,
        img: "img/Dosa.jpeg",
        desc: "Crispy thin pancake made from fermented rice batter, served with sambar and chutney.",
    },
    {
        id: 14,
        title: "French Toast",
        category: "breakfast",
        price: 99.00,
        img: "img/FrenchToast.jpeg",
        desc: "Golden brown toast dipped in egg batter, topped with powdered sugar and syrup.",
    },
    {
        id: 15,
        title: "Sprouts",
        category: "breakfast",
        price: 120.00,
        img: "img/sprouts.jpeg",
        desc: "Fresh and crunchy mixed sprouts salad, dressed with lemon juice and spices.",
    },
    {
        id: 16,
        title: "Maggi",
        category: "breakfast",
        price: 150.00,
        img: "img/maggi.jpeg",
        desc: "Quick and easy instant noodles, flavored with spices and vegetables.",
    },
    {
        id: 17,
        title: "Omelette",
        category: "breakfast",
        price: 100.00,
        img: "img/omelette.webp",
        desc: "Fluffy omelette filled with cheese, onions, and peppers, a protein-packed breakfast.",
    },
    {
        id: 18,
        title: "Sandwich",
        category: "breakfast",
        price: 150.00,
        img: "img/sandwich.jpeg",
        desc: "Toasted sandwich with a filling of your choice, served with a side of fries.",
    },
    {
        id: 19,
        title: "Sandwich",
        category: "snack",
        price: 120.00,
        img: "img/sandwich.jpeg",
        desc: "Perfectly toasted sandwich with cheese and veggies, a quick and tasty snack.",
    },
    {
        id: 20,
        title: "Dosa",
        category: "snack",
        price: 200.00,
        img: "img/Dosa.jpeg",
        desc: "Light and crispy dosa, a popular South Indian snack, served with chutney.",
    },
    {
        id: 21,
        title: "Idli",
        category: "snack",
        price: 150.00,
        img: "img/Idli.jpeg",
        desc: "Soft rice cakes, a perfect snack to keep you going through the day.",
    },
    {
        id: 22,
        title: "Noodles",
        category: "snack",
        price: 300.00,
        img: "img/noodles.jpeg",
        desc: "Stir-fried noodles with vegetables and soy sauce, a delicious snack option.",
    },
    {
        id: 23,
        title: "Chaat",
        category: "snack",
        price: 100.00,
        img: "img/Chaat.jpeg",
        desc: "A tangy and spicy mix of crispy fried dough, potatoes, and chutneys.",
    },
    {
        id: 24,
        title: "Cheese Balls",
        category: "snack",
        price: 200.00,
        img: "img/CheeseBalls.jpeg",
        desc: "Golden and crispy on the outside, gooey and cheesy on the inside.",
    },
    {
        id: 25,
        title: "Dhokla",
        category: "snack",
        price: 150.00,
        img: "img/Dhokla.jpeg",
        desc: "Soft and spongy steamed gram flour cake, garnished with mustard seeds and cilantro.",
    },
    {
        id: 26,
        title: "Pav Bhaji",
        category: "lunch",
        price: 200.00,
        img: "img/PavBhaji.jpeg",
        desc: "Spicy mashed vegetable curry served with buttered bread rolls, a Mumbai favorite.",
    },
    {
        id: 27,
        title: "Paneer Butter Masala",
        category: "lunch",
        price: 250.00,
        img: "img/PaneerButterMasala.jpeg",
        desc: "Creamy and rich paneer curry, cooked in a spiced tomato gravy.",
    },
    {
        id: 28,
        title: "Butter Chicken",
        category: "lunch",
        price: 300.00,
        img: "img/ButterChicken.jpeg",
        desc: "Juicy chicken pieces in a creamy tomato-based sauce, a classic Indian dish.",
    },
    {
        id: 29,
        title: "Dal Makhani",
        category: "lunch",
        price: 200.100,
        img: "img/DalMakhani.jpeg",
        desc: "Rich and creamy black lentil curry, slow-cooked with butter and spices.",
    },
    {
        id: 30,
        title: "Mixed Veg Sabzi",
        category: "Dinner",
        price: 99.00,
        img: "img/MixedVegSabzi.jpeg",
        desc: "A healthy and colorful mix of vegetables cooked with Indian spices.",
    },
    {
        id: 31,
        title: "Kadhi Chawal",
        category: "Dinner",
        price: 199.00,
        img: "img/KadhiChawal.jpeg",
        desc: "Tangy yogurt-based curry served with steamed basmati rice, a comforting meal.",
    },
    {
        id: 32,
        title: "Chicken Curry",
        category: "Dinner",
        price: 250.00,
        img: "img/ChickenCurry.jpeg",
        desc: "Spicy and flavorful chicken curry, best enjoyed with rice or roti.",
    },
   
    {
        id: 34,
        title: "Paneer Tikka",
        category: "Dinner, lunch",
        price: 189.00,
        img: "img/PaneerTikka.jpeg",
        desc: "Grilled paneer cubes marinated in aromatic spices, served with chutney.",
    },
    {
        id: 35,
        title: "Paneer Tikka",
        category: "lunch",
        price: 189.00,
        img: "img/PaneerTikka.jpeg",
        desc: "Tender paneer chunks grilled to perfection, infused with smoky flavors.",
    },
    {
        id: 37,
        title: "Kadhi Chawal",
        category: "lunch",
        price: 199.00,
        img: "img/KadhiChawal.jpeg",
        desc: "A classic North Indian dish of yogurt-based curry served over steamed rice.",
    },
    {
        id: 38,
        title: "Mixed Veg Sabzi",
        category: "lunch",
        price: 99.00,
        img: "img/MixedVegSabzi.jpeg",
        desc: "A medley of seasonal vegetables cooked with Indian spices.",
    }
    
    
];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll('.filter-btn');

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    

    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all']);
});

filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if (category === 'all') {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
    });
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item menu-item-custom">
        <img src="${item.img}" class="photo" alt="${item.title}">
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">Rs.${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
            </div>
    </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;

}
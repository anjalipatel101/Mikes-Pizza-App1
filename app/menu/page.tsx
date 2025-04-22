"use client";

import { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem";
import Footer from "../components/Footer";
import { getMenu } from "../api/menu.jsx";
type Category = "Pizza" | "Sides" | "Drinks" | "Desserts";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
}

//const menuItems = MenuItem[] = [getMenu()];
//console.log(getMenu());
//console.log(menuItems);

// const menuItems: MenuItem[] = [
//   {
//     id: "1",
//     name: "Deluxe Pizza",
//     description:
//       "A loaded combination of pepperoni, sausage, mushrooms, onions, and green peppers",
//     price: 18.99,
//     image: "/images/deluxe.png",
//     category: "Pizza",
//   },
//   {
//     id: "2",
//     name: "Classic Cheese Pizza",
//     description: "Our signature sauce topped with premium mozzarella cheese",
//     price: 14.99,
//     image: "/images/cheese.png",
//     category: "Pizza",
//   },
//   {
//     id: "3",
//     name: "Meat Lovers Pizza",
//     description:
//       "Loaded with pepperoni, Italian sausage, ham, bacon, and seasoned beef",
//     price: 19.99,
//     image: "/images/meat.png",
//     category: "Pizza",
//   },
//   {
//     id: "4",
//     name: "Pepperoni Pizza",
//     description: "Classic pepperoni with our signature sauce and mozzarella",
//     price: 16.99,
//     image: "/images/pep.png",
//     category: "Pizza",
//   },
//   {
//     id: "5",
//     name: "Margherita Pizza",
//     description: "Fresh tomatoes, mozzarella, basil",
//     price: 15.99,
//     image: "/images/margherita_pizza.jpg",
//     category: "Pizza",
//   },
//   {
//     id: "6",
//     name: "BBQ Chicken Pizza",
//     description: "Grilled chicken, BBQ sauce, red onions",
//     price: 17.99,
//     image: "/images/bbq_pizza.jpg",
//     category: "Pizza",
//   },
//   {
//     id: "7",
//     name: "Garlic Breadsticks",
//     description: "Fresh-baked breadsticks with garlic butter",
//     price: 5.99,
//     image: "/images/garlic_breadsticks.jpg",
//     category: "Sides",
//   },
//   {
//     id: "8",
//     name: "Caesar Salad",
//     description: "Romaine lettuce, croutons, parmesan",
//     price: 7.99,
//     image: "/images/caesar_salad.jpg",
//     category: "Sides",
//   },
//   {
//     id: "9",
//     name: "Fountain Drink",
//     description: "Your choice of soft drink",
//     price: 2.99,
//     image: "/images/fountain_drinks.jpg",
//     category: "Drinks",
//   },
//   {
//     id: "10",
//     name: "Chocolate Lava Cake",
//     description:
//       "Warm chocolate cake with a molten center, topped with vanilla ice cream and chocolate drizzle",
//     price: 6.99,
//     image: "/images/chocolate_lava_cake.jpg",
//     category: "Desserts",
//   },
// ];

const categories = ["All", "Pizza", "Sides", "Drinks", "Desserts"];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const cachedMenu = localStorage.getItem("menuItems");
    console.log(cachedMenu);
    if (cachedMenu) {
      setMenuItems(JSON.parse(cachedMenu));
    } else {
      (async () => {
        const response = await getMenu();
        const menu = response.menu;
        setMenuItems(menu);
        localStorage.setItem("menuItems", JSON.stringify(menu));
      })();
    }
  }, []);

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const handleAddToCart = (id: string) => {
    // TODO: Implement cart functionality
    console.log(`Added item ${id} to cart`);
  };

  console.log(menuItems);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow">
        <div className="pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    selectedCategory === category
                      ? "bg-[#0069a7] text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <MenuItem
                  key={item.id}
                  {...item}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

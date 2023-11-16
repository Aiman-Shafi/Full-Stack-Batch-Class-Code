import { useState } from "react";
import "./App.css";

const burgerMenu = [
  {
    id: 1,
    name: "Classic Beef Burger",
    description: "A traditional beef burger with lettuce, tomato, and cheese.",
    price: 8.99,
  },
  {
    id: 2,
    name: "Veggie Delight Burger",
    description:
      "A hearty vegetarian burger made with a blend of garden vegetables.",
    price: 7.99,
  },
  {
    id: 3,
    name: "Spicy Chicken Burger",
    description:
      "Grilled chicken breast topped with spicy sauce, lettuce, and tomato.",
    price: 9.99,
  },
  {
    id: 4,
    name: "BBQ Bacon Burger",
    description:
      "Beef burger with crispy bacon, BBQ sauce, and cheddar cheese.",
    price: 10.99,
  },
  {
    id: 5,
    name: "Mushroom Swiss Burger",
    description: "Beef burger topped with sautéed mushrooms and Swiss cheese.",
    price: 9.49,
  },
  {
    id: 6,
    name: "Blue Cheese Burger",
    description: "Beef burger with bold blue cheese and caramelized onions.",
    price: 10.49,
  },
  {
    id: 7,
    name: "Tex-Mex Burger",
    description:
      "A beef burger with jalapeños, avocado, and pepper jack cheese.",
    price: 10.99,
  },
  {
    id: 8,
    name: "Aloha Chicken Burger",
    description:
      "Grilled chicken with pineapple, teriyaki sauce, and Swiss cheese.",
    price: 9.99,
  },
  {
    id: 9,
    name: "Black Bean Burger",
    description:
      "A flavorful black bean patty with lettuce, tomato, and avocado.",
    price: 8.49,
  },
  {
    id: 10,
    name: "Triple Cheese Burger",
    description: "Three beef patties with cheddar, Swiss, and blue cheese.",
    price: 12.99,
  },
];

// let count = 10;

// function handleCount() {
//   count = count + 1;
// }

function App() {
  const [name, setName] = useState("Parves");
  const [theme, setTheme] = useState("light");

  function handleNameChange() {
    setName("Parves");
    // name = "Parves";
  }

  function handleDarkMode() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={`App ${theme}`}>
      <h2>Hello, I'm {name}</h2>
      {/* <button onClick={handleNameChange}>Login</button> */}
      <button onClick={handleDarkMode}>
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
      {/* <Main /> */}
    </div>
  );
}

function CounterApp() {
  const [count, setCount] = useState(10);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  return (
    <header>
      <h2>Let's Learn React v {count}</h2>
      <button onClick={increaseCount}>Add Count</button>
      <button onClick={decreaseCount}>Remove Count</button>
    </header>
  );
}

function Main() {
  let name = "Rakib";
  let age = 45;
  // let burgerList = burgerMenu;
  let burgerList = [];
  console.log(burgerList.length);
  // let sentence = `hello this is ${name}`

  console.log(burgerList);

  if (burgerList.length === 0) {
    return (
      <div>
        <p>We are not taking any orders at the moment</p>
      </div>
    );
  }

  return (
    <main>
      {/* <h5>Body</h5> */}
      <h4>Buger Menu</h4>
      {/* <BurgerMenu></BurgerMenu> */}
      {/* <BurgerMenu burger="american flavour" price="$20"></BurgerMenu>
      <BurgerMenu burger="mexican flavour" price="$50"></BurgerMenu> */}
      {/* <PizzaMenu pizzaName="Mexican Pizza" price="$60"></PizzaMenu>
      <PizzaMenu pizzaName="Cheese Pizza" price="$30"></PizzaMenu> */}

      {/* {burgerList.map((burger) => (
        
      ))} */}

      {/* <BurgerMenu burgerName={burger.name} price={burger.price} /> */}

      <div className="burger-menu">
        {burgerList.length > 0 ? (
          burgerList.map((burger) => (
            <BurgerMenu burger={burger} key={burger.id}></BurgerMenu>
          ))
        ) : (
          <p>We are currently under construction!</p>
        )}
      </div>
    </main>
  );
}

function BurgerMenu({ burger }) {
  console.log(burger);
  const { name, price, id } = burger;

  return (
    <div className="burger-card">
      <span>{id}</span>
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
}

// function BurgerMenu(props) {
//   console.log(props);
//   return (
//     <div className="burger-card">
//       <h3>{props.burgerName}</h3>
//       <p>${props.price}</p>
//     </div>
//   );
// }

// function PizzaMenu(props) {
//   console.log(props);
//   return (
//     <div style={{ border: "2px solid gray" }}>
//       <h4>{props.pizzaName}</h4>
//       <p>Lorem ipsum dolor sit.</p>
//       <p>{props.price}</p>
//     </div>
//   );
// }

export default App;

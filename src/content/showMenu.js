import slice from "../img/pizzaslice.png";

export function showMenu() {
    let html = `
        <ul id="menu">
    <li id="1">
        <div>
            <img src="${slice}" class="pizza-img-small" alt="Pizza">
        </div>
        <div>
            <p class="dish-title">Pizza Cowabunga</p>
            <p class="dish-description">
                Pizza with fresh tomatoes, basil and black pepper, topped with Mozarella.
            </p>
        </div>
    </li>

    <li id="2">
        <div>
            <img src="${slice}" class="pizza-img-small" alt="Pizza">
        </div>
        <div>
            <p class="dish_title">Pizza Ninja</p>
            <p class="dish-description">
                Pizza with Salami, Paprika, mushrooms and extra anchovis.
            </p>
        </div>
    </li>

    <li id="3">
        <div>
            <img src="${slice}" class="pizza-img-small" alt="Pizza">
        </div>
        <div>
            <p class="dish-title">Pizza Sensei</p>
            <p class="dish-description">
                Pizza with Paprika, Peperoni, Black Olives, and extra Oregano.
            </p>
        </div>
    </li>

    <li id="4">
        <div>
            <img src="${slice}" class="pizza-img-small" alt="Pizza">
        </div>
        <div>
            <p class="dish-title">Pizza Shredder</p>
            <p class="dish-description">
                Pizza with hot Salami, Peperoni, Chili flakes, Mushrooms and Garlic oil. Shreds your sense of taste!
            </p>
        </div>
    </li>

    <li id="5">
        <div>
            <img src="${slice}" class="pizza-img-small" alt="Pizza">
        </div>
        <div>
            <p class="dish-title">Party Pizza</p>
            <p class="dish-description">
                Order your favourite Pizza in XXL size. One of it will be enough for your Ninja Clan at home. A few of these may be enough for the whole foot gang.
            </p>
        </div>
    </li>
</ul>`;

return html;
}
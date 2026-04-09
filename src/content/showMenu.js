import slice from "../img/pizzaslice.png";
import leonardo from "../img/leonardo.png";
import michelangelo from "../img/michaelangelo.png";
import donatello from "../img/donatello.png";
import raphael from "../img/raphael.png";
import shredder from "../img/shredder.png";


export function showMenu() {
    let html = `
    <div id="icons_gallery">
        <img class="icon margin-vertical" src="${leonardo}" title="Leonardo" alt="Cartoon icons created by      surang - Flaticon">
        <img class="icon margin-vertical" src="${michelangelo}" title="Michelangelo" alt="Cartoon icons created by      surang - Flaticon">
        <img class="icon margin-vertical" src="${donatello}" title="Donatello" alt="Cartoon icons created by      surang - Flaticon">
        <img class="icon margin-vertical" src="${raphael}" title="Raphael" alt="Cartoon icons created by      surang - Flaticon">
    </div>
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
            <p class="dish-title">Pizza Ninja</p>
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
                Order your favourite Pizza in XXL size. One of it will be enough for your Ninja Clan at home. A few of these may be enough for the whole Foot Clan.
            </p>
        </div>
    </li>
</ul>
<img class="icon margin-vertical" src="${shredder}" title="Shredder" alt="Cartoon icons created by      surang - Flaticon">
`;

return html;
}
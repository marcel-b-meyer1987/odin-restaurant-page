import party from "../img/pizzaparty.jpeg";
import leonardo from "../img/leonardo.png";
import michelangelo from "../img/michaelangelo.png";
import donatello from "../img/donatello.png";
import raphael from "../img/raphael.png";

const turtles = [leonardo, michelangelo, donatello, raphael];

export function showHome() {

    let randomTurtle = turtles[Math.floor(Math.random()*4)];

    let html = `
        <h1>It's pizza time!</h1>
        <p class="margin-vertical">Welcome to the Ninja Turtles' Pizza palace!</p>
        <img class="icon margin-vertical" src="${randomTurtle}" title="Leonardo" alt="Cartoon icons created by surang - Flaticon">
        <p class="margin-vertical">If you are looking for delicious pizza, you have come to the right place. Enjoy!</p>
        <img class="party-img" src="${party}" alt="Pizza Party">
    `;

return html;
}
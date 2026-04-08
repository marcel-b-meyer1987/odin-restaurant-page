import party from "../img/pizzaparty.jpeg";

export function showHome() {

    let html = `
        <h1>It's pizza time!</h1>
        <p>Welcome to the Ninja Turtles' Pizza palace!</p>
        <p>If you are looking for delicious pizza, you have come to the right place. Enjoy!</p>
        <img src="${party}" alt="Pizza Party">
    `;

return html;
}
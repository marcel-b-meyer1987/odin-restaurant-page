// DIETER

import splinter from "../img/splinter.png";

export function showAbout() {
    let html = `
            <h1>About Us</h1>
            <p id="opening-hours">Opening Hours:<br>
            Mondays - Saturdays: 11am - 2am | Sundays: 11am - 23pm</p>
            <h2>You can find us here:</h2>

            <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.4820293694393!2d-73.98185153033731!3d40.76360571397782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f83f2fe665%3A0x8287bebd69b6efcc!2s%4054th%20street%2C%20841%207th%20Ave%2C%20New%20York%2C%20NY%2010019%2C%20USA!5e0!3m2!1sde!2sde!4v1775735769242!5m2!1sde!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <p style="text-align: center; margin-bottom: 2rem; margin-top: 1rem;">(Climb down the manhole and follow the delicious smell!)</p>

            <h2>A little bit of history</h2>
            
            <p class="margin-vertical">
                You may our may not have figured it out yet, but this is not the website of a real Pizza restaurant. (Sorry to disappoint you in case you were looking forward to stop by and order a pizza!)
            </p>
            <p class="margin-vertical">
                This page was created because I am currently working my way through the curriculum of <a href="https://www.theodinproject.com/about">The Odin Project</a> and I've recently come across the Ninja Turtles somewhere on a streaming platform. Since I personally absolutely share the Ninja Turtles' love for Pizza, the choice was made easily enough. <br>
                (I figured if the assignment is to create a restaurant page for a fake restaurant, it might as well be a fake restaurant run by my green, martial arts fighting childhood heroes.)
            </p>
            <p>
                Remembering my childhood aroused a little bit of nostalgia at that moment: How cool the Ninja Turtles were back in the day. If you were born sometime between 1985 and 1990, chances are that you also grew up with the Ninja Turtles and were just as fond of them as me.
            </p>
            <p>
                The Ninja Turtles were everywhere: Cartoon shows on TV (and video tape!), cinema, comic magazines and most of all: Toy stores!
                My mother keeps telling me one story from when I was little: I wanted to be one of the turtles, so I took a green marker while she was not watching and painted myself from head to foot. (My mother certainly had fun when she put me in bath - Cowabunga!) <br>
                I wasn't the only hardcore fan, however. Literally every boy at the time had one or the other toy of the brand. Many of them wanted to learn Karate, Ninjutsu or whatever they thought the turtles were doing. The turtles sure had an impact on us.
            </p>
            <p class="margin-vertical">
                So, this page is also a tribute to a group of cartoon heroes who have accompanied me and many of my friends in our childhood and gave us many hours of playing fun or fun watching beautiful TV shows.
            </p>
            <p class="margin-vertical">
                If you've read this far and if you can relate, I hope I could remind you of a time that I personally love to remember.
            </p>
            <p>
                Go ninja, go ninja, go!
            </p>
            <img class="icon margin-vertical" src="${splinter}" title="Splinter" alt="Cartoon icons created by surang - Flaticon">
    `;

return html;
}
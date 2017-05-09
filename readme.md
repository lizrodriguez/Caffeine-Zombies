## Caffeine Zombies!

by Liz Rodriguez

https://lizrodriguez.io/projects/caffeinezombies

I decided to create a game using HTML, CSS and Javascript with JQuery. My approach was to put a fun spin on a traditional click and shoot game.  I love coffee, and have been drinking plenty of it during these weeks of learning, so I thought why not try to incorporate that into my game!

My game premise is the following:
 "It's 6am and the local workers need their caffeine fix. You are the local cafe barista and see a horde of caffeine-needing zombies are coming your way. "Shoot" espresso at the zombies before they reach you at the counter to make them happy and earn points. They will gain points if you don't send them espresso and then leave angry. They need their caffeine!"

My approach was to first write out my ideas on good old paper and pen in my notebook. I've included some photos from my sketches in the "sketches" folder.

I then wrote some psueudo code in order to get my thoughts aligned and write our my logic in "pseudocode.txt".

After that I started to construct my game's "skeleton" with HTML, deciding on what pieces of the board I'll show, and what to draw on the screen.  

I then created some basic CSS to style the cafe. I also created little characters for my "zombies" from scratch using the website http://www.piskelapp.com/. THey are very basic, but I plan to replace them with well drawn out "pixelated" characters soon.

I used two images from https://pixabay.com/ for the cafe store front, as well as the inside cafe image.  I then gave them a "pixelated" effect using the site http://lunapic.com/.  

As a little fun for the cursor movement, I decided to use an image from an artist on deviantArt named "Madgharr" asking for permission. http://madgharr.deviantart.com/art/Coffee-16x16-369083436. The coffee cup shows when "shooting" it at the zombies. Ideally I would like to show motion with the cursor, so hopefully can figure out how to do that in the future!

I created a timer (default is 30 seconds), as well as kept score on the screen. I was also able to create "easy" and "hard" levels.

The unsolved problems I have are:

1. The score pops up after you or the zombie gets a score. I'd like for it to show for the entire game.

2. Timing of the zombies going on screen was tough, as I had three "stages" of anger.  I used setTimeout, but due to the nature of that function, found it a bit inconsistent.


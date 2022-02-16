# False Dichotomy - Nicholas' Assignment 1

The webiste is live at https://nicholasraffone.github.io/commlab_asg1/

## Description

### *"Hey, what if we spliced clips of us speaking into a camera?"*

What started as a visual collection of various pieces of famous media soon turned into a display of the juxtaposition of two extremes in media: the overly serious tones found in political speeches and the goofyness found in comedies.
However, these two extremes fail to illustrate the human condition as our day to day lives normally fall between somewhere on this spectrum, hence the name **False Dichotomy** in my attempt to illustrate how life isn't all that black and white.

I wanted to highlight this monochrome color scheme of the video in the website by having the contents on the screen split with black background on white text, and white background on black text that dynamic shifts based on user input.
The overall color scheme, however, still felt quite serious, so I decided to use very stylized writing for the descriptions of the media we depicted as well as the descriptions of the actors.

For the tagline of the movie, I wanted the viewer to understand how dynamic media and how our daily experiences fall on different parts of the serious<->goofy spectrum. I decided to get a random Kanye quote, which I believe, is perhaps one of the most dynamic tweeters in this era with quotes ranging from:
> We as a people will heal. We will insure the well being of each other

to

> Man... whatever happened to my antique fish tank?

## Implementation

In my wireframes, I knew I wanted to have a split black and white screen for the home page, so I did this by having a footer at the bottom of the contents, and a flexbox taking up the remaining space.
The split black and white were also a flexbox, and I positioned the video, title, and tagline text as absolute positions on top of it, using mix-blend-mode: difference to ensure that the text was readable.
The tagline was collected through the Kanye quotes API, suitably named https://kanye.rest/ and was retreived on page load using JavaScript and the `fetch` function. 
I also added a fixed header so that users could easily navigate between the different pages, with the current page having an underline for the user.

The inspiration page is a collection of cards that feature an image, title, and text for each of the 6 works we used, along with a title and overall description of the film.
Each item grows on hover so the page feels less static, and is a clickable link to a video or site showcasing the work, so that users are able to see the original context of the media we used.
The cards were divided through the use of a grid display, and each individual item is a flexbox.

The cast page is simply a large flexbox with contrasting colors for each actor, and photos take up a quarter of the screen for each actor, along with their descriptions. 

The interactive feature of this website, is the reverse button found on the end of the header. This button reverses all white backgrounds and text to black and vice versa.
Adding a transition duration allowed for smooth movement, helping with the flow of the website. 
This was done in JavaScript by having the button listen for clicks, then adding and removing classes to components that had to swap black and white based on a `reversed` variable in JS.
One file is used for all of the pages, and I achieved this without errors by using optional chaining in JavaScript, ensuring that classes are only changed for elements that are found on the page.

There is also a black cover I added which fades away on page load. This was achieved by having a fixed 100vw, 100vh black background div across the whole screen, which visibility decreased as the page loaded.
This eases in the viewer, and feels more professional compared to elements popping up right from page load.

## Reflection
I think I was able to create a website that matched the theme of the video. While I extrapolated and exaggerated a lot of the meaning that could be derived from such a rushed work, I believe that there is a lot of joy to be found in creating such a piece.
I am especially proud of how the way the website moves isn't blocky, as I added the transitions to the website to ensure the user experience flowed well. 
Furthermore, I think the hover interactions on the inspiration page add another layer to the user experience, as the user is able to see their mouse movements have an effect on the way the page behaves.

However, I would want to add mobile responsiveness, as the webiste somewhat falls apart on smaller screens, but that could be remedied with the addition of a collapsible sidebar and single column grids.
I would also want to clean up the JavaScript implementation, as it is all on one file. 
Finding ways to modularize the file would benefit the readability of the code, and prevent errors from spilling over to other pages.
In addition, I would like to find ways to experiment with the middleground discussed, as the name False Dichotomy indicates a third alternative, perhaps through an additional gray page that focuses on media that really show what it's like to be human.

I believe I have found a newfound appreciation for utility-first CSS frameworks, as CSS files tend to get quite large working with multiple pages, and errors can come out of left field without strict naming conventions. 
All in all, I find this website to be a successful thematic representation of the movie Nathan and I created, and I had a lot of fun incorporating the various features and components that make up the site.

> "I'll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying." - Kanye REST


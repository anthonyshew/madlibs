# Welcome to Mad Libs
#### Exactly like the Mad Libs from when you did when you are a kid. Fill in the blanks and end up with a wacky story!

If you are a frequenter of Github, feel free to browse this repository to learn more about my skills.

If you aren't a fellow programming junkie, you can visit this project at [www.shewsmadlibs.netlify.com/](https://www.shewsmadlibs.netlify.com/) and make up a fun story yourself!

## About This Project

This project is built using React for a front-end framework and SASS for styling. Additionally, animations are handled by the react-transition-group package. It is served by Netlify on the backend for a simple, fast, reliable, serverless experience that I can depend on.

## Lessons Learned
- **Step-based Project**  - I was interested in doing Mad Libs for a couple reasons, the most principal being that I realized I hadn't done any "step-by-step" front-ends yet. To accomplish this, I used the top-level <App /> component's state as a shared state for the rest of the components and brought their state down to make sure everything stayed consistent. Of course, lifting the state back up was integral in making sure that the app always was using the same data - all the time.

- **SVG Creation** - I had made rudimentary SVGs in the past just because I heard the abbreviation "SVG" early in my learning and decided I needed to know how to make such art myself. I ended up with a few circles and squares on a page so the classic "Mad Libs smiley" in the header was my first actual SVG drawing that I can recall. Of course, this drawing is pretty simple compared to what SVG is capable of doing but I'm sure I'll be making something much more complex in the near future.

- **Custom Scrollbars** - I knew I had seen it before but had never actually done it myself. I put so much effort into giving my app the look and feel of Mad Libs pages that once I saw the default scrollbar on one of my nested divs, I had to figure out how to change it. Luckily, it only takes a few more SASS classes and styles to handle this; I thought it would be much more involved. Lesson learned!

## Challenges & Improvements Ahead
- **More Nostalgia!** - Opening up on a Mad Libs-esque cover would be a great way to add some more nostalgia as well as make the project feel more "real." I really want to make this app feel like you're holding a Mad Libs book like you did during your childhood so a cover page would only be right. Click or press a button and you get to go right into the book. I also want a page turning animation instead of fading the steps in and out of each other.

- **More Stories** - Did I just make a Mad Libs book that has two stories and a test story? Yup. Updating to create more stories will be really simple. All I have to do is type them out in the stories.json file. The rest of the app will update accordingly such that I won't have to do anything else! Well coded, Shew.

- **Meta Information** - Well, this is an easy one but an ever present reminder to pay attention to the little things. I didn't update the manifest.json or index.html page with appropriate information. Small and annoying, but easy.

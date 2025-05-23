# BTEC Level 3 Web Dev

## Table of contents

- [Introduction](#introduction)
- [Project planning](#project-planning)
- [Requirements](#requirements)
- [Design](#design)
- [Implementation](#implementation)
- [Test plan and functionality checklist](#test-plan-and-functionality-checklist)
- [Feedback, changes, and optimisations](#feedback-changes-and-optimisations)
- [Final review and evaluation](#final-review-and-evaluation)

---

# Introduction

This is a project created for my BTEC Level 3 Computing Unit 15 (Web Development) 2<sup>nd</sup> assignment. Our brief
stated that we were to act as junior web developers, hired at a web development company named Hot Beans Web and training
to create a new section of the company's website that promotes it to "prospective employees". This is my attempt at that
website section. The following README contains an overview of my design and development process, as well as
justifications and evaluations of myself and my code, as required by the assignment criteria.

Final version hosted at: <https://kaoala7577.github.io/BTEC-HBW/>

---

# Project planning

I began this project by outlining the client requirements shown in the next section, so I had a better idea of where my
focus was best set. From there, I created the wireframes shown in the design section and reviewed them with classmates
to ensure adequacy. Then, it was onto programming and HTML styling. This planning process was not overly burdened with
strict deadlines or rigid methodological processes, though it was still structured in its approach, ending up as
something of a loose waterfall model.

Getting my head around HTML and its limitations took some time, and I found myself struggling at a very early hurdle as
I tried to work out how to create the logo scrolling feature as it required additional JavaScript. Learning the
fundamentals required and fixing all the bugs that arose was time-consuming and draining, so, as evidenced by my commit
history, it took a while for this project to really get going. Once it did, though, in mid-May, I made significant
progress and met the majority of my targets laid out in the following section.

I do regret not using my overall on this assignment more wisely. However, it makes sense in the context of how much I
pushed my knowledge and skills, and with knowing how many other assignments I had running concurrently to this one. In
the end, I submitted the assignment on time with a mostly functional website. My full thoughts on how development went
can be found in the [final evaluation](#final-review-and-evaluation).

---

# Requirements

The client requirements listed by the assignment brief were as follows.

The company requires the website to have:

- A profile of the company itself.
- Profiles of existing trainee web developers.
- Job specifications and required qualifications.
- An online application form.
- Links to web development courses.

They further stated that: *"The target audience for the site is people who have completed training courses or
qualifications related to web development and are now looking for a job as a web developer."*

---

# Design

## Wireframes

With client requirements established, I created a wireframe of what I imagined the website to look like. This is what
that wireframe looked like:
![A wireframe for each page of the website](/assets/images/Wireframe.png)

## Visual design

The colour palette I chose was taken from the company logo provided to me. The HBW logo has a gradient from
green (<span style="color: #00ff99">#00ff99</span>) to blue (<span style="color: #00a1fe">#00a1fe</span>) that I
extracted to use for the background and other elements such as the quotes surrounding client reviews and the phone and
email symbols in the footer.

The original company logo provided to me also came with a background which was roughly <span style="color: #608065">
#608065</span> in colour. I decided to disregard this colour in the palette as it was so desaturated and drab compared
to the other two in the palette, and I severely struggled to make it look visually cohesive.

In its place, I used <span style="color: #f8f9fa;background-color: black">#f8f9fa</span> as a light
colour, <span style="color: #343a40;background-color:white">#343a40</span> as a dark text colour,
and <span style="color: #2c3e50">#2c3e50</span> as a darker secondary colour which all serve to
highlight <span style="color: #00ff99">#00ff99</span> and <span style="color: #00a1fe">#00a1fe</span> as the primary
colours of the palette, rather than muddy them.

---

# Implementation

The website was made using HTML, CSS, JavaScript, and the Bootstrap framework. Code was built from various sources,
including classroom snippets and the wider internet, and credited where necessary. The final build can be
found [here](https://kaoala7577.github.io/BTEC-HBW/), the source code can be
found [here](https://github.com/kaoala7577/BTEC-HBW), and a list of changes (commits)—a timeline of implementations—can
be found [here](https://github.com/kaoala7577/BTEC-HBW/commits/main/).

---

# Test plan and functionality checklist

The following has been most thoroughly tested on Chrome using a laptop computer on Windows 11 OS. Inspect element's
mobile layout emulator has been the main way of testing for mobile, but a Sony Xperia 10 V has also been used, granted
in lesser depth.

## Common elements

### Navbar

- [x] Logo and company name link to the index page
- [x] All navigation links link to their respective pages
- [x] "Apply now" button links to the job application form
- [x] "Apply now" button fills in upon hover
- [x] Navbar collapses to a hamburger menu when small enough

### Footer

- [x] Logo and company name link to the index page on all pages
- [x] Address links to Google Maps in a new tab on all pages
- [x] Phone number links to call said number on all pages
- [x] Email address links to email on all pages
- [x] Google Maps API shows 75 Broadway, Peterborough
- [x] Social media links darken on hover (on-click functionality not included)
- [x] Phone and email Font Awesome icons load properly
- [x] Footer readjusts to have the map below the text and text centres upon resize

### Header

- [x] Gradient successfully overlays
- [x] Text is positioned accurately
- [x] The minimum size is set correctly on all pages

## Index page

### Header

- [x] Button links to about.html

### Client logo scroller

- [x] Logos scroll properly and duplicate without gaps
- [x] Logos continue scrolling properly upon resize

### Reviews / testimonials

- [x] Reviews scroll automatically when not hovered
- [x] Reviews scroll accurately when pressed
- [x] Indicators update accurately
- [x] Scrolling is animated properly
- [x] Reviews readjust to have the image on top and text centred upon resize
- [x] Open and closed quote Font Awesome icons load properly

### Team

- [x] Team members scroll automatically when not hovered
- [ ] Team members scroll accurately when pressed
  - https://github.com/kaoala7577/BTEC-HBW/issues/1
- [ ] Indicators update accurately
  - https://github.com/kaoala7577/BTEC-HBW/issues/1
- [x] Images increase in size upon hover and return with animation
- [ ] Scrolling is animated properly
  - https://github.com/kaoala7577/BTEC-HBW/issues/3
- [x] The number of team members shown reduces to 1 on small screens
  - https://github.com/kaoala7577/BTEC-HBW/issues/2
- [x] Clicking team members brings you to their profile on team.html

### Careers

- [x] Button links to careers.html

### Training

- [x] Button links to training.html
- [x] YouTube video embeds correctly
- [x] YouTube video repositions above the text and text centres upon resize

## About page

### What we do

- [x] Video is embedded correctly
  - Placeholder currently in use

### Values

- [x] Text and background appear behind images
- [x] Background shrinks based on viewport, but never smaller than text width
- [x] Labels become one column upon resize

### Promise

- [x] Image repositions above text and text centres upon resize

## Team page

### Member cards

- [x] Columns adjust to have two members per row, then one member per row on resize
- [x] Cards adjust height to match the longest card
- [x] Text and card items are centred horizontally and vertically
- [x] Cards go dark on hover

### Member modals

- [x] The relevant modal appears for each team member on click
  - [x] Title updates to "\[their name\] - About me"
  - [x] Image updates to their image
  - [x] Description updates to their description
- [x] Modal adjusts to put image first upon resize
- [x] Modal scrolls without issue
- [x] Modal closes upon clicking the X or outside the modal

### Join us

- [x] Button links to careers.html

## Careers page

### Header

- [x] Apply button links to the application form

### Open positions

- [x] "Read more" reveals the full description (both)
- [x] "Read less" shortens the description again (both)
- [x] Cards stack on top of each other on resize

### Application form

- [x] All required fields are actually required
- [x] Email field requires email format
- [x] Cover letter field creates a scrollbar automatically
- [x] Cover letter field allows for resizing
- [x] You can only upload one file
- [x] Privacy policy link spawns privacy policy modal
- [x] Modal works as expected (see [Member modals](#member-modals))
- [ ] Successful application creates a "thank you" menu
  - https://github.com/kaoala7577/BTEC-HBW/issues/4

## Training page

### Videos

- [x] All videos embed correctly
- [x] All videos are placed on top of the text upon resize

### Next steps

- [x] Button links to the YouTube tutorial playlist

---

# Feedback, changes, and optimisations

## Design changes and optimisations

### Class feedback

It took a couple of iterations before the final design wireframe was landed on. I received mostly verbal feedback from
my classmates, so there's little evidence to back up my claims, but here are some changes I made with their help:

- Carousels did not all originally have indicators due to an oversight. This was caught by a classmate and changed.
- "Testimonials" was renamed to "reviews" for simpler language.
- The team page originally had four team members per row. This was changed to three for readability and scaling.
- Team member descriptions on the team page were originally below their images. This was changed to overlay on their
  images for stylistic purposes.
- An additional "apply now" button was added to the header of the careers page to mitigate scrolling past long job
  descriptions.
- A success modal was added to the careers page upon successfully completing the form.

### Changes during development

During development, it became clear that some details of the wireframe were not to make it to the final design. These
were largely changed (optimised) to better suit newly found client requirements.

One of these details is the overlaid team member descriptions. Despite this change only just being implemented into the
design after review with classmates, it became quickly clear once developing that the files we were given had much
longer descriptions than anticipated and would not be suitable. I chose to pivot to a modal interface, though did not
change the wireframe itself as the baseline layout could still be achieved, just not the originally planned
interactivity.

File suitability also affected the various team member showcases. My original wireframe was prepared for a fairly large
array of staff, but the final product only features three staff members as this was the data we were given. This did not
necessarily change anything about the overall layout, but internal sizing was heavily affected to make three images look
good in the given space instead of, for example, five.

The job descriptions were also longer than expected. This led to me choosing to trim them with a "read more", something
not shown on the wireframe. This was to improve readability and prevent the user from being forced to scroll for long
periods of time to reach the application form, the (arguably) most important part of the website.

Finally, I was provided with a company profile, but only realised this after having finished the about page as it was
buried amongst other .txt files. Since the work had already been complete, and the length of the descriptions given
would have required a complete re-work of the page's design, I decided to forego implementing these paragraphs in favour
of my original, sleeker design.

## Development optimisations

### Fixed bugs

Here are some examples of bugs I fixed over the course of the project:

- Various sizing, spacing, and layout issues that broke the page, especially at different sizes
- My logo scroll script breaking upon resizing the window ([af73a4c][1.1])
- Console errors from my script file trying to access elements by ID that no longer existed when changing
  pages ([dda8776][1.2])
- Custom symbols disappearing due to an accidentally deleted line of CSS ([4fdd059][1.3])

[1.1]:https://github.com/kaoala7577/BTEC-HBW/commit/af73a4cfbcae7562f3efbc35e6875ca66d52f70c "Commit af73a4c"

[1.2]:https://github.com/kaoala7577/BTEC-HBW/commit/dda8776e41beb79a6c9e043edeeca75b05eaed4d "Commit dda8776"

[1.3]:https://github.com/kaoala7577/BTEC-HBW/commit/4fdd0594153eb57201877dca1351f1afc1db6582 "Commit 4fdd059"

### Optimisations

Here are some examples of optimisations I performed:

- Many examples of format adjustments for readability, especially tweaking padding and margins
- Created my own placeholder images at 125x125px to reduce the performance load while testing ([d95f111][2.1])
- Created a bespoke script that only duplicates as many images as is needed to seamlessly scroll through logo content,
  saving on the performance load ([711c29e][2.2])
- Updated this script to adjust with screen resizing ([af73a4c][2.3])
- Improved this script to account for element margins ([d95f111][2.1])
- Improved my JavaScript to prevent console errors when on different pages of the website ([dda8776][2.4])
- Added alt text to all images ([4fdd059][2.5]) including a dynamic modal image ([5ce16bb][2.6]) as an accessibility
  optimisation

[2.1]:https://github.com/kaoala7577/BTEC-HBW/commit/d95f1113eacbea4ff1ba5b0449a87c778a2cc7d9 "Commit d95f111"

[2.2]:https://github.com/kaoala7577/BTEC-HBW/commit/711c29e0fef591695460d3f081ffdc116b0b9ccf "Commit 711c29e"

[2.3]:https://github.com/kaoala7577/BTEC-HBW/commit/af73a4cfbcae7562f3efbc35e6875ca66d52f70c "Commit af73a4c"

[2.4]:https://github.com/kaoala7577/BTEC-HBW/commit/dda8776e41beb79a6c9e043edeeca75b05eaed4d "Commit dda8776"

[2.5]:https://github.com/kaoala7577/BTEC-HBW/commit/4fdd0594153eb57201877dca1351f1afc1db6582 "Commit 4fdd059"

[2.6]:https://github.com/kaoala7577/BTEC-HBW/commit/5ce16bbf3c1b39f5bc7c85b9fba0b379221fff3e "Commit 5ce16bb"

---

# Final review and evaluation

Here's a summary of how the final website compares to the initial project requirements:

- The website successfully showed a profile of the company through its about page.
- It has successfully showed profiles of existing staff on the team page.
- It has job specifications with listed requirements on the careers page.
- It has an online application form on the careers page.
- It has links to web development courses through YouTube links and a template that could easily be expanded to link to
  other sources.

I have also attempted to utilise all resources given to me from the company, including images, descriptions, and
guidance.

That being said, there are a couple areas my work has fallen short. Most notably, while I provided a web page focused on
providing information "about" the company, I did not end up using the company profile provided to me to fill this page
out. This was because the page had already been designed and completely implemented by the time I found the file. It
would be very fair to state that I have not met that requirement as a result, though I remain that my sleeker design
still communicates the right amount of information.

As an idea, the info provided can easily be put into an audio format for the embedded video at the top of the page if
needed, which would satisfy both viewpoints. That being said, this is not currently a feature of the webpage, so it
doesn't necessarily fix the stated issue.

Another area I have fallen short is that not all of my website is functional currently, namely the team members carousel
on the index page and the confirmation modal on the application form. This was an issue of time, primarily, and of
biting off more than I could chew by creating a wireframe without much web development experience behind me to know how
easy or hard implementing any given element was going to be. With more time—or rather, better time management and judged
expectations—the website could have been fully functional, so this is an issue of my own and of my planning, but it has
negatively affected the final design and development as a result.

This all being said, however, I have done a significant amount of work for this assignment. I created a lot of bespoke
features exactly to how they were planned on the wireframe, I collaborated with multiple people to ensure the highest
quality, and the final result is more than 95% functional and visually appealing to boot. It's not perfect, it's not the
most flashy, and it is not all implemented, but what is implemented is solid, sincere, and more than adequate for what
the company has effectively asked of me.

I believe that, on the whole, I have made a piece of work to be proud of. I am saddened by the missed opportunities and
the work left unfinished, but there is a lot more here to praise myself on than criticise. This assignment has taught me
a lot about web development and I feel confident in saying I have progressed severely in my skills from where I was at
the beginning of this unit.
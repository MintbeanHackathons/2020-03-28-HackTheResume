# Hack the Résumé
This is my repository for **Mintbean's Hack the Resume hackathon** on Saturday, March 28, 2020. The challenge was to build a project where we take [JSON Resume](https://jsonresume.org) object as an input and output a fully-formatted resume page.

## Mintbean Hackathon Requirements

Take a look at the [JSON Resume Schema](https://jsonresume.org/schema/). Your goal is to take these fields, then build a resume using these fields. You may either (a) display the output immediately, OR (b) save it to a file. 

* You  must output a resume based on JSON Resume fields
* Your resume must support all JSON Resume schema fields
* Your project must use JavaScript.
* You may use any GUI technology you wish: Templated HTML, React, Vue, Angular, Express, Electron, CLI (yes, you can make this a terminal-only project)

## Mintbean Scoring / Assessment:
* 33% Code Quality
* 33% Aesthetic Appeal
* 33% Code Review

# My Approach
I built my resume with the React.js framework and handrolled the CSS for the layout and design. I started by taking a few minutes to hand draw a simple wireframe using my own 2-column resume for inspiration. 

Given that we only had 2 hours to complete this project, I did not take the time to update all of the resume information in the JSON file. I primarily focused on ensuring all of the JSON resume schema fields were supported in one way or another and kept the design simple.

## Challenges

1. **Time:** I've built end-to-end projects before but never under such strict time pressure, and realized that the 2-hour timeframe really forces you to manage your time much better. I realized about halfway through that I might not finish because I was taking too much time focusing on small details. At that point, I took the fastest path to getting the necessary information to render on the page and kept the design simple.
2. **Lack of Experimentation:** I focused on what I knew I could get done for this project, but was hesitant to step out of my comfort zone and find more efficient ways to accomplish my goals. Part of it was fear that I wouldn't get the project done on time, but I also was scared of not being able to implement new solutions correctly and so I didn't try. This was a mistake. I realize that I need to do more of these challenges to push my learning and continue growing as a developer.

## Key Learnings
1. **Time management:** Even for these mini-projects, realistic planning and time management is important!
2. **Code review:** I learned so much from reviewing other developers' code and dissecting their approach to this problem. I also learned that I could actually add value to others with helpful comments!
3. **Reusability:** Thanks to some helpful reviewers of my own code, I learned that I should be thinking about how to create reusable components for sections that are formatted the same. I could create a function that takes a `label` and `content` as arguments. This would make my code much DRY-er!
4. **Best Practices:** I was kicking myself for not remembering to put a `key` attribute on my mapped elements, as that is a basic React best practice that I am all too familiar with. Boils down to time and rushing through the code, but I will remember it next time!

## Results
I completed my very first hackathon... and was a **2nd place runner up**! :raised_hands:

I highly recommend that any devs just starting out participate in Mintbean's hackathons as they are very beginner-friendly. I liked that I could take on a challenge solo, but still was able to learn from others through code review. With a few more of these under my belt, I 

I welcome any additional code review comments if you'd like to have a look. Please comment via my [Pull Request](https://github.com/MintbeanHackathons/2020-03-28-HackTheResume/pull/9).

Here is a screenshot of my project at the end of the challenge. I am continuing to work on it, so that I can add it to my portfolio and so the final version will be much more polished. :smile:

![Hack the Resume Challenge V1](/images/v1-resume-03-28-2020.png)

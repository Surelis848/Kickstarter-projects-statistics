# Kickstarter projects
This is an Interactive Frontend Development project. It is featuring a data dashboard with statistics of Kickstarter projects from 2017.
Presented are such things as categories of projects, most popular countries and currencies,
goal vs. pledged amount of money, state of the projects and number of backers. <br>
This website was made as a project for Code Institute.<br>
To view the live site press <a href='#'>HERE</a>
# UX
This dashboard was made mostly for people thinking about presenting a project on Kickstarter or already have an existing one.<br>
It's an intro to Kickstarter showing data of submitted projects in 2017.<br>
These user stories were made durring planning stage 
and were used in creating different features for the website:

<ul>
<li>As a Kickstarter client, I want to know the most popular categories of projects to see what people are interested in.</li>
<li>As a person with a project idea, I want to know what percent of all submitted projects are successful to know my success rate.</li>
<li>As a person with a project idea, I want to see the most popular countries submitting projects, to know if my country is one of them.</li>
<li>As a person with a project idea, I want to know the correlation between made goals and pledged amount to see how creating bigger goals are going to affect pledges.</li>
</ul>

Also, in the planning stage, I created <a href='wireframes/wireframes.pdf'>these</a> wireframes. 
Although, the design and some features changed over the development process.

# Features

<ul>
<li><strong>Categories row chart</strong><br>Shows main categories in Kickstarter from the highest popularity to the lowest.</li>
<li><strong>Country of issue and Currency used pie charts</strong><br>Shows the most popular countries and currencies used.</li>
<li><strong>Goals/pledged stacked line chart</strong><br>Shows the correlation between made goals and pledged amount of money from backers.</li>
<li><strong>State and backers pie charts</strong><br>Shows how many projects were successful and groups of backers.</li>
</ul>

# Features Left to Implement
<ul>
<li><strong>Time frame pie chart</strong><br>A pie chart for most periods of time to have your project for;</li>
</ul>

# Technologies Used

<ul>
<li><a href='https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'>HTML5</a>- used to build the main structure and text of the page;</li>
<li><a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'>CSS3</a>- used for the styling of the page;</li>
<li><a href='https://www.javascript.com/'>JavaScript</a>- used for building the dashboard with the help of dc.js;</li>
<li><a href='https://bootswatch.com/lux/'>Bootswatch Lux</a>- used as a theme for the page, also card to put graphs in;</li>
<li><a href='https://fonts.google.com/'>Google Fonts</a>- font 'Poppins' used as the main font of the page;</li>
</ul>

# Testing
As I was doing a dashboard and using dc.js libraries for it, I didn't make automated tests. However, I tested it all manually.

<strong>Manual testing</strong><br>

<u>Validating:</u><br>
<ul>
<li><a href='https://validator.w3.org/nu/#textarea'>HTML and CSS Validator</a></li>
</ul>
Contact form:
Go to the "Contact Us" page
Try to submit the empty form and verify that an error message about the required fields appears
Try to submit the form with an invalid email address and verify that a relevant error message appears
Try to submit the form with all inputs valid and verify that a success message appears.
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

# Deployment
This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:

Different values for environment variables (Heroku Config Vars)?
Different configuration files?
Separate git branch?
In addition, if it is not obvious, you should also describe how to run your code locally.

# Credits
Content
The text for section Y was copied from the Wikipedia article Z
Media
The photos used in this site were obtained from ...
Acknowledgements
I received inspiration for this project from X
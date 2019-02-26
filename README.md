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
<li><strong>Reset All button</strong><br>A button that renderes all of the graphs reseting them.</li>
<li><strong>Categories row chart</strong><br>Shows main categories in Kickstarter from the highest popularity to the lowest.</li>
<li><strong>Country of issue and Currency used pie charts</strong><br>Shows the most popular countries and currencies used.</li>
<li><strong>Goals/pledged stacked line chart</strong><br>Shows the correlation between made goals and pledged amount of money from backers.</li>
<li><strong>State and backers pie charts</strong><br>Shows how many projects were successful and groups of backers.</li>
</ul>

# Features Left to Implement
<ul>
<li><strong>Time frame pie chart</strong><br>A pie chart for most popular periods of time to have your project for;</li>
</ul>

# Technologies Used

<ul>
<li><a href='https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'>HTML5</a>- used to build the main structure and text of the page;</li>
<li><a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'>CSS3</a>- used for the styling of the page;</li>
<li><a href='https://www.javascript.com/'>JavaScript</a>- used for building the dashboard with the help of dc.js;</li>
<li><a href='https://getbootstrap.com/docs/3.3/'>Bootstrap 3.3.7</a>- used for styling and layout of the page.</li>
<li><a href='https://bootswatch.com/lux/'>Bootswatch Lux</a>- used as a theme for the page, also card boxes to put graphs in;</li>
<li><a href='https://fonts.google.com/'>Google Fonts</a>- font 'Poppins' used as the main font of the page;</li>
</ul>

# Testing

<h2>Manual testing</h2>

<strong>Validating:</strong><br>
<ul>
<li>HTML and CSS validated using <a href='https://validator.w3.org/nu/#textarea'>Nu Checker</a>;</li>
<li>JavaScript code validated with <a href='https://www.jslint.com/'>JS Lint</a>;</li>
</ul>

<strong>Site responsiveness was tested on these browsers:</strong><br>
<ul>
<li>Google Chrome</li>
<li>Internet Explorer</li>
<li>Mozilla Firefox</li>
<li>Opera Browser</li>
<li>Microsoft Edge</li>
<li>Safari</li>
</ul>

<strong>Bugs:</strong><br>
<ul>
<li>When the graphs are viewed on a smaller device, the graphs shrink and the x axis and y axis in the line chart as well as the row chart starts to be unreadable without zooming the screen in.</li>
</ul>

<strong>Other manual testing:</strong><br>
<ul>
<li>If the 'Reset All' button is clicked all of the charts will be rendered again;</li>
<li>When selecting a specific category, country, state, etc. other charts are rendered according to the users choice.</li>
</ul>

# Deployment
This project does not require any local deployment.<br><br>
The website was published using <a href='https://surelis848.github.io/Kickstarter-projects-statistics/'>GitHub pages</a>.<br><br>
There are no differences between the deployed version and the development version.

# Credits
<strong>Content</strong><br>
The text for the first paragraph was copied from <a href='https://en.wikipedia.org/wiki/Kickstarter'>this</a> Wikipedia article.<br>
<strong>Data</strong><br>
Statistics for the dashboard originated from <a href='https://www.kaggle.com/kemical/kickstarter-projects#ks-projects-201801.csv'>Kaggle</a>.<br>
Only 2017 year statistic was used and some of the data was made shorter.<br>
<strong>Spinner</strong><br>
The spinner was copied from <a href='https://loading.io/css/'>loading.io</a>.<br>
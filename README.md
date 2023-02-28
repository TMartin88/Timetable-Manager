# Schedule Manager <img align="right" width="75" height="75" src="static/favicon.ico">


**LLC** denotes Local Link Cork
**Staff** denotes LLC Route & Timetable Management Staff
**Commuters** denotes people travelling or wishing to travel on Routes

---------------------------

## Site Goals
---

Schedule Manager is an application developed in Django for LLC Timetable and Route Management staff.

These staff members typically have no coding abilities whatsoever.

This application is designed to enable staff to setup Routes and Urban Centres.

This application is an assist for LLC staff engaged in Timetable Management to easily publish timetable revisions for Public viewing.   

Schedule Manager is useful by allowing LLC staff to manipulate and design timetables to best display the data to the public.

Schedule Manager is particularly useful for the Public as it feature dynamic search so commuters can easily find the Route that suit their needs.

Schedule Manager has 4 main apps:

- Maps (maps)
    This App sets up the data from model urban to be displayed as icons on Google Maps.
- Schedules (schedules)
    This is the App for Route Management using Posts where each Post is a Route.
- Urban (urban)
    This is the App for Urban Centre Management. Each Urban centre is an icon on the map.
- User Search (user_search)
    This is the App for the dynamic filter search on the Home Page and the Search in the Nav Bar.

------------------------------------

Application           
------------------------------------
![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677353536/app_ziguur.jpg)

------------------------------------

### Motivation
---

- Working part time with LLC and in association with Steve Ellis Operations Co-Ordinator of LLC we can identify that we need to improve Timetable Management.
- These Timetables need to be controlled and managed.
- Staff prefer to work with Excel for Timetables edits.
- These Timetables need to be visible to the public.
- Wordpress was initially the preferred platform to publish timetables for public viewing but it is restricitive.
- So developing something in a framework we can control is more suitable.
- Django allows us to deploy to the Cloud which is a fast scaleable environment.

------------------------------------

# GDPR and Timetable Data
---

- Thanks to Steve Ellis Operations Co-Ordinator of LLC for permission to use timetable data.
- The Timetable data is already in the public domain.

------------------------------------

## User Stories
---

- Staff Users who have no programming skills need to be able to publish LLC routes and timetables so they are available to the public.
    - This application allows them to work without HTML or CSS skills, as they have an application that makes the html for them, then using copy and paste skills they can publish to a post. The styling of the timetable is managed within the template design and style.css
    - To assist this we created a seperate Python App to take Excel timetables loaded to Google Sheets and convert them to properly formatted HTML tables:
        - https://timetable-sheets.herokuapp.com
        - https://github.com/TMartin88/SheetTable

    - **We will bring that Python Project into this project in the next phase of development.**

- Staff Users need to be able to change Timetable data on a regular basis and get the results published without delay.
    - The level of automation here minimises the time delay and allow the user to quickly publish to Timetable Manager.
- Staff Users wish to avoid steep learning curves by being introduced to new systems.
    - The Copy and Paste method to publish to the post content is a concept they are already familiar with.
- Staff Users need to be able to manage icons on the Google Map.
    - The Urban CRUD works well here. It is a simple interface so staff users canc ontrol where icons appear.
- Staff Users need to provide additional information in relation to routes.
    - The additional fields in Post model allow for this.
- Staff users need to be able to provide PDF versiosn of the timetables.
    - PDFs stires in LLC Dropbox are available for Commuters via the PDF button.

- Commuters need to be able plan trips around LLC routes.
    - Because all routes and associated timetables are published and maintained the commuter has up to date information.
- Commuters need to be able to view more than 1 route at a time to make comparisons of suitability.
    - The Routes are listed and can filtered to by a commuter to match their needs.
- Commuters need an interactive way of searching for timetables.
    - the Google Map allows the commuter to click an icon for an urban centre. This negates the need for using the keyboard.
- Commuters need to be able to refine search results.
    - The dynamic search table on the homepage allows for filtering by dates and times etc.
    - The search in the nav bar allows for a search for timetable data including stops etc.
- Commuter need to be able to view timetables on Mobile.
    - The way the table is setup for scrolling x and y allows the commuter to easily navigate an individual timetable.
- Commuters need to be able to Comment on Routes and click Likes etc. 
    - The Comment Like functionality allows for this.

--------------------------------

# UX/UI & Features

## Design Choices

---------------------------

This is a GUI application which has been designed to work across all devices.

Using the MVC framework enables the presentation of data in an efficient secure manner.

Bootstrap allows for seamless responsiveness.

Using an interactive Google Map with underlying API calls enhances the visual impact.

The main Header Nav section is set as a sticky so the nav is always available and maintains the presence of the logo.

---------------------------

## Site Navigation

### Main Menu
 
Site navigation is primarily by way of a Main Menu.

Apart from 'Home' which is constant.

The Nav is split into 2 main layouts:

- Not Logged in
    - Register
    - Login

- Logged in
    - Urban Centres
    - Admin
    - Logout

------------------------------

- Non Logged in Users

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677583391/app_ziguur.jpg)

Note the Menu only has Register and Login Options.

- Logged in Users (SuperUser)

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677583100/admin_ttzvvd.jpg)

Note the menu now has Urban Centres and Admin.

- Logged in Users

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677582898/user_diquz2.jpg)

Note Admin is not available to regular staff users.

----------------------------------

### Search Results Page

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677585347/result_tjuurr.jpg)

This is a Filtered List of Routes set in Card Format which is arrived at from 3 main options:

1. Search in Nav in Header

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677584835/search_w4fudn.jpg)

2. The Google Map is a visual interactive Search option for Commuters on Home Page

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677583946/map_kqcmjx.jpg)

3. The Dynamic Filter Search on Home Page

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677585139/table_gzb7g2.jpg)


### Single Page

This is a Single Route(Post_detail) page

#### Timetable

The timetable is usually presented in a 2 table presentation.

- Inbound
- Outbound

The Site Visitor can toggle between the 2 with the Change Direction button.

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677586449/single_hw4dmk.jpg)

#### Links to Cheaper Fares and The Mobile App

This allows the Site Visitor to avail of cheaper fares and use advanced Journey planning in the App.

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677587181/other_olkv9k.jpg)

#### PDF and Back Button

There is a PDF button on this page to enable the Site Visitor to view or download a PDF version of the timetable.

These is also a Back Button on this page to take a Site Visitor to a previous Page.

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677587175/pdf_uevcaf.jpg)

#### Comments and Likes

The Site Visitor can view Comments and Likes Count for this Route/Post

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677587188/comment_vmojhm.jpg)

If the User is Logged in then they can Add Comments and Likes

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677588046/addcomment_ggwec3.jpg)

### Urban Centres

This is a CRUD for the Urban Centres.

**The Urban Centres With Show On Map set to true appear on the Google Interactive Map**

### Admin

This is the Main Admin Panel.

**The header and The Footer are not visible on this page as it is a Back End utility**

### Footer

This is the footer which always visible. This has links to:

- Social media
- Office contact links

Partners are not links so as not to take site visitors away to other sites.

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677587184/footer_axwceh.jpg)

-----------------------------------------------

**Because the Header is sticky the Nav bar is always visible**

----------------------------------------------------

## Responsive
 
This gui application is responsive using Bootstrap and looks good on different device screen sizes.

![](assets/images/response.webp)

--------------------------------

# Project Walkthrough for User Testing

**Recommended:**
- Best viewed with 2 computer screens.
- Open all links in a new tab.

## Admin

### Posts

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677595886/admin_xy6zky.jpg)






[Open the Timetables on Screen 1](https://docs.google.com/spreadsheets/d/1jYRHNID-pMeB-0QicIMgrDnd4QONLxxHhUE7Rz6iz2s/edit?usp=sharing)

![](assets/images/timetables.webp)

The Timetables sheet contains the timetable information for all routes. There is a worksheet(tab) for every route. These worksheets(tabs) contain a cross section of timetable variations and types.

### html_table_builder sheet

[Open the html_table_builder on Screen 2](https://docs.google.com/spreadsheets/d/1BBsQqCY6lh6nIc1l2HFDc7YwyWFzkEoGZ5WqTOfcxNc/edit#gid=1730694308) 

![](assets/images/screen2.webp)

<mark>The html_builder_sheet has been pre populated with some routes for walkthrough convenience</mark>

<mark>Typically the initial status of this sheet is to only contain 1 worksheet(tab) called Rules</mark>

#### Copy & Paste

Using **1120** as an example

Goto **Timetables** sheet on Screen 1

![](assets/images/1120.webp)

Select all active cells

![](assets/images/1120copy.webp)

Then Ctrl + C to **Copy**

Goto **html_table_builder** sheet on Screen 2

Click + to create a new worksheet

![](assets/images/addsheet.webp)

Right Click on the newly created worksheet(tab) titled Sheet?? and Rename the Worksheet(tab) to 1120.

Do not rename the Sheet title itself

Yes Rename            |  No this is incorrect
:-----------------:|:-----------------:
![](assets/images/rename1120.webp)  |  ![](assets/images/donot.webp)

Select **Cell A1** and then types Ctrl + V to **Paste**

Cell A1            |  Paste
:-----------------:|:-----------------:
![](assets/images/1120cell.webp)  |  ![](assets/images/1120paste.webp)

<mark>The user can setup as many worksheets as they wish by repeating this process, but typically there would be only a few timetables requiring publishing at any given time</mark> 

<mark>Now the **html_table_builder** sheet has been setup for Publishing</mark>

Now go ahead and Run the Application with the instructions below.

-------------------------------- 

## Python Application

### Login

<mark>Remember open all links in a new tab</mark>

[Open the App on Screen 1](https://html-table-builder.herokuapp.com/)

![](assets/images/herokuapp.webp)

The initial interaction with the user is a simple login like this:

Please enter your username: admin

Please enter your password: sesame

The default username is: admin
The default password is: sesame

### Main Menu

Once logged in the user is presented with a Main Menu:

![](assets/images/herokuinterface.webp)

#### R. Run HTML Automation

HTML Automation loops runs through all the worksheets in html_table_builder Sheet.

Select R to Run HTML Automation           |  Type yes to proceed
:-----------------:|:-----------------:
![](assets/images/runhtml.webp)  |  ![](assets/images/htmlran.webp)

Then the application clears the console and returns to the main menu after 20 seconds.
This delay gives the user time to read the instructions.

### html_table_builder sheet

[View the html_table_builder on Screen 2](https://docs.google.com/spreadsheets/d/1BBsQqCY6lh6nIc1l2HFDc7YwyWFzkEoGZ5WqTOfcxNc/edit#gid=1730694308) 

Notice that we now an equivalent worksheet(tab) with a HTML Prefix for every
Route Number worksheet(tab) 

![](assets/images/1120again.webp)

In Worksheet **HTML 1120** next to **fx** where it says **figure id=swappera class="wp-block-table" Click to highlight**

<mark>This is the actual cell content of A1</mark>

**CTRL + A** to Select All

![](assets/images/1120selectall.webp)

**CTRL + C** to Copy and now the contents of Cell A1 is now in the clipboard.

<mark>Now we have our correctly formatted html table complete with all the necessary html tags</mark>

## Check Our Result

<mark>Remember open all links in a new tab</mark>

[To check what our HTML looks like Open jsFiddle on Screen 2](https://jsfiddle.net/)

![](assets/images/fiddle.webp)
 
### jsFiddle HTML

In the HTML Section paste in the html we just copied.

**CTRL + V** to Paste

![](assets/images/fiddlehtml.webp)

### jsFiddle CSS

Now Copy and Paste the CSS code below into the CSS section of Fiddle

<pre>
table {
  font-family: 'Signika', sans-serif;
  margin-bottom: 2.5px;
}

.wp-block-table {
        overflow-x: auto;
        overflow-y: auto;
      }
      
 .wp-block-table thead th {
        position: sticky;
        top: 0;
        z-index: 5;
      }

.tabletime {
  border-collapse: collapse;
  width: 100%;
}

#swappera {
    margin-bottom: 25px;
}

#swappera th {
    background-color: #ddd;
}

#swapperb {
    margin-bottom: 25px;
}

#swapperb th {
    background-color: #ddd;
}

/* The Table Header th */
.tabletime th {
  text-align: left;
}

.tabletime th:nth-child(n + 2) {
    text-align: center;
}

/* The Table Stripes */
.tabletime tr:nth-child(odd) td {
  background-color: #ffff;
}

.tabletime tr:nth-child(even) td {
  background-color: #f2f2f2;
}

.tabletime tr:hover {
  background-color: #ddd;
}

/* The Table Rows and Header */
.tabletime td {
  display: table-cell;
  vertical-align: middle;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

/* The Table First Column Fixed No Scroll */
.tabletime tr td:nth-child(1) {
  position: sticky;
  position: -webkit-sticky;
  left: 0;
  z-index: 1;
  font-weight: bold;
  text-align: left;
}

/* This sets the thickness for specific column*/
table .thickborder {
  border-left: 2px double 	#54595F; 
  border-right: 2px double 	#54595F; 
}

/* This sets the thickness for specific column left only*/
table .thickleft {
  border-left: 2px double 	#54595F; 
}

/* This sets the thickness for specific column right only*/
table .thickright {
  border-right: 2px double 	#54595F; 
}
</pre>

![](assets/images/fiddlecss.webp)

### jsFiddle Run

Then Click Run in Fiddle 

![](assets/images/runfiddle.webp)

The user can see the result and verify that it is as expected.

![](assets/images/fiddlerun.webp)

<mark>End of Walkthrough</mark>

------------------------------------

### H. Delete HTML Worksheets 

This deletes all of the worksheets(tabs) that have a HTML Prefix in the title.

These are created when a user runs R. Run HTML Automation.

This is a housekeeping feature added to allow a clear out of worksheets(tabs) with HTML Prefix.

Select H to Clear HTML Worksheets            |  Type yes to proceed
:-----------------:|:-----------------:
![](assets/images/htmlclear.webp)  |  ![](assets/images/htmlcleared.webp)

The user is advised that the HTML worksheets are now deleted!

Then the application clears the console and returns to the main menu after 1 second.

------------------------------------

### W. Delete All Worksheets

<mark>Important Note: When testing you should test this option last as it removes all sheets and then you have to copy and paste to populate html_table_builder for other testing</mark>

This deletes all of the worksheets in html_table_builder with the exception of Rules.

This is a housekeeping feature that allows the user to go to a reset situation.

The User is advised that 'This will remove all of the worksheets other than Rules'

The user is challenged to input yes if they wish to proceed.

Select C to Clear Sheets             |  Type yes to proceed
:-----------------:|:-----------------:
![](assets/images/clearsheets.webp)  |  ![](assets/images/cleared.webp)

The user is advised that the worksheets are now deleted!

Then the application clears the console and returns to the main menu after 1 second.

### Q. Quit

This quits from the application and clears the console.

Then the application clears the console and returns to the main menu after 1 seconds.

------------------------------------

#### R. Run HTML Automation Explained

HTML Automation loops runs through all the worksheets in html_table_builder Sheet.

Looping through each sheet the table html code is created and written to a local text file.

The table elements are gathered in 4 distinct groupings:

1. Table definition html code
2. Table header html code
3. Table Rows html code
4. Table footer html code

When all elements of the table html code have been compiled the text file is then read.

The text file contents are written back to a newly created worksheet titled with a HTML prefix and the Route number.

<mark>Saving the html in a txt file as well as writing it back to the worksheet expands future distribution possibilities for the created html code</mark>

While the application is running the user is kept informed of progress with messages like this:

'Preparing data from worksheets...' and 'Data ready to start creating HTML Table code!'

When the application has finished running the user is advised with messages like this:

'The program is finished executing!'

The user is also advised to look at the completed work on Google Sheets:

'Take a look at Google Sheets to view your HTML Table code.'

The user is instructed on how to proceed with Google sheets and Wordpress:

'Just copy the contents of Cell A1 in the HTML worksheet'

'Then Paste into matching Wordpress Schedule Post'

'Always Check the Wordpress Post Result in the Browser'

------------------------------------

# Google Sheets Rules explained

The Basic Rules for the Sheets are provided in the Rules worksheet(tab).

![](assets/images/sheetblank.webp)

These rules do not always impact on the application or have a HTML consequence.

Some of these rules are for visual purposes so the the user can see what the Timetable will look like when it is published in Wordpress.

### Application Specific Rules

The rules that impact the Application are in the last column first row.

This cell will contain either of the following:

- 1. HEADEND <mark>This is the end of Header marker for the application where there are no border instructions</mark>

![](assets/images/noborder.webp)

- 2. Border Instructions <mark>These instructions are read by the application and also serve as an end of Header marker</mark>

Left and Right Border             |  Left Border or Right Border
:-----------------:|:-----------------:
![](assets/images/double.webp)  |  ![](assets/images/single.webp)

### Borders Explained

- A cell(column) can have a border on the left and the right. This is designated with a B.
- A cell(column) can have a border on the Left only. This is designated with an L.
- A cell(column) can have a border on the Right only. This is designated with an R.

The user indicates where the borders are to be placed. The application picks up on this instruction.

For example: 

- 7B: means a border left and right on column 7
- 7L:8R means a left border on column 7 and a right border on column 8

<mark>':' is the symbol used to indicate a rule break point</mark>

------------------------------------

# Testing

## Tests carried out by me.

### Google Sheets

- Remove all worksheets(tabs) from html_table_builder
    - Just like Excel, Google Sheets will not let me as there always has to be at least 1 worksheet(tab).
- Rename Rules
    - This is a protected sheet so Google sheets will not let me Rename.
- Delete or edit data in Rules
    - This is a protected sheet so Google sheets will not let me delete or edit.

<mark>These tests are important as the application expects to find at least 1 worksheet(tab) called Rules</mark>

### Application

- W. Delete All Worksheets when there are **no** worksheets in html_table_builder (other than Rules of course).
    - Code runs as expected and returns to Main Menu (Rules is always present anyway).
- W. Delete All Worksheets when there **are** worksheets in html_table_builder
    - All worksheets are cleared and returns to Main Menu (Rules is always present).
- H. Clear HTML Worksheets when there are **no** HTML Prefix worksheets in html_table_builder (other than Rules of course).
- H. Clear HTML Worksheets when there **are** HTML Prefix worksheets in html_table_builder
    - HTML Prefix worksheets are removed and returns to Main Menu
- R. Run HTML Automation when there are **no** worksheets other than Rules in html_table_builder
    - Code runs as expected and returns to Main Menu
- R. Run HTML Automation when there is no header row in worksheet(tab) in html_table_builder
    - Code runs picks up there is no Header alerts the user and returns to Main Menu.
- R. Run HTML Automation when there is  a worksheet with a title containing the word sheet in html_table_builder as opposed to the expected 3 digits
    - Code runs picks up the bad title (all titles should begin a minimum of a 3 digit route number) alerts the user and returns to Main Menu.

![](assets/images/badtitle.webp)

The Run HTML automation checks for sheet validity by checking:

- HTML Prefix title on worksheets are ignored.
- Worksheet is not a blank worksheet
- Worksheet title begins with 3 numeric digits.
- Worksheet has a header row.

The Header row is tested for:

- Test with only 1 column
- Test with Last column not having HEADEND as text value
- Test with Last column not having Border Rules as text value

The Last Column of Header Row is checked for:
- Rules in Last Column
        - : rule marker but invalid rules
        - : rule marker but no rules
        - : rule marker with column counter descending

The worksheet is checked for:

- Only a Header Row, No other rows.

- Q. Quit
    - The application clears the consoles and quits as expected

<mark>For all menu options I also tested for when the user did not type yes, anything other than yes is trapped and then returns to main menu.</mark>

### Worksheets with HTML Prefix

Visual check that the html table structure is in place with closing and opening tags.

Check in jsFiddle for errors and found no errors.

---------------------------------

## Validator Testing

As the PEP8 validator website pep8online.com site is down, I used pycodestyle instead.

run.py is clear of anything underlined in red.

The 3 warnings that are listed are apparently in relation to the docker file and have nothing to do with the code in run.py and so can be ignored.

![](assets/images/pep8.webp)

---------------------------------

## LLC Staff Final Verification

When the html code is pasted into the wordpress post, the user can a make a visual comparison in the browser to ensure the results are as expected.

The user is the designer of the timetable (within given parameters of course).

Because the outcome in wordpress reflects the users Google sheet design, it is up to the user to decide if the outcome is what they planned.

If not, they can amend the Google Sheet and run the application again.

---------------------------------

## Development Transition

### Initial Workflow Concept

![](assets/images/workflow.webp)

-----------------------------------

### Table Design in Wordpress Post

Example 253

HTML Design                         |  Wordpress Blocks Basic             
:----------------------------------:|:-----------------------------------:
![](assets/images/wpresshtml.webp)  | ![](assets/images/wpressbasic.webp) 
---------------------------------
 
## Bug Fixes
 
### Solved Bugs

- October 12th 2022 Looping through header error colspan count wrong
    - Fix d5f826cfade97fa0f427bcf71ad71f15b8e42d36 reverse header data

- October 12th 2022 Closing row <\tr> missing on th heading
    - Fix fa901e13615e548db4457b6e1cfcaa628981f863 tag is now in place.

- October 13th 2022 border rules not working correctly
    - Fix 23167325d5e54eea7128b125e2041a8f5337fa16 improved function to manage rules.

- October 15th 2022 sheet errors problem
    - Fix 62b6fee4d708f5946810424a4479d533b0a040e3 create function to validate sheets.

- October 28th 2022 login error on heroku
    - Fix 37a3cb2f048fbd6cb6159aa83a503e6d317b3311 remove user csv file from gitignore.

### Unfixed Bugs

- If the html_table_builder sheet does not exist or is not found the application will crash with a json response back from Google sheets. There is no error trap in place for this.

- The users.csv contains the login information. For a demo this is fine for it to be exposed. But in a real world situation this data would be called from a secured location like a database.

----

## Deployment

### Deployment to Heroku

The site is deployed to Heroku. 

- Ensure pprint is not in place 
- Amend Input to include a new line \n
- Populate Requirements with pip3 freeze > requirements.txt
- Sign up for Heroku Account
- Set role as student
- Create new app in heroku
- Create a config var in settings with a Key of CREDS and with creds.json file content as the Value
- Add Buildpack of Python
- Add Buildpack of Node.js
- In Deploy section and select Github
- Select Repository and Link to heroku app
- Manual Deploy
- Run App
- Test for errors

![](assets/images/heroku.webp)

Please click this link to see it in Heroku

https://html-table-builder.herokuapp.com/


### Live Deployment for LLC

This project has been copied to another Github Repository.

<mark>I am further developing the application for LLC beyond the scope of this project within the new repository</mark>

---------------------------------

## Future Features

- To build a pdf version of the timetable.
- To read the google sheet formatting instead of relying on border rules.
- To error trap Google sheet connection failures
- To use something like Zapier Automation to update Wordpress post with table.

---------------------------------

## Performance Improvements

- Increased Automation

---------------------------------
 
## Credits

- Credit to thispointer for a handy fumction to write multiple lines to a text file

https://thispointer.com/how-to-append-text-or-lines-to-a-file-in-python/

Credit to pynative for code ieas on deleting all the files in a directory

https://pynative.com/python-delete-files-and-directories/#h-example-remove-file-in-python

Credit to pythonpool for code ideas on looping through files in a directory.

https://www.pythonpool.com/python-loop-through-files-in-directory/

Credit to Anna Greaves and Love Sandwiches for Connecting to Google Sheets idea and execution.

---------------------------------





Credits 
https://testdriven.io/blog/django-search/ for Basic and Full-text Search with Django and Postgres.
I Think Therefore I Blog for the Post engine complete with likes and comments.
https://www.w3schools.com/django/ for helpouts when I was stuck with problems.
https://www.w3schools.com/bootstrap4/bootstrap_filters.asp for advanced filters on table.
https://locallinkcork.com/ which is a wordpress implementation fully designed and developed by me.
https://8000-tmartin88-dynamicmaps-u20krk5rr0r.ws-eu85.gitpod.io/ which is where I experiemented with google maps api. https://github.com/TMartin88/dynamicmaps
https://learndjango.com/tutorials/django-slug-tutorial for assist in setting up new app.
https://stackoverflow.com/questions/70559902/django-how-do-i-set-a-default-value-in-a-form-to-be-the-current-user
https://www.geeksforgeeks.org/how-to-create-and-use-signals-in-django/ and https://github.com/Code-Institute-Solutions/boutique_ado_v1/blob/master/checkout/signals.py for signals to update json file from model urban.
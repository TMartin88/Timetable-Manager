# Schedule Manager <img align="right" width="75" height="75" src="static/favicon.ico">


**LLC** denotes Local Link Cork
**Staff** denotes LLC Route & Timetable Management Staff
**Commuters** denotes people travelling or wishing to travel on Routes
**Routes** are often known as Services or Schedules.

---------------------------

# Site Goals
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

# Application           
---

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677615381/site_fsexbv.jpg)

------------------------------------

# Motivation
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

# User Stories
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
---

## Design Choices
---

This is a GUI application which has been designed to work across all devices.

Using the MVC framework enables the presentation of data in an efficient secure manner.

Bootstrap allows for seamless responsiveness.

Using an interactive Google Map with underlying API calls enhances the visual impact.

The main Header Nav section is set as a sticky so the nav is always available and maintains the presence of the logo.

------------------------

## Site Navigation
---

### Main Menu
---
 
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

### Non Logged in Users
---

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677583391/app_ziguur.jpg)

Note the Menu only has Register and Login Options.

- Logged in Users (SuperUser)

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677583100/admin_ttzvvd.jpg)

Note the menu now has Urban Centres and Admin.

-----------------------------

### Logged in Users
---

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677582898/user_diquz2.jpg)

Note Admin is not available to regular staff users.

----------------------------------

### Search Results Page
---

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677585347/result_tjuurr.jpg)

This is a Filtered List of Routes set in Card Format which is arrived at from 3 main options:

1. Search in Nav in Header

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677584835/search_w4fudn.jpg)

2. The Google Map is a visual interactive Search option for Commuters on Home Page

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677615191/map_dcunfc.jpg)

3. The Dynamic Filter Search on Home Page

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677585139/table_gzb7g2.jpg)

------------------------------

### Single Page
---

This is a Single Route(Post_detail) page

------------------------

### Timetable
---

The timetable is usually presented in a 2 table presentation.

- Inbound
- Outbound

The Site Visitor can toggle between the 2 with the Change Direction button.

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677615623/single_txqwjj.jpg)

------------------------------

### Links to Cheaper Fares and The Mobile App
---

This allows the Site Visitor to avail of cheaper fares and use advanced Journey planning in the App.

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677587181/other_olkv9k.jpg)

----------------------------

### PDF and Back Button
---
There is a PDF button on this page to enable the Site Visitor to view or download a PDF version of the timetable.

These is also a Back Button on this page to take a Site Visitor to a previous Page.

Page 1           |  Page 2
:-----------------:|:-----------------:
![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677615937/Page1_fphufa.jpg)  |  ![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677615939/page2_cwlxnw.jpg)

-------------------

### Comments and Likes
---

The Site Visitor can view Comments and Likes Count for this Route/Post

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677587188/comment_vmojhm.jpg)

If the User is Logged in then they can Add Comments and Likes

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677588046/addcomment_ggwec3.jpg)

-----------------------

## Urban Centres
---

This is a CRUD for the Urban Centres.

**The Urban Centres With "Show On Map" set to true appear on the Google Interactive Map**

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677616115/urban_xgp21l.jpg)

------------------

## Admin
---

This is the Main Admin Panel.

**The header and The Footer are not visible on this page as it is a Back End utility**

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677616240/admin_wrvwej.jpg)

----------------

## Footer
---

This is the footer which always visible. This has links to:

- Social media
- Office contact links

Partners are not links so as not to take site visitors away to other sites.

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677587184/footer_axwceh.jpg)

-----------------------------------------------

**Because the Header is sticky the Nav bar is always visible**

----------------------------------------------------

# Responsive
---
 
This gui application is responsive using Bootstrap and looks good on different device screen sizes.

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677616512/responsive_swgo3h.jpg)

--------------------------------

# Project Walkthrough for User Testing
---

## Routes (Posts)
---

### Admin
---

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677595886/admin_xy6zky.jpg)

- Add a new Post

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677619680/postpage1_btind3.jpg)

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677621027/postpage2_qkzkyl.jpg)

**For testing purposes all HTML code for the Timetable in Post Content and other data can be taken from 

[Local Link Cork](https://locallinkcork.com/schedule/10000-quality-hotel-to-youghal/)

------------------------------------

### All Users
---

This post being published is now available to all Users:

- Visible on Home Page

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677685822/tablepost_gjszgk.jpg)

- Searchable on Map (Click Youghal)

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677686014/youghal_hjhppr.jpg)

- Searchable on Nav Bar search (type in quality)

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677686014/youghal_hjhppr.jpg)

- Route (Post Detail) Timetable is updated

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677686328/postdetail_vckdas.jpg)

- Route (Post Detail) PDF Version button links to PDF

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677686529/pdfyoughal_djimjg.jpg)

-----------------------------------------

### Logged in Users
---

This post being published is now available to logged in Users for Comments and Likes

- Route (Post Detail) is ready for Comments and Likes

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677686919/commentsadd_ux1nfj.jpg)

-----------------------------------------

### Admin
---

Comments submitted by Logged In Users need to be Approved by Admin

- Select comment to change
- Action Approve Comments

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677698140/commentapp_txlvnm.jpg)

------------------------------------------------------

## Urban Centres
---

### Logged in Users
---

This is a CRUD for the Urban Centres.

**The Urban Centres With "Show On Map" set to true appear on the Google Interactive Map**

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677616115/urban_xgp21l.jpg)

**The Map currently has a Bus Icon over Youghal**

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677687361/bus_ihyaad.jpg)

#### Delete
---

Select Youghal in Urban Centre and Click Delete.

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677687987/youghallist_t3finw.jpg)

- It has dissappeared from the Urban Centre List

- The Bus Icon has now dissappeared on the Map also

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677687678/youghalbus_sfpzw2.jpg)

#### Add
---

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677687815/youghaladd_xi0030.jpg)

- It now appears in the Urban Centre List

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677687987/youghallist_t3finw.jpg)

- It now appears as a Bus Icon on the Map

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677687361/bus_ihyaad.jpg)

#### Toggle
---

Select Youghal in Urban List and Click Toggle

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677687987/youghallist_t3finw.jpg)

- The Urban Centre and slug and Latitude and Longitude have a strikethrough
- The Show On Map is now False

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677688281/toggle_fcvmmx.jpg)

- The Bus Icon has now dissappeared on the Map also

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677687678/youghalbus_sfpzw2.jpg)

Select Youghal in Urban List and Click Toggle again

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677688281/toggle_fcvmmx.jpg)

- Strikethrough is now gone
- The Show On Map is now True

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677687987/youghallist_t3finw.jpg)

- The Bus Icon has now appeared on the Map also

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677687361/bus_ihyaad.jpg)

#### Edit
---

Select Youghal in Urban List and Click Edit

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677687987/youghallist_t3finw.jpg)

The Edit Page appears

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677688911/edit_p5atnq.jpg)

Here you can change:

- Title (the slug will automatically be reset also)
- Latitude
- Longitude
- Showmap tick

Changing the co-ordinates will move the Bus Icon.

**Any Urban Centres created or edited with co-ordinates outside of LLC area of operation will appear on the map but will not be viewable by a user as the Google Map has bounds restricting the viewing area of the map to the LLC area of operation**

## Register
---

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677697897/register_julgvd.jpg)

Just select Register in Nav and then click Sign Up

## Login
---

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677697709/login_a024ya.jpg)

Just select Login in Nav and then click Sign In

## Logout
---

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677689824/signout_kpevtl.jpg)

Just select Logout in Nav and then click Sign Out

------------------------------------

# Testing
---

## Tests carried out by me
---
 
---------------------------------

## Validator Testing

As the PEP8 validator website pep8online.com site is down, I used pycodestyle instead.

run.py is clear of anything underlined in red.

The 3 warnings that are listed are apparently in relation to the docker file and have nothing to do with the code in run.py and so can be ignored.

![](assets/images/pep8.webp)

---------------------------------

## LLC Staff Final Verification

When the html code is pasted into the post content, the user can a make a visual comparison in the browser to ensure the results are as expected.

The user is the designer of the timetable (within given parameters of course).

Because the outcome in post content reflects the users Google sheet design, it is up to the user to decide if the outcome is what they planned.

If not, they can amend the HTML table code.

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
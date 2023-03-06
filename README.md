# Schedule Manager <img align="right" width="75" height="75" src="static/favicon.ico">

- **LLC** denotes Local Link Cork
- **Staff** denotes LLC Route & Timetable Management Staff
- **Commuters** denotes people travelling or wishing to travel on Routes
- **Routes** are often known as Services or Schedules.

---------------------------

# Site Goals
---

Schedule Manager is an application developed in Django for LLC Timetable and Route Management staff.

These staff members typically have no coding abilities whatsoever.

This application is designed to enable staff to setup Routes and Urban Centres.

This application is an assist for LLC staff engaged in Timetable Management to easily publish timetable revisions for public viewing.   

Schedule Manager is useful by allowing LLC staff to manipulate and design timetables to best display the data to the public.

Schedule Manager is particularly useful for the public as it features dynamic search so commuters can easily find the Route that suits their needs.

Schedule Manager has 4 main apps:

- Maps (maps):
    This App sets up the data from model urban to be displayed as icons on Google Maps.
- Schedules (schedules):
    This is the App for Route Management using Posts where each Post is a Route.
- Urban (urban):
    This is the App for Urban Centre Management. Each Urban centre is an icon on the map.
- User Search (user_search):
    This is the App for the dynamic filter search on the Home Page and the Search in the Nav Bar.

------------------------------------

# Application           
---

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677615381/site_fsexbv.jpg)

------------------------------------

# Motivation
---

- Working part time with LLC and in association with Steve Ellis Operations Co-Ordinator of LLC, we can identify that we need to improve Timetable Management.
- These Timetables need to be controlled and managed.
- Staff prefer to work with Excel for Timetables edits.
- These Timetables need to be visible to the public.
- Wordpress was initially the preferred platform to publish timetables for public viewing but it is restricitive.
- So developing something in a framework, we can control is more suitable.
- Django allows us to deploy to the Cloud which is a fast scaleable environment.

------------------------------------

# GDPR and Timetable Data
---

- Thanks to Steve Ellis Operations Co-Ordinator of LLC for permission to use Timetable data.
- The Timetable data is already in the public domain.

------------------------------------

# Staff Requirements
---

- Staff Users who have no programming skills need to be able to publish LLC routes and timetables so they are available to the public.
    - This application allows them to work without HTML or CSS skills, as they have an application that makes the html for them, then using copy and paste skills they can publish to a post. The styling of the timetable is managed within the template design and style.css
- Staff Users need to provide additional information in relation to routes.
    - The additional fields in Post model allow for this.

    - To assist this we created a seperate Python App to take Excel timetables loaded to Google Sheets and convert them to properly formatted HTML tables:
        - https://timetable-sheets.herokuapp.com
        - https://github.com/TMartin88/SheetTable

- **We will bring that Python Project into this project in the next phase of development.**

# User Stories
---

## Commuters
---

- Commuters need to be able plan trips around LLC routes.
    - Because all routes and associated timetables are published and maintained the commuter has up to date information.
- Commuters need to be able to view more than 1 route at a time to make comparisons of suitability.
    - The Routes are listed and can filtered to by a commuter to match their needs.
- Commuters need to be able to Comment on Routes to share their travel experience. 
    - The Comment functionality allows for this.
- Commuters need to be able to give a nod of approval or otherwise. 
    - The Like functionality allows for this.
- Commuters need an interactive way of searching for timetables.
    - The Google Map allows the commuter to click an icon for an urban centre. This negates the need for using the keyboard.
- Commuters need to be able to refine search results.
    - The dynamic search table on the homepage allows for filtering by dates and times etc.
    - The search in the nav bar allows for a search for timetable data including stops etc.   
- Commuter need to be able to view timetables on Mobile.
    - The way the table is setup for scrolling x and y allows the commuter to easily navigate an individual timetable.
- Commuter need to be able to switch timetables views from inbound to outbound.
    - The change direction button allows for this.

## LLC
---

- Staff Users need to be able to change Timetable data on a regular basis and get the results published without delay.
    - The level of automation here minimises the time delay and allow the user to quickly publish to Timetable Manager.
- Bus Company needs to ensure the presentation of timetable data is consistent with the Brand.
    - Fonts Logos and Colour styles match the brand. 
- Bus Company needs to control access to schedule maintenance.
    - A superuser account is required to access admin panel.
- Bus Company needs to control access to Comments and Likes.
    - A user account is required to access this functionality.
- Bus Company needs to allow for Schedules to be input as Draft and not viewable by the public.
    - The post approval functionality manages this.
- Bus Company needs to ensure all Comments are moderated.
    - The comment approval functionality manages this.
- Bus Company needs a CRUD to manage all schedules.
    - The Admin Panel functionality manages this.
- Bus Company needs a implement pagination on the front end for ease of navigation.
    - Pagination is applied where applicable.
- Staff Users need to be able to manage icons on the Google Map.
    - The Urban CRUD works well here. It is a simple interface so staff users canc ontrol where icons appear.
- Staff users need to be able to provide PDF version of the timetables.
    - PDFs in LLC Dropbox are available for Commuters via the PDF button.
- Bus Company needs a restrict urban centre icons to the applicable operating area of the LLC.
    - Bounds are set on Map scrolling.

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

This allows the Site Visitor to avail of cheaper fares and use advanced Journey Planning in the App.

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

**The Urban Centres with "Show On Map" set to true appear on the Google Interactive Map**

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677616115/urban_xgp21l.jpg)

------------------

## Admin
---

This is the Main Admin Panel.

**The Header and the Footer are not visible on this page as it is a Back End utility**

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
 
This GUI application is responsive using Bootstrap and looks good on different device screen sizes.

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677616512/responsive_swgo3h.jpg)

--------------------------------

# Project Walkthrough and Manual Testing
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

**In Chrome Developer Tools, the Console had no errors**

------------------------------------

# Testing
---

## Validator Testing
---

- HTML:             All pages were passed through the official https://validator.w3.org/ and no errors were found.

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677705268/htmlhome_vvn56z.jpg)

The Default Django Admin Panel does generate this warning:

Consider avoiding viewport values that prevent users from resizing documents.

<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0">

As this has no negative impact on the app I am ignoring this.

- CSS:              All pages were passed through the official https://jigsaw.w3.org/css-validator/ and no errors were found.

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677749645/csstest_mtpvhd.jpg)

## Lighthouse Testing
---

- Accessibility:    By running the site pages through Lighthouse in Inspect on Chrome I got the following results:

home desktop                |  home mobile
:-----------------:|:-----------------:
![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677842817/homedesktop_w7v8uk.jpg)  |  ![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677843042/homemobile_b04jcf.jpg)

**The Performance on Mobile is not good. But Google Maps even though slowing things down is an essential part of the design**

search results desktop               |  search results mobile
:-----------------:|:-----------------:
![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677843239/searchdesktop_kqolyw.jpg)  |  ![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677843392/searchmobile_tjgudt.jpg)

**Performance could be better. Images are being fed from Cloudinary which seems to be a bottleneck**

post detail desktop               |  post detail mobile
:-----------------:|:-----------------:
![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677843666/postdetaildesktop_mf1pv8.jpg)  |  ![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677843738/postdetailmobile_o2moac.jpg)

urban desktop               |  urban mobile
:-----------------:|:-----------------:
![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677844413/urbandesktop_bhwhft.jpg)  |  ![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677844049/urbanmobile_cn5zak.jpg)

admin desktop               |  admin mobile
:-----------------:|:-----------------:
![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677844158/admindesktop_gtbfaf.jpg)  |  ![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677844248/adminmobile_xwymtn.jpg)

**Scores are not great but this is Django admin panel**

## Pycodestyle Testing
---

The 3 warnings that are listed are apparently in relation to the docker file and have nothing to do with the code in run.py and so can be ignored.

**All files are clear of Problems apart from settings.py**

## pep8 Testing
---

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1678014870/pep8_bd4uzz.jpg)

**All files are clear of Problems apart from settings.py**

3 of the offending lines part of Django core.
1 offending line is Cloudinary.

## Javascript Testing
---

JSHint.com

```
    /*jshint esversion: 6 */
    /* global google: false */
```

**google declaration is part of Google Maps API and to satisfy JSHint it is set to false**

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1677860234/jshint_oryrfp.jpg)

----

## LLC Staff Final Verification
---

When the html code is pasted into the post content, the user can a make a visual comparison in the browser to ensure the results are as expected.

The user is the designer of the timetable (within given parameters of course).

Because the outcome in post content reflects the users Google sheet design, it is up to the user to decide if the outcome is what they planned.

If not, they can amend the HTML table code.

---------------------------------

## Development Transition
---

### Initial Workflow and Design Concept
---

This concept project has been developed by me in Wordpress and is live at:

[Local Link Cork](https://www.locallinkcork.ie/) 

Using Elementor as a Site Builder.

Wordpress and particularly Elementor are restrictive and sometimes do not play nice.
The site is slow in performance and requires too many work arounds.

The workflow to get a revised Timetable from Excel to Wordpress is too convoluted and messy.

So we are now moving to Django.

Automation is now much easier and full control of the workflow is possible.

-----------------------------------

### Planned Final Workflow and Design
---

This Project is not the final step but it is a major step forward.

The ultimate goal will be to take a revised or new Timetable directly from Excel and Publish.

### Following from Wordpress Project and HTML Builder Project
---

Wordpress          |  Github
:-----------------:|:-----------------:
[Local Link Cork](https://www.locallinkcork.ie/)  |  [Github](https://github.com/TMartin88/htmltablebuilder)

Wordpress Post Classic Block           |  HTML View
:-----------------:|:-----------------:
![](https://res.cloudinary.com/dxbarumnj/image/upload/v1678050388/classic_j3tdmz.jpg)  |  ![](https://res.cloudinary.com/dxbarumnj/image/upload/v1678050479/classichtml_vthrz7.jpg)

### Concept Design from Brainstorming
---

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1678051947/conceptdesign_w5nnf8.jpg)

### Final Table Design in ElephantSQL
---

![](https://res.cloudinary.com/dxbarumnj/image/upload/v1678048605/Schedule_Manager_Database_Diagram_crow_s_foot_hikixk.jpg)

---------------------------------
 
## Bug Fixes
---

### Solved Bugs
---

- January 28th 2023 Summernote Runserver Errors
    - Fix 65443ec74bc87004ec1252b65d4872434b8aa062 remove references

- January 29th 2023 Summernote Runserver Errors
    - Fix 427f1f4efc14aa27a00e0c6da97b062b5a929ea9 summernote references sorted

- January 30th 2023 AllAuth not working
    - Fix 5f7ff1d767fedea494db5070f50f16477b9c1336 all auth sorted

- February 9th 2023 Swap Direction causing errors in developer tools console
    - Fix e20790a7221381dd3ce90cd86015e0dbf3e415a9 only applies now to post-detail page

- February 20th 2023 Registration not working
    - Fix 8bf2e771a6f096549d68ad277616932c583871a3 disable email verification in settings

- March 1st 2023 Double quotes typo in base.html
    - Fix 91d95f5fbfc7c5da579a931a4f5f9951cf6ea02e syntax fixed

- March 1st 2023 Search results page incorrect use of alt tags
    - Fix 08d271a6f9c14289d7298a53b78c3291cbed68ae syntax fixed

- March 3rd 2023 Search results page incorrect use of aria labels
    - Fix c8cac1283adf114aa23fed77ea246446faba84eb labels fixed

- March 3rd 2023 post_detail page incorrect use of alt tags
    - Fix 9ee5350e801fa97e92a5c105d1d3ccb92e33719f tags fixed

- March 3rd 2023 post_detail page aria label error
    - Fix dbc888e4fae2cac66c0b4f9acf489b944aecf6a8 error fixed

### Unfixed Bugs
---

- No known unfixed bugs.

----

## Deployment

### Deployment to Heroku
---

The site is deployed to Heroku. 

#### Initial Deployment
---

In Heroku

- Sign up for Heroku Account or Login
- Create New App in Heroku
- Use a unique App name that does not already exist.
- Select Region.
- Create App.
- Postgres.
- In Settings Reveal Config Vars
    - Key: CLOUDINARY_URL Value: "cloudinary url"
    - Key: DATABASE_URL Value: "postgres url"
    - Key: Port Value: 8000
    - Key: SECRET_KEY Value: *******
    - Key: DISABLE_COLLECTSTATIC Value: 1
- Manual Deploy (Select Github as deployment method)
- Search for Django Repo
- Deploy Branch
- Check Build Log for errrors.
- Run App

In Gitpod

- Create Procfile
    - Gunicorn

#### Final Deployment
---

In Heroku
- Login to Heroku Account
- In Settings Reveal Config Vars Remove the following:
    - Key: DISABLE_COLLECTSTATIC Value: 1
- Enable Automatic Deploys

In Gitpod

- In Settings ensure Debug = False
- Ensure all is Pushed and check Git Status

[Please click this link to see it in Heroku](https://schedulemanager.herokuapp.com/)

## Future Features
---

- To bring Fares Calculation https://github.com/TMartin88/farescalculator into this Project
- To bring HTML Builder https://github.com/TMartin88/htmltablebuilder into this project
- To remove the Copy and Paste of Timetable to Post content and write it in by code instead.
- To fully automate the workflow of Timetable updates or additions to Live Published Online.

---------------------------------

## Performance Improvements
---

- Lighthouse to bring all site ratings close to 100% on all fronts
    - Google Maps
    - Cloudinary Images

---------------------------------
 
## Credits
---

- [Slug Tutorial](https://learndjango.com/tutorials/django-slug-tutorial)
- [Full Text Search](https://testdriven.io/blog/django-search/)
- Post Engine assistance from "I Think Therefore I Blog"
- CRUD assistance from "Hello Django"
- [General Problem Solving](https://www.w3schools.com/django/)
- [Advanced Filters](https://www.w3schools.com/bootstrap4/bootstrap_filters.asp)
- [My Earlier development in Wordpress](https://locallinkcork.com/)
- [My Earlier experimental work with Google Maps API](https://github.com/TMartin88/dynamicmaps)
- [Default Form to Current Logged in User](https://stackoverflow.com/questions/70559902/django)
- [Signals for Json](https://www.geeksforgeeks.org/how-to-create-and-use-signals-in-django/)
- [Signals for Json](https://github.com/Code-Institute-Solutions/boutique_ado_v1/blob/master/checkout/signals.py)
- [Skip to Site Content](https://www.a11yproject.com/)

---------------------------------
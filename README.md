# Fox Photography
(Developer: Benjamin Draper)

![Mock-up image](documentation/wireframes/am-i-responsive.JPG)

 [Live webpage](https://benjamindraper1996.github.io/CI_PP2_FoxPhotography/)

## Table of Content

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requirements and Expectations](#user-requrements-and-expectations)
    3. [User Stories](#user-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colour](#colours)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks-&-tools)
5. [Features](#features)
6. [Testing](#validation)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [Accessibility](#accessibility)
    4. [Performance](#performance)
    5. [Device testing](#performing-tests-on-various-devices)
    6. [Browser compatibility](#browser-compatability)
    7. [Testing user stories](#testing-user-stories)
7. [Bugs](#Bugs)
8. [Deployment](#deployment)
9. [Credits](#credits)
10. [Acknowledgements](#acknowledgements)

## Project Goals 

### User Goals
- Having a portfolio website to show the clients work off in a eye catching way.
- See a variety of the different types of work the client performs.
- Find information about how to get in contact with the business.
- Find the location on the business.

### Site Owner Goals
- Increase the number of customers through visitors to the website.
- Promote the company to new and existing users.
- Provide a way for customers to contact the business for all queries.
- Provide essential information to anyone who needs it.

## User Experience

### Target Audience
- This business is targeting first time users for bespoke photoshoots.
- This business is targeting groups of individuals who want professional photographs of events.
- This business is targeting other companies who require professional photography for an event.

### User Requirements and Expectations
- The user can expect an Intuitive and accessible navigation system.
- The user can expect easily find relevant information relating to the company and the products.
- The user can expect all links work as expected and functions perform their tasks correctly.
- The user can expect presentation is in line with the company guidelines and the website is visually appealing on all screen sizes.
- The user can expect easy access to contact information.
- The user can expect easy to read Headings to draw attention to the areas of interest to the customer.
- The user can expect accessibility features.

### User Stories
 
#### First-time User 
1. As a first-time user, I would like to be able to navigate through the website easily. 
2. As a first-time user, I would like to be able to contact the company.
3. As a first-time user, I want to see the company’s gallery.
4. As a first-time user, I want to know about the company.
5. As a first-time user, I Want to Know how to find the business on social media.
 
#### Returning User
6. As a returning user, I would like to see the company’s portfolio.
7. As a returning user, I would like to be able to find the company.
8. As a returning user, I would like to find out more information about the company. 
 
#### Company Owner 
9. As the company owner, I want users to be able to see the gallery with ease.
10. As the company owner, I want users to get to know the website. 
11. As the company owner, I want the users to be able to contact us easily.
12. As the company owner, I want the website to act in a responsive manner on all devices.
13. As the company owner, I want users to get redirected to a custom 404 error page if they type in a wrong link into their browser.
14. As the business owner, I would like to incorporate a small game that utilises the work the business has produced.
15. As the business owner, I would like users to have easy access to social media links.

## Design

### Design Choices
The website design was made to reflect on the business owner’s preference, they preferred to have a much brighter colour palette so that it would attract people into the website.

### Colour
For the colour scheme the website owner has chosen to implement a dark and light theme while also adding alot of vibrant colours to make it very eye catching. To narrow down the colours I used https://coolors.co/ an example of both the dark and light theme are shown below.
<br>

### Dark Mode
![Dark Mode Theme](documentation/features/colour-palette-dark.png)
<br>

### Light Mode
![Light Mode Theme](documentation/features/colour-palette-light.png)

### Fonts
 The business owner preferred the use of 'Josefin Slab' font as the main, with a backup of sans-serif across the website for the title and headers. This is used to maintain a Consistent and professional look with an easily readable format. 
<br>
For the Secondary font for the body text the owners decided to use 'Poiret One' with a backup of sans-serif, this will help to maintain the consistent theme across the website.

### Structure
The Pages are structured in a Regularly used, user friendly and well-known format. This makes each page easy to navigate, coupled with a dropdown navigation menu and secondary footer navigation menu this gives the user many options for navigating around the website.
The website consists of four main pages and a 404 Error Page:
- Home page: This page shows off some of the work the business has done through a revolving image gallery.
- About page: This page gives the bulk of the information about the business itself and its owner, with more examples of the work they have done.
- Contact page: This page gives the user a way of getting in touch with the business via email. It also shows you the address and a Map of their location.
- Game page: This page offers the user the opportunity to play a small game made from the work that the business has done in the past.

### Wireframes

<details><summary>Mobile Design</summary>
<img src="documentation/wireframes/mobile.jpg">
</details>
<details><summary>Desktop Design</summary>
<img src="documentation/wireframes/desktop.jpg">
</details>

## Technologies Used

### Languages
- HTML
- CSS
- JavaScript

### Frameworks & Tools
- Git
- GitHub
- Gitpod 
- Balsamiq
- Google Fonts 
- Favicon<span>.</span>io
- coolors
- Am I Responsive?
- EmailJS
- TinyPNG

## Features
### Dropdown navigation Menu
- Featured on all Pages across the website.
- The dropdown menu is fully responsive uses a hamburger style button across all sizes.
- The dropdown menu includes links to allow users to navigate around the site easily.
- The dropdown menu includes the social media icons that open a link in a new tab.
- The dropdown menu includes the dark theme switch toggler option for users that prefer to use a darker screen.
- The link that the user is currently hovering over is underlined for easy visibility.
- user stories covered: 1,10,12
![ Dropdown navigation Menu](documentation/features/hamburger.JPG)
![ Dropdown navigation Menu open](documentation/features/menu.JPG)
![ Dropdown navigation Menu open](documentation/features/menu-dark.JPG)

### Image Gallery
- Featured on the Home page, the Gallery consists of 8 sets of 3 randomly rotating images each switching at a random time.
- The gallery is designed to showcase some of the work the business has produced for their clients so that current and potential customers can see what sort of product is available.
- The image gallery is fully responsive down to mobile size devices and continues to switch the images when in a smaller size.
- User stories covered: 3,6,9,12
![Image Gallery Before](documentation/features/gallery1.JPG)
![Image Gallery After](documentation/features/gallery2.JPG)

### Footer
- Featured across the whole website.
- Consists of two separate divs that contain nav links and social media links that open in a new page.
- The footer is fully responsive down to mobile size devices.
- User stories covered: 1,10,11,12
![Footer](documentation/features/footer.JPG)

### About The Business
- Featured on the about page.
- This consists of a picture of the owner and a description of the owner and the business.
- This is fully responsive down to mobile size devices.
- User stories covered: 4,8,12
![ About The Business](documentation/features/about-the-business.JPG)

### Carousel
- Featured on the about page.
- This is fully responsive down to mobile size devices.
- Shows the user a range of pictures taken by the business.
- Arrow selectors to allow the user to navigate the slides back and forward.
- User stories covered: 3,6,9,12
![Carousel Before](documentation/features/carousel-before.JPG)
![Carousel After](documentation/features/carousel-after.JPG)

### Contact Form
- Featured on the contact page.
- This is fully responsive down to mobile size devices.
- Allows the user to contact the business about for any queries they might have.
- This uses the EmailJS API to initiate an email chain between the person sending the contact form in and the business so that the business can reply in a prompt and professional manner.
- User stories covered: 2,8,10,12
![Contact Form](documentation/features/contact-form.JPG)

### Business address
- Featured on the contact page.
- This is fully responsive down to mobile size devices.
-  The business address allows users to find the business by their address, this can be used by some users with a Satnav or externally in Google maps.
- User stories covered: 2,7,8,11,12
![Business address](documentation/features/business-address.JPG)

### IFrame Map
- Featured on the contact page.
- This is fully responsive down to mobile size devices.
- Allows the user to see the location of the business and the surrounding area
- User stories covered: 2,7,8,11,12
![IFrame Map](documentation/features/iframe-map.JPG)

### Responsive Design
- Featured on all pages of the website the responsive design allows the website to be displayed on many different device sizes and types.
- User stories covered: 12
![Responsive Design Desktop](documentation/features/responsive-design-desktop.JPG)
![Responsive Design Mobile](documentation/features/responsive-design-mobile.JPG)

### 404 Error Page
- Prevents the user from getting lost by entering a url that does not exist and redirecting them to a custom error page directing them back to the main website.
- This is fully responsive down to mobile size devices.
- User stories covered: 12,13
![404 Error Page](documentation/features/error-page.JPG)

### Slider Puzzle
- Featured on the game page of the website
- This is fully responsive down to mobile size devices.
- This is a way to showcase some of the work the company has done in a fun and interesting way.
- User stories covered: 12,14
![ Slider Puzzle ](documentation/features/slider-puzzle.JPG)


## Validation

### HTML Validation


### CSS Validation


### JavaScript Validation


### Accessibility


### Performance


### Performing tests on various devices


### Browser compatibility


### Testing user stories



## Bugs


## Deployment

The website was deployed using GitHub Pages by following these steps:
1. In the GitHub repository navigate to the Settings tab
2. On the left-hand menu select Pages
3. For the source select Branch: master
4. After the webpage refreshes automatically you will see a ribbon on the top saying: "Your site is published at https://benjamindraper1996.github.io/CI_PP2_FoxPhotography/

You can fork the repository by following these steps:
1. Go to the GitHub repository
2. Click on Fork button in upper right-hand corner

You can clone the repository by following these steps:
1. Go to the GitHub repository 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or Github CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash
5. Change the current working directory to the one where you want the cloned directory
6. Type git clone and paste the URL from the clipboard ($ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY)
7.Press Enter to create your local clone.

## Credits
Images and Logos not referenced below are owned by the developer.

### Media


### Code


## Acknowledgements
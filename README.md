# Code Louisville Javascript Project

This website was created to show current statistics of COVID-19. It uses an api to show most recent statistics and uses a date calculator to show the time duration since important events. At the bottom of the page is a newsletter sign up form. The form will save a file to your computer with the data entered and will post the data to a google forms spreadsheet.

## Project Features

- Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)
  - This website pulling data from https://api.covidtracking.com/v1/us/current.json which displays the up to date covid information in "Covid-19 Statistics" section.
  - It is also pulling data from https://sheetdb.io/api/v1/258kzr6osm16s and displaying it on newsletter.html.
- Post to an external API and show that it has saved/persisted
  - Pushing data from newsletter form to a google sheet and api.
    - API : https://sheetdb.io/api/v1/258kzr6osm16s
    - Google Sheets: https://docs.google.com/spreadsheets/d/12O5PKaCzv4fTlnGjDQgSW3o2_WwHxEmLtpNzQ8ELPQI/edit#gid=0
- Create a form and save the values (on click of Submit button) to an external file.
  - When you fill out the newsletter form, it will save your response to a .txt file and save it on your system.
- Calculate and display data based on an external factor.
  - In the important events section, the website will get the current data and calculate the number of days since the event happened.

## Extra Features

When scroll down to the bottom of the homepage. There is a button in the left hand corner that says login. When you push the button, it will ask you to enter the password "codelouisville". It will then navigate to a page with the newletter api listed.

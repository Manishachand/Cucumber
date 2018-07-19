Feature: Login

Background: 
Given The URL of Git Hub

Scenario: Valid Git Hub user
When User enters Manishachand as username
And User enters Shiya@888 as password
And User clicks on submit
Then Git Hub page opens

Scenario: Invalid Git Hub user
When User enters Manishachand as username
And User enters manisha as password
And User clicks on submit
Then User is still at Sign In Git Hub page

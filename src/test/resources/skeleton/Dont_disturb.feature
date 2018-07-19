Feature: Git Hub Login Feature

Background: 
Given The URL of Git Hub

@Regression
Scenario Outline: Login Scenario
When User enters <username> as username
And User enters <password> as password
And User clicks on Sign in
Then User Navigates to <result>
Then Browser closed

Examples: 
|username|password|result|
|Manishachand|Shiya@222|Sign In Git Hub|
|ShilpaKumareshan|Testing123|Git Hub|
|Rashsrikath|Rash@1992|Git Hub|
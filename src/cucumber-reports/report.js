$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("skeleton/Dont_disturb.feature");
formatter.feature({
  "line": 1,
  "name": "Git Hub Login Feature",
  "description": "",
  "id": "git-hub-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Login Scenario",
  "description": "",
  "id": "git-hub-login-feature;login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters \u003cusername\u003e as username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters \u003cpassword\u003e as password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Sign in",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Navigates to \u003cresult\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Browser closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "git-hub-login-feature;login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "result"
      ],
      "line": 15,
      "id": "git-hub-login-feature;login-scenario;;1"
    },
    {
      "cells": [
        "Manishachand",
        "Shiya@222",
        "Sign In Git Hub"
      ],
      "line": 16,
      "id": "git-hub-login-feature;login-scenario;;2"
    },
    {
      "cells": [
        "ShilpaKumareshan",
        "Testing123",
        "Git Hub"
      ],
      "line": 17,
      "id": "git-hub-login-feature;login-scenario;;3"
    },
    {
      "cells": [
        "Rashsrikath",
        "Rash@1992",
        "Git Hub"
      ],
      "line": 18,
      "id": "git-hub-login-feature;login-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The URL of Git Hub",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.the_URL_of_Git_Hub()"
});
formatter.result({
  "duration": 11787771415,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login Scenario",
  "description": "",
  "id": "git-hub-login-feature;login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters Manishachand as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters Shiya@222 as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Sign in",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Navigates to Sign In Git Hub",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Browser closed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Manishachand",
      "offset": 12
    }
  ],
  "location": "Stepdefs.user_enters_Manishachand_as_username(String)"
});
formatter.result({
  "duration": 126495597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shiya@222",
      "offset": 12
    }
  ],
  "location": "Stepdefs.user_enters_Shiya_as_password(String)"
});
formatter.result({
  "duration": 111362663,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.user_clicks_on_submit()"
});
formatter.result({
  "duration": 1004866629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In Git Hub",
      "offset": 18
    }
  ],
  "location": "Stepdefs.user_Navigates_to_GitHub(String)"
});
formatter.result({
  "duration": 16497007,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.browser_closed()"
});
formatter.result({
  "duration": 674792724,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The URL of Git Hub",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.the_URL_of_Git_Hub()"
});
formatter.result({
  "duration": 9520407130,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login Scenario",
  "description": "",
  "id": "git-hub-login-feature;login-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters ShilpaKumareshan as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters Testing123 as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Sign in",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Navigates to Git Hub",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Browser closed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ShilpaKumareshan",
      "offset": 12
    }
  ],
  "location": "Stepdefs.user_enters_Manishachand_as_username(String)"
});
formatter.result({
  "duration": 128628451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing123",
      "offset": 12
    }
  ],
  "location": "Stepdefs.user_enters_Shiya_as_password(String)"
});
formatter.result({
  "duration": 90975730,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.user_clicks_on_submit()"
});
formatter.result({
  "duration": 1706811360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Git Hub",
      "offset": 18
    }
  ],
  "location": "Stepdefs.user_Navigates_to_GitHub(String)"
});
formatter.result({
  "duration": 9003213,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.browser_closed()"
});
formatter.result({
  "duration": 674680486,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The URL of Git Hub",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.the_URL_of_Git_Hub()"
});
formatter.result({
  "duration": 9871605627,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login Scenario",
  "description": "",
  "id": "git-hub-login-feature;login-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters Rashsrikath as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters Rash@1992 as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Sign in",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Navigates to Git Hub",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Browser closed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Rashsrikath",
      "offset": 12
    }
  ],
  "location": "Stepdefs.user_enters_Manishachand_as_username(String)"
});
formatter.result({
  "duration": 130598742,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rash@1992",
      "offset": 12
    }
  ],
  "location": "Stepdefs.user_enters_Shiya_as_password(String)"
});
formatter.result({
  "duration": 113033321,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.user_clicks_on_submit()"
});
formatter.result({
  "duration": 1680515871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Git Hub",
      "offset": 18
    }
  ],
  "location": "Stepdefs.user_Navigates_to_GitHub(String)"
});
formatter.result({
  "duration": 12976242,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.browser_closed()"
});
formatter.result({
  "duration": 673670343,
  "status": "passed"
});
});
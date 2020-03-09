Feature: Create report page

        Scenario: I am on the create report page
            Given I am "logged-in" as "user"
              And I am on the create report page of project id
             Then I see the page title
              And i see the title input field
              And i see the project location input field
              And i see the location map field
              And i see the location map
              And i see the insinger foundation policy priorities field
              And i see the budget field
              And i see the total target number field
              And i see the total total commited field
              And i see the children field
              And i see the refugees field
              And i see the elderly field
              And i see the low income field
              And i see the women field
              And i see the back button
              And i see the next button


        Scenario: I fill in the outcomes form
            Given I am "logged-in" as "user"
              And I am on the create report page of "project id"
             Then i type "Project report title" in the "title input field"
              And i type "Kenya" in the "project location input field"
              And i type "Refugees" in the "policy priorities input field"
              And i type 10000 in the "budget input field"
              And i type 2 in the "total target number field"
              And i type 5000 in the "total total commited field"
              And i type 2 in the "refugees field"
             Then "next button" should be "active"
             Then i click on the "next button"
              And i should be redirected to "indicator and verification" tab/page


        Scenario: I fill out inidicator and verificiation page
            Given I am "logged in" as "user"
              And i am on the indicator and "verification page" of "project id"
             Then i type something in the the first field
             Then i type somehting in the second field
             Then the "next button" should be active
             Then i click on the "next button"
              And i should be redirected to "challenges and plans" page


        Scenario: I fill out challenges and plans page
            Given I am logged in as user
              And i am on the challenges
             Then i fill out the "Key implementation challenges" field
             Then i fill out the "Other project outcomes and observations" fields
             Then i fill out the "Future plans" field
             Then i fill out the "Other comments" field
             Then the "next button" should be active
             Then i click on the "next button"
              And i should be redirected to "preview page"


        Scenario: I am on the preview page
            Given i am logged in as a user
              And i am on the preview pa
             Then i check if all fields are visible
             Then the submit button should be activeTab
              And i click on the submit butto
             Then i should be redirected to the confirmation page
              And i should see "your report has been sent"
             Then the "go to report button" should be active
             Then i click on the "go to report" button should
              And i should be redirected to the report detail page




              
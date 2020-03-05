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
              And I am on the create report page of project id
             Then i type "Project report title" in the "title input field"
              And i type "Kenya" in the "project location input field"
              And i type "Refugees" in the "policy priorities input field"
              And i type 1000000 in the "budget input field"
              And i type 10000 in the "total target number field"
              And i type 7000 in the "total total commited field"
              And i type 100 in the "children field"
              And i type 1000 in the "refugees field"






Feature: Reports detail page

        Scenario: I am on the report detail page
            Given I am "logged-in" as "user"
             When I am on the "report detail page" of "report-id"
             Then I should "report-id" in the "title"
              And I should see the "priority area" dataviz
              And I should see the "Key outcomes" card
              And I should see the "Indicator and verification" card
              And I should see the "Reports" list
              
        Scenario: I am on the report detail page and i click on the SDG tab item
            Given I am on the "report detail page" of "report-id"
             When I click on "SDG nav item"
             Then I should see the "SDG dataviz"

        Scenario: I am on the report detail page and i click on the Map tab item
            Given I am on the "report detail page" of "report-id"
             When I click on "SDG nav item"
             Then I should see the "SDG dataviz"

        Scenario: I am on the report detail page and i click on the Priority Area tab item
            Given I am on the "report detail page" of "report-id"
             When I click on "Priority Area" nav item
             Then I should see the "Priority Area" dataviz

        Scenario: I am on the report detail page and i click on the Generate Report button
            Given I am on the "report detail page" of "report-id"
             When I click on "Generate Report" button
             Then I should be redirected "Outcomes Page"
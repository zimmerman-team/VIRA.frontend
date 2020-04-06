Feature: Reports page

        Scenario: I am on the reports page
            Given I am "logged-in" as "user"
             When I am on the reports page
             Then I should see the reports list
              And the reports list should contain reports
            
        Scenario: I am on the project detail page and i click on a project in the project list
            Given I am on the "reports page"
             When I click on a "report" in the "reports list"
             Then I should be redirected to the "reports detail page"
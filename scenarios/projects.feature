Feature: Projects page

        Scenario: I am on the projects page
            Given I am "logged-in" as "user"
             When I am on the "projects page"
             Then I should see the "projects list"
              And the "projects list" should contain "projects"
              
        Scenario: I am on the project detail page and i click on a project in the project list
            Given I am on the "projects page"
             When I click on a "project" in the "project list"
             Then I should be redirected to the "project detail page"
Feature: Grantees page

        Scenario: I am on the grantees page
            Given I am "logged-in" as "user"
             When I am on the "grantees page"
             Then I should see the grantees list
              And the grantees list should contain grantees
              
        Scenario: I am on the project detail page and i click on a project in the project list
            Given I am on the "grantees page"
             When I click on a "grantee" in the "grantees list"
             Then I should be redirected to the "grantees detail page"
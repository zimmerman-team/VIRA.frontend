Feature: grantee detail page

        Scenario: I am on the grantee detail page
            Given I am "logged-in" as "user"
             When I am on the "grantee detail page" of "grantee-id"
             Then I should "grantee-id" in the "title"
              And I should see "grantee description"
              And i should see "contacts card"
              And I should see the "priority area" dataviz
              And I should see the "Projects" list
              
        Scenario: I am on the grantee detail page and i click on the Projects nav item
            Given I am on the "grantee detail page" of "grantee-id"
             When I click on "Projects nav item"
             Then I should see the "projects list"

        Scenario: I am on the grantee detail page and i click on the Grantee nav item
            Given I am on the "grantee detail page" of "grantee-id"
             When I click on "Grantee nav item"
             Then I should see the "grantees list"

        Scenario: I am on the grantee detail page and i click on the Reports nav item
            Given I am on the "grantee detail page" of "grantee-id"
             When I click on "Reports nav item"
             Then I should see the "reports list"


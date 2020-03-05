Feature: Home page

        Scenario: I am on the homepage
            Given I am "logged-in" as "user"
             When I am on the "homepage"
             Then I should see the "stat-card"
              And I should see the "priority-area-chart"
              And I should see the "projects-list"

        Scenario: Stats on the homepage
            Given I am "logged-in" as "user"
             When I am on the "homepage"
             Then I should see the "stat-card"
              And the "stat-card" should contain "project-amount"
              And the "stat-card" should contain "grantee-amount"
              And the "stat-card" should contain "total-report-amount"

        Scenario: Projects field has stats
            Given I am "logged-in" as "user"
             When I am on the "homepage"
             Then I should see the "stat-card"
              And the "stat-card" should contain "project-amount"
              And the "project-amount" should be above 0

        Scenario: Grantee field has stats
            Given I am "logged-in" as "user"
             When I am on the "homepage"
             Then I should see the "stat-card"
              And the "stat-card" should contain "grantee-amount"
              And the "grantee-amount" should be above 0

        Scenario: Total reports field has stats
            Given I am "logged-in" as "user"
             When I am on the "homepage"
             Then I should see the "stat-card"
              And the "stat-card" should contain "grantee-amount"
              And the "grantee-amount" should be above 0

        Scenario: The priority area dataviz
            Given I am "logged-in" as "user"
             When I am on the "homepage"
             Then I should see "priority area" dataviz
             
        Scenario: The SDG dataviz
            Given I am "logged-in" as "user"
             When I am on the "homepage"
             Then I click on "SDG item" in the "tab navigator"
              And I should see the "SDG" dataviz

        Scenario: User clicks on Map item
            Given I am "logged-in" as "user"
             When I am on the "homepage"
             Then I click on "Map item" in the "tab navigator"
              And I should see "Geo Map" viz

        Scenario: The projects list should show projecs
            Given I am "logged-in" as "user"
             When I am on the "homepage"
             Then I should see "projects list"
              And the projects list should contain projects




Feature: Search

        Scenario: User opens search field in app bar
            Given I am "logged-in" as "user"
             Then I should see the search button in the app bar
             When I click on the search button
             Then the search field should appear

        Scenario: Search field is active
            Given I am "logged-in" as "user"
             When search field is active
             Then I enter "Amsterdam" into the search field
              And I see <4> items in the project result list
             Then I click on the grantees tab in the navigator
              And I see <6> items in the grantees result list
             Then I click on the all tab in the navigator
              And I see <10> items in the all result list

        Scenario: Search field gets closed
            Given I am "logged-in" as "user"
             When search field is active
             Then I click outside of the
              And the search field is closed
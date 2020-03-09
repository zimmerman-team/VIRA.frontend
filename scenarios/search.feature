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


        Scenario: i click on item in search result
            Given i am "logged in" as "user"
             When i click on "search button"
             Then the "search field" should be "visible"
              And i type "Amsterdam" in the "search fields"
             Then i should see "search result"
             Then i select "projects tab" of "search result"
              And i click on the "first item" in "search result"
             Then i should be redirected to the "project detail page"

            
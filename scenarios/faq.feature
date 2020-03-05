Feature: FAQ page

        Scenario: I go to the FAQ page
            Given I am on the FAQ page
             Then I should see X amount of FAQ items

        Scenario: I click on one of the FAQ items
            Given I am on the FAQ page
             When I click on a FAQ item
             Then the FAQ item opens

        Scenario: FAQ item is open
            Given I am on the FAQ page
             When I click on a FAQ item
             Then the FAQ item closes
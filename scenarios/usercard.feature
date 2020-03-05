Feature: Search

        Scenario: i open user card in app bar
            Given I am "logged-in" as "user"
             Then I should see the user button in the app bar
             When I click on the user button
             Then I see the user card

        Scenario: user card is opened
            Given the user card is opened
             Then I see the user icon
              And i see the user nam
              And i see the "Manage teams & users" button
              And i see the "Manageyour acount" button
              And i see the signout button
              And i see the privacy policy button


        Scenario: i click on "Manage teams & users"
            Given the user card is opened
             When I click on the "Manage teams & users" button
             Then i should be redirected to the "Manage teams & users" pag
              
        Scenario: i click on "Manage your account"
            Given the user card is opened
             When I click on the "Manage your account" button
             Then i should be redirected to the "Manage your account" page

        Scenario: i click on "Sign out"
            Given the user card is opened
             When I click on the "Sign out" button
             Then i should be redirected to the "Sign in" page


        Scenario: i click on "Privacy Policy" button
            Given the user card is opened
             When I click on the "Privacy Policy" button
             Then i should be redirected to the "Privacy Policy" page
              


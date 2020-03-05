Feature: Sign in page

    Scenario: Successful sign in
        Given I am on the "sign-in-page" page
        When I enter correct credentials 
        Then I should see the "home" page

    Scenario: Unsuccessful sign in
        Given I am on the "sign-in-page" page
        When I enter incorrect credentials
        Then I should see the text "Wrong email or password" in the "PositionedSnackbar"

    Scenario: I have forgotten my password
        Given I am on the "sign-in-page" page
        When I click on the "login-button"
        Then I should be redirected to the "password-recovery-page" page

    Scenario: I should be able to recover password
        Given I am on the "password-recovery-page" page
        When I enter my "email" in the "login-email" field 
        And I click on the "login-button" 
        Then I should be redirected to the "sign-in-page" page  


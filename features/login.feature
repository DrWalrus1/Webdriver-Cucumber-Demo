Feature: To test the login functionality in "The Internet Herokuapp"

Background:
    Given the user is on the login page

Scenario: The one where user logs in using valid credentials
    When the user enters username as "tomsmith" and password as "SuperSecretPassword!"
    And click on login button
    Then the user must navigate to secure area page displaying a message "You logged into a secure area!"

Scenario: The one where user logs in using invalid credentials
    When the user enters username as "<username>" and password as "<password>"
    And click on login button
    Then the user must remain on login page displaying a message "<errorMessage>"
Examples:
    | username  | password              | errorMessage       |
    | james     | SuperSecretPassword!  | Invalid username!  |
    | tomsmith  | SuperPassword!        | Invalid password!  |
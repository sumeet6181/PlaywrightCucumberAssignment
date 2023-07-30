Feature: Login Page
  As a user
  I want to test login page
  @web
  Scenario: Verify username textbox
    When I am on page "Login Page"
    Then I see text "Username" on "userNameLabel"
    Then I see field "userName" enable
  @web
  Scenario: Verify Password textbox
    When I am on page "Login Page"
    Then I see text "Password" on "passwordLabel"
    Then I see field "password" enable
  @web
  Scenario: Verify Submit button
    When I am on page "Login Page"
    Then I see text "Submit" on "submit"
    Then I see field "submit" clickable


  @web
  Scenario: Login with invalid username and blank password
    When I am on page "Login Page"
    When I type "Test" into "userName"
    When I click "submit"
    Then I see text "Your username is invalid!" on "notificationMessage"

  @web
  Scenario: Login with invalid password and blank user name
    When I am on page "Login Page"
    When I type "Test" into "password"
    When I click "submit"
    Then I see text "Your username is invalid!" on "notificationMessage"


  @web
  Scenario: Login with invalid password and invalid user name
    When I am on page "Login Page"
    When I type "Test" into "userName"
    When I type "Test" into "password"
    When I click "submit"
    Then I see text "Your username is invalid!" on "notificationMessage"

  @web
  Scenario: Login with valid user name and invalid password
    When I am on page "Login Page"
    When I type "student" into "userName"
    When I type "text" into "password"
    When I click "submit"
    Then I see text "Your password is invalid!" on "notificationMessage"

  @web
  Scenario: Login with valid password and valid user name
    When I am on page "Login Page"
    When I type "student" into "userName"
    When I type "Password123" into "password"
    When I click "submit"
    When I am on page "Home Page"
    Then I see text "Logged In Successfully" on "homePageMessage"

  @web
  Scenario: Apply SQL injection
    When I am on page "Login Page"
    When I type "\" or \"\"=\"" into "userName"
    When I type "\" or \"\"=\"" into "password"
    When I click "submit"
    Then I see text "Your username is invalid!" on "notificationMessage"

  ## all test case mentioned above can be achived by @example
  @web
  Scenario Outline:: Login page invalid cases
    When I am on page "Login Page"
    When I type "<username>" into "userName"
    When I type "<password>" into "password"
    When I click "submit"
    Then I see text "<messages>" on "notificationMessage"

    Examples:
      | username      | password      | messages                  |
      | test          |               | Your username is invalid! |
      |               | test          | Your username is invalid! |
      | test          | test          | Your username is invalid! |
      | student       | test          | Your password is invalid! |
      | \" or \"\"=\" | \" or \"\"=\" | Your username is invalid! |







Feature: Validate the Authentication functionality of Gmail App


  Scenario: As a user, I should be able to login and logout my email app

    Given I am at google home page
    When I authenticate to my gmail account successfully
    Then I should get redirected to the Gmail Dashboard
    When I logout the email account
    Then I should get redirected to the google home page



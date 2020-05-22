Feature: Validate the Email functionalities of Gmail App

  @Functionalities 
  Scenario Outline: As a user, I should be able to send an email

    When I send an email to <email_To> with <subject_title> and <body_text>
    Then I verify that email was sent

    Examples:
    | email_To | subject_title | body_text|
    | emailTo | subject | stringBodyText  |

  @Functionalities 
  Scenario Outline: As a user, I should search an email

    Given the <subject_title> I search the email
    Then I verify the email <subject_title> was found

    Examples:
    | subject_title | 
    |subject |

  @Functionalities 
  Scenario Outline: As a user, I should read an email
    Given the <subject_title> I search the email
    Then I read the email <body_text>

    Examples:
    | subject_title | body_text |
    |subject |stringBodyText|

  @Functionalities 
  Scenario Outline: As a user, I should delete an email
    Given the <subject_title> I search the email
    Then I read the email <body_text>
    When I delete the email found
    Then I verify email was deleted

    Examples:
    | subject_title | body_text |
    |subject |stringBodyText|
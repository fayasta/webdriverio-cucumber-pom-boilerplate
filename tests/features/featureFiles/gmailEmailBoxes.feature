Feature: Validate the Email Boxes of Gmail App

  @Functionalities @StarredBox
  Scenario Outline: As a user, I should see my Starred folder
    When I send an email to <email_To> with <subject_title> and <body_text>
    Given the <subject_title> I search the email
    Then I star the email created
    And I verify that email <subject_title> should be at Starred box
    Then I delete selected email

    Examples:
    | email_To | subject_title | body_text|
    | emailTo | subject | stringBodyText  |


  @Functionalities @SentBox
  Scenario Outline: As a user, I should see my Sent folder
    When I send an email to <email_To> with <subject_title> and <body_text>
    Then I verify the email <subject_title> sent should be at Sent Box
    And I delete selected email

    Examples:
    | email_To | subject_title | body_text|
    | emailTo | subject | stringBodyText  |

    
  @Functionalities @DraftBox
  Scenario Outline: As a user, I should see my Drafts folder
    Given I draft an email to <email_To> with <subject_title> and <body_text>
    Then I verify the email <subject_title> was sent to Draft box
    And I discard draft email

    Examples:
    | email_To | subject_title | body_text|
    | emailTo | subject | stringBodyText  |


  @Functionalities @ScheduledBox
  Scenario Outline: As a user, I should see my Scheduled folder
    Given I schedule an email to <email_To> with <subject_title> and <body_text>
    Then I verify the message when an email was scheduled
    And I verify the email <subject_title> was sent to Scheduled box
    Then I cancel scheduled email

    Examples:
    | email_To | subject_title | body_text|
    | emailTo | subject | stringBodyText  |
    


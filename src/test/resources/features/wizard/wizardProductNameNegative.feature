@negative @smoke @Regression
Feature: name, shortDescription, fullDescription, are being tested within the given range of characters

  @nameNegative
  Scenario: provider enters in name field more than 30 char
    Given product name is set with "a" 40 times
    Given product is set with the following fields
      | active | shortDescription      | fullDescription               | mostPopular | longitude | latitude     | calendarColor | address |
      | true   | Test For Automation 1 | Automation for API in Postman | true        | 456.456   | 3245678.5467 | blue          | Bishkek |
    Given product video is created with bellow given path
      | path                                                                           |
      | https://www.youtube.com/watch?v=u1yVCeXYya4&list=RDMMu1yVCeXYya4&start_radio=1 |
    Given provider sends a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"

  @shortDescriptionNegative
  Scenario: provider enters in shortDescription field more than 60 char
    Given product shortDescription is set with "a" 100 times
    Given product is set with the following fields
      | name     | active | fullDescription               | mostPopular | longitude | latitude     | calendarColor | address |
      | AutoTest | true   | Automation for API in Postman | true        | 456.456   | 3245678.5467 | blue          | Bishkek |
    Given product video is created with bellow given path
      | path                                                                           |
      | https://www.youtube.com/watch?v=u1yVCeXYya4&list=RDMMu1yVCeXYya4&start_radio=1 |
    Given provider sends a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"

  @fullDescriptionNegative
  Scenario: provider enters in fullDescription field more than 900 char
    Given product fullDescription is set with "a" 1000 times
    Given product is set with the following fields
      | name     | active | shortDescription      | mostPopular | longitude | latitude     | calendarColor | address |
      | AutoTest | true   | Test For Automation 1 | true        | 456.456   | 3245678.5467 | blue          | Bishkek |
    Given product video is created with bellow given path
      | path                                                                           |
      | https://www.youtube.com/watch?v=u1yVCeXYya4&list=RDMMu1yVCeXYya4&start_radio=1 |
    Given provider sends a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"



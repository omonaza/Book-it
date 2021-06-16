@providerCreatesProductWithOutSomeFields @smoke @regression
Feature: Creating new Product with Negative Scenarios

  @creatingProductWithTheSameDataOver
  Scenario: Provider creates a new product with the same data
    Given product is set with the following fields
      | name     | active | shortDescription      | fullDescription               | mostPopular | longitude | latitude     | calendarColor | address |
      | AutoTest | true   | Test For Automation 1 | Automation for API in Postman | true        | 456.456   | 3245678.5467 | blue          | Bishkek |
    Given productVideos is set with the following fields
      | path                                                                           |
      | https://www.youtube.com/watch?v=u1yVCeXYya4&list=RDMMu1yVCeXYya4&start_radio=1 |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"


  @creatingProductWithMissingNameField
  Scenario: Provider creates a new product with missing name field
    Given product is set with the following fields
      | active | shortDescription      | fullDescription               | mostPopular | longitude | latitude     | calendarColor | address |
      | true   | Test For Automation 1 | Automation for API in Postman | true        | 456.456   | 3245678.5467 | blue          | Bishkek |
    Given productVideos is set with the following fields
      | path                                                                           |
      | https://www.youtube.com/watch?v=u1yVCeXYya4&list=RDMMu1yVCeXYya4&start_radio=1 |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"


  @creatingProductWithEmptyNameField
  Scenario: Provider creates a new product with empty name field
    Given product is set with the following fields
      | name | active | shortDescription      | fullDescription               | mostPopular | longitude | latitude     | calendarColor | address |
      |      | true   | Test For Automation 1 | Automation for API in Postman | true        | 456.456   | 3245678.5467 | blue          | Bishkek |
    Given productVideos is set with the following fields
      | path                                                                           |
      | https://www.youtube.com/watch?v=u1yVCeXYya4&list=RDMMu1yVCeXYya4&start_radio=1 |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."


  @creatingProductWithMissingShortDescriptionField
  Scenario: Provider creates a new product with missing shortDescription field
    When product is set with the following fields
      | name     | active | fullDescription               | mostPopular | longitude | latitude     | calendarColor | address |
      | AutoTest | true   | Automation for API in Postman | true        | 456.456   | 3245678.5467 | blue          | Bishkek |
    Given productVideos is set with the following fields
      | path                                                                           |
      | https://www.youtube.com/watch?v=u1yVCeXYya4&list=RDMMu1yVCeXYya4&start_radio=1 |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"


  @creatingProductWithMissingFullDescriptionField
  Scenario: Provider creates a new product with missing fullDescription field
    When product is set with the following fields
      | name     | active | shortDescription      | mostPopular | longitude | latitude     | calendarColor | address |
      | AutoTest | true   | Test For Automation 1 | true        | 456.456   | 3245678.5467 | blue          | Bishkek |
    Given productVideos is set with the following fields
      | path                                                                           |
      | https://www.youtube.com/watch?v=u1yVCeXYya4&list=RDMMu1yVCeXYya4&start_radio=1 |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"

  @creatingProductWithEmptyShortDescription
  Scenario: Provider creates a new product with empty shortDescription field
    Given product is set with the following fields
      | name     | active | shortDescription | fullDescription               | mostPopular | longitude | latitude     | calendarColor | address |
      | AutoTest | true   |                  | Automation for API in Postman | true        | 456.456   | 3245678.5467 | blue          | Bishkek |
    Given productVideos is set with the following fields
      | path                                                                           |
      | https://www.youtube.com/watch?v=u1yVCeXYya4&list=RDMMu1yVCeXYya4&start_radio=1 |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"

  @creatingProductWithEmptyFullDescription
  Scenario: Provider creates a new product with empty fullDescription field
    Given product is set with the following fields
      | name     | active | shortDescription      | fullDescription | mostPopular | longitude | latitude     | calendarColor | address |
      | AutoTest | true   | Test For Automation 1 |                 | true        | 456.456   | 3245678.5467 | blue          | Bishkek |
    Given productVideos is set with the following fields
      | path                                                                           |
      | https://www.youtube.com/watch?v=u1yVCeXYya4&list=RDMMu1yVCeXYya4&start_radio=1 |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"

  @creatingProductWithEmptyAddress
  Scenario: Provider creates a new product with empty address field
    Given product is set with the following fields
      | name     | active | shortDescription      | fullDescription               | mostPopular | longitude | latitude     | calendarColor | address |
      | AutoTest | true   | Test For Automation 1 | Automation for API in Postman | true        | 456.456   | 3245678.5467 | blue          |         |
    Given productVideos is set with the following fields
      | path                                                                           |
      | https://www.youtube.com/watch?v=u1yVCeXYya4&list=RDMMu1yVCeXYya4&start_radio=1 |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"

  @creatingProductWithMissingAddress
  Scenario: Provider creates a new product with missing address field
    Given product is set with the following fields
      | name     | active | shortDescription      | fullDescription               | mostPopular | longitude | latitude     | calendarColor |
      | AutoTest | true   | Test For Automation 1 | Automation for API in Postman | true        | 456.456   | 3245678.5467 | blue          |
    Given productVideos is set with the following fields
      | path                                                                            |
      | https://www.youtube.com/watch?v=u1yVCeXYya4&list=RDMMu1yVCeXYya4&start_radio=1 |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"
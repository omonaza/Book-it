  @productPriceNegativeTesting @smoke @regression
Feature: productPrices is being tested with negative scenarios

  Background:
    Given product is set with the following fields
      | name     | active | shortDescription      | fullDescription               | mostPopular | longitude | latitude     | calendarColor | address |
      | AutoTest | true   | Test For Automation 1 | Automation for API in Postman | true        | 456.456   | 3245678.5467 | blue          | Bishkek |
    Given productVideos is set with the following fields
      | path                                                                           |
      | https://www.youtube.com/watch?v=u1yVCeXYya4&list=RDMMu1yVCeXYya4&start_radio=1 |

  @productPricesWithEmptyFromDateField
  Scenario: provider enters a data in productPrices with empty  fromDate field
    Given productPrices is set with the following fields
      | fromDate | toDate              | title | remarks | officialPrice | currencyId | quantityPerDay | autoConfirm | pricePerPerson | deletedAt |
      |          | 2022-12-31T00:00:00 | API   | Test    | 0             | 5bpJKaVE   | 123            | false       | ture           |           |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."


  @productPricesWithMissingFromDateField
  Scenario: provider enters a data in productPrices with missing  fromDate field
    Given productPrices is set with the following fields
      | toDate              | title | remarks | officialPrice | currencyId | quantityPerDay | autoConfirm | pricePerPerson | deletedAt |
      | 2022-12-31T00:00:00 | API   | Test    | 0             | 5bpJKaVE   | 123            | false       | ture           |           |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."


  @productPricesWithSpecialCharFromDateField
  Scenario: provider enters a data in productPrices with empty  fromDate field
    Given productPrices is set with the following fields
      | fromDate | toDate              | title | remarks | officialPrice | currencyId | quantityPerDay | autoConfirm | pricePerPerson | deletedAt |
      | @#$%^    | 2022-12-31T00:00:00 | API   | Test    | 0             | 5bpJKaVE   | 123            | false       | ture           |           |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."


  @productPricesWithEmptyToDateField
  Scenario: provider enters a data in productPrices with empty  toDate field
    Given productPrices is set with the following fields
      | fromDate            | toDate | title | remarks | officialPrice | currencyId | quantityPerDay | autoConfirm | pricePerPerson | deletedAt |
      | 2021-05-31T00:00:00 |        | API   | Test    | 0             | 5bpJKaVE   | 123            | false       | ture           |           |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."

  @productPricesWithMissingToDateField
  Scenario: provider enters a data in productPrices with missing  toDate field
    Given productPrices is set with the following fields
      | fromDate            | title | remarks | officialPrice | currencyId | quantityPerDay | autoConfirm | pricePerPerson | deletedAt |
      | 2021-05-31T00:00:00 | API   | Test    | 0             | 5bpJKaVE   | 123            | false       | ture           |           |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"


  @productPricesWithSpecialCharToDateField
  Scenario: provider enters a data in productPrices with special char  toDate field
    Given productPrices is set with the following fields
      | fromDate            | toDate | title | remarks | officialPrice | currencyId | quantityPerDay | autoConfirm | pricePerPerson | deletedAt |
      | 2021-05-31T00:00:00 | @#$%   | API   | Test    | 0             | 5bpJKaVE   | 123            | false       | ture           |           |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."

  @productPricesWithEmptyTitleField
  Scenario: provider enters a data in productPrices with empty  title field
    Given productPrices is set with the following fields
      | fromDate            | toDate              | title | remarks | officialPrice | currencyId | quantityPerDay | autoConfirm | pricePerPerson | deletedAt |
      | 2021-05-31T00:00:00 | 2022-12-31T00:00:00 |       | Test    | 0             | 5bpJKaVE   | 123            | false       | ture           |           |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."


  @productPricesWithMissingTitleField
  Scenario: provider enters a data in productPrices with missing  title field
    Given productPrices is set with the following fields
      | fromDate            | toDate              | remarks | officialPrice | currencyId | quantityPerDay | autoConfirm | pricePerPerson | deletedAt |
      | 2021-05-31T00:00:00 | 2022-12-31T00:00:00 | Test    | 0             | 5bpJKaVE   | 123            | false       | ture           |           |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."




@smoke
Feature: productRegions is being tested with negative scenarios

  Background:
    Given product is set with the following fields
      | name     | active | shortDescription      | fullDescription               | mostPopular | longitude | latitude     | calendarColor | address |
      | AutoTest | true   | Test For Automation 1 | Automation for API in Postman | true        | 456.456   | 3245678.5467 | blue          | Bishkek |
    Given productVideos is set with the following fields
      | path                                                                           |
      | https://www.youtube.com/watch?v=u1yVCeXYya4&list=RDMMu1yVCeXYya4&start_radio=1 |

  @productRegionWithEmptyRegionNameField
  Scenario: provider enters a data in productRegions with empty  regionName field
    Given productRegions is set with the following fields
      | productId | regionId | regionName |
      | PYayPjpW  | 5bpJKaVE |            |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."

  @productRegionWithMissingRegionNameField
  Scenario: provider enters a data in productRegions with missing  regionName field
    Given productRegions is set with the following fields
      | productId | regionId |
      | PYayPjpW  | 5bpJKaVE |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."


  @productRegionWithSpecialCharsRegionNameField
  Scenario: provider enters a data in productRegions with special chars  regionName field
    Given productRegions is set with the following fields
      | productId | regionId | regionName |
      | PYayPjpW  | 5bpJKaVE | @#$%^      |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."
@successfullyCreateProduct @smoke @regression
Feature: Creating a new product, and sending a new request body with the following scenarios
  As a provider i want to be able to register to the app
  so i can use it , and provide my services ,by creating all kinds of my product.

  Scenario: provider creates a new product
    Given product is set with the following fields
      | name              | active | shortDescription      | fullDescription               | mostPopular | longitude | latitude     | calendarColor | address |
      | AutoTestPositive1 | true   | Test For Automation 1 | Automation for API in Postman | true        | 456.456   | 3245678.5467 | blue          | Bishkek |

  Scenario: provider enters a data in productTypes
    Given productTypes is set with following fields
      | name    | id       |
      | TestAPI | 5bpJ0olV |

  Scenario: provider enters a data in ProductWorkingDates
    Given productWorkingDates is set with following fields
      | fromDate   | toDate     | name                | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2021-05-27 | 2022-12-31 | 1234567sdfgh#$#%^%& | false       | null      | 0                      | 0         |


  Scenario: provider enters a data in timeSlots
    Given  timeSlots is set with the following fields
      | active | endTime  | dayOfWeek | duration | quantity | startTime | usedQuantity |
      | false  | 20:00:00 | Monday    | 01:00:00 | 67       | 09:00:00  | 0            |


  Scenario: provider enters a data in ProductRegions
    Given productRegions is set with the following fields
      | productId | regionId | regionName |
      | PYayPjpW  | 5bpJKaVE | Eilat      |

  Scenario: provider enters a data in ProductPrices
    Given productPrices is set with the following fields
      | productId | channelId | fromDate            | toDate              | title | remarks | officialPrice | currencyId | quantityPerDay | autoConfirm | pricePerPerson | deletedAt |
      | yxl4wVaj  | 5bpJKaVE  | 2021-05-31T00:00:00 | 2022-12-31T00:00:00 | API   | Test    | 0             | 5bpJKaVE   | 123            | false       | ture           |           |

  Scenario: provider enters a data in productPriceTypes
    Then productPriceTypes is set with the following dates
      | productPriceId | productCustomerTypeId | amount | currencyId | currencySymbol | isOfficial |
      | Belmyqln       | Q4aLVbOn              | 57     | Belm3pnb   | ₪              | true       |

  Scenario: provider enters a data in productCustomerType
    Given productCustomerType is set with the following fields
      | productId | name  |
      | yxl4wVaj  | מבוגר |


  Scenario: provider enters a data in productCustomerTypes
    Given productCustomerTypes is set with following fields
      | name |
      | API  |


  Scenario: provider enters a data in City
    Given City is set with the following fields
      | name   | regionId |
      | Israel | Belm3pnb |

  Scenario: provider enters a data in productIncludedTags
    Given productIncludedTags is set with the following fields
      | subTagId | subTagName |
      | jLa3rjpz | WiFi       |


  Scenario: provider enters a data in productExcludedTags
    Given productExcludedTags is set with the following fields
      | productId | subTagId | parentTagId | subTagName |
      | 52aAx3pZ  | 4eO8gvlP | qeaZepdE    | Food       |

  Scenario: provider enters a data in productTags
    Given productTags is set with the following fields
      | productId | subTagId | parentTagId | subTagName |
      | 52aAx3pZ  | qeaZMepd | JnlY6Oz4    | Extreme    |


  Scenario: provider enters a data in product videos
    Given productVideos is set with the following fields
      | path                                                                           |
      | https://www.youtube.com/watch?v=u1yVCeXYya4&list=RDMMu1yVCeXYya4&start_radio=1 |

  Scenario: Provider creates a new product
    Given provider creates a new product
    Then verify status code is 200

#########################################################################################################################################################
  # from here on, verifying the response body whether  all the data which is been sent successfully created,
  # as we don't have to rely only on status code.

  Scenario: verify that product has been created
    Then verify that new product is set with following fields
      | name              | active | shortDescription      | fullDescription               | mostPopular | longitude | latitude     | calendarColor | address |
      | AutoTestPositive1 | true   | Test For Automation 1 | Automation for API in Postman | true        | 456.456   | 3245678.5467 | blue          | Bishkek |


#  Scenario: verify that productTypes has been created
#    Given verify that productTypes is set with following fields
#      | name    | id       |
#      | TestAPI | 5bpJ0olV |

  Scenario: verify that ProductWorkingDates has been created
    Given verify that ProductWorkingDates is set with following fields
      | fromDate   | toDate     | name                | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2021-05-27 | 2022-12-31 | 1234567sdfgh#$#%^%& | false       | null      | 0                      | 0         |

  Scenario: verify that timeSlots has been created
    Given verify that timeSlots is set with following fields
      | active | endTime  | dayOfWeek | duration | quantity | startTime | usedQuantity |
      | false  | 20:00:00 | Monday    | 01:00:00 | 67       | 09:00:00  | 0            |

  Scenario: verify that productRegions have been created
    Given verify that productRegions is set with following fields
      | productId | regionId | regionName |
      | PYayPjpW  | 5bpJKaVE | Eilat      |

  Scenario: verify that productPrices have been created
    Given verify that productPrices is set with following field
      | productId | channelId | fromDate            | toDate              | title | remarks | officialPrice | currencyId | quantityPerDay | autoConfirm | pricePerPerson | deletedAt |
      | yxl4wVaj  | 5bpJKaVE  | 2021-05-31T00:00:00 | 2022-12-31T00:00:00 | API   | Test    | 0             | 5bpJKaVE   | 123            | false       | ture           |           |


  Scenario: verify that productPriceTypes have been created
    Given verify that productPriceTypes is set with following fields
      | productPriceId | productCustomerTypeId | amount | currencyId | currencySymbol | isOfficial |
      | Belmyqln       | Q4aLVbOn              | 57     | Belm3pnb   | ₪              | true       |

  Scenario: verify that productCustomerType has been created
    Given verify that productCustomerType is set with following fields
      | productId | name  |
      | yxl4wVaj  | מבוגר |

  Scenario: verify that productCustomerTypes have been created
    Given verify that productCustomerTypes is set with following fields
      | name |
      | API  |

  Scenario: verify that city has been created
    Given verify that city is set with following fields
      | name   | regionId |
      | Israel | Belm3pnb |

    Scenario: verify that productIncludedTags have been created
      Given verify that productIncludedTags is set with following fields
        | subTagId | subTagName |
        | jLa3rjpz | WiFi       |

      Scenario: verify that productExcludedTags have been created
        Given verify that productExcludedTags is set with following fields
          | productId | subTagId | parentTagId | subTagName |
          | 52aAx3pZ  | 4eO8gvlP | qeaZepdE    | Food       |

  Scenario: verify that productTags has been created
    Given verify that productTags is set with following fields
      | productId | subTagId | parentTagId | subTagName |
      | 52aAx3pZ  | qeaZMepd | JnlY6Oz4    | Extreme    |

    Scenario: verify that productVideos have been created
      Given verify that productVideos is set with following fields
        | path                                                                           |
        | https://www.youtube.com/watch?v=u1yVCeXYya4&list=RDMMu1yVCeXYya4&start_radio=1 |
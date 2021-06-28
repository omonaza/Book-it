@smoke @providerCreatesProductTypesWithOutSomeFields  @regression
Feature: productTypes and productWorkingDates are being tested with negative scenarios


  Background:
    Given product is set with the following fields
      | name     | active | shortDescription      | fullDescription               | mostPopular | longitude | latitude     | calendarColor | address |
      | AutoTest | true   | Test For Automation 1 | Automation for API in Postman | true        | 456.456   | 3245678.5467 | blue          | Bishkek |
    Given productVideos is set with the following fields
      | path                                                                           |
      | https://www.youtube.com/watch?v=u1yVCeXYya4&list=RDMMu1yVCeXYya4&start_radio=1 |

# have to do some changes in strictHours   <<<=====
#  @productWorkingDatesWithNullToDateField
#  Scenario: provider enters a data in ProductWorkingDates field
#    Given productWorkingDates is set with following fields
#      | fromDate   | toDate | name                | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
#      | 2022-12-31 | null   | 1234567sdfgh#$#%^%& | false       | null      | 0                      | 0         |
#    Given verify that ProductWorkingDates is set with following fields
#      | fromDate   | toDate     | name                | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
#      | 2021-05-27 | 2022-12-31 | 1234567sdfgh#$#%^%& | true        | null      | 0                      | 0         |
#    Given provider creates a new product
#    Then verify status code is 400
#    Then verify the title is "One or more validation errors occurred."


  @productTypesWithMissingNameField
  Scenario: provider enters a data in productTypes with missing name field
    Given productTypes is set with following fields
      | id       |
      | 5bpJ0olV |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"

  @productWorkingDatesWithMissingFromDateField
  Scenario: provider enters a data in ProductWorkingDates with missing fromDate field
    Given productWorkingDates is set with following fields
      | toDate     | name                | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 1234567sdfgh#$#%^%& | false       | null      | 0                      | 0         |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"

  @productWorkingDatesWithEmptyFromDateField
  Scenario: provider enters a data in ProductWorkingDates with empty fromDate field
    Given productWorkingDates is set with following fields
      | fromDate | toDate     | name                | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      |          | 2022-12-31 | 1234567sdfgh#$#%^%& | false       | null      | 0                      | 0         |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"

  @productWorkingDatesWithNullFromDateField
  Scenario: provider enters a data in ProductWorkingDates with null fromDate field
    Given productWorkingDates is set with following fields
      | fromDate | toDate     | name                | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | null     | 2022-12-31 | 1234567sdfgh#$#%^%& | false       | null      | 0                      | 0         |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"

  @productWorkingDatesWithEmptyToDateField
  Scenario: provider enters a data in ProductWorkingDates with empty toDate field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate | name                | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 |        | 1234567sdfgh#$#%^%& | false       | null      | 0                      | 0         |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"

  @productWorkingDatesWithMissingToDateField
  Scenario: provider enters a data in ProductWorkingDates with missing toDate field
    Given productWorkingDates is set with following fields
      | fromDate   | name                | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 1234567sdfgh#$#%^%& | false       | null      | 0                      | 0         |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"

  @productWorkingDatesWithNullToDateField
  Scenario: provider enters a data in ProductWorkingDates with null toDate field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate | name                | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | null   | 1234567sdfgh#$#%^%& | false       | null      | 0                      | 0         |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"

  @productWorkingDatesWithEmptyNameField
  Scenario: provider enters a data in ProductWorkingDates with empty name field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate     | name | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 2022-12-31 |      | false       | null      | 0                      | 0         |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"

  @productWorkingDatesWithMissingNameField
  Scenario: provider enters a data in ProductWorkingDates with missing name field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate     | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 2022-12-31 | false       | null      | 0                      | 0         |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"

  @timeSlotsWithEmptyStartTimeField
  Scenario: provider enters a data in timeSlots with empty startTime field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate     | name | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 2022-12-31 | 1234 | false       | null      | 0                      | 0         |
    Given timeSlots is set with the following fields
      | active | startTime | endTime  | dayOfWeek | duration | quantity | usedQuantity |
      | false  |           | 20:00:00 | Monday    | 01:00:00 | 32       | 0            |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."

  @timeSlotsWithNullStartTimeField
  Scenario: provider enters a data in timeSlots with null startTime field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate     | name | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 2022-12-31 | 1234 | false       | null      | 0                      | 0         |
    Given timeSlots is set with the following fields
      | active | startTime | endTime  | dayOfWeek | duration | quantity | usedQuantity |
      | false  | null      | 20:00:00 | Monday    | 01:00:00 | 32       | 0            |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."


  @timeSlotsWithIncorrectTimingInStartTimeField
  Scenario: provider enters a data in timeSlots with incorrect timing in startTime field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate     | name | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 2022-12-31 | 1234 | false       | null      | 0                      | 0         |
    Given timeSlots is set with the following fields
      | active | startTime | endTime  | dayOfWeek | duration | quantity | usedQuantity |
      | false  | 124       | 20:00:00 | Monday    | 01:00:00 | 32       | 0            |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."

  @timeSlotsWithSpecialCharsInStartTimeField
  Scenario: provider enters a data in timeSlots with special chars in startTime field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate     | name | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 2022-12-31 | 1234 | false       | null      | 0                      | 0         |
    Given timeSlots is set with the following fields
      | active | startTime | endTime  | dayOfWeek | duration | quantity | usedQuantity |
      | false  | @#$%^     | 20:00:00 | Monday    | 01:00:00 | 32       | 0            |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."

  @timeSlotsWithMissingStartTimeField
  Scenario: provider enters a data in timeSlots with missing startTime field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate     | name | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 2022-12-31 | 1234 | false       | null      | 0                      | 0         |
    Given timeSlots is set with the following fields
      | active | endTime  | dayOfWeek | duration | quantity | usedQuantity |
      | false  | 20:00:00 | Monday    | 01:00:00 | 32       | 0            |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."


  @timeSlotsWithEmptyEndTimeField
  Scenario: provider enters a data in timeSlots with empty endTime field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate     | name | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 2022-12-31 | 1234 | false       | null      | 0                      | 0         |
    Given timeSlots is set with the following fields
      | active | startTime | endTime | dayOfWeek | duration | quantity | usedQuantity |
      | false  | 09:00:00  |         | Monday    | 01:00:00 | 32       | 0            |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."

  @timeSlotsWithNullEndTimeField
  Scenario: provider enters a data in timeSlots with null endTime field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate     | name | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 2022-12-31 | 1234 | false       | null      | 0                      | 0         |
    Given timeSlots is set with the following fields
      | active | startTime | endTime | dayOfWeek | duration | quantity | usedQuantity |
      | false  | 09:00:00  | null    | Monday    | 01:00:00 | 32       | 0            |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."


  @timeSlotsWithIncorrectTimingInEndTimeField
  Scenario: provider enters a data in timeSlots with incorrect timing in endTime field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate     | name | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 2022-12-31 | 1234 | false       | null      | 0                      | 0         |
    Given timeSlots is set with the following fields
      | active | startTime | endTime | dayOfWeek | duration | quantity | usedQuantity |
      | false  | 09:00:00  | 23escf  | Monday    | 01:00:00 | 32       | 0            |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."

  @timeSlotsWithSpecialCharsInEndTimeField
  Scenario: provider enters a data in timeSlots with special char in endTime field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate     | name | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 2022-12-31 | 1234 | false       | null      | 0                      | 0         |
    Given timeSlots is set with the following fields
      | active | startTime | endTime | dayOfWeek | duration | quantity | usedQuantity |
      | false  | 09:00:00  | @#$%^   | Monday    | 01:00:00 | 32       | 0            |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."


  @timeSlotsWithMissingEndTimeField
  Scenario: provider enters a data in timeSlots with missing endTime field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate     | name | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 2022-12-31 | 1234 | false       | null      | 0                      | 0         |
    Given timeSlots is set with the following fields
      | active | startTime | dayOfWeek | duration | quantity | usedQuantity |
      | false  | 09:00:00  | Monday    | 01:00:00 | 32       | 0            |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."

  @timeSlotsWithSpecialCharsInDayOfWeekField
  Scenario: provider enters a data in timeSlots with special char in dayOfWeek field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate     | name | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 2022-12-31 | 1234 | false       | null      | 0                      | 0         |
    Given timeSlots is set with the following fields
      | active | startTime | endTime  | dayOfWeek | duration | quantity | usedQuantity |
      | false  | 09:00:00  | 20:00:00 | !@#$      | 01:00:00 | 32       | 0            |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"

  @timeSlotsWithNullDayOfWeekField
  Scenario: provider enters a data in timeSlots with null  dayOfWeek field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate     | name | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 2022-12-31 | 1234 | false       | null      | 0                      | 0         |
    Given timeSlots is set with the following fields
      | active | startTime | endTime  | dayOfWeek | duration | quantity | usedQuantity |
      | false  | 09:00:00  | 20:00:00 | null      | 01:00:00 | 32       | 0            |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"

  @timeSlotsWithEmptyDayOfWeekField
  Scenario: provider enters a data in timeSlots with empty  dayOfWeek field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate     | name | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 2022-12-31 | 1234 | false       | null      | 0                      | 0         |
    Given timeSlots is set with the following fields
      | active | startTime | endTime  | dayOfWeek | duration | quantity | usedQuantity |
      | false  | 09:00:00  | 20:00:00 |           | 01:00:00 | 32       | 0            |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"


  @timeSlotsWithMissingDayOfWeekField
  Scenario: provider enters a data in timeSlots with missing  dayOfWeek field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate     | name | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 2022-12-31 | 1234 | false       | null      | 0                      | 0         |
    Given timeSlots is set with the following fields
      | active | startTime | endTime  | duration | quantity | usedQuantity |
      | false  | 09:00:00  | 20:00:00 | 01:00:00 | 32       | 0            |
    Given provider creates a new product
    Then verify status code is 500
    Then verify the title is "Internal Server Error"


  @timeSlotsWithEmptyDurationField
  Scenario: provider enters a data in timeSlots with empty  duration field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate     | name | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 2022-12-31 | 1234 | false       | null      | 0                      | 0         |
    Given timeSlots is set with the following fields
      | active | startTime | endTime  | dayOfWeek | duration | quantity | usedQuantity |
      | false  | 09:00:00  | 20:00:00 | Monday    |          | 32       | 0            |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."

  @timeSlotsWithIncorrectTimingDurationField
  Scenario: provider enters a data in timeSlots with incorrect timing  duration field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate     | name | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 2022-12-31 | 1234 | false       | null      | 0                      | 0         |
    Given timeSlots is set with the following fields
      | active | startTime | endTime  | dayOfWeek | duration | quantity | usedQuantity |
      | false  | 09:00:00  | 20:00:00 | Monday    | fsdghhjb | 32       | 0            |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."


  @timeSlotsWithSpecialCharDurationField
  Scenario: provider enters a data in timeSlots with special char  duration field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate     | name | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 2022-12-31 | 1234 | false       | null      | 0                      | 0         |
    Given timeSlots is set with the following fields
      | active | startTime | endTime  | dayOfWeek | duration | quantity | usedQuantity |
      | false  | 09:00:00  | 20:00:00 | Monday    | !@#$     | 32       | 0            |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."

  @timeSlotsWithMissingDurationField
  Scenario: provider enters a data in timeSlots with missing  duration field
    Given productWorkingDates is set with following fields
      | fromDate   | toDate     | name | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 2022-12-31 | 2022-12-31 | 1234 | false       | null      | 0                      | 0         |
    Given timeSlots is set with the following fields
      | active | startTime | endTime  | dayOfWeek | quantity | usedQuantity |
      | false  | 09:00:00  | 20:00:00 | Monday    | 32       | 0            |
    Given provider creates a new product
    Then verify status code is 400
    Then verify the title is "One or more validation errors occurred."


#  @timeSlotsWithEmptyQuantityField
#  Scenario: provider enters a data in timeSlots with empty  quantity field
#    Given productWorkingDates is set with following fields
#      | fromDate   | toDate     | name | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
#      | 2022-12-31 | 2022-12-31 | 1234 | false       | null      | 0                      | 0         |
#    Given timeSlots is set with the following fields
#      | active | startTime | endTime  | dayOfWeek | duration | quantity | usedQuantity |
#      | false  | 09:00:00  | 20:00:00 | Monday    | 01:00:00 | dsfsg    | 0            |
#    Given provider creates a new product
#    Then verify status code is 400
#    Then verify the title is "One or more validation errors occurred."
#
#  @timeSlotsWithSpecialCharsQuantityField
#  Scenario: provider enters a data in timeSlots with special chars  quantity field
#    Given productWorkingDates is set with following fields
#      | fromDate   | toDate     | name | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
#      | 2022-12-31 | 2022-12-31 | 1234 | false       | null      | 0                      | 0         |
#    Given timeSlots is set with the following fields
#      | active | startTime | endTime  | dayOfWeek | duration | quantity | usedQuantity |
#      | false  | 09:00:00  | 20:00:00 | Monday    | 01:00:00 | edsgh    | 0            |
#    Given provider creates a new product
#    Then verify status code is 400
#    Then verify the title is "One or more validation errors occurred."
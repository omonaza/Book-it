Feature: verifying the validation of productWorkingDate

  @editingNewProductWorkingDates
  Scenario: provider creates creates new productWorkingDates
    Given productWorkingDates is created with following fields
      | productId | fromDate   | toDate     | name       | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |
      | 4aLL4Kan  | 2021-01-05 | 2022-01-06 | OpenHours9 | false       | null      | 0                      | 0         |
    Then verify status code is 200

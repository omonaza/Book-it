Feature: Wizard Authentications
  @Authorize
  Scenario: log in to get authorization
    Given log-in to be authorized with following credentials
      | Username | Password |
      | admin    | 1212     |
    Then check up if you are authorized successfully
Feature: demo login site

  Scenario: successful login to source demo
    Given I open the source demo login page
    When I login using a standard user credentials
    Then I should see the product page

Feature: Fill out Scholar form
 
  I want to test the Scholar Submit EJR application
  
  Scenario: Scholar Submit EJR application
    Given Open Scholar Form
    When I Fill out the form
         | FirstN  | LastN | Add | zip |  emailg | phoneg |  
       |  Andrea  | Graham | Street 89th | 33987 | diana.alvarez@10pearls.com | 3456723000 |
    And I Click in subbmit button
    Then Confirmation message should be shown
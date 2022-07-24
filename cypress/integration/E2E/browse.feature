Feature: Search feature sample

        Scenario Template: As a generical user, I should be able to browse "<page>" and check correct status code, there are no console errors or broken links
        Given I navigate to the "<page>" with "<path>"
        Then should check response code "<code>" from the page "<page>"
        And shoud have no console errors
        And shoud have no broken links

        Examples:
            | page       | path                              | code |
            | badpage    | standards/badpage                 | 404  |
            | multimodal | standards/webofdevices/multimodal | 200  |
            | htmlcss    | standards/webdesign/htmlcss       | 200  |          

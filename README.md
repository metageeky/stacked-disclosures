# Stacked Disclosures Widget
The [accordion widget pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) consists of a set of associated disclosure panels. Each panel can be opened or closed individually with the purpose of reducing the need to scroll through multiple sections on a page. Commonly, the accordion will typically limit it to only ONE panel open at a time. If a panel is open and the user opens another one, the other closes. This comes off as a potential antipattern in that the accordion can prevent the user from comparing the content in different panels. The accordion pattern works if the panel contents are truly independent of each other. That is rarely the case.

This pattern presents a similar approach to the accordion pattern but permits multiple patterns to be open at any time. Additional features include controls to open all and close all the panels.


Why not use the details/summary element?

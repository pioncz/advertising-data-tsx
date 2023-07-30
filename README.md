# TODO:  
+add material ui, lodash  
+prototype layout (with all inputs, blue rect as chart placeholder)  
import data  
find and add chart to the project  
add unit test for filtering  
add filtering  
+add react-query, json-server and load data  
add loading and error state  
edit README.md, add info how to run and deploy  
take a second look on components architecture: is it scalable and generic?  
add responsiveness  
add integration tests  

# How to run

# How to deploy

# Side notes
Probably there are better ways to implement SectionSelect that works for single and multiple values  
I picked Recharts, but maybe this is not the bes toption. Maybe Canvas chart would fit better  
I didn't use react-query for a while, so I'm not sure it is the best way  

# Improvements propositions:
add eslint and prettier  
support multiple languages  
accessibility (WCAG 2.0, use different heading levels)  
make export option for chart (csv, image)  
If there are multiple projects using charts, then I would make library of common components and add our chart and data manipulation functions there  
If the data is shared across views, then we could add store or context  
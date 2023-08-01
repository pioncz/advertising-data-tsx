# TODO:  
+add material ui, lodash  
+prototype layout (with all inputs, blue rect as chart placeholder)  
+import data  
+find and add chart to the project  
+add unit test for filtering  
+add filtering  
+add react-query, json-server and load data  
+add loading and error state  
+edit README.md, add info how to run and deploy  
+take a second look on components architecture: is it scalable and generic?  
+as little chart rerenders as possible  
add responsiveness  
add integration tests  
bring back full data  

# How to run
To run the app, please call `yarn start`  
To test the app, please call `yarn test`  
To build the app, please call `yarn build`  

# Side notes
Probably there are better ways to implement SectionSelect that works for single and multiple values  
I picked Recharts, but maybe this is not the best option. Maybe Canvas chart would fit better  
I didn't use react-query for a while, so I'm not sure it is the best way  

# Improvements propositions:
define missing types (mostly csv data)  
there are unused icon buttons in the filter dimensions, next to the title  
add eslint and prettier  
support multiple languages  
accessibility (WCAG 2.0, use different heading levels, use FormControlls)  
make export option for chart (csv, image)  
if there are multiple projects using charts, then I would make library of common components and add our chart and data manipulation functions there  
if the data is shared across views, then we could add store or context  
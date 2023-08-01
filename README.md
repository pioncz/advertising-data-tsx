# How to run
To run the app, please call `yarn start`  
To test the app, please call `yarn test`  
To build the app, please call `yarn build`  

# Improvements propositions:
loading time of the chart is pretty long, so maybe I didn't pick right library / some pagination could be used / 
add integration tests  
define missing types (mostly csv data)  
there are unused icon buttons in the filter dimensions, next to the title  
add eslint and prettier  
support multiple languages  
accessibility (WCAG 2.0, use different heading levels, use FormControlls)  
make export option for chart (csv, image)  
if there are multiple projects using charts, then I would make library of common components and add our chart and data manipulation functions there  
if the data is shared across views, then we could add store or context  
probably there are better ways to implement SectionSelect that works for single and multiple values  
i didn't use react-query for a while, so I'm not sure it is the best way  
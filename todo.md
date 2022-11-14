
### Main system
- [x] Add mongo db database 
    - [x] Create connection
    - [x] Extra service
    - [x] Product service
    - [x] ExtraSection service 
    - [x] ExtraEntry service mongodb 
- [x] Add useCases/controller error catching system
    - [x] Create error handler
    - [x] Standard errors 
    - [x] Implement withRouteErrorHanlder for every route
        - Remove try catch statements
    - [x] Create and implement standard error variations

### General 


### Qs
- services can have a data transformer argument?
 - So we can pass a mapper to send back and foward data transformation when calling services
 - Could be replaced by use cases helpers functions that make the operation in a batch
    - e.g save have the mapper and the service.save operation.
    - it is just a function that can be used across all use cases without modifiying the service itself.
    - it can ve considered as a use case itself, as a helper.




//***************************************** JAVA EXECUTION CONTEXT ********************************************* //            

/*
(1.) GLOBAL EXECUTION CONTEXT: GEC refer to a variable called 'This'
{in broser this keyword display Window Object and node shows {} }

(2.) FUNCTION EXECUTION CONTEXT:

(3.) EVAL EXECUTION CONTEXT: {in Mongos} / not imp

{JS is single threaded}
*/


/**********************************************************
Js execute a code file in two phases:

(1.) MEMORY CREATION PHASE: in which the location is allocated to the variables
(2.) EXECUTION PHASE: 

                                EX code:-
                                let val1 = 10;
                                let val2 = 5;
                                function addNum(num1, num2){
                                  let total = num1 + num2
                                  return total
                                }
                                let result1 = addNum(val1, val2)
                                let result2 = addNum(10, 2)

Step 1. Global Execution: -----> This (firstly, GE allocate in This)
                        total return in here

Step 2. Memory Phase: -------> all the variables is allocated and receive the value of "undefined" in each
                        val1 = 'undefined'
                        val2 = 'undefined'
                        addNum = defination  :(num1, num2){
                                  let total = num1 + num2
                                  return total
                                }
                        result1 = 'undefined'
                        result2 = 'undefined'

Step 3. Execution Phase: -------> the variables initialised their values
val1 = 10
val2 = 5
 { a new execution phase is made whenever the function came and Memory & Execution Phase also made }
                addNum = /--------------------------- /
                        / New Variable Environment + /
                       / Execution Thread           /---------> Memory Phase       --------->       Execution Phase      -------> DELETE
                      /--------------------------- /           val1 = 'undefined'                   num1 = 10
                                                              val2 = 'undefined'                   num2 = 5
                                                              total = 'undefined'                  total = 15 { it return in Global execution}

result1 = 15
                addNum = /--------------------------- /
                        / New Variable Environment + /
                       / Execution Thread           /---------> Memory Phase       --------->       Execution Phase      -------> DELETE
                      /--------------------------- /           val1 = 'undefined'                   num1 = 10
                                                              val2 = 'undefined'                   num2 = 5
                                                              total = 'undefined'                  total = 12 { it return in Global execution}
result2 = 12

*/

//****************************** Call Stack******************************/
/*
Based on principal LIFO: Last In First Out

For live demo:
Go to Browser > Inspect > Sources
create a snippet with few functions and visualised the call stack

*/

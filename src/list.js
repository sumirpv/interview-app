import { useState } from "react";
import {
  Container,
  Accordion,
  // AccordionActions,
  AccordionSummary,
  AccordionDetails,
  // Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Fade from "@mui/material/Fade";

const Lists = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  console.log("here");
  return (
    <Container>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        // slots={{ transition: Fade }}
        // slotProps={{ transition: { timeout: 400 } }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>const</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Variables declared with const are block-scoped and cannot be
            reassigned once initialized. However, the value they hold can still
            be mutable if it's an object or an array.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Let</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Variables declared with let are also block-scoped, but they can be
            reassigned. They are usually preferred over var due to their block
            scope.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel3-header"
        >
          <Typography>Var</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Variables declared with var are function-scoped or globally scoped,
            but not block-scoped. They can be reassigned and hoisted (moved to
            the top of their function or global scope).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel4-header"
        >
          <Typography>== vs ===</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            == (Equality Operator): console.log(5 == '5'); // Output: true. -
            performs type coercion * === (Strict Equality Operator):
            console.log(5 === '5'); // Output: false
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel5-header"
        >
          <Typography>Primitive data type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Number boolean, string, undefined, null and symbol - const key =
            Symbol('unique');
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel6-header"
        >
          <Typography>Pass By Value vs Pass By Reference</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>Pass by Value:</strong>
            <ul>
              <li>
                In pass by value, a copy of the actual value of the argument is
                passed to the function.
              </li>
              <li>
                Changes made to the parameter inside the function do not affect
                the original value outside the function.{" "}
              </li>
            </ul>
            <br />
            <strong>Example 1:</strong>
            <br />
            {`function increment(num) {`}
            <br />
            &nbsp;&nbsp;{`num += 1;`}
            <br />
            &nbsp;&nbsp;
            {`console.log("Inside function:", num); // Output: Inside function: 6`}
            <br />
            {`}`}
            <br />
            <br />
            {`let x = 5;`}
            <br />
            {`increment(x);`}
            <br />
            {`console.log("Outside function:", x); // Output: Outside function: 5`}
            <br />
            <br />
            <strong>Example 2:</strong>
            <br />
            {`let test = 3;`}
            <br />
            {`let test2 = test;`}
            <br />
            {`test2++;`}
            <br />
            {`console.log(test, " - ", test2); // 3 - 4`}
            <br />
            <br />
            <strong>Pass by Reference:</strong>
            <ul>
              <li>
                In pass by reference, a reference to the original value of the
                argument is passed to the function.
              </li>
              <li>
                If the function modifies the parameter, it also modifies the
                original value outside the function.
              </li>
              <li>
                Objects (including arrays and functions) in JavaScript are
                passed by reference.
              </li>
            </ul>
            <strong>Example 1:</strong>
            <br />
            {`function addElement(arr) {`}
            <br />
            &nbsp;&nbsp;{`arr.push(4);`}
            <br />
            &nbsp;&nbsp;
            {`console.log("Inside function:", arr); // Output: Inside function: [1, 2, 3, 4]`}
            <br />
            {`}`}
            <br />
            <br />
            {`let myArray = [1, 2, 3];`}
            <br />
            {`addElement(myArray);`}
            <br />
            {`console.log("Outside function:", myArray); // Output: Outside function: [1, 2, 3, 4]`}
            <br />
            <br />
            <strong>Example 2:</strong>
            <br />
            {`let test3 = { test: 'ert' };`}
            <br />
            {`let test4 = { ...test3 };`}
            <br />
            <br />
            {`test4.firstName = "sumi";`}
            <br />
            <br />
            {`console.log("test3", test3); // "test3", { test: "ert" }`}
            <br />
            {`console.log("test4", test4); // "test4", { firstName: "sumi", test: "ert" }`}
            <br />
            <br />
            <strong>Example 3:</strong>
            <br />
            {`let obj1 = {};`}
            <br />
            {`let obj2 = obj1;`}
            <br />
            {`obj2.firstName = "sumi";`}
            <br />
            <br />
            {`console.log("obj1", obj1); // { firstName: "sumi" }`}
            <br />
            {`console.log("obj2", obj2); // { firstName: "sumi" }`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel7-header"
        >
          <Typography>map() vs filter() vs reduce()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>Map()</strong>
            <br />
            <ul>
              <li>
                The map() method creates a new array by applying a function to
                each element of the original array. It does not modify the
                original array.
              </li>
              <li>
                It iterates over each element of the array, applies a callback
                function to each element, and returns a new array containing the
                results.
              </li>
              <li>
                The callback function receives three arguments: the current
                element, the index of the current element, and the array being
                traversed.
              </li>
            </ul>
            {`const numbers = [1, 2, 3, 4, 5];`}
            <br />
            {`const doubled = numbers.map(num => num * 2);`}
            <br />
            {`console.log(doubled); //		[2, 4, 6, 8, 10]`}
            <br />
            {`console.log(numbers); //		[1, 2, 3, 4, 5]`}
            <br />
            <br />
            <strong>Filter():</strong>
            <ul>
              <li>
                The filter() method creates a new array containing only the
                elements that pass a test specified by a callback function. It
                does not modify the original array.
              </li>
              <li>
                It iterates over each element of the array, applies a callback
                function to each element, and returns a new array containing
                only the elements for which the callback function returns true.
              </li>
              <li>
                The callback function receives the same arguments as the map()
                method.
              </li>
            </ul>
            {`const numbers = [1, 2, 3, 4, 5];`}
            <br />
            {`const evens = numbers.filter(num => num % 2 === 0);`}
            <br />
            {`console.log(evens);`}
            <br />
            <br />
            <strong>Reduce():</strong>
            <br />
            {`reduce(callbackFn, initialValue)`}
            <ul>
              <li>
                The reduce() method executes a reducer function (a callback
                function) on each element of the array, resulting in a single
                output value. It does not modify the original array.
              </li>
              <li>
                It takes an initial value as an optional parameter and executes
                the reducer function for each element of the array from left to
                right, updating the accumulator value.
              </li>
              <li>
                The reducer function receives four arguments: the accumulator
                (which accumulates the callback's return values), the current
                element, the current index, and the array being traversed.
              </li>
            </ul>
            {`const numbers = [1, 2, 3, 4, 5];`}
            <br />
            {`const sum = numbers.reduce((acc, num) => acc + num, 0);`}
            <br />
            {`console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5);`}
            <ul>
              <li>
                map() transforms each element of an array and returns a new
                array.
              </li>
              <li>
                filter() selects elements from an array based on a condition and
                returns a new array.
              </li>
              <li>
                reduce() applies a function to each element of an array,
                accumulating a single result.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel8-header"
        >
          <Typography>Push() </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Adds one or more elements to the end of an array and returns the new
            length of the array.
            <br />
            {`let arr = [1, 2, 3];`}
            <br />
            {`arr.push(4); // arr is now [1, 2, 3, 4]`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel9-header"
        >
          <Typography>Pop()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Removes the last element from an array and returns that element.
            <br />
            {`let arr = [1, 2, 3];`}
            <br />
            {`arr.pop(); // arr is now [1, 2], returns 3`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel10-header"
        >
          <Typography>Shift()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Removes the first element from an array and returns that element.
            <br />
            {`let arr = [1, 2, 3];`}
            <br />
            {`arr.shift(); // arr is now [2, 3], returns 1`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel11-header"
        >
          <Typography>Unshift()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Adds one or more elements to the beginning of an array and returns
            the new length of the array.
            <br />
            {`let arr = [1, 2, 3];`}
            <br />
            {`arr.unshift(0); // arr is now [0, 1, 2, 3]`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel12-header"
        >
          <Typography>Splice()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Adds, removes, or replaces elements in an array at a specified
            index.
            <br />
            {`let arr = [1, 2, 3, 4];`}
            <br />
            {`arr.splice(1, 2, 'a', 'b'); // arr is now [1, 'a', 'b', 4]`}
            <br />
            {`// Removes 2 elements starting at index 1, and adds 'a' and 'b'`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel13-header"
        >
          <Typography>Sort()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sorts the elements of an array in place and returns the sorted
            array.
            <br />
            {`let arr = [3, 1, 4, 2];`}
            <br />
            {`arr.sort(); // arr is now [1, 2, 3, 4]`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel14-header"
        >
          <Typography>Reverse()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Reverses the order of the elements in an array.
            <br />
            {`let arr = [1, 2, 3];`}
            <br />
            {`arr.reverse(); // arr is now [3, 2, 1]`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel15-header"
        >
          <Typography>Fill()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Fills all the elements of an array from a start index to an end
            index with a static value.
            <br />
            {`let arr = [1, 2, 3];`}
            <br />
            {`arr.fill(0); // arr is now [0, 0, 0]`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel16-header"
        >
          <Typography>CopyWithin()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Shallow copies part of an array to another location in the same
            array and returns it, without modifying its length.
            <br />
            {`let arr = [1, 2, 3, 4, 5];`}
            <br />
            {`arr.copyWithin(0, 3); // arr is now [4, 5, 3, 4, 5]`}
            <br />
            {`// Copies elements from index 3 to the start`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel17-header"
        >
          <Typography>Falsey value</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Unique to JavaScript, except 6 all are truthy value Some values when
            you evaluate them as Booleans it will be falsey
            <br />
            {`const t1 = undefined`}
            <br />
            {`const t2 = null`}
            <br />
            {`const t3 = NaN`}
            <br />
            {`const t4 = ''`}
            <br />
            {`const t5 = 0`}
            <br />
            {`const t6 = false`}
            <br />
            <br />
            {`console.log("t1",Boolean(t1)); //false`}
            <br />
            {`console.log("t2",!!(t2));//false`} <br />
            {`console.log("t3",!!(t3));//false`} <br />
            {`console.log("t4",Boolean(t4));//false`} <br />
            {`console.log("t5",Boolean(t5));//false`} <br />
            {`console.log("t6",Boolean(t6));//false`} <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel18-header"
        >
          <Typography>Global Variables</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Global variables are variables declared outside of any function or
            block scope. These variables have global scope, meaning they are
            accessible from anywhere in your code, including inside functions
            and blocks. Global variables are generally declared without using
            the var, let, or const keywords.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel19-header"
        >
          <Typography>This</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The this keyword refers to the context within which a function is
            executed. Global Context:When this is used in the global scope
            (outside of any function), it refers to the global object. In a
            browser environment, the global object is window. Ex:
            console.log(this === window) //true
            <br />
            <br />
            <strong>Function Context:</strong>
            <br /> When this is used inside a function, its value depends on how
            the function is called:
            <br />
            <strong>Function Invocation:</strong>
            <br /> If a function is called as a standalone function, this refers
            to the global object (window in a browser) in non-strict mode, and
            undefined in strict mode.
            <br />
            {`function foo() {`}
            <br />
            {`console.log(this === window);`}
            <br />
            {`}`}
            <br />
            {`foo(); // Output: true`}
            <br />
            {`function foo() {`}
            <br />
            {`"use strict";`}
            <br />
            {`console.log(this == undefined);`}
            <br />
            {`}`}
            <br />
            {`foo(); // Output: true`}
            <br />
            <br />
            <strong>Method Invocation:</strong>
            <br />
            If a function is called as a method of an object, this refers to the
            object that owns the method.
            <br />
            {`const obj = {`}
            <br />
            {`name: 'John',`}
            <br />
            {`greet: function() {`}
            <br />
            {` console.log('Hello, ' + this.name);`}
            <br />
            {`}`}
            <br />
            {`};`}
            <br />
            {`obj.greet(); // Output: Hello, John`}
            <br />
            <br />
            <strong>Arrow Functions:</strong>
            <br />
            In arrow functions, this retains the value of the enclosing lexical
            context (the value of this from the surrounding code). Arrow
            functions do not have their own this binding.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel20-header"
        >
          <Typography>Coercion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In JavaScript refers to the automatic conversion of values from one
            data type to another.
            <br />
            <strong>Implicit Coercion:</strong>
            <ul>
              <li>
                Implicit coercion occurs when JavaScript automatically converts
                one data type to another during an operation, such as
                comparisons or arithmetic operations.
              </li>
            </ul>
            {`Console.log(“5”+ 5) //55`}
            <br />
            <br />
            <strong>Explicit Coercion:</strong>
            <ul>
              <li>
                Explicit coercion occurs when a developer intentionally converts
                a value from one data type to another using functions or
                operators specifically designed for type conversion.
              </li>
            </ul>
            {`// Converting string to number`}
            <br />
            {`let str = "10";`}
            <br />
            {`let num = parseInt(str);`}
            <br />
            {`console.log(num); // Output: 10`}
            <br />
            {`// Converting number to string`}
            <br />
            {`let value = 10;`}
            <br />
            {`let stringValue = String(value);`}
            <br />
            {`console.log(stringValue); // Output: "10"`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel21-header"
        >
          <Typography>typeof</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The typeof operator is used to determine the data type of a value.
            It returns a string indicating the type of the operand.
            <br />
            {`typeof 42; // "number"`}
            <br />
            {`typeof "hello"; // "string"`}
            <br />
            {`typeof true; // "boolean"`}
            <br />
            {`typeof undefined; // "undefined"`}
            <br />
            {`typeof null; // "object"`}
            <br />
            {`typeof { key: "value" }; // "object"`}
            <br />
            {`typeof [1, 2, 3]; // "object"`}
            <br />
            <br />
            In JavaScript, arrays are a type of object. Therefore, when you use
            typeof with an array, it returns 'object'.
            <br />
            {`typeof function() {}; // "function"`}
            <br />
            {`typeof Symbol("foo"); // "symbol"`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel22-header"
        >
          <Typography>Delete</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The delete operator is used to remove a property from an object. It
            can also be used to delete an element from an array.
            <br />
            {`const person = {`}
            <br />
            {`name: 'John',`}
            <br />
            {`age: 30,`}
            <br />
            {`city: 'New York'`}
            <br />
            {`};`}
            <br />
            <br />
            delete person.age;
            <br />
            {`console.log(person); // Output: { name: 'John', city: 'New York' }`}
            <br />
            {`======`}
            <br />
            {`const numbers = [1, 2, 3, 4, 5];`}
            <br />
            <br />
            {`delete numbers[2];`}
            <br />
            {`console.log(numbers); // Output: [1, 2, <1 empty item>, 4, 5]`}
            <br />
            {`Or //		[1, 2, undefined, 4, 5]`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel23-header"
        >
          <Typography>Object Notations</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            These notations provide different ways to define and initialize
            objects Dot notation and bracket notation ( don t use this often)
            <br />
            {`const user = {`} <br />
            {`fn: "test",`} <br />
            {`ln: "rt",`} <br />
            {`age: 56`} <br />
            {`}`} <br /> <br />
            {`console.log(user.fn);//"test"`} <br />
            {`console.log(user['ln']);//"rt"`} <br />
            {`for( let property in user){`} <br />
            {`console.log(user[property]);//"test" "rt" 56`} <br />
            {`}`} <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel24-header"
        >
          <Typography>Strict Mode</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Strict Mode is a feature introduced in ECMAScript 5 (ES5) that
            allows you to place a program, or a function, in a "strict"
            operating context. This strict context helps detect common coding
            mistakes and "unsafe" actions in JavaScript and throws more
            exceptions. It also disables some features that are confusing or
            poorly thought out in JavaScript.
            <br />
            {`function myFunction() {`}
            {`"use strict";`}
            {`// Strict mode enabled for this function`}
            {`}`}
            <ul>
              <li>It disallows the implicit creation of global variables.</li>
              <li>
                It disallows duplicate property names in objects and function
                parameter names.
              </li>
              <li>
                It makes this keyword behave differently, preventing it from
                defaulting to the global object.
              </li>
              <li>It disallows deleting variables and functions. </li>
              <li>It makes eval() safer by restricting its scope. </li>
              <li>It disallows octal syntax. </li>
              <li>
                It throws errors on certain invalid code that silently fails in
                non-strict mode.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel25-header"
        >
          <Typography>Anonymous Function </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In JavaScript, an anonymous function is a function that is defined
            without a name. Instead of being assigned to a variable or a
            property of an object, it's defined directly where it's needed.
            <br />
            <br />
            {`// Anonymous function expression`}
            <br />
            {`const add = function(a, b) {`}
            <br />
            {`return a + b;`}
            <br />
            {`};`}
            <br />
            <br />
            {`// Using the anonymous function`}
            <br />
            {`console.log(add(2, 3)); // Output: 5`}
            <br />
            <br />
            Anonymous functions are commonly used as arguments to other
            functions, such as in event handlers or array methods like map,
            filter, and reduce.
            <br />
            {`const numbers = [1, 2, 3, 4, 5];`}
            <br />
            <br />
            {`// Using an anonymous function with map`}
            <br />
            {`const doubled = numbers.map(function(num) {`}
            <br />
            {`return num * 2;`}
            <br />
            {`});`}
            <br />
            {`console.log(doubled); // Output: [2, 4, 6, 8, 10]`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel26-header"
        >
          <Typography>Callbacks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A callback is a function that is passed as an argument to another
            function and is executed after some operation has been completed or
            at a specified time. Callbacks are commonly used in asynchronous
            programming, event handling, and functional programming patterns.
            <br />
            <br />
            {`const firstFun= (num, callback) => {`}
            <br />
            {`console.log("item", num);`}
            <br />
            {`callback();`}
            <br />
            {`};`}
            <br />
            <br />
            {`const bye = () => {`}
            <br />
            {`console.log("bye")`}
            <br />
            {`};`}
            <br />
            <br />
            {`firstFun(5, bye); // “item”, 5             “bye”`}
            <br />
            <br />
            {`Mostly we use in map filter etc..`}
            <br />
            {`const num = [1, 2, 3, 5];`}
            <br />
            {`const num2 = num.map((item) => item + 1);  => this callback function`}
            <br />
            {`console.log(num2) //[2, 3, 4, 6]`}
            <br />
            <br />
            <strong>Other way</strong>
            <br />
            {`const call = (item) => {`}
            <br />
            {`return item + 1;`}
            <br />
            {`}`}
            <br />
            {`const num2 = num.map(call);`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel27-header"
        >
          <Typography>Closure</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A closure is the combination of a function bundled together
            (enclosed) with references to its surrounding state (the lexical
            environment). In other words, a closure gives you access to an outer
            function's scope from an inner function closures are created every
            time a function is created, at function creation time.
            <br />
            <br />
            {`function init() {`}
            <br />
            {`var name = "Mozilla"; // name is a local variable created by init`}
            <br />
            {`function displayName() {`}
            <br />
            {`// displayName() is the inner function, that forms the closure`}
            <br />
            {`console.log(name); // use variable declared in the parent function`}
            <br />
            {`}`}
            <br />
            {`displayName();`}
            <br />
            {`}`}
            <br />
            <br />
            {`init(); //"Mozilla"`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel28-header"
        >
          <Typography>Naming & Standards</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {`Have few variable as possible`}
            <br />
            {`Don’t use num , str etc`}
            <br />
            {`Don’t use all capital unless its a const variable`}
            <br />
            {`Avoid using single-letter variable names unless they are used as loop counters`}
            <br />
            {`Use camelCase for variable names (e.g., myVariable, firstName, totalAmount).`}
            <br />
            <ul>
              <li>Use all uppercase letters for constant names. </li>
              <li>
                Separate words with underscores (e.g., MAX_SIZE, PI, API_KEY)
              </li>
            </ul>
            {`Use descriptive names that indicate the action or behavior of the function.`}
            <br />
            {`Use lowercase letters for file names.`}
            <br />
            {`Use camelCase for module names.`}
            <br />
            {`Use PascalCase for class names. (e.g., Person, Car, Book).`}
            <br />
            {`Use PascalCase (also known as UpperCamelCase) for constructor names.`}
            <br />
            {`Use positive, descriptive names for boolean variables and functions.(e.g., isActive, hasPermission, canEdit).`}
            <br />
            {`Avoid using cryptic or unclear abbreviations.`}
            <br />
            {`Use descriptive comments to explain the purpose, behavior, or intent of code.`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel29-header"
        >
          <Typography>For...of vs For...in</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            For...of when you need to iterate over values of an iterable like
            arrays, strings, or other ordered collections, and use for...in when
            you need to iterate over the properties of an object.
            <br />
            {`const array = [1, 2, 3, 4, 5];`}
            <br />
            {`for (const value of array) {`}
            <br />
            {`console.log(value);`}
            <br />
            {`}`}
            <br />
            <br />
            {`const obj = { a: 1, b: 2, c: 3 };`}
            <br />
            {`for (const key in obj) {`}
            <br />
            {`console.log(key, obj[key]);`}
            <br />
            {`}`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel30-header"
        >
          <Typography>Other method to iterate the object:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>Object.keys() & forEach:</strong>
            {`let obj = {a: 1, b:2, c: 3}`} <br /> <br />
            {`Object.keys(obj).forEach(key => {`}
            <br />
            {`console.log( key, obj[key]);`}
            <br />
            {`})       // a 1        b 2         c 3`}
            <br />
            <br />
            <strong>Object.values() & forEach:</strong>
            <br />
            <br />
            {`let obj = {a: 1, b:2, c: 3}`}
            <br />
            <br />
            {`Object.values(obj).forEach(value => {`}
            <br />
            {`console.log( value);`}
            <br />
            {`}) //1    2      3`}
            <br />
            <br />
            <strong>Object.entires() & forEach:</strong>
            <br />
            <br />
            {`let obj = {a: 1, b:2, c: 3}`}
            <br />
            <br />
            {`Object.entries(obj).forEach(([key, value]) => {`}
            <br />
            {`console.log( key, value);`}
            <br />
            {`}) // a 1        b 2         c 3`}
            <br />
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel31-header"
        >
          <Typography>
            For...of with Object.keys(), Object.values(), or Object.entries():
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can use the for...of loop in combination with Object.keys(),
            Object.values(), or Object.entries() to iterate over properties.
            <br />
            <br />
            {`const obj = { foo: "bar", baz: 42 };`}
            <br />
            <br />
            {`for( let key of Object.keys(obj)){`}
            <br />
            {`console.log(key, obj[key]) //foo bar   baz 42`}
            <br />
            {`}`}
            <br />
            <br />
            {`for(let value of Object.values(obj)){`}
            <br />
            {`console.log(value) //bar 42`}
            <br />
            {`}`}
            <br />
            <br />
            {`for(let [key, value] of Object.entries(obj)){`}
            <br />
            {`console.log(key, value) //foo bar   baz 42`}
            <br />
            {`}`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel32-header"
        >
          <Typography>Object.getOwnPropertyNames()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This method returns an array of all properties (including
            non-enumerable properties except for those which use Symbol) found
            directly upon a given object.
            <br />
            <br />
            {`const obj = { a: 1, b: 2, c: 3 };`}
            <br />
            {`console.log(Object.getOwnPropertyNames(obj));    //[ 'a', 'b', 'c' ]`}
            <br />
            <br />
            {`Object.getOwnPropertyNames(obj).forEach(key => {`}
            <br />
            {`console.log(key, obj[key]);`}
            <br />
            {`}); //a 1     b 2      c 3`}
            <br />
            <br />
            <strong>New EXAMPLE with all</strong>
            <br />
            {`const obj = {`}
            <br />
            {`a: 1,`}
            <br />
            {`b: 2,`}
            <br />
            {`};`}
            <br />
            <br />
            {`Object.defineProperty(obj, 'c', {`}
            <br />
            {`value: 3,`}
            <br />
            {`enumerable: false`}
            <br />
            {`});`}
            <br />
            <br />
            {`const symbolKey = Symbol('key');`}
            <br />
            {`obj[symbolKey] = 'value';`}
            <br />
            {`console.log(Object.keys(obj)) //[ 'a', 'b' ]`}
            <br />
            {`console.log(Object.getOwnPropertyNames(obj)); //[ 'a', 'b', 'c' ]`}
            <br />
            {`console.log(Object.getOwnPropertySymbols(obj));  //[ Symbol(key) ]`}
            <br />
            {`console.log(Reflect.ownKeys(obj)); //[ 'a', 'b', 'c', Symbol(key) ]`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel33-header"
        >
          <Typography>Empty Arrays</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {`let arr1 = [1, 2, 3, 4, 5]`}
            <br />
            {`let arr2 = [1, 2, 3, 4, 5]`}
            <br />
            {`let arr3 = [1, 2, 3, 4, 5]`}
            <br />
            {`let arr4 = [1, 2, 3, 4, 5]`}
            <br />
            {`let arr5 = [1, 2, 3, 4, 5]`}
            <br />
            {`arr1 = [];`}
            <br />
            {`arr2.splice(0);`}
            <br />
            {`arr3.length = 0;`}
            <br />
            <br />
            {`while (arr4.length > 0) {`}
            <br />
            {`arr4.pop();`}
            <br />
            {`}`}
            <br />
            <br />

            {`while (arr5.length > 0) {`}
            <br />
            {`arr5.shift();`}
            <br />
            {`}`}
            <br />
            <br />
            {`console.log(arr1); //[]`}
            <br />
            {`console.log(arr2); //[]`}
            <br />
            {`console.log(arr3); //[]`}
            <br />
            {`console.log(arr4); //[]`}
            <br />
            {`console.log(arr5); //[]`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel34-header"
        >
          <Typography>MUL Function</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To create a mul function in JavaScript to multiply numbers, you can
            simply define a function that takes multiple arguments and
            multiplies them together
            <br />
            <br />
            {`const test = (a) => {`}
            <br />
            {`  return (b) => {`}
            <br />
            {`    return (c) => {`}
            <br />
            {`      return a * b * c`}
            <br />
            {`    }`}
            <br />
            {`  }`}
            <br />
            {`};`}
            <br />
            <br />
            {`console.log(test(1)(2)(3)) //6`}
            <br />
            <br />
            {`const mul = (...args) => {`}
            <br />
            {`if(args.length === 0){`}
            <br />
            {`console.log(1)`}
            <br />
            {`}`}
            <br />
            <br />
            {`let test = args.reduce((prd, currt) => {`}
            <br />
            {`console.log('prd', prd, currt) //1 1  1 2   2 3   6 4`}
            <br />
            {`return prd * currt`}
            <br />
            {`}, 1)`}
            <br />
            {`console.log(test) //24`}
            <br />
            {`}`}
            <br />
            {`mul(1, 2, 3, 4);`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel35-header"
        >
          <Typography>Create Array</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can define an array using square brackets [] and populate it
            with values separated by commas
            <br />
            <br />
            {`const arr = [1,3,5];`}
            <br />
            <br />
            <strong>Creating an Array with the Array Constructor:</strong>
            <br />
            {`Const badArr = new Array() =>. Don’t do this this is because Inconsistent Behavior:`}
            <br />
            <br />
            <strong>Creating an Array with the Array.of() Method (ES6):</strong>
            <br />
            {`const arrayWithValues = Array.of(1, 2, 3, 4, 5);`}
            <br />
            <br />
            <strong>
              Creating an Array with the Array.from() Method (ES6):
            </strong>
            <br />
            {`const arrayFromIterable = Array.from('hello');`}
            <br />
            {`// Creates an array from an iterable (e.g., string)`}
            <br />
            {`const arrayFromFunction = Array.from({ length: 5 }, (v, i) => i * 2);`}
            <br />
            {`// [0, 1, 2, 3, 4]`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel36-header"
        >
          <Typography>Sequence generator (range)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {`const range = (start, stop, step) =>`}
            <br />
            {`Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);`}
            <br />
            <br />
            <strong>Example</strong>
            <br />
            {`// Generate numbers range 0..4`}
            <br />
            {`range(0, 4, 1);`}
            <br />
            {`// [0, 1, 2, 3, 4]`}
            <br />
            <br />

            {`// Generate numbers range 1..10 with step of 2`}
            <br />
            {`range(1, 10, 2);`}
            <br />
            {`// [1, 3, 5, 7, 9]`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel37-header"
        >
          <Typography>Undefined vs Null</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>undefined:</strong> <br />
            <ul>
              <li>
                undefined represents the absence of a value or the value of a
                variable that has not been assigned.
              </li>
              <li>
                Variables that are declared but not initialized automatically
                have the value undefined.
                <li>
                  Functions that do not return a value implicitly return
                  undefined.
                </li>
                <li>
                  It's also the default value of uninitialized properties in
                  objects.
                </li>
                let variable; // variable is declared but not assigned, so its
                value is undefined console.log(variable); // Output: undefined
              </li>
            </ul>{" "}
            <br />
            {`function doSomething() {`} <br />
            {`// This function does not return anything, so it implicitly returns undefined`}{" "}
            <br />
            {`}`} <br /> <br />
            {`const obj = {};`} <br />
            {`console.log(obj.property); // Output: undefined (property is not initialized)`}{" "}
            <br /> <br />
            <strong>Null</strong> <br />
            <ul>
              <li>
                null represents the intentional absence of any object value or
                the value of a variable explicitly set to "no value".
              </li>
              <li>
                It's often used as a placeholder or to indicate that a variable
                is intentionally empty or has no value.
              </li>
              <li>
                It's distinct from undefined, which is the default value for
                uninitialized variables.
              </li>
            </ul>{" "}
            <br />
            {`let variable = null; // variable is intentionally set to null`}{" "}
            <br />
            {`console.log(variable); // Output: null`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel38-header"
        >
          <Typography>Number Issues</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            working with numbers can sometimes lead to unexpected behavior due
            to the way numbers are represented and handled internally
            <br /> <br />
            {`console.log(0.1 + 0.2 === 0.3); // Output: false`} <br />
            {`console.log(0.2+0.4) //0.6000000000000001`} <br />
            {`console.log((0.2+0.4).toFixed(1)) //"0.6"`} <br />
            {`console.log(isNaN("wewt")) //true`} <br /> <br />
            {`Number.isFinite(123);          // true (123 is a finite number)`}{" "}
            <br />
            {`Number.isFinite(Infinity);     // false (Infinity is not a finite number)`}{" "}
            <br />
            {`Number.isFinite(-Infinity);    // false (-Infinity is not a finite number)`}{" "}
            <br />
            {`Number.isFinite(NaN);          // false (NaN is not a finite number)`}{" "}
            <br />
            {`Number.isFinite('123');        // false ('123' is a string, not a number)`}{" "}
            <br />
            {`Number.isFinite(true);         // false (true is converted to 1, which is a finite number)`}{" "}
            <br />
            {`Number.isFinite(null);         // false (null is converted to 0, which is a finite number)`}{" "}
            <br />
            {`Number.isFinite(undefined);    // false (undefined is not a number)`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel39-header"
        >
          <Typography>Instanceof</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Instanceof operator is used to check whether an object belongs to a
            particular class or constructor function. It tests whether the
            prototype property of a constructor function appears anywhere in the
            prototype chain of an object
            <br />
            <br />
            {`object instanceof constructor`}
            <br />
            <strong>object:</strong> The object to be tested. constructor: The
            constructor function or class to test against.
            <br />
            <br />
            {`class Animal {}`}
            <br />
            <br />
            {`class Dog extends Animal {}`}
            <br />
            <br />
            {`const animal = new Animal();`}
            <br />
            {`const dog = new Dog();`}
            <br />
            <br />
            {`console.log(dog instanceof Dog);     // true`}
            <br />
            {`console.log(dog instanceof Animal);  // true (Dog is a subclass of Animal)`}
            <br />
            {`console.log(animal instanceof Animal); // true`}
            <br />
            {`console.log(animal instanceof Dog); // false (Animal is not a subclass of Dog)`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel40-header"
        >
          <Typography>IIFE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Immediately Invoke Function Expression JavaScript function that is
            executed immediately after it is defined. It's often used to create
            a new scope for variables and avoid polluting the global scope, as
            well as to encapsulate code and create modules.
            <br />
            <br />
            {`( function () {`}
            <br />
            {`//code here excuse immediately`}
            <br />
            {`})()`}
            <br />
            <br />
            {`( function () {`}
            <br />
            {`  console.log("test");`}
            <br />
            {`})();`}
            <br />
            {`//test`}
            <br />
            <br />
            {`const test = (function() {`}
            <br />
            {`const init = {`}
            <br />
            {`id: 90,`}
            <br />
            {` methods: {`}
            <br />
            {`call() {`}
            <br />
            {`console.log('Call method executed');`}
            <br />
            {` }`}
            <br />
            {` }`}
            <br />
            {`};`}
            <br />
            {` return init;`}
            <br />
            {`})();`}
            <br />
            <br />
            {`console.log(test);`}
            <br />
            <strong>Output</strong>
            <br />
            {`{`}
            <br />
            {`  id: 90,`}
            <br />
            {`  methods: {`}
            <br />
            {`    call: call() {`}
            <br />
            {`      console.log('Call method executed');`}
            <br />
            {`    }`}
            <br />
            {`  }`}
            <br />
            {`}`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel41-header"
        >
          <Typography>JSON.stringify() vs JSON.parse()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>JSON (JavaScript Object Notation).</strong>
            <br />
            <strong>JSON.stringify():</strong>
            <br />
            <ul>
              <li>
                This function converts a JavaScript object into a JSON string.
              </li>
              <li>
                It takes an object as an argument and returns its JSON
                representation.
              </li>
              <li>
                If the object contains nested objects or arrays, they are
                recursively converted into JSON strings.
              </li>
            </ul>
            <br />
            <br />
            {`const obj = { name: 'John', age: 30 };`}
            <br />
            {`const jsonString = JSON.stringify(obj);`}
            <br />
            {`console.log(jsonString); // Output: {"name":"John","age":30}`}
            <br />
            <br />
            <strong>JSON.parse():</strong>
            <ul>
              <li>
                This function parses a JSON string and converts it into a
                JavaScript object.
              </li>
              <li>
                It takes a JSON string as an argument and returns the
                corresponding JavaScript object.{" "}
              </li>
            </ul>
            <br />
            <br />
            {`const jsonString = '{"name":"John","age":30}';`}
            <br />
            {`const obj = JSON.parse(jsonString);`}
            <br />
            {`console.log(obj); // Output: { name: 'John', age: 30 }`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel42-header"
        >
          <Typography>Maintaining State & Local Storage</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>Maintaining State:</strong> <br />
            State refers to the current condition or data of your application at
            any given moment. In JavaScript, you typically maintain state by
            storing data in variables, objects, or data structures. <br />{" "}
            <br />
            {`let count = 0;`} <br />
            {`let user = {`} <br />
            {`name: 'John Doe',`} <br />
            {`age: 30,`} <br />
            {`email: 'john@example.com'`} <br />
            {`};`} <br /> <br />
            <strong> Local Storage:</strong> <br />
            Local storage is a feature of web browsers that allows you to store
            data persistently across browser sessions. You can use the
            localStorage object in JavaScript to interact with local storage.{" "}
            <br /> <br />
            {`localStorage.setItem('username', 'john');`} <br />
            {`let username = localStorage.getItem('username');`} <br />
            {`localStorage.removeItem('username');`} <br />
            {`localStorage.clear();`} <br /> <br />
            {`const user = JSON.stringify({`} <br />
            {`  firsName: "sum",`} <br />
            {`  lastname: 'test'`} <br />
            {`})`} <br /> <br />
            {`localStorage.setItem("user", user);`} <br />
            {`const firstName = JSON.parse(localStorage.getItem('user'));`}{" "}
            <br /> <br />
            {`console.log(firstName)`} <br />
            {`/*{firsName: "sum",`} <br />
            {`   lastname: "test"`} <br />
            {`} */`} <br /> <br />
            <strong> Limitations:</strong> Local storage has a size limit
            (usually around 5-10MB) and stores data as strings, so you may need
            to serialize and deserialize complex data structures when storing
            and retrieving them.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel43-header"
        >
          <Typography>HTML 5 APIs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {`if(navigator.geolocation) {`}
            <br />
            {`  navigator.geolocation.getCurrentPosition((pos) => {`}
            <br />
            {`    console.log("location", pos)`}
            <br />
            {`  }, () => {`}
            <br />
            {`  console.log("nope");`}
            <br />
            {`});`}
            <br />
            {`  console.log("location ====");`}
            <br />
            {`}`}
            <br />
            <br />
            <strong>Canvas API:</strong> Allows for dynamic rendering of
            graphics, charts, and animations directly in the browser using
            JavaScript.
            <br />
            <strong>Web Storage (localStorage and sessionStorage):</strong>{" "}
            Provides a way to store data locally in the user's browser.
            localStorage stores data persistently across sessions, while
            sessionStorage stores data for the duration of a session.
            <br />
            <strong>IndexedDB:</strong> A client-side database system that
            allows web applications to store large amounts of structured data
            and perform complex queries.
            <br />
            <strong>Web Workers:</strong> Enables running JavaScript code in the
            background to perform tasks without blocking the main execution
            thread, improving performance and responsiveness.
            <br />
            <strong>WebSockets:</strong> Provides a full-duplex communication
            channel over a single TCP connection, allowing for real-time
            bidirectional communication between the client and server.
            <br />
            <strong>Geolocation API:</strong> Allows web applications to access
            the user's geographical location information (with user consent),
            enabling location-based services and functionalities.
            <br />
            <strong>File API:</strong> Enables web applications to interact with
            files on the user's local system, including reading, writing, and
            manipulating files.
            <br />
            <strong>Drag and Drop API:</strong> Allows users to drag and drop
            elements on a web page, facilitating intuitive interaction with web
            content.
            <br />
            <strong>History API:</strong> Enables manipulation of the browser's
            session history, allowing for dynamic updates to the URL without
            full page reloads and facilitating the implementation of single-page
            applications (SPAs).
            <br />
            <strong>WebRTC (Real-Time Communication):</strong> Provides APIs for
            real-time communication between web browsers, enabling peer-to-peer
            audio, video, and data sharing without the need for plugins or
            third-party software.
            <br />
            <strong>Media Capture and Streams API:</strong> Allows web
            applications to access audio and video streams from the user's
            device, enabling functionalities such as webcam access and
            audio/video recording.
            <br />
            <strong>Notifications API:</strong> Allows web applications to
            display system notifications to the user, providing timely updates
            and alerts.
            <br />
            <strong>Service Workers:</strong> Provides a scriptable network
            proxy in the web browser, allowing developers to control network
            requests and cache resources for offline use, improving performance
            and reliability.
            <br />
            <strong>Web Audio API:</strong> Enables advanced audio processing
            and synthesis in web applications, allowing for the creation of
            interactive audio experiences and games.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel44-header"
        >
          <Typography>Destructuring Objects</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Destructuring in JavaScript allows you to extract data from arrays
            and objects into distinct variables, making it easier to work with
            complex data structures.
            <br />
            <br />
            {`const arr = [10, 20, 2024]`}
            <br />
            {`console.log(arr); //[10, 20, 2024]`}
            <br />
            <br />
            {`const [month, day, year] = [10, 20, 2024];`}
            <br />
            {`console.log(month/day/year); //“10/20/2024"`}
            <br />
            <br />
            {`Using alias`}
            <br />
            {`const { firstName : name } = person;`}
            <br />
            {`console.log(name); //"test"`}
            <br />
            <br />
            <strong>EXAMPLE</strong>
            <br />
            {`function displayUser({ name, age, address: { city, country } }) {`}
            <br />
            console.log(`Name: {`${`}name{`}`}`);
            <br />
            console.log(`Age: {`${`}age}{`}`});
            <br />
            console.log(`City: {`${`}city{`}`}`);
            <br />
            console.log(`Country: {`${`}country{`}`}`);
            <br />
            {`}`}
            <br />
            <br />
            {`const user = {`}
            <br />
            {`name: 'Jane Smith',`}
            <br />
            {`age: 28,`}
            <br />
            {`address: {`}
            <br />
            {`city: 'Los Angeles',`}
            <br />
            {`country: 'USA'`}
            <br />
            {` }`}
            <br />
            {`};`}
            <br />
            <br />
            {`displayUser(user);`}
            <br />
            <br />
            <strong>Output:</strong>
            <br />
            {`Name: Jane Smith`}
            <br />
            {`Age: 28`}
            <br />
            {`City: Los Angeles`}
            <br />
            {`Country: USA`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel45-header"
        >
          <Typography>Rest & Spread Operator</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>Rest Operator (...):</strong>
            <br />
            The rest operator (...) allows you to represent an indefinite number
            of arguments as an array.
            <br />
            <br />
            {`const display = (num) => {`}
            <br />
            {`console.log("num", num);`}
            <br />
            {`}`}
            <br />
            {`display(5) //5`}
            <br />
            <br />
            {`If we pass more then one argument also we get display(5, 6, 7, 8)`}
            <br />
            {`//5 But if you do this`}
            <br />
            {`const display = (...num) => {`}
            <br />
            {`console.log("num", num);`}
            <br />
            {`}`}
            <br />
            <br />
            display(5, 6, 7, 8) //"num", [5, 6, 7, 8]
            <br />
            <br />
            <strong>Spread Operator (...):</strong>
            <br />
            The spread operator (...) allows you to expand an array or object
            into individual elements.
            <br />
            Convenient for merging arrays, copying arrays and objects, and
            passing multiple arguments to functions.
            <br />
            <br />
            {`const numbers = [1, 2, 3];`}
            <br />
            {`console.log(Math.max(...numbers)); // Output: 3 (equivalent to Math.max(1, 2, 3))`}
            <br />
            <br />
            {`const arr1 = [1, 2, 3];`}
            <br />
            {`const arr2 = [4, 5, 6];`}
            <br />
            {`const mergedArray = [...arr1, ...arr2];`}
            <br />
            {`console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]`}
            <br />
            <br />
            {`const obj1 = { x: 1, y: 2 };`}
            <br />
            {`const obj2 = { ...obj1, z: 3 };`}
            <br />
            {`console.log(obj2); // Output: { x: 1, y: 2, z: 3 }`}
            <br />
            <br />
            <strong>
              spread syntax is the opposite of rest syntax. Spread syntax
              "expands" an array into its elements, while rest syntax collects
              multiple elements and "condenses" them into a single element.
            </strong>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel46-header"
        >
          <Typography>Arrow Function</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            They provide a more compact syntax compared to traditional function
            expressions and offer some additional features
            <br />
            <br />
            {`function display(num) {`}
            <br />
            {`return num + 1;`}
            <br />
            {`}`}
            <br />
            {`console.log(display(2)) //3`}
            <br />
            {`const display2 = num => num + 1`}
            <br />
            {`console.log(display2(4)) //5`}
            <br />
            <br />
            Arrow functions do not have their own this context; instead, they
            inherit the this value from the surrounding code.
            <br />
            {`function Person() {`}
            <br />
            {` this.age = 0;`}
            <br />
            <br />
            {`setInterval(() => {`}
            <br />
            {` // this refers to the Person object`}
            <br />
            {`this.age++;`}
            <br />
            {`console.log(this.age);`}
            <br />
            {`}, 1000);`}
            <br />
            {`}`}
            <br />
            <br />
            const person = new Person();
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel47-header"
        >
          <Typography>NaN</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            NaN stands for "Not-a-Number" in JavaScript. It is a special value
            of the Number type that represents the result of an operation that
            cannot produce a meaningful numerical result.
            <br />
            <br />
            {`const result = 'hello' / 5;`}
            <br />
            {`console.log(result); // Output: NaN`}
            <br />
            {`const result = parseInt('hello');`}
            <br />
            {`console.log(result); // Output: NaN`}
            <br />
            <br />
            It's important to note that NaN is considered a numeric value but is
            not equal to any other value, including itself:
            <br />
            {`console.log(NaN === NaN); // Output: false`}
            <br />
            <br />
            you should use the isNaN() function or the Number.isNaN() method
            introduced in ES6:
            <br />
            {`console.log(isNaN(NaN));        // Output: true`}
            <br />
            {`console.log(Number.isNaN(NaN)); // Output: true`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel48-header"
        >
          <Typography>Undeclared vs Undefined</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>Undeclared</strong>
            <br />
            An undeclared variable is a variable that has been referenced in
            code without being declared
            <br />
            {`console.log(foo); // ReferenceError: foo is not defined`}
            <br />
            <br />
            <strong>Undefined</strong>
            <br />
            Undefined is a special value in JavaScript that indicates the
            absence of a value. It is also the default value of uninitialized
            variables and the value returned by functions that do not explicitly
            return a value
            <br />
            {`let bar;`}
            <br />
            {`console.log(bar); // Output: undefined`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel49-header"
        >
          <Typography>DOM Selectors</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            DOM (Document Object Model) selectors are used to interact with HTML
            elements in a web page. They allow you to retrieve and manipulate
            elements dynamically.
            <br />
            <br />
            {`const element = document.getElementById('myElement');`}
            <br />
            getElementsByClassName, getElementsByTagName
            <br />
            {`const element = document.querySelector('.myClass'); //Selects the first element that matches a specified CSS selector.`}
            <br />
            {`const elements = document.querySelectorAll('div.myClass');`}
            <br />
            {`getElementById() Shortcut -> const element = document.myElement;`}
            <br />
            {`matches() method: checks if an element matches a specified CSS selector. Returns a boolean`}
            <br />
            {`const matches = element.matches('.myClass');`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel50-header"
        >
          <Typography>How to Copy an Object</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>1. Object.assign()</strong>
            <br />
            The Object.assign() method is used to copy the values of all
            enumerable own properties from one or more source objects to a
            target object. It returns the target object.
            <br />
            <br />
            {`const obj1 = { a: 1, b: 2 };`}
            <br />
            {`const obj2 = Object.assign({}, obj1);`}
            <br />
            {`console.log(obj2); //{ a: 1, b: 2 }`}
            <br />
            <br />
            {`const obj2 = Object.assign(obj1)`}
            <br />
            {`console.log(obj2); //{ a: 1, b: 2 }`}
            <br />
            <br />
            <strong>2. Spread Operator (...):</strong>
            <br />
            The spread operator (...) can also be used to create a shallow copy
            of an object. It spreads the properties of the source object into a
            new object.
            <br />
            {`const obj1 = { a: 1, b: 2 };`}
            <br />
            {`const obj2 = { ...obj1 }; //{ a: 1, b: 2 }`}
            <br />
            <br />
            {`const obj1 ={a: 1, b: 2, c: {d:4, e:{f:5, g:{h:6, i:7}}}}`}
            <br />
            <br />
            {`const obj2 = {...obj1}`}
            <br />
            {`console.log(obj2); //{ a: 1, b: 2, c: { d: 4, e: { f: 5, g: [Object] } } }`}
            <br />
            <br />
            <strong>3.JSON.parse() and JSON.stringify():</strong>
            <br />
            You can convert the object to a JSON string using JSON.stringify(),
            and then parse the JSON string back into an object using
            JSON.parse(). This creates a deep copy of the object.
            <br />
            {`const obj1 = { a: 1, b: 2 };`}
            <br />
            {`const obj2 = JSON.parse(JSON.stringify(obj1));`}
            <br />
            <br />
            <strong>Shallow vs Deep Copy:</strong>
            <br />
            Object.assign() and the spread operator create shallow copies,
            meaning that nested objects are still references. The JSON method
            creates a deep copy, cloning all nested objects.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel51-header"
        >
          <Typography>
            Unicode VS ASCII (American Standard Code for Information
            Interchange)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>Unicode</strong>
            <ul>
              <li>
                What it covers: Unicode is a much bigger system. It includes
                characters from all languages around the world, emojis, symbols,
                and more. It aims to represent every character from every
                language.
              </li>
              <li>
                How it works: Like ASCII, Unicode assigns a unique number to
                each character. However, Unicode can handle a much larger range
                of numbers to cover all these characters.
              </li>
              <li>
                Encoding: Unicode can be encoded in different ways, like UTF-8
                or UTF-16. UTF-8 is the most common and flexible, as it uses
                variable lengths to represent characters efficiently.
              </li>
              <li>
                Usage: It's essential for modern software that needs to support
                multiple languages, emojis, and diverse symbols. It's used in
                websites, apps, and systems where internationalization
                (supporting different languages) is important.
              </li>
            </ul>
            <br />
            <strong>ASCII</strong>
            <ul>
              <li>
                What it covers: ASCII is a basic coding system for computers. It
                includes English letters (both uppercase and lowercase),
                numbers, punctuation marks (like commas and periods), and some
                control characters (like Enter and Tab).
              </li>
              <li>
                How it works: Each character in ASCII is represented by a
                number. For example, the letter 'A' is represented by the number
                65.
              </li>
              <li>
                Limitations: ASCII only covers English characters and some basic
                symbols. It doesn't support other languages, accents, or special
                characters.
              </li>
              <li>
                Usage: It's used in older systems, simple programs, and where
                only basic English characters are needed.
              </li>
            </ul>
            <br />
            <strong>Key Differences</strong>
            <ul>
              <li>
                Coverage: ASCII covers basic English characters, while Unicode
                covers characters from all languages and many symbols.
              </li>
              <li>
                Complexity: ASCII is simple and uses fixed-size encoding.
                Unicode, especially UTF-8, is more complex but flexible and
                efficient for handling diverse characters.
              </li>
              <li>
                Usage: ASCII is used in simpler applications and older systems,
                while Unicode is necessary for modern international applications
                that need to support multiple languages and symbols.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel52-header"
        >
          <Typography>Encrypting Vs Hashing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>Encrypting</strong>
            <ul>
              <li>
                Purpose: Encryption is used to protect sensitive data by
                converting it into an unreadable format (cipher text) that can
                only be decoded (decrypted) back into its original form (plain
                text) with a specific key or password.
              </li>
              <li>
                Process: Encryption algorithms (such as AES, DES, RSA) use
                mathematical transformations to scramble data according to a
                secret key. The encrypted data can only be decrypted by someone
                who has the correct key.
              </li>
              <li>
                Characteristics:
                <ul>
                  <li>
                    Reversibility: Encryption is reversible, meaning you can
                    decrypt the encrypted data back to its original form if you
                    have the decryption key.
                  </li>
                  <li>
                    Security: The security of encryption depends on the strength
                    of the encryption algorithm and the secrecy of the
                    encryption key.
                  </li>
                  <li>
                    Usage: Commonly used to protect sensitive information in
                    transit (e.g., during communication over the internet) and
                    at rest (e.g., stored data on disk).
                  </li>
                </ul>
              </li>
            </ul>
            <br />
            <strong>Hashing</strong>
            <ul>
              <li>
                Purpose: Hashing is used to verify data integrity and to
                generate fixed-size, unique representations (hash values) of
                data, typically for storing passwords securely or validating
                data.
              </li>
              <li>
                Process: Hash functions (such as SHA-256, MD5, bcrypt) take an
                input (message) and produce a fixed-size hash value. This value
                is deterministic (same input produces the same hash), but it is
                not reversible back to the original data.
              </li>{" "}
              <li>
                Characteristics:
                <ul>
                  <li>
                    Irreversibility: Hashing is a one-way process; you cannot
                    reverse the hash value back to the original data.
                    Deterministic: The same input always produces the same hash
                    value.
                  </li>
                  <li>
                    Security: A secure hash function makes it computationally
                    impractical to reverse-engineer the original data from the
                    hash value.
                  </li>
                  <li>
                    Usage: Commonly used for password storage (storing hashed
                    passwords instead of plain text), data integrity
                    verification, and digital signatures.
                  </li>
                </ul>
              </li>
            </ul>
            <strong>Note</strong>
            <p>
              If the input is "Hello World!" use the hashing algorithm SHA-256
              we allways get the fixed sixe result, it always produces a 256-bit
              (32-byte) hash value. standard cryptographic hashing algorithm
              like SHA-256, you will always get the same output (hash value) for
              the same input. When we use it to store the password we check the
              hash value to match the stored hash value instead of the real
              password.
            </p>
            <br />
            <strong>Key Differences</strong>
            <ul>
              <li>
                Reversibility: Encryption is reversible (plaintext ↔ ciphertext
                with key), while hashing is irreversible (plaintext → hash).
              </li>
              <li>
                Security Focus: Encryption focuses on confidentiality
                (protecting data from unauthorized access), while hashing
                focuses on data integrity (ensuring data has not been altered).
              </li>
              <li>
                Output Size: Encryption output (ciphertext) size depends on
                input size and algorithm, while hashing produces fixed-size
                outputs regardless of input size.
              </li>
              <li>
                Use Cases: Encryption is used for securing data in transit and
                at rest, while hashing is used for storing passwords securely
                and verifying data integrity.{" "}
              </li>
            </ul>
            <strong>Conclusion</strong> <br />
            In summary, encryption and hashing are both essential techniques in
            data security, each serving distinct purposes. Encryption protects
            data confidentiality by reversible transformation, while hashing
            ensures data integrity through irreversible, fixed-size
            representations. Understanding when and how to use each technique is
            crucial for implementing effective data protection strategies in
            software and systems.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel51-header"
        >
          <Typography>Unicode</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel51-header"
        >
          <Typography>Unicode</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </Container>
  );
};

export default Lists;

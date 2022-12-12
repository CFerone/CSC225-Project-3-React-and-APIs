/* 
    Use the website "https://jshint.com/", to check for errors in the code
    ALWAYS CHECK FOR ERRORS USING THE ONLINE VALIDATOR !!!
*/

// Courtney Ferone - CSC 225 Project #3 (APIs and React)

/* 
    Create a "components" directory in our React project's "src" directory and add files (components)
    such as this .js file to help with modulation when calling multiple components
*/

// ALL .js Files MUST follow an uppercase first naming convention!!
/* 
    examples:   EmployeeList.js
                IndividualEmployee.js
                Loading.js
                Error.js
                etc...
*/

/*
    All .js file componenets MUST be referenced in this file
        import EmployeeList from './components/EmployeeList';
        import IndividualEmployee from './components/IndividualEmployee';
        import Loading from './components/Loading';
        import Error from './components/Error';
*/

// All components must have a function that returns jsx and then exports the function: example below

import './App.css';
import EmployeeList from './components/EmployeeList';
import IndividualEmployee from './components/IndividualEmployee';
import Loading from './components/Loading';
import Error from './components/Error';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App()
{
  /* 
    Array Destructing for "Loading"
      First Element (0): "loading", the actual value of the state
      Second Element (1): "setLoading", the mutator or function that allows us to change the state
      Setting to "true" because we will be loading when the page loads
  */
  const [loading, setLoading] = useState(true);
  
  // Array Destructing for "EmployeeList"
  const [employeeData, setEmployeeData] = useState([]);

  /* 
    Array Destructing for "Individual Employee"
      We only want to render this componenet when the selected employee is NOT null
      (when we click on a specific employee, this component renders and the
      complete employee list will be hidden)
  */
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // "Error" function
  const [error,setError] = useState(false);


  // Function to resetState (default settings and renders the original list)
  const resetState = () =>
  {
    setEmployeeData([]);
    setSelectedEmployee(null);
    setLoading(true);
    setError(false);
    getEmployeeData();
  }


  /* Setting a toggle for our loading state (used to test loading)
  const toggleLoading = () =>
  {
    // Set "loading" equal to the OPPOSITE of what it currently is (which is true)
    setLoading(!loading);
  }
  */

  /* Example of "useEffect" 
      When the site first loads, we want to make a request out to the API:
        useEffect accepts two arguments, but only needs one (technically)
        First Argument (): A callback that executes
        Second Argument []: When does it execute (a variable we want to watch)
          This useEffect is saying: when loading changes, execute this function
          useEffect(() => {
            // The below code uses the "`" symbol (where the tilde is)
            console.log(`Loading changed to ${loading}`)
          }, [loading]);
  */
  
  // Using Axios to get information from the API
  const getEmployeeData = (id=null) => {
    // Turn loading on while we retrieve the data
    setLoading(true);

    let actualId = "";

    // If "id" is set AND actualId (parsed/passed as an integer with base 10) is > 0
    if(!!id && parseInt(id,10) > 0)
    {
      // Set the actualId equal to the parsed/passed integer
      actualId = parseInt(id,10);
    }

    /*
      Because getting information from APIs can take time to load,
      we add a special technique called a "promise"(.then())
    */
    axios.get(`https://api.matgargano.com/employees/${actualId}`).then(response => {
      setEmployeeData(response.data);
      // When the data is retrieved, set loading to false
      setLoading(false);
    })
    // Set a .catch to define the output we see when an error occurs
    .catch((error) => 
    {
      // The Error state will show (instead of the default error thrown)
      setError(error.message || "No Error Given");
    })
  };

  useEffect(() => {
    getEmployeeData();
  }, []);

  useEffect(() =>
  {
    // If selectedEmployee isn't null (is true), get the EmployeeData and pass the selected employee
    if(!!selectedEmployee)
    {
        getEmployeeData(selectedEmployee);
    }
  }, [selectedEmployee]);

  return (
    <div className="App">
      {/* Can write comments by pressing "CTRL + /"  */}
      {/* 
          I will define a "component" for each of the following states:
            Listing of all Employees (EmployeeList.js)
              <EmployeeList />
            Individual Employee Listing (IndividualEmployee.js)
              <IndividualEmployee />
            Loading State (Loading.js)
              <Loading />
            Error State (Error.js)
              <Error /> 
      */}

      {/* Setting an Error state (which wraps everything else) */}
      {/* If there is an error */}
      {!!error && <Error resetState={resetState} message={error} />}
      {/* If there is no error */}
      {!error && 
      <>
        {/* Setting Loading Conditions: */}
        {/* Below button was used to test loading:
        <button onClick= {toggleLoading}> Click ! </button> */}
        {/* If "loading" is true(!!), then(&&) output the Loading state */}
        {!!loading && <Loading />}
        {/* Otherwise, if we're NOT loading, display the other states */}
        {!loading && (
          <div> 
            {/* If "selectedEmployee" is false, render the EmployeeList */}
            {!selectedEmployee && (
              <EmployeeList setSelectedEmployee={setSelectedEmployee} data={employeeData}/>
            )}
            {/* If "selectedEmployee" is true, render IndividualEmployee  */}
            {!!selectedEmployee && <IndividualEmployee resetState={resetState} data={employeeData} />}
          </div>
        )}
      </>}
    </div>
  ); // end of return
} // end of export function
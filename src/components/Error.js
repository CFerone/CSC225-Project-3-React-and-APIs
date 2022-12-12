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

    The below line must be added to the App.js file to reference this .js file (must be located at the top of the file)
        import Error from './components/Error';
*/

// All components must have a function that returns jsx and then exports the function: example below

const Error = (props) =>
{
    return <div> 
        <p> Error: {props.message} </p>
        <button onClick={props.resetState}> Back to the Complete Employee List </button>    
    </div>;
}

export default Error;
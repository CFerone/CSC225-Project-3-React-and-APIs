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
        import EmployeeList from './components/EmployeeList';
*/

// All components must have a function that returns jsx and then exports the function: example below

const EmployeeList = (props) =>
{
    // When an employee is clicked, we want to update the selectedEmployee (in App.js)
    const updateEmployee = (employeeId) =>
    {
        props.setSelectedEmployee(employeeId);
    }


    /*
        Style definitions in React are camelCase !!!
        example: backgroundColor
    */
    return (
    <>
        <div className={"container-fluid flex-column d-flex align-items-center justify-content-center"}> 
            Complete Employee List 
            <br></br><br></br>
            {/* General way to retrieve and output an API array
            {JSON.stringify(props.data)} */}
            {
                props.data.map(employees =>
                {
                    //return <pre>{JSON.stringify(employees,0,1)}</pre>;
                    return <p key={employees.id} onClick={() => {updateEmployee(employees.id)}} style={{cursor: "pointer"}} role="button">
                        Employee ID: {employees.id}
                        <br></br>Employee Name: {employees.name}
                        <br></br>Employee Department: {employees.department}
                        <hr></hr>
                        </p>
                })
            }
        </div>;
    </>)
}

export default EmployeeList;
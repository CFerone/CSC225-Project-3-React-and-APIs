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
        import IndividualEmployee from './components/IndividualEmployee';
*/

// All components must have a function that returns jsx and then exports the function: example below

const IndividualEmployee = (props) =>
{
    return (
    <>
    <div className={"d-flex justify-content-center mt-5"}>
        <div className={"card bg-dark text-white"} style={{width:"20rem"}}> 
            <img
                    src={props.data.photo}
                    className="card-img-top"
                    alt="Employee Photo"
            />
            <div className={"card-body"}>
                <h5 className={"card-title"}> {props.data.name} </h5>
                <p className={"card-text"}>
                ID: {props.data.id}
                <br></br>Start Date: {props.data.startDate}
                <br></br>Role: {props.data.role}
                <br></br>Department: {props.data.department} 
                </p>
                <a onClick={props.resetState} className="btn btn-primary"> Back to the Complete Employee List </a> 
            </div>
        </div>
    </div>;
    </>
    )
}

export default IndividualEmployee;
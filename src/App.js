// import React from "react"

// export default function Form() {
//     const [firstName, setFirstName] = React.useState("")
//     const [lastName, setLastName] = React.useState("")
//     /**
//      * Challenge: Track the applicant's last name as well
//      */
    
//     console.log(firstName, lastName)
    
//     function handleFirstNameChange(event) {
//         setFirstName(event.target.value)
//     }
    
//     function handleLastNameChange(event) {
//         setLastName(event.target.value)
//     }
    
//     return (
//         <form>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleFirstNameChange}
//             />
//             <input
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={handleLastNameChange}
//             />
//         </form>
//     )
// }
// replace with

import React from "react"

export default function Form() {
    const [fromData, setFormData] = React.useState(
      {firstName: "", lastName: "", email: ""}
      )
    /**
     * Challenge: Track the applicant's last name as well
     */
    
    console.log(fromData)
    function handledChange(event) {
        //console.log(event.target.name)
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            [event.target.name]: event.target.value
          }
        })
    }
        
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handledChange}
                name="firstName"
                value={FormData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handledChange}
                name="lastName"
                value={FormData.lastName}
            />
            <input
                type="text"
                placeholder="E-mail"
                onChange={handledChange}
                name="email"
                value={FormData.email}
            />
        </form>
    )
}

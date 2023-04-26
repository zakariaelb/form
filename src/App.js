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
      {firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true
      }
      )
    /**
     * Challenge: Track the applicant's last name as well
     */
    
    console.log(fromData)
    // function handledChange(event) {
    //     //console.log(event.target.name)
    //     setFormData(prevFormData => {
    //       return {
    //         ...prevFormData,
    //         [event.target.name]: event.target.value
    //       }
    //     })
    // }

    function handledChange(event) {
      //console.log(event.target.name)
      const {name, value, type, checked} = event.target
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value
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
                value={fromData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handledChange}
                name="lastName"
                value={fromData.lastName}
            />
            <input
                type="text"
                placeholder="E-mail"
                onChange={handledChange}
                name="email"
                value={fromData.email}
            />
            <textarea 
              placeholder="Comments"
              onChange={handledChange}
              name="comments"
              value={fromData.comments}
            />
            <input 
              type="checkbox"
              id="isFriendly"
              checked={fromData.isFriendly}
              onChange={handledChange}
              name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />
            <br />
            
            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
        </form>
    )
}

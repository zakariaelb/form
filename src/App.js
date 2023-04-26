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
        isFriendly: true,
        employment: "",
        favColor:""
      }
      )
    /**
     * Challenge: Track the applicant's last name as well
     */
    console.log(fromData.employment)
    console.log(fromData)
    console.log(fromData.favColor)
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
                    name="employment"
                    value="unemployed"
                    checked={fromData.employment === "unemployed"}
                    onChange={handledChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"                  
                    value="part-time"
                    checked={fromData.employment === "part-time"}
                    onChange={handledChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"                    
                    value="full-time"
                    checked={fromData.employment === "full-time"}
                    onChange={handledChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
            <br />
            
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select
               id="favColor"
               value={FormData.favColor}
               name="favColor"
               onChange={handledChange}
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
        </form>
    )
}

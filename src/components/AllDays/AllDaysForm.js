// import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router';
// import { getMedicationByUserId } from '../../modules/MedicationManager';
// import { Button } from "reactstrap";
// import { addMedicationToDay, getMedicationByDay } from '../../modules/DayManager';
// import { getSuggestedQuery } from '@testing-library/dom';
// import { DayList } from '../schedule/DayList';




// export const AllDaysForm = ({ toggler, reload }) => {
//     let user = parseInt(sessionStorage.getItem("rxtracker_user"))

//     const history = useHistory()

//     const [monday, setMonday] = useState({
//         userId: user,
//         medicationId: 0,
//         dayId: 1,
//         status: false
//     })

//     const [tuesday, setTuesday] = useState({
//         userId: user,
//         medicationId: 0,
//         dayId: 2,
//         status: false
//     })

//     const [wednesday, setWednesday] = useState({
//         userId: user,
//         medicationId: 0,
//         dayId: 3,
//         status: false
//     })

//     const [thursday, setThursday] = useState({
//         userId: user,
//         medicationId: 0,
//         dayId: 4,
//         status: false
//     })

//     const [friday, setFriday] = useState({
//         userId: user,
//         medicationId: 0,
//         dayId: 5,
//         status: false
//     })

//     const [saturday, setSaturday] = useState({
//         userId: user,
//         medicationId: 0,
//         dayId: 6,
//         status: false
//     })

//     const [sunday, setSunday] = useState({
//         userId: user,
//         medicationId: 0,
//         dayId: 7,
//         status: false
//     })

//     const [usermedications, setUsermedications] = useState([])

//     const handleControlledInputChange = (event) => {
//         const newMondayMedication = { ...monday }
//         const newTuesdayMedication = { ...tuesday }
//         const newWednesdayMedication = { ...wednesday }
//         const newThursdayMedication = { ...thursday }
//         const newFridayMedication = { ...friday }
//         const newSaturdayMedication = { ...saturday }
//         const newSundayMedication = { ...sunday }
//         let selectedVal = event.target.value

//         if (event.target.value.includes("Id")) {
//             selectedVal = parseInt(selectedVal)
//         }
//         newMondayMedication[event.target.id] = parseInt(selectedVal)
//         newTuesdayMedication[event.target.id] = parseInt(selectedVal)
//         newWednesdayMedication[event.target.id] = parseInt(selectedVal)
//         newThursdayMedication[event.target.id] = parseInt(selectedVal)
//         newFridayMedication[event.target.id] = parseInt(selectedVal)
//         newSaturdayMedication[event.target.id] = parseInt(selectedVal)
//         newSundayMedication[event.target.id] = parseInt(selectedVal)
//         setMonday(newMondayMedication)
//         setTuesday(newTuesdayMedication)
//         setWednesday(newWednesdayMedication)
//         setThursday(newThursdayMedication)
//         setFriday(newFridayMedication)
//         setSaturday(newSaturdayMedication)
//         setSunday(newSundayMedication)
//     }

//     const [allDays, setAlldays] = useState([])

//     useEffect(() => {
//         getMedicationByUserId(user).then(response => {
//             setUsermedications(response)
//         })
//     }, [])

    
//     useEffect(() => {
//         getMedicationByDay(monday)
//         .then(getMedicationByDay(tuesday))
//         .then(getMedicationByDay(wednesday))
//         .then(getMedicationByDay(thursday))
//         .then(getMedicationByDay(friday))
//         .then(getMedicationByDay(saturday))
//         .then(getMedicationByDay(sunday))
//         .then(allDays)
//         .then(setAlldays(sunday))
//     }, []);



//     const handleClickSaveMedication = (event) => {
//         event.preventDefault()
//         addMedicationToDay(monday)
//             .then(() => addMedicationToDay(tuesday))
//             .then(() => addMedicationToDay(wednesday))
//             .then(() => addMedicationToDay(thursday))
//             .then(() => addMedicationToDay(friday))
//             .then(() => addMedicationToDay(saturday))
//             .then(() => addMedicationToDay(sunday))
//             .then(toggler)
//             .then(reload)
//     }

//     return (
//         <>
//             <div>
//                 <h2>Add Medication to Each Day</h2>
//                 <select value={usermedications.id} name="usermedicationsId" id="medicationId" onChange={handleControlledInputChange}>
//                     <option value="0">Select</option>
//                     {usermedications.map(u => (<option key={u.id} value={u.id}>
//                         {u.name}
//                     </option>))}
//                 </select>
//             </div>
//             <div className="allDaysButtons">
//                 <Button
//                     className="allDaysSave"
//                     variant="primary" size="sm"
//                     onClick={handleClickSaveMedication}>
//                     Save
//                 </Button>

//             </div>
//         </>

//     )
// }
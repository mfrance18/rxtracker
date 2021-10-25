// import React, { useEffect, useState } from "react";
// import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
// import { AllDaysForm } from "./AllDaysForm";
// import { DayList } from "../schedule/DayList";
// import { getAllDays } from "../../modules/DayManager";






// export const AllDaysList = () => {

//     const [allDays, setAllDays] = useState([])
    
   
//     const [modal, setModal] = useState(false);

//     const getEveryDay = () => {
//         return getAllDays()
//             .then(response => {
//                 setAllDays(response)
//             })
//     }


//     const reloadAll =  () => {
//         getEveryDay()
//     }

//     const toggle = () => {
//         setModal(!modal)
//     };

//     useEffect(() => {
//         getEveryDay()
//     }, [])

    

//     return (
//         <>
//             <div>
//                 <Button type="button"
//                     className="mondayAdd"
//                     variant="primary" size="sm"
//                     onClick={toggle}>
//                     Add Medication
//                 </Button>
//             </div>
           
//             <DayList />

//             <Modal isOpen={modal} toggle={toggle}>
//                 <ModalHeader toggle={toggle}>Add to Everyday</ModalHeader>
//                 <ModalBody>
//                     <AllDaysForm toggler={toggle} reloadAll={reloadAll}/>
//                 </ModalBody>
//             </Modal>
//         </>
//     )
// }
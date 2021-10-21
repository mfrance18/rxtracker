// import React, { useState } from "react";
// import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
// import { AllDaysForm } from "./AllDaysForm";
// import { DayList } from "../schedule/DayList";






// export const AllDaysList = () => {
    
   
//     const [modal, setModal] = useState(false);

//     const toggle = () => {
//         setModal(!modal)
//     };

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
//                     <AllDaysForm toggler={toggle}/>
//                 </ModalBody>
//             </Modal>
//         </>
//     )
// }
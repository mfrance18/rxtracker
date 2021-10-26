import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { AllDaysForm } from "./AllDaysForm";
import { DayList } from "../schedule/DayList";
import { getAllDays } from "../../modules/DayManager";
import { useHistory } from "react-router";






export const AllDaysList = () => {

    const history = useHistory()

    // const [allDays, setAllDays] = useState([])


    // const [modal, setModal] = useState(false);

    // const getEveryDay = () => {
    //     return getAllDays()
    //         .then(response => {
    //             setAllDays(response)
    //         })
    // }


    // const reloadAll =  () => {
    //     getEveryDay()
    // }

    // const toggle = () => {
    //     setModal(!modal)
    // };

    // useEffect(() => {
    //     getEveryDay()
    // }, [])



    return (
        <>
            <DayList />
        </>
    )
}
'use client'
import React, { useState } from 'react';
import {Button, Modal} from "@heroui/react";
import AppointmentEditForm from './AppointmentEditForm';

const AppointmentEditModal = ({appointment}) => {
  // console.log(appointment)
    const [openEditForm, setOpenEditForm] = useState(false);
    return (
        <div>
            <Modal isOpen={openEditForm} onOpenChange={setOpenEditForm}>
                  <Button className={'bg-green-500 w-30'} appointment={appointment} onPress={() => setOpenEditForm(true)} >Edit</Button>
                  <Modal.Backdrop>
                    <Modal.Container placement="center">
                      <Modal.Dialog className="sm:max-w-[450px] px-15 relative">
                        <Modal.CloseTrigger className="z-11 text-2xl text-black"/>
                        <Modal.Header>
                          <Modal.Heading className="text-2xl z-10 text-bold my-2 md:my-3 text-white text-center">Update Doctor Appointment</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                          <AppointmentEditForm appointment={appointment} setOpenEditForm={setOpenEditForm}></AppointmentEditForm>
                        </Modal.Body>
                        <div className="w-118 h-33 md:h-30 z-5 rounded-t-2xl bg-blue-600 absolute top-[-22px] left-[-20px]"></div>
                      </Modal.Dialog>
                    </Modal.Container>
                  </Modal.Backdrop>
                </Modal>
        </div>
    );
};

export default AppointmentEditModal;
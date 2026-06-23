"use client";
import {Button, Modal} from "@heroui/react";
import { AppointmentForm } from "./AppointmentForm";
import { useState } from "react";

export function AppointmentModal({data}) {
  const [openAppointmentModal, setOpenAppointmentModal] = useState(false)
  return (
    <div>
        <Modal isOpen={openAppointmentModal} onOpenChange={setOpenAppointmentModal}>
      <Button className={'mt-8 rounded-none w-50'} onPress={()=> setOpenAppointmentModal(true)}>Book Appointment</Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[450px] px-15">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="text-2xl text-bold my-3 text-center">Doctor Appointment</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <AppointmentForm data={data} setOpenAppointmentModal={setOpenAppointmentModal}></AppointmentForm>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    </div>
  );
}
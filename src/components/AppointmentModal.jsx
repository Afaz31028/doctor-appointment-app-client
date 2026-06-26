"use client";
import { Button, Modal } from "@heroui/react";
import { AppointmentForm } from "./AppointmentForm";
import { useState } from "react";

export function AppointmentModal({ data }) {
  const [openAppointmentModal, setOpenAppointmentModal] = useState(false);
  return (
    <div>
      <Modal
        isOpen={openAppointmentModal}
        onOpenChange={setOpenAppointmentModal}
      >
        <Button
          className={"mt-8 rounded-none w-50"}
          onPress={() => setOpenAppointmentModal(true)}
        >
          Book Appointment
        </Button>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[450px] relative">
              <Modal.CloseTrigger className="z-11 text-2xl text-black"/>
              <Modal.Header>
                <Modal.Heading className="text-2xl py-5 z-10 text-bold text-white text-center">
                  Doctor Appointment
                </Modal.Heading>
              </Modal.Header>
              <Modal.Body>
                <AppointmentForm
                  data={data}
                  setOpenAppointmentModal={setOpenAppointmentModal}
                ></AppointmentForm>
              </Modal.Body>
            <div className="w-118 h-30 z-5 rounded-t-2xl bg-blue-600 absolute top-[-22px] left-[-20px]"></div>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
}

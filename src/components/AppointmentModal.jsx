"use client";
import {Button, Modal} from "@heroui/react";
import { AppointmentForm } from "./AppointmentForm";

export function AppointmentModal({data}) {
  return (
    <div>
        <Modal>
      <Button className={'mt-8 rounded-none w-50 bg-gray-200 text-md text-black'}>Book Appointment</Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[450px] px-15 bg-gray-300">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="text-2xl text-bold my-3 text-center">Doctor Appointment</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <AppointmentForm data={data}></AppointmentForm>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    </div>
  );
}
import React from 'react';
import {Button, Modal} from "@heroui/react";
import AppointmentEditForm from './AppointmentEditForm';

const AppointmentEditModal = ({appointment}) => {
    return (
        <div>
            <Modal>
                  <Button className={'bg-green-500 w-30'} appointment={appointment}>Edit</Button>
                  <Modal.Backdrop>
                    <Modal.Container>
                      <Modal.Dialog className="sm:max-w-[450px] px-15 bg-gray-300">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                          <Modal.Heading className="text-2xl text-bold my-3 text-center">Update Doctor Appointment</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                          <AppointmentEditForm appointment={appointment}></AppointmentEditForm>
                        </Modal.Body>
                      </Modal.Dialog>
                    </Modal.Container>
                  </Modal.Backdrop>
                </Modal>
        </div>
    );
};

export default AppointmentEditModal;
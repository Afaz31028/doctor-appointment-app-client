import { Button } from '@heroui/react';
import React from 'react';
import AppointmentEditModal from './AppointmentEditModal';

const AppointmentCard = ({appointment}) => {
    const {patientName, patientContact, doctorName, specialist, date, appointmentDay, appointmentTime} = appointment;
    console.log(appointment)
    return (
        <div className='max-w-4xl mx-auto border-2 px-5 py-3 rounded-2xl bg-gray-100 font-serif flex justify-between items-center'>
            <div className='w-full'>
                <p>Patient Name: <span className='font-semibold text-blue-700'>{patientName}</span></p>
                <p>Patient Contact: <span className='font-semibold text-blue-700'>{patientContact}</span></p>
                <p>Doctor Name: <span className='font-semibold text-blue-700'>{doctorName}</span></p>
                <p>Specialist: <span className='font-semibold text-blue-700'>{specialist}</span></p>
                <p>Appointment Day: <span className='font-semibold text-blue-700'>{appointmentDay}</span></p>
                <p>Appointment Time: <span className='font-semibold text-blue-700'>{appointmentTime}</span></p>
                <p>Appointment Booking date: <span className='font-semibold text-blue-700'>{date}</span></p>
            </div>
            <div>
                <AppointmentEditModal appointment={appointment}></AppointmentEditModal>
                <Button variant='danger' className={'mt-5 w-30'}>Delete</Button>
                
            </div>
        </div>
    );
};

export default AppointmentCard;
import { Button } from "@heroui/react";
import React from "react";
import AppointmentEditModal from "./AppointmentEditModal";
import { DeleteAppointmentModal } from "./DeleteAppointmentModal";

const AppointmentCard = ({ appointment }) => {
  const {
    patientName,
    patientContact,
    doctorName,
    specialist,
    date,
    appointmentDay,
    appointmentTime,
  } = appointment;
  console.log(appointment);
  return (
    <div className="max-w-4xl mx-auto border px-5 py-3 rounded-2xl shadow-2xl font-serif flex justify-between items-center">
      <div className="bg-white shadow-md rounded-xl p-6 overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b">
              <td className="py-3 font-semibold">Patient Name</td>
              <td className="py-3 pl-2 text-blue-600 font-serif text-lg">
                {patientName}
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3 font-semibold">Patient Contact</td>
              <td className="py-3 pl-2 text-blue-600 font-serif text-lg">
                {patientContact}
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3 font-semibold">Doctor Name</td>
              <td className="py-3 pl-2 text-blue-600 font-serif text-lg">
                {doctorName}
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3 font-semibold">Specialist</td>
              <td className="py-3 pl-2 text-blue-600 font-serif text-lg">
                {specialist}
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3 font-semibold">Appointment Day</td>
              <td className="py-3 pl-2 text-blue-600 font-serif text-lg">
                {appointmentDay}
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3 font-semibold">Appointment Time</td>
              <td className="py-3 pl-2 text-blue-600 font-serif text-lg">
                {appointmentTime}
              </td>
            </tr>

            <tr>
              <td className="py-3 font-semibold">Booking Date</td>
              <td className="py-3 pl-2 text-blue-600 font-serif text-lg">
                {date}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex gap-4 mt-6 justify-end items-center">
          <AppointmentEditModal
            appointment={appointment}
          ></AppointmentEditModal>
          <DeleteAppointmentModal
            appointment={appointment}
          ></DeleteAppointmentModal>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;

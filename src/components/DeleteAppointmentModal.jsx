"use client";
import {AlertDialog, Button} from "@heroui/react";
import { redirect, useRouter } from "next/navigation";

export function DeleteAppointmentModal({appointment}) {

    const router = useRouter();

    const handleDelete =async()=>{
        const res= await fetch(`http://localhost:5000/appointments/${appointment._id}`, {
            method:"DELETE"
        })
        const data = await res.json();
        if(res.ok){
            redirect('/dashboard/my-appointment')
        }
    }
  return (
    <AlertDialog>
      <Button variant='danger' className={'mt-5 w-30'}>Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Appointment permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>Your Appointment with <strong>{appointment.doctorName}</strong> on <strong>{appointment.appointmentDay} </strong>has been deleted</p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={handleDelete}>
                Delete Appointment
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
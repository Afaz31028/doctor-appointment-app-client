"use client";
import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";
import { redirect} from "next/navigation";
import { toast } from "react-toastify";

export function DeleteAppointmentModal({appointment}) {

    const handleDelete =async()=>{
        const {data: tokenData} = await authClient.token();
        const res= await fetch(`http://localhost:5000/appointments/${appointment._id}`, {
            method:"DELETE",
            headers:{
                authorization: `Bearer ${tokenData?.token}`
            }
        })
        const data = await res.json();
        if(res.ok){
            toast.success("Delete Appointment Successfully",{
                theme: "dark"
            })
            redirect('/dashboard/my-appointment')
        }
        else{
            toast.error("Delete Failed", {
                theme: "dark"
            })
        }
    }
  return (
    <AlertDialog>
      <Button variant='danger' className={'w-30'}>Delete</Button>
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
              <Button slot="close" variant="danger" onClick={handleDelete} >
                Delete Appointment
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
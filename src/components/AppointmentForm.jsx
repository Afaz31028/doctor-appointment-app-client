"use client";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { SelectOptions } from "./SelectOptions";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export function AppointmentForm({ data, setOpenAppointmentModal }) {
  const { _id, name, specialty } = data;
  const router= useRouter();

  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const { data: session } = authClient.useSession();
  const user = session?.user;

  // console.log(data)
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const patientData = Object.fromEntries(formData.entries());
    patientData.availableDay = selectedDay;
    patientData.availableTime = selectedTime;

    // console.log(patientData)
    const appointmentInfo = {
      userId: user?.id,
      userName: user?.name,
      userEmail: user?.email,
      doctorId: _id,
      doctorName: patientData["doctor-name"],
      specialist: patientData.department,
      patientName: patientData.name,
      patientContact: patientData["phone-number"],
      appointmentDay: patientData.availableDay,
      appointmentTime: patientData.availableTime,

      date: new Date().toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };
    // console.log(appointmentInfo);
    const {data: tokenData}= await authClient.token();

    const res = await fetch(
      `${process.env.SERVER_URL}/doctors/${_id}/appointments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(appointmentInfo),
      },
    );
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      toast.success("Doctor Appointment Booked Successfully", {
        theme: "dark",
      });
      setOpenAppointmentModal(false);
      router.refresh();
      setTimeout(() => {
        router.push("/dashboard/my-appointment");
      }, 1000);
    } else {
      toast.error("Doctor Appointment Failed", {
        theme: "dark",
      });
    }
  };

  return (
    <Form className="flex flex-col gap-4 mt-3 pb-3" onSubmit={onSubmit}>
      <TextField isRequired name="name" type="text">
        <Label>Patient Name</Label>
        <Input className={"border border-black"} placeholder="Enter Patient Name" />
      </TextField>
      <TextField isRequired name="phone-number" type="text">
        <Label>Phone Number</Label>
        <Input className={"border border-black"} placeholder="Enter a valid phone number" />
      </TextField>
      <TextField
        isRequired
        name="department"
        type="text"
        defaultValue={specialty}
        isReadOnly={true}
      >
        <Label>Department</Label>
        <Input className={"border border-black"}/>
      </TextField>
      <TextField
        isRequired
        name="doctor-name"
        type="text"
        defaultValue={name}
        isReadOnly={true}
      >
        <Label>Doctor Name</Label>
        <Input className={"border border-black"}/>
      </TextField>
      <SelectOptions
        title="Available Day"
        onSelectionChange={(val) => setSelectedDay(val)}
        data={data}
      ></SelectOptions>
      <SelectOptions
        title="Available Time"
        onSelectionChange={(val) => setSelectedTime(val)}
        data={data}
      ></SelectOptions>
      <div className="flex gap-2 mt-5 justify-center">
        <Button className={'w-50 rounded-2xl'} type="submit">Submit</Button>
      </div>
    </Form>
  );
}

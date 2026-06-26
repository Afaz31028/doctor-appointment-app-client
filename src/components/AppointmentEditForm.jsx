"use client";
import React, { useState } from "react";
import { Button, Form, Input, Label, TextField } from "@heroui/react";
import SelectEditOption from "./SelectEditOption";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AppointmentEditForm = ({ appointment, setOpenEditForm }) => {
  const { _id, patientName, patientContact, doctorName, doctorId, specialist } =
    appointment;
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [selectedDay, setSelectedDay] = useState(
    appointment?.appointmentDay || "",
  );
  const [selectedTime, setSelectedTime] = useState(
    appointment?.appointmentTime || "",
  );
  

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const patientData = Object.fromEntries(formData.entries());
    patientData.availableDay = selectedDay;
    patientData.availableTime = selectedTime;

    // console.log(patientData)
    const appointmentInfo = {
      userId: user?.userId,
      userName: user?.userName,
      userEmail: user?.userEmail,
      doctorId: doctorId,
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
    const { data: tokenData } = await authClient.token();

    const res = await fetch(`${process.env.SERVER_URL}/appointments/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(appointmentInfo),
    });
    const data = await res.json();
    if (res.ok) {
      toast.success("Doctor Appointment Updated Successfully", {
        theme: "dark",
      });
      setOpenEditForm(false);
      router.refresh();
      setTimeout(() => {
        router.push("/dashboard/my-appointment");
      }, 1000);
    } else {
      toast.error("Updated Operation Failed", {
        theme: "dark",
      });
      return;
    }
  };

  return (
    <div>
      <Form className="flex flex-col gap-4 mt-5" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="name"
          type="text"
          defaultValue={patientName}
        >
          <Label>Patient Name</Label>
          <Input
            className={"border border-black"}
            placeholder="Afazur Rahman"
          />
        </TextField>
        <TextField
          isRequired
          name="phone-number"
          type="text"
          defaultValue={patientContact}
        >
          <Label>Phone Number</Label>
          <Input className={"border border-black"} placeholder="01631-112233" />
        </TextField>
        <TextField
          isRequired
          name="department"
          type="text"
          defaultValue={specialist}
          isReadOnly={true}
        >
          <Label>Department</Label>
          <Input className={"border border-black"} />
        </TextField>
        <TextField
          isRequired
          name="doctor-name"
          type="text"
          defaultValue={doctorName}
          isReadOnly={true}
        >
          <Label>Doctor Name</Label>
          <Input className={"border border-black"} />
        </TextField>
        <SelectEditOption
          title="Available Day"
          selectedValue={selectedDay}
          onSelectionChange={setSelectedDay}
          appointment={appointment}
        ></SelectEditOption>
        <SelectEditOption
          title="Available Time"
          selectedValue={selectedTime}
          onSelectionChange={setSelectedTime}
          appointment={appointment}
        ></SelectEditOption>
        <div className="flex gap-2 mt-5 justify-center">
          <Button type="submit" className={"w-50 rounded-2xl"}>
            {/* <Check /> */}
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AppointmentEditForm;

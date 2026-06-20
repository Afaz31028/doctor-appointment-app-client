'use client'
import React, { useState } from 'react';
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import SelectEditOption from './SelectEditOption';
import { authClient } from '@/lib/auth-client';

const AppointmentEditForm = ({appointment}) => {
    const {_id,patientName, patientContact, doctorName,doctorId, specialist, appointmentDay, appointmentTime} = appointment;

     const { data: session } = authClient.useSession() 
    const user= session?.user;

    const [selectedDay, setSelectedDay] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const patientData= Object.fromEntries(formData.entries());
    patientData.availableDay= selectedDay
    patientData.availableTime= selectedTime;

    // console.log(patientData)
    const appointmentInfo={
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
            day: "numeric", month: "long",year: "numeric",
          })
    } 
    // console.log(appointmentInfo);

    const res= await fetch(`http://localhost:5000/appointments/${_id}`, {
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(appointmentInfo)
    })
    const data= await res.json();
  };

    return (
        <div>
            <Form className="flex flex-col gap-4"m onSubmit={onSubmit}>
                  <TextField
                    isRequired
                    name="name"
                    type="text"
                    defaultValue={patientName}
                  >
                    <Label>Patient Name</Label>
                    <Input placeholder="Afazur Rahman" />
                  </TextField>
                  <TextField
                    isRequired
                    name="phone-number"
                    type="text"
                    defaultValue={patientContact}
                  >
                    <Label>Phone Number</Label>
                    <Input placeholder="01631-112233"/>
                  </TextField>
                  <TextField
                    isRequired
                    name="department"
                    type="text"
                    defaultValue={specialist}
                    isReadOnly={true}
                  >
                    <Label>Department</Label>
                    <Input />
                  </TextField>
                  <TextField
                    isRequired
                    name="doctor-name"
                    type="text"
                    defaultValue={doctorName}
                    isReadOnly={true}
                  >
                    <Label>Doctor Name</Label>
                    <Input/>
                  </TextField>
                  <SelectEditOption title="Available Day" onSelectionChange={(val) => setSelectedDay(val)} appointment={appointment}></SelectEditOption>
                  <SelectEditOption title="Available Time" onSelectionChange={(val) => setSelectedTime(val)} appointment={appointment}></SelectEditOption>
                  <div className="flex gap-2">
                    <Button type="submit">
                      {/* <Check /> */}
                      Submit
                    </Button>
                  </div>
                </Form>
        </div>
    );
};

export default AppointmentEditForm;
"use client";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { SelectOptions } from "./SelectOptions";

export function AppointmentForm({data}) {
    const {_id,name,specialty}= data;
    // console.log(data)
  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const doctorData= Object.fromEntries(formData.entries());
    // console.log(data)
    const res= await fetch(`http://localhost:5000/doctors/${_id}/appointments`, {
        method:"POST",
        headers:{
            "Content-Type":"Application/json"
        },
        body: JSON.stringify(doctorData)
    })
    const data= await res.json();
  };

  return (
    <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <TextField
        isRequired
        name="name"
        type="text"
      >
        <Label>Patient Name</Label>
        <Input placeholder="Afazur Rahman" />
      </TextField>
      <TextField
        isRequired
        name="phone-number"
        type="text"
      >
        <Label>Phone Number</Label>
        <Input placeholder="01631-112233"/>
      </TextField>
      <TextField
        isRequired
        name="Department"
        type="text"
        defaultValue={specialty}
      >
        <Label>Department</Label>
        <Input />
      </TextField>
      <TextField
        isRequired
        name="doctor-name"
        type="text"
        defaultValue={name}
      >
        <Label>Doctor Name</Label>
        <Input/>
      </TextField>
      <SelectOptions title="Available Day" data={data}></SelectOptions>
      <SelectOptions title="Available Time" data={data}></SelectOptions>
      <div className="flex gap-2">
        <Button type="submit">
          {/* <Check /> */}
          Submit
        </Button>
      </div>
    </Form>
  );
}
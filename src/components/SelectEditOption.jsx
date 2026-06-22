'use client'
import { authClient } from "@/lib/auth-client";
import { Label, ListBox, Select } from "@heroui/react";
import { useEffect, useState } from "react";
const SelectEditOption = ({title, appointment, onSelectionChange}) => {

    const [availableDays, setAvailableDays] = useState([]);
    const [availability, setAvailability] = useState([]);

    useEffect(() => {
        const fetchDoctor = async () => {

            const {data: tokenData}= await authClient.token();

            const res = await fetch(`http://localhost:5000/doctors/${appointment.doctorId}`, {
                headers:{
                    authorization: `Bearer ${tokenData?.token}`
                }
            });
            const data = await res.json();

            setAvailableDays(data.availableDays || []);
            setAvailability(data.availability || []);
        };

        if (appointment?.doctorId) {
            fetchDoctor();
        }
    }, [appointment?.doctorId]);

    return (
        <div>
            <Select defaultSelectedKeys={appointment.appointmentDay}
 className="w-full" placeholder="Select one" onSelectionChange={(keys) => onSelectionChange?.([...keys].join(""))}>
                        <Label>{title}</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                {title==="Available Day" ? (
                                    availableDays.map((day, index) => (
                                        <ListBox.Item key={index} id={day} textValue={day}>
                                            {day}
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                ))
                                ) : (
                                    availability.map((time, index) => (
                                        <ListBox.Item
                                            key={index}
                                            id={time}
                                            textValue={time}>
                                            {time}
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    ))
                                )}
                            </ListBox>
                        </Select.Popover>
                    </Select>
        </div>
    );
};

export default SelectEditOption;
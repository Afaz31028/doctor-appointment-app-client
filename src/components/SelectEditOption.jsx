"use client";
import { authClient } from "@/lib/auth-client";
import { Label, ListBox, Select } from "@heroui/react";
import { useEffect, useState } from "react";
const SelectEditOption = ({
  title,
  appointment,
  selectedValue,
  onSelectionChange,
}) => {
  const [availableDays, setAvailableDays] = useState([]);
  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    const fetchDoctor = async () => {
        setLoading(true);
      const { data: tokenData } = await authClient.token();      

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/${appointment.doctorId}`,
        {
          headers: {
            authorization: `Bearer ${tokenData?.token}`,
          },
        },
      );
      const data = await res.json();
      setAvailableDays(data.availableDays || []);
      setAvailability(data.availability || []);
      setLoading(false)
    };
    if (appointment?.doctorId) {
      fetchDoctor();
    }
  }, [appointment?.doctorId]);

  return (
    <div>
      <Select
        className="w-full"
        placeholder="Select one"
        selectedKeys={
          selectedValue ? new Set([String(selectedValue)]) : new Set()
        }
        onSelectionChange={(keys) => {
          const selectedKey = Array.from(keys)[0];
          onSelectionChange?.(selectedKey);
        }}
      >
        <Label>{title}</Label>
        <Select.Trigger className={"border border-black"}>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            {title === "Available Day"
              ? availableDays.map((day) => (
                  <ListBox.Item key={String(day)} textValue={String(day)}>
                    {day}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))
              : availability.map((time) => (
                  <ListBox.Item key={String(time)} textValue={String(time)}>
                    {time}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
};

export default SelectEditOption;

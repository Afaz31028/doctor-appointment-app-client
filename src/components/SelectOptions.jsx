import { Label, ListBox, Select } from "@heroui/react";

export function SelectOptions({ title, data, onSelectionChange}) {
    const {availability, availableDays} = data;
    return (
        <Select className="w-full" placeholder="Select one" onSelectionChange={(keys) => onSelectionChange?.([...keys].join(""))}>
            <Label>{title}</Label>
            <Select.Trigger className={"border border-black"}>
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
                                textValue={time}
                            >
                                {time}
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        ))
                    )}
                </ListBox>
            </Select.Popover>
        </Select>
    );
}
"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Modal } from "@heroui/react";
import { Form, Input, Label, TextField } from "@heroui/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export function UpdateProfileModal({ user }) {
  const [open, setOpen] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.updateUser({
      name: userData.name,
      image: userData.image,
    });
    console.log({ data, error });
    if (data) {
      toast.success("Profile Updated Successfully",{
        theme:"dark"
      });
      setOpen(false);
      redirect('/dashboard/profile')
    }
    if (error) {
      toast.error("Update Failed");
      return;
    }
  };
  return (
    <Modal isOpen={open} onOpenChange={setOpen}>
      <Button className={"w-50 px-8 rounded-xl"} onPress={() => setOpen(true)}>Update Your Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-90">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="text-2xl font-bold text-center my-3">
                Update Your Profile
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <Form
                className="flex w-full flex-col gap-4 px-5"
                onSubmit={handleUpdate}
              >
                <TextField name="name" type="text" defaultValue={user?.name}>
                  <Label>User Name</Label>
                  <Input
                    className={"border border-black"}
                    placeholder="Enter Your Name"
                  />
                </TextField>
                <TextField
                  name="email"
                  type="email"
                  defaultValue={user?.email}
                  isReadOnly={true}
                >
                  <Label>Email</Label>
                  <Input className={"border border-black"} />
                </TextField>
                <TextField name="image" type="text" defaultValue={user?.image}>
                  <Label>Image URL</Label>
                  <Input
                    className={"border border-black"}
                    placeholder="Provide A valid Link"
                  />
                </TextField>
                <div className="flex justify-center my-4 ">
                  <Button className={"w-45 rounded-xl"} type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

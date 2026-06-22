import { headers } from "next/headers";
import { auth } from "./auth";

export const getAllDoctorsInfo=async()=>{
    const {token} =await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch('http://localhost:5000/doctors',{
        headers:{
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data;
}
export const getAllDoctorsInfo=async()=>{
    console.log("SERVER_URL =", process.env.SERVER_URL);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`);
    const data = await res.json();
    return data;
}
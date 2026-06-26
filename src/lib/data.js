export const getAllDoctorsInfo=async()=>{

    const res = await fetch(`${process.env.SERVER_URL}/doctors`);
    const data = await res.json();
    return data;
}
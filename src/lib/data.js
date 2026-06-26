export const getAllDoctorsInfo=async()=>{

    // const {token} =await auth.api.getToken({
    //     headers: await headers()
    // })
    // const res = await fetch('http://localhost:5000/doctors',{
    //     headers:{
    //         authorization: `Bearer ${token?.toke}`
    //     }
    // });
    const res = await fetch(`http://${process.env.SERVER_URL}/doctors`);
    const data = await res.json();
    return data;
}
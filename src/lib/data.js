export const getAllDoctorsInfo = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch doctors");
    }

    return await res.json();
  } catch (error) {
    // console.error("Doctor fetch error:", error);
    return [];
  }
};
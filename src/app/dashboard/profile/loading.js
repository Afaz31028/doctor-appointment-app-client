import { HashLoader } from "react-spinners";

export default function Loading() {
  return <div className="flex justify-center items-center my-30">
        <p><HashLoader 
        color={'#1232E5'}
        size={100}
  ></HashLoader></p>
  </div>
}
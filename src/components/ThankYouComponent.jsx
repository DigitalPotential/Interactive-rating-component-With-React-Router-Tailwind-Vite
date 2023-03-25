import { useLocation } from "react-router-dom";

export default function ThankYouComponent() {

    const location = useLocation();
    const newNumber = location.state?.newNumber;


  return (
    <div className="ThankYouComponent flex flex-col items-center p-10 rounded-sm">
      <img className="mb-8" src="./illustration-thank-you.svg" alt="" />
      <p className="selection font-overpass mb-8 text-orange px-4 py-2 rounded-full bg-[#252d37]">You selected {newNumber} out of 5</p>
      <h2 className="text-white font-overpass font-bold text-3xl mb-3 ">Thank you!</h2>
      <p className="text-center font-overpass text-slate-500">
        We appreciate you taking the time to give a rating. If you
        ever need more support, dont hesitate to get in touch!
      </p>
    </div>
  );
}

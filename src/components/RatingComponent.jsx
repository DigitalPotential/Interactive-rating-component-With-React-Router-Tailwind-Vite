import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function RatingComponent() {

  const [newNumber, setNumber] = useState("");
  const navigate = useNavigate();

  const Button = ({number}) => {
      
    return (
      <button
        onClick={() => setNumber(number) }
        className="font-medium font-overpass text-[1.2rem] leading-4 text-slate-200 bg-[#252d37] hover:bg-orange focus:bg-slate-400 w-[3.5rem] h-[3.5rem] rounded-full p-[0.4rem]">
        {number}
      </button>
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/ThankYouComponent", { state: { newNumber } });
  };
  
  return (
    <div className="RatingComponent flex flex-col p-10 rounded-sm">
      <div className="Star-wrapper w-[3.5rem] h-[3.5rem] rounded-full p-[0.5rem] mb-11 bg-[#252d37] flex items-center justify-center">
        <img className="Star w-[1.4rem]" src="/icon-star.svg" alt="Star" />
      </div>
      <h2 className="heading text-white font-overpass font-bold text-3xl mb-4 ">
        How did we do?
      </h2>
      <p className="description text-gray-400 font-medium font-overpass text-[1.1rem] mb-8 ">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating-wrapper mb-8">
        <ul className="rating-list flex flex-row justify-between">
          <li className="rating-number focus:bg-slate-400">
            <Button number={1} />
          </li>
          <li className="rating-number focus:bg-slate-400">
            <Button number={2} />
          </li>
          <li className="rating-number">
            <Button number={3} />
          </li>
          <li className="rating-number">
            <Button number={4} />
          </li>
          <li className="rating-number">
            <Button number={5} />
            
          </li>
        </ul>
      </div>
      <button
        className="submit text-white font-medium w-full font-overpass hover:text-orange hover:bg-white bg-orange py-3 rounded-3xl text-center"
        onClick={handleSubmit}
      >
        SUBMIT
      </button>
    </div>
  );
}
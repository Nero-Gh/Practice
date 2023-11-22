import React from "react";

const Card = () => {
  return (
    <div className="w-full bg-white border bortder-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        src="https://images.pexels.com/photos/16486462/pexels-photo-16486462/free-photo-of-woman-wearing-earmuffs-on-winter-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        className="p-8 rounded-t-lg"
      ></img>
      <span className="px-5 pb-5 dark:text-gray-100 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
    </div>
  );
};

export default Card;

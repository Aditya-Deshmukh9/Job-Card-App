import React from "react";
import dayjs from "dayjs";

const JobCard = (props) => {
  const date1 = dayjs(Date.now());
  const daydiff = date1.diff(props.postedOn, "day"); // 7
  

  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-2xl hover:border-blue-500 hover:translate-y-1">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-lg font-semibold">
            {props.title}- {props.company}
          </h1>
          <p>
            {props.type} &#x2022; {props.experience} &#x2022; {props.location}
          </p>
          <div className="flex items-center gap-2">
            {props.skills.map((skill) => (
              <p
                key={skill}
                className="text-grey-500 py-1 px-2 rounded-md border border-black"
              >
                {skill}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <p className="text-grey-400">Posted {daydiff} days ago</p>
            <a href={props.job_Link}>
              <button className="text-blue-500 border border-blue-500 px-10 py-2 ">
                Apply
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

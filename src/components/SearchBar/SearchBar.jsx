import React, { useState } from "react";

const SearchBar = (props) => {
const [jobCritria, setJobCritria] = useState({
  title: "",
  location: "",
  experience: "",
  type: ""
})

const handleChange = (e) => {
  setJobCritria((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value
  }))
}
// console.log(jobCritria);

const search = async() => {
    await props.fetchJobsCustum(jobCritria)
}

  return (
    <div className="flex gap-4 my-10 justify-center px-10">
      <select onChange={handleChange} name="title" value={jobCritria.title} className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
        <option value="" disabled hidden selected>
          Job Role
        </option>
        <option value="Android Developer">Android Developer</option>
        <option value="frontend Developer">frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Developer Advocate">Developer Advocate</option>
      </select>
      <select onChange={handleChange} name="type" value={jobCritria.type} className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
        <option value="" disabled hidden selected>
          Type
        </option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>
      <select onChange={handleChange} name="location" value={jobCritria.location} className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
        <option value="" disabled hidden selected>
          Location
        </option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select onChange={handleChange} name="experience" value={jobCritria.experience} className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
        <option value="" disabled hidden selected>
          Experience
        </option>
        <option value="Fresher">Fresher</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
      <button onClick={search} className="w-64 bg-blue-600 text-white font-bold py-3 rounded-md">Search</button>
    </div>
  );
};

export default SearchBar;

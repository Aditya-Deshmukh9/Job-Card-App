import { useEffect, useState } from "react";
import "./App.css";
// import jobData from "./JobDummyData";
import Header from "./components/Header/Header";
import JobCard from "./components/JobCard/JobCard";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import { db } from "./firebase.config";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";

function App() {
  const [jobs, setJobs] = useState([]);
  // const [custumSearch, setcustumSearch]

  const fetchJobs = async () => {
    const tempJob = [];
    const jobRef = query(collection(db, "jobs"));
    const q = query(jobRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      const postedOn = job.data().postedOn.toDate();
      tempJob.push({
        ...job.data(),
        id: job.id,
        postedOn: postedOn,
      });
    });
    setJobs(tempJob);
  };

  const fetchJobsCustum = async (jobCriteria) => {
    const tempJob = [];
    const jobRef = query(collection(db, "jobs"));
    const q = query(
      jobRef,
      where("title", "==", jobCriteria.title),
      where("type", "==", jobCriteria.type),
      where("location", "==", jobCriteria.location),
      where("experience", "==", jobCriteria.experience),
      orderBy("postedOn", "desc")
    );
    const req = await getDocs(q);

    req.forEach((job) => {
      const postedOn = job.data().postedOn.toDate();
      tempJob.push({
        ...job.data(),
        id: job.id,
        postedOn: postedOn,
      });
    });
    setJobs(tempJob);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="w-full h-screen bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200">
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustum={fetchJobsCustum} />
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;

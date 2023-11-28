import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import job from "../component/job.json";

interface Job {
  id: number;
  job_title: string;
  company_title: string;
  address: string;
  time: string;
  experience: string;
  salary: string;
  employee: string;
}
function HomePage() {
  const [jobs, setJobs] = useState<Job[] | undefined>(undefined);

  useEffect(() => {
    setJobs(job.jobs);
  }, []);

  return (
    <>
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-2 gap-4">
          {jobs?.map((job: Job) => (
            <section
              className="bg-white flex basis-1/2 px-8 pt-6 pb-8 mb-4 border"
              key={job.id}>
              <div className="flex-auto w-1/12">
                <img src={logo} />
              </div>
              <div className="flex-auto w-4/5">
                <h1 className="font-bold">{job.job_title}</h1>
                <h1 className="font-medium">{job.company_title}</h1>
                <h1 className="font-normal mb-4">{job.address}</h1>
                <h1>Part-Time ({job.time})</h1>
                <h1>Experience ({job.experience})</h1>
                <h1>INR (₹) {job.salary}</h1>
                <h1>{job.employee} employees</h1>
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
                  Apply Now
                </button>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;

// StepForm.tsx

import React, { useState } from "react";

interface StepFormProps {
  fontSize: string;
  fontWeight: string;
  width: string;
  height: string;
}

const StepForm: React.FC<StepFormProps> = ({ width, height }) => {
  const [step, setStep] = useState<number>(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded px-8 pt-6 pb-8 mb-4 max-w-lg">
        {step === 1 && (
          <div style={{ width, height }}>
            <div className="flex justify-between font-bold mb-4">
              <h2>Create a job</h2>
              <h2>Step 1</h2>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Job title
                </label>
                <input
                  type="text"
                  name="Job-title"
                  autoComplete="given-name"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="ex. UX UI Designer"
                />
              </div>
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Company name
                </label>
                <input
                  type="text"
                  name="companyName"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="ex. Google"
                />
              </div>
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Industry
                </label>
                <input
                  type="text"
                  name="industry"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="ex. Information Technology "
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="ex. Chennai"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Remote type
                </label>
                <input
                  type="text"
                  name="remoteType"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="ex. In-office"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div style={{ width, height }}>
            <div className="flex justify-between font-bold mb-4">
              <h2>Create a job</h2>
              <h2>Step 2</h2>
            </div>
            <div className="flex flex-wrap items-end -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Experience
                </label>
                <input
                  type="text"
                  name="minExperience"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Minimum"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6">
                <input
                  type="text"
                  name="maxExperience"
                  placeholder="Maximum"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Salary
                </label>
                <input
                  type="text"
                  name="minSalary"
                  placeholder="Minimum"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6">
                <input
                  type="text"
                  name="maxSalary"
                  placeholder="Maximum"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="w-full  px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Total Employee
                </label>
                <input
                  type="text"
                  name="totalEmployee"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="ex. 100"
                />
              </div>
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Apply type
                </label>
                <div className="flex flex-wrap items-end ">
                  <input
                    type="radio"
                    name="applyType"
                    value="quickApply"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ms-2 me-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Quick apply
                  </label>
                  <input
                    type="radio"
                    name="applyType"
                    value="quickApply"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ms-2 me-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    External apply
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Save
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default StepForm;

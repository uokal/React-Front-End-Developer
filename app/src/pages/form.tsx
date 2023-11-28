import StepForm from "../component/stepform";

function FormPage() {
  const dynamicStyles = {
    fontSize: "base",
    fontWeight: "normal",
    width: "full",
    height: "auto",
  };
  return (
    <>
      {" "}
      <StepForm {...dynamicStyles} />
    </>
  );
}

export default FormPage;

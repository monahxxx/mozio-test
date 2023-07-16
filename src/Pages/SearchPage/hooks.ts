import { FormikHelpers } from "formik";
import { useNavigate, createSearchParams } from "react-router-dom";
import { FormValues } from "../../types/form";

const initialValues: FormValues = {
  origin: "",
  destinations: [""],
  date: "",
  passengers: 0,
};

type SubmitHandler = (
  values: FormValues,
  formikHelpers: FormikHelpers<FormValues>
) => void | Promise<any>;

export const useFormValues = () => {
  const navigate = useNavigate();
  const onSubmit: SubmitHandler = (values) => {
    const searchParams = createSearchParams({
      ...values,
      destinations: values.destinations.join(","),
      passengers: values.passengers.toString(),
    });
    navigate("/results?" + searchParams);
  };

  return {
    initialValues,
    onSubmit,
  };
};

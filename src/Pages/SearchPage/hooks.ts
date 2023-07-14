import { FormikHelpers } from "formik";
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
  const onSubmit: SubmitHandler = (values) => {
    console.log(values);
  };

  return {
    initialValues,
    onSubmit,
  };
};

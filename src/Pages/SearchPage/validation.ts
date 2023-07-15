import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  origin: Yup.string().required("You must choose the city of origin"),
  destinations: Yup.array().of(
    Yup.string().required("You must choose the city of destination")
  ),
  passengers: Yup.number()
    .min(1, "Select passengers")
    .required("Select passengers"),
  date: Yup.string().required("Select date"),
});

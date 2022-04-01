// Here goes the schema for the form
import * as yup from "yup";

const formSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required("Name is required")
    .min(2, "name must be at least 2 characters"),
  size: yup
    .string()
    .trim()
    .required("Size is required"),
  olives: yup
    .boolean(),
  tomatoes: yup
    .boolean(),
  mushrooms: yup
    .boolean(),
  onions: yup
    .boolean(),
  special: yup
    .string()
    .trim()
})

export default formSchema;
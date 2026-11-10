import * as yup from "yup"

export const userSchema=yup.object({
    id: yup.number().required(),
    firstName:yup.string().test(
    "not-empty",
    "First name cannot contain only spaces",
    (value) => value?.trim().length !== 0
  ).required("First name is required").min(3, "First name must be at least 2 characters"),

    lastName:yup.string()
    .test(
    "not-empty",
    "First name cannot contain only spaces",
    (value) => value?.trim().length !== 0
  )
    .required("last name is required").min(3, "Last name must be at least 2 characters"),

    email:yup.string().test(
    "not-empty",
    "First name cannot contain only spaces",
    (value) => value?.trim().length !== 0
  ).required("email is required").email("Enter a valid email address"),

    phone:yup.string().test(
    "not-empty",
    "First name cannot contain only spaces",
    (value) => value?.trim().length !== 0
  ).required("phone number is required").min(10, "Phone number must be at least 10 digits"),

    role:yup.string().required(),
    active:yup.boolean().required()
})
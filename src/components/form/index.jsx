import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MyInput from "../input";
import { Description } from "@mui/icons-material";

const MyForm = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("name is required !")
      .min(3, "must be at least 3 characters long"),
    lastName: yup
      .string()
      .required("last name  is required !")
      .min(3, "must be at least 3 characters long"),
    email: yup
      .string()
      .required("email is required !")
      .email("email is not valid !!"),
    age: yup
      .number()
      .required("age is required !")
      .positive("age must be positive !")
      .typeError("age is required !")
      .max(99, "age must be less than 99 !"),
    description: yup.string().optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      label: "name",
      type: "text",
    },
    {
      id: 2,
      label: "last name",
      name: "lastName",
      type: "text",
    },
    {
      id: 3,
      label: "email address",
      name: "email",
      type: "text",
    },
    {
      id: 4,
      label: "age",
      name: "age",
      type: "number",
    },
    {
      id: 5,
      label: "description",
      name: "description",
      type: "textarea",
    },
  ];

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-[300px] mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="w-full text-2xl font-semibold mb-4">My Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputs.map((feilds) => (
          <MyInput
            key={feilds.id}
            label={feilds.label}
            register={register(feilds.name)}
            error={errors[feilds.name]?.message}
            type={feilds.type}
          />
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;

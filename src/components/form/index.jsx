import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const MyForm = () => {
  const inputs = [
    {
      id: 1,
      name: "name",
      label: "name",
      type: "text",
      error: true,
      message: "",
    },
    {
      id: 2,
      label: "last name",
      name: "lastName",
      error: true,
      message: "",
      type: "text",
    },
    {
      id: 3,
      label: "email address",
      name: "email",
      error: true,
      message: "",
      type: "text",
    },
    {
      id: 4,
      label: "age",
      name: "age",
      error: true,
      message: "",
      type: "number",
    },
    {
      id: 5,
      label: "description",
      name: "description",
      error: true,
      message: "",
      type: "textarea",
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">My Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputs.map((feilds) => (
          <MyInput
            key={feilds.id}
            label={feilds.label}
            name={feilds.name}
            error={feilds.error}
            message={feilds.message}
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

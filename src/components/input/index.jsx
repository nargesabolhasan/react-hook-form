import PropTypes from "prop-types";
import React from "react";

const MyInput = ({ error, message, label, register, type }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        {...register}
        className={`mt-1 block w-full p-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded`}
        type={type}
      />
      {error && <p className="text-red-500 text-xs">{message}</p>}
    </div>
  );
};

MyInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["text", "textarea", "checkbox", "radio", "number"]),
};
export default MyInput;

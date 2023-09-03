import React from "react";

interface UserInputFieldProps {
  name: string;
  value: string;
  onValueChange: (newValue: string) => void;
}
const UserInputField: React.FC<UserInputFieldProps> = ({
  name,
  value,
  onValueChange,
}) => {
  const id = Object.keys({ value }).toString();
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
      />
    </>
  );
};

export default UserInputField;

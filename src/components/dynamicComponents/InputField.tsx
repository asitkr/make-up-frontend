import type { InputFieldProps } from "../../types/inputField.ts";

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder,
  defaultValue,
  className = "",
  register,
  required,
  labelClassName = "",
  parentClassName = "",
  maxLength,
}) => {
  const isCheckbox = type === "checkbox";
  const isPhone =
    (type === "tel" || type === "text") &&
    (label?.toLowerCase().includes("phone") ?? false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    const isPhone =
      (type === "tel" || type === "text") &&
      (label?.toLowerCase().includes("phone") ?? false);

    if (isPhone && maxLength) {
      value = value.replace(/\D/g, "").slice(0, maxLength);
    }

    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    )?.set;

    if (nativeInputValueSetter) {
      nativeInputValueSetter.call(e.target, value);
    }

    const newEvent = new Event("input", { bubbles: true });
    e.target.dispatchEvent(newEvent);
  };


  return (
    <div
      className={`w-full ${isCheckbox ? `flex ${parentClassName}` : `flex flex-col ${parentClassName}`}`}
    >
      {isCheckbox ? (
        <>
          <input
            type="checkbox"
            className={`font-normal ${className}`}
            defaultChecked={!!defaultValue}
            {...register}
            required={required}
            onChange={(e) => {
              register?.onChange?.(e);
            }}
          />
          {label && <label className={`cursor-pointer ${labelClassName}`}>{label}</label>}
        </>
      ) : (
        <>
          {label && (
            <label
              className={`text-sm lg:text-base font-normal text-secondary pb-2 ${labelClassName}`}
            >
              {label}
            </label>
          )}
          <input
            type={type}
            className={`font-normal text-sm lg:text-base ${className}`}
            defaultValue={defaultValue}
            {...register}
            required={required}
            placeholder={placeholder}
            maxLength={maxLength}
            inputMode={isPhone ? "numeric" : undefined}
            onChange={handleChange}
            {...register}
          />
        </>
      )}
    </div>
  );
};

export default InputField;


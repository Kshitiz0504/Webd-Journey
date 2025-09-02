import { Button } from "./Buttons";
import { useRef, useState } from "react";

export function Otp({ number }) {
  const ref = useRef([]);
  const [values, setValues] = useState(Array(number).fill(""));

  const disabled = values.some((v) => v === ""); // button disabled until all filled

  const handleChange = (val, index) => {
    if (/^[0-9]$/.test(val)) {
      const newValues = [...values];
      newValues[index] = val;
      setValues(newValues);

      if (index < number - 1) {
        ref.current[index + 1].focus();
      }
    }
  };

  const handleBackspace = (index) => {
    if (values[index] === "" && index > 0) {
      ref.current[index - 1].focus();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        {Array(number)
          .fill(0)
          .map((_, index) => (
            <input
              key={index}
              ref={(el) => (ref.current[index] = el)}
              type="text"
              maxLength={1}
              value={values[index]}
              className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white text-center text-xl"
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  handleBackspace(index);
                  setValues((prev) => {
                    const newVals = [...prev];
                    newVals[index] = "";
                    return newVals;
                  });
                }
              }}
            />
          ))}
      </div>

      <br />
      <Button disabled={disabled}>Sign up</Button>
    </div>
  );
}

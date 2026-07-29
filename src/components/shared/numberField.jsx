import { Field, NumberInput } from "@chakra-ui/react";
import { useContext } from "react";
import ProtocolContext from "../../contexts/formContext";

export const NumberField = ({
  id,
  label,
  root,
  input,
  fieldRoot,
  fieldLabel,
}) => {
  const {
    state: [data, setData],
  } = useContext(ProtocolContext);

  const value = data[id];

  return (
    <Field.Root id={id} {...fieldRoot}>
      <NumberInput.Root
        type="number"
        variant="flushed"
        value={value}
        onValueChange={(e) => setData((prev) => ({ ...prev, [id]: e.value }))}
        invalid={!value}
        {...root}
      >
        <NumberInput.Input fontSize="8xl" height="fit" {...input} />
        <NumberInput.Control visibility="hidden" />
      </NumberInput.Root>
      <Field.Label textStyle="4xl" {...fieldLabel}>
        {label}
      </Field.Label>
    </Field.Root>
  );
};

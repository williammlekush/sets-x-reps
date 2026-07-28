import { Field, NumberInput } from "@chakra-ui/react";
import { useContext } from "react";
import FormContext from "../../contexts/formContext";

export const NumberField = ({ id, label, root, input }) => {
  const [form, setForm] = useContext(FormContext);

  return (
    <Field.Root id={id}>
      <NumberInput.Root
        type="number"
        variant="flushed"
        value={form[id]}
        onValueChange={(e) => setForm((prev) => ({ ...prev, [id]: e.value }))}
        {...root}
      >
        <NumberInput.Input fontSize="8xl" height="fit" {...input} />
        <NumberInput.Control visibility="hidden" />
      </NumberInput.Root>
      <Field.Label textStyle="4xl">{label}</Field.Label>
    </Field.Root>
  );
};

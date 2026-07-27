import { Field, NumberInput } from "@chakra-ui/react";

export const NumberField = ({ id, value, setValue, label }) => {
  return (
    <Field.Root id={id} flexDirection="column" alignItems="center">
      <NumberInput.Root
        type="number"
        value={value}
        onValueChange={(e) => setValue(e.value)}
        min={0}
        max={999}
        variant="flushed"
      >
        <NumberInput.Input
          placeholder="###"
          fontSize="8xl"
          height="fit"
          maxWidth="3.2ch"
        />
        <NumberInput.Control visibility="hidden" />
      </NumberInput.Root>
      <Field.Label textStyle="4xl">{label}</Field.Label>
    </Field.Root>
  );
};

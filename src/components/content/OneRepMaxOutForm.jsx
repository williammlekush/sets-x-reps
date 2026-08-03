import { Button, Fieldset, Flex } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { LuArrowRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import CalculatorContext from "../../contexts/calculatorContext";
import { ORM_KEY, ROUTE, SHARED_KEY } from "../../util/constants";
import { CopyButton } from "../shared/CopyButton";
import { NumberDisplay } from "../shared/NumberDisplay";
import { NumberField } from "../shared/NumberField";
import { UnitToggle } from "../shared/UnitToggle";
import { X } from "../shared/X";

export const OneRepMaxOutForm = () => {
  const {
    state: [data, setData],
    isValid,
    calculate,
  } = useContext(CalculatorContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!calculate()) {
      navigate(ROUTE.ORM);
    }
  }, []);

  const onValueChangeReps = (e) => {
    const value = e.value;
    setData((prev) => ({ ...prev, [ORM_KEY.REPS]: value }));
    calculate({ [ORM_KEY.REPS]: value });
  };

  const onValueChangeWeight = (e) => {
    const value = e.value;
    setData((prev) => ({ ...prev, [ORM_KEY.WEIGHT]: value }));
    calculate({ [ORM_KEY.WEIGHT]: value });
  };

  const onClickUse = () =>
    navigate(ROUTE.INDEX, {
      state: {
        [SHARED_KEY.ORM]: data[SHARED_KEY.ORM],
        [SHARED_KEY.UNITS]: data[SHARED_KEY.UNITS],
      },
    });

  return (
    <Flex direction="column" gapY={4} minWith="full">
      <Fieldset.Root>
        <Fieldset.Content>
          <Flex
            flexDirection="row"
            alignItems="baseline"
            justifyContent="space-between"
            gapX={2}
          >
            <NumberField
              id={ORM_KEY.REPS}
              root={{
                min: 1,
                max: 99,
                formatOptions: { maximumFractionDigits: 0 },
                onValueChange: onValueChangeReps,
              }}
              input={{
                placeholder: "##",
                maxWidth: "2.2ch",
                fontSize: { base: "3xl", md: "4xl" },
                fontStyle: { base: "2xl", md: "3xl" },
              }}
              fieldRoot={{ width: "unset" }}
            />
            <X fontSize={{ base: "xl", md: "2xl" }} />
            <NumberField
              id={ORM_KEY.WEIGHT}
              label={data[ORM_KEY.UNITS]}
              root={{
                min: 1,
                max: 999,
                formatOptions: { maximumFractionDigits: 0 },
                onValueChange: onValueChangeWeight,
              }}
              input={{
                placeholder: "###",
                maxWidth: "3.2ch",
                fontSize: { base: "3xl", md: "4xl" },
              }}
              fieldRoot={{
                flexDirection: "row",
                alignItems: "baseline",
              }}
              fieldLabel={{
                textStyle: { base: "2xl", md: "3xl" },
              }}
            />
          </Flex>
          <Fieldset.Legend textStyle={{ base: "xl", md: "2xl" }} marginTop={-2}>
            Top Set
          </Fieldset.Legend>
        </Fieldset.Content>
      </Fieldset.Root>
      <NumberDisplay
        label={"One Rep Max"}
        value={data[ORM_KEY.ORM]}
        valueFormat={{ maximumFractionDigits: 0 }}
        endAddon={<UnitToggle />}
      />
      <Flex direction="column" minWidth="full" gapY={4} marginTop={8}>
        <Button
          onClick={onClickUse}
          aria-label="Open the new exercise protocol calculator with this one rep max"
          variant="surface"
          disabled={!isValid}
          size={{ base: "xl", md: "2xl" }}
          fontSize={{ base: "xl", md: "2xl" }}
          minWidth="full"
          round="md"
          colorPalette="cyan"
        >
          Use in Exercise Protocol
          <LuArrowRight style={{ width: "1.5em", height: "1.5em" }} />
        </Button>
        <CopyButton
          value={
            `${parseFloat(data[ORM_KEY.ORM]).toFixed(0)}${data[ORM_KEY.UNITS]}` +
            ` (Basis: ${data[ORM_KEY.REPS]} reps x ${data[ORM_KEY.WEIGHT]}${data[ORM_KEY.UNITS]})`
          }
        />
      </Flex>
    </Flex>
  );
};

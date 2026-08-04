import { Button, Text } from "@chakra-ui/react";
import { LuArrowRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../../../util/constants";
import { Emphasize } from "../shared/Emphasize";
import { Section } from "../shared/Section";
import { Subsection } from "../shared/Subsection";

export const OneRepMaxSection = () => {
  const navigate = useNavigate();

  return (
    <Section
      heading="Calculate Your One Rep Max"
      subsections={[
        <Text>
          Enter the reps and weight from a sub-maximal set to estimate your one
          rep max for an exercise.
        </Text>,
        <Text>The fewer reps, the more accurate the calculation.</Text>,
        <Button
          aria-label="Open the Exercise Protocol generator"
          onClick={() => navigate(ROUTE.ORM)}
          variant="surface"
          rounded="md"
          colorPalette="cyan"
          alignSelf="flex-start"
        >
          Try it out!
          <LuArrowRight style={{ width: "1.25em", height: "1.25em" }} />
        </Button>,
        <Subsection
          heading="Who Says this is Accurate?"
          paragraphs={[
            <Text>S-s-s-science! 🧑‍🔬</Text>,
            <Text>
              Specifically,{" "}
              <Emphasize>formulate from empirical research</Emphasize>. 🔬
            </Text>,
            <Text>And, this is exercise science. The debate is raging.</Text>,
            <Text>Disagree with the formula we chose?</Text>,
            <Text>Future updates will let you tailor your preferences.</Text>,
            <Text>For now, remember science is guestimation.</Text>,
            <Text>
              It's probably the best guestimation on the planet, but it's still
              guestimation.
            </Text>,
            <Emphasize>Trust your body while you train.</Emphasize>,
            <Text>Especially the biceps. 💪 They know best.</Text>,
          ]}
        />,
      ]}
    />
  );
};

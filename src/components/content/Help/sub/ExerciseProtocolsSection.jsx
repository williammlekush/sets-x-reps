import { Button, Text } from "@chakra-ui/react";
import { LuArrowRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../util/constants";
import { Emphasize } from "../shared/Emphasize";
import { Section } from "../shared/Section";
import { Subsection } from "../shared/Subsection";

export const ExerciseProtocolsSection = () => {
  const navigate = useNavigate();

  return (
    <Section
      heading="Generate Exercise Protocols"
      subsections={[
        <Text>
          Generate safe and effective{" "}
          <Emphasize>sets x reps x weight</Emphasize> protocols using the
          Exercise Protocol Calculator.
        </Text>,
        <Text>
          Fill out your <Emphasize>one rep max</Emphasize>, desired{" "}
          <Emphasize>relative intensity</Emphasize>, and desired number of{" "}
          <Emphasize>reps</Emphasize> for each <Emphasize>set</Emphasize>.
        </Text>,
        <Text>
          Let the calculator cook up a protocol using Prilipen's chart and some
          intensity translation magic.
        </Text>,
        <Text>Save the results or copy them into a workout tracker!</Text>,
        <Button
          aria-label="Open the Exercise Protocol generator"
          onClick={() => navigate(ROUTE.INDEX)}
          variant="surface"
          rounded="md"
          colorPalette="cyan"
          alignSelf="flex-start"
        >
          Try it out!
          <LuArrowRight style={{ width: "1.25em", height: "1.25em" }} />
        </Button>,
        <Subsection
          heading="Relative Intensity"
          paragraphs={[
            <Text>How difficult do you want these sets to feel? 💪</Text>,
            <Text>
              Like you're lifting 60% 🪶 of your one rep max? 80%? 🥵 95%? 🙈
            </Text>,
            <Text>
              E.g.{" "}
              <Emphasize>
                Lifting to failure is 100% relative intensity
              </Emphasize>{" "}
              for the reps and weight used.
            </Text>,
            <Text>
              More reps in the tank? That's a lower relative intensity.
            </Text>,
          ]}
        />,
        <Subsection
          heading="One Rep Max"
          paragraphs={[
            <Text>How much can you lift for one rep? </Text>,
            <Text>You decide what "lift" means.</Text>,
            <Text>Some say good form matters. 💅</Text>,
            <Text>Others say good form doesn't exist. 😈</Text>,
            <Text>Life's a spectrum. Have fun. Don't hurt yourself.</Text>,
            <Emphasize>Don't know your one rep max? Keep reading.🙂</Emphasize>,
          ]}
        />,
      ]}
    />
  );
};

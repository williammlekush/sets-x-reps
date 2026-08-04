import { Center, Heading, Stack, Text } from "@chakra-ui/react";

export const Fallback = () => {
  return (
    <Center
      minHeight="100vh"
      marginY={{ base: 8, md: 0 }}
      marginX={{ base: 16, md: 0 }}
    >
      <Stack direction="column" alignItems="flex-start">
        <Heading>404 - Not Found</Heading>
        <Text>Oh.</Text>
        <Text>Hi!</Text>
        <Text>This is awkward...</Text>
        <Text>That page doesn't exist.</Text>
        <Text>Maybe... try again?</Text>
        <Text>Or... don't?</Text>
        <Text>I mean, try another page.</Text>
        <Text>Or... don't.</Text>
        <Text>Just, don't come back here.</Text>
        <Text>I mean, well... you could.</Text>
        <Text>But, there won't be anything.</Text>
        <Text>Or, I guess there could be... one day.</Text>
        <Text>
          But, that would require the alignment of so many small chances.
        </Text>
        <Text>
          You'd have to guess a route we don't even know we're going to
          implement, yet.
        </Text>
        <Text>Wait... no... are you an oracle?</Text>
        <Text>If so, we have some seriously important questions for you.</Text>
        <Text>First off, what's 7 * 6?</Text>
        <Text>No? Too obvious.</Text>
        <Text>Okay.</Text>
        <Text>Fine.</Text>
        <Text>I'll leave you alone, now.</Text>
        <Text>Bu-bye!</Text>
      </Stack>
    </Center>
  );
};

import { Flex, Text } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

export default function Home() {
  return <Flex justify='center' mt='30vh' gap='sm'>
    <IconArrowLeft stroke={1.25} className="arrow"/>
    <Text fz={20}>Выберите пользователя</Text>
  </Flex>
}

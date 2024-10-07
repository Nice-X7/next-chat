import { Flex, Text } from "@mantine/core";

export default function select() {
    return (
        <Flex align='center' mt='18%' ml='40%'>
            <svg xmlns="http://www.w3.org/2000/svg" width={54} height={44} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M5 12l6 6" />
                <path d="M5 12l6 -6" />
            </svg>
            <Text fz={27}>Select user</Text>
        </Flex>
    )
}
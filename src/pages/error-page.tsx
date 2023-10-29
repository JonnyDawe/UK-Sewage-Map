import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import { useRouteError } from "react-router-dom";
import { Em } from "../components/common/Text";

interface RouteError {
    statusText?: string;
    message?: string;
}

export default function ErrorPage() {
    const error: RouteError = useRouteError() as RouteError;
    console.error(error);

    return (
        <Flex direction={"column"} justify={"center"} height={"100%"}>
            <Container grow={"0"}>
                <Flex direction={"column"} align={"center"}>
                    <Heading size={"8"}>💩 Oops!</Heading>
                    <Text size={"5"}>Sorry, an unexpected error has occurred.</Text>
                    <Text>
                        <Em>{error?.statusText || error?.message}</Em>
                    </Text>
                </Flex>
            </Container>
        </Flex>
    );
}

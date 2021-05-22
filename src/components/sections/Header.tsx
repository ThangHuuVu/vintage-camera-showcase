import { BoxProps, Flex, Link } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import React from "react";

interface ItemProps extends BoxProps {
  name: string;
  href: string;
}
function Item({ name, href, ...rest }: ItemProps): JSX.Element {
  return (
    <NextLink href={href}>
      <Link>
        <Flex
          width="100px"
          align="center"
          justify="center"
          height={10}
          {...rest}
        >
          <Text fontSize="lg" fontWeight="bold">
            {name}
          </Text>
        </Flex>
      </Link>
    </NextLink>
  );
}
const ThemeToggle = dynamic(() => import("@/components/ThemeToggle"), {
  ssr: false,
});

export default function Header(): JSX.Element {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={10}
    >
      <Flex float="left" align="center" justify="center">
        <Item name="Logo" href="/" />
      </Flex>
      <Flex float="right">
        <Item name="Discover" href="/discover" />
        <Item name="About" href="/about" />
        <ThemeToggle />
      </Flex>
    </Flex>
  );
}

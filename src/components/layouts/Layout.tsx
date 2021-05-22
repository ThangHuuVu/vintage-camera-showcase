import Header from "@/components/sections/Header";
import { Flex, FlexProps } from "@chakra-ui/layout";

export default function Layout({ children, ...rest }: FlexProps): JSX.Element {
  return (
    <Flex direction="column" align="center" {...rest}>
      <Header />
      {children}
    </Flex>
  );
}

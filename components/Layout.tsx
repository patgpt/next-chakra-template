import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

// Add Chakra UI
import {
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import ThemeToggle from "./theme-toggle";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Home" }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* Header */}
      <Box as="header" bg={useColorModeValue("teal.500", "teal.200")} p={4}>
        <nav>
          <Link href="/">Home</Link>
          {/* other links */}
        </nav>
        <ThemeToggle />
      </Box>

      {/* Hero section */}
      <section className="hero">
        <Box maxW="container" mx="auto" textAlign="center" pt={16} pb={8}>
          <Heading as="h1">{title}</Heading>
          <Text mt={4}>Your catchphrase or brief description</Text>
          <Button colorScheme="teal" size="lg" mt={8}>
            Get Started
          </Button>
        </Box>
      </section>

      {/* Main content */}
      <Box maxW="container" mx="auto" px={5} py={8}>
        {children}
      </Box>

      {/* Footer */}
      <Box as="footer" bg={useColorModeValue("gray.100", "gray.900")} py={8}>
        <Text textAlign="center">Footer Content</Text>
      </Box>
    </div>
  );
};

export default Layout;

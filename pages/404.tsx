"use client";
import {
  Col,
  Container,
  Grid,
  Image,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import Head from "next/head";

import { useRouter } from "next/router";
export default function Custom404() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Page Not Found | Jaspreet Singh</title>
        <meta name='title' content='Page Not Found | Jaspreet Singh' />

        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Container
        css={{
          background: "$blue",
          display: "block",
          maxWidth: 1700,
          margin: "auto",
          marginTop: 30,
          "@media (max-width: 550px)": {
            padding: 0,
            margin: 0,
          },
        }}
        fluid>
     
      </Container>
    </>
  );
}

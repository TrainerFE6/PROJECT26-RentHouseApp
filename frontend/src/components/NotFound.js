// 404Page.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  color: #333;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 6rem;
  margin: 0;
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  margin: 20px 0;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  margin: 20px 0;
  max-width: 600px;
`;

const Button = styled(motion.a)`
  padding: 10px 20px;
  margin-top: 30px;
  font-size: 1.2rem;
  color: #fff;
  background: #3498db;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: #2980b9;
  }
`;

const NotFoundPage = () => {
  return (
    <Container>
      <Title
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </Title>
      <Subtitle
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Halaman Tidak Ditemukan
      </Subtitle>
      <Description
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Maaf, halaman yang Anda cari tidak ada. Jika menurut Anda ada sesuatu
        yang rusak, laporkan masalahnya.
      </Description>
      <Button
        href="/"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;

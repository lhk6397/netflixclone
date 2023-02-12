import Head from "next/head";
import Button from "@mui/material/Button";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Header from "@components/Header";
import Features from "@components/Features";
import FAQ from "@components/FAQ";
import Footer from "@components/Footer";
import LoginModal from "@components/LoginModal";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header openModal={() => setOpen(true)} />
      <Features />
      <FAQ />
      <Footer />
      <LoginModal open={open} closeModal={() => setOpen(false)} />
    </>
  );
}

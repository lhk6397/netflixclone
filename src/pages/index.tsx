import TopImage from "@components/home/TopImage";
import Features from "@components/home/Features";
import FAQ from "@components/home/FAQ";
import Footer from "@components/global/Footer";
import LoginModal from "@components/LoginModal";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TopImage openModal={() => setOpen(true)} />
      <Features />
      <FAQ />
      <Footer />
      <LoginModal open={open} closeModal={() => setOpen(false)} />
    </>
  );
}

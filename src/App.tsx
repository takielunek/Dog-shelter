import Navbar from "@/section/navbar";
import Home from "@/section/home";
import Fundraising from "@/section/fundraising";
import AboutAdoption from "@/section/aboutAdoption";
import Adoption from "@/section/adoption";
import Contact from "@/section/contact";
import Footer from "@/section/footer";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Fundraising setSelectedPage={setSelectedPage} />
      <AboutAdoption setSelectedPage={setSelectedPage} />
      <Adoption setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
      <Footer />
    </>
  );
}

export default App;

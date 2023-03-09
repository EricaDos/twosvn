import Navbar from '../../../components/navbar/Navbar';
import Banner from '../../../components/banner/Banner';
import Sponsors from '../../../components/sponsors/Sponsors';
import Footer from '../../../components/footer/Footer';
import Service from '../../../components/services/Services';
import Breakpoint from '../../../components/services/Breakpoint';
import Projects from '../../../components/projects/Projects';
import Contact from '../../../components/footer/Contact';
const Main = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Sponsors />
      <Service />
      <Breakpoint />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Main;

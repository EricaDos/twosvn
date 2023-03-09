import { Container } from 'react-bootstrap';
import SponsorF1 from '../../assets/images/f1.png';
import SponsorBG from '../../assets/images/britishgas.png';
import SponsorEJR from '../../assets/images/ejr.png';
import SponsorTT from '../../assets/images/tt.png';
import SponsorDSC from '../../assets/images/dsc.png';
import SponsorTE from '../../assets/images/te.svg';
import SponsorRP from '../../assets/images/rp.png';
import SponsorFE from '../../assets/images/fe.svg';
import './Sponsors.scss';
function Sponsors() {
  return (
    <>
      <Container id="sponsors">
        <div className="sponsors-bx ">
          <p>PROUD TO WORK WITH</p>
          <div className="row" id="sponsors">
            <img alt="f1-sponsor" src={SponsorF1} />
            <img alt="bg-sponsor" src={SponsorBG} />
            <img alt="ejr-sponsor" id="small" src={SponsorEJR} />
            <img alt="tt-sponsor" id="small" src={SponsorTT} />
            <img alt="dsc-sponsor" id="small" src={SponsorDSC} />
            <img alt="te-sponsor" id="small" src={SponsorTE} />
            <img alt="rp-sponsor" id="smaller" src={SponsorRP} />
            <img alt="fe-sponsor" src={SponsorFE} />
          </div>
        </div>
      </Container>
    </>
  );
}
export default Sponsors;

import TrackVisibility from 'react-on-screen';
import logo from '../../assets/images/TWOSVN-1.png';
import './Service.scss';
function Breakpoint() {
  return (
    <>
      <div className="service-breakpoint">
        <div className="sponsors-bx">
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                <img src={logo} alt="Header Img" />
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>
    </>
  );
}
export default Breakpoint;

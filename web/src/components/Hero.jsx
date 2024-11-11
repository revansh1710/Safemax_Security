import Section from "./Section";
import curve from "../assets/hero/curve.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/consultation-form')
  }
  return (
    <Section
      className="pt-[12rem] -mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="h1 mb-6">
            Securing Your Digital World with Tailored VAPT Solutions.
            <span className="inline-block relative">
              SafeMax{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            {" "}
            Our commitment to precision, proactive threat hunting, and adaptive
            security measures has earned us the trust of over 50 clients,
            including 22 international organizations across diverse industries.
          </p>
          <Button onClick={handleClick}>Check Your consultation Status</Button>
        </div>
      </div>

    </Section>
  );
};

export default Hero;

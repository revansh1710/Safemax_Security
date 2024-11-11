import Section from "./Section";

const AboutUs = () => {
  return (
    <Section id="about-us" className="py-16 bg-n-8 text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
          About SafeMax Security
        </h2>

        {/* Section Description */}
        <p className="max-w-3xl mx-auto text-center text-sm sm:text-base md:text-lg text-n-2 mb-12">
          Established in 2020, SafeMax Security has been at the forefront of cybersecurity innovation, offering comprehensive and tailored Vulnerability Assessment & Penetration Testing (VAPT) services to secure the digital assets of businesses worldwide.
        </p>

        {/* Key Highlights or Core Values */}
        <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-16 text-center">
          {/* Our Mission */}
          <div className="flex-1 mb-8 md:mb-0 p-6 bg-black rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-sm sm:text-base text-n-2">
              By the end of 2023, SafeMax Security was evaluated at 75 million dollars, reflecting our proven approach to cybersecurity and client-centric ethos. With our planned expansions and new technological integrations, we aim to exceed a 200-million-dollar evaluation in 2024.
            </p>
          </div>

          {/* Our Vision */}
          <div className="flex-1 mb-8 md:mb-0 p-6 bg-black rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-sm sm:text-base text-n-2">
              From identifying and remediating security vulnerabilities to delivering continuous risk assessments, SafeMax Security focuses on building resilient digital infrastructures that safeguard mission-critical systems and sensitive data.
            </p>
          </div>

          {/* Our Commitment */}
          <div className="flex-1 p-6 bg-black rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
            <p className="text-sm sm:text-base text-n-2">
              Our commitment to precision, proactive threat hunting, and adaptive security measures has earned us the trust of over 50 clients, including 22 international organizations across diverse industries.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;

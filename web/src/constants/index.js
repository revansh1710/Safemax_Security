import {
    Penetration,
    Threat,
    Vulnerability,
    hero_background,
    Testimonial1,
    Testimonial2,
    Testimonial3,
    Linkedin
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "About Us",
      url: "#about-us",
    },
    {
      id: "1",
      title: "Services",
      url: "#Services",
    },
    {
      id: "2",
      title: "Why Choose Us",
      url: "#why-choose-us",
    },
    {
      id: "3",
      title: "Testimonials",
      url: "#Testimonoials",
    },
    {
      id: "4",
      title: "Consult Us",
      url: "#Consult",
    },
  ]; 
 export const servicesData = [
  {
    id: 0,
    title: "Vulnerability Assessment",
    text: ["A vulnerability assessment is a systematic review of security weaknesses in an information system. It evaluates if the system is susceptible to any known vulnerabilities, assigns severity levels to those vulnerabilities, and recommends remediation or mitigation, if and whenever needed."],
    images:Vulnerability
  },
  {
    id: 1,
    title: "Penetration Testing",
    text:["Penetration testing (or pen testing) is a security exercise where a cyber-security expert attempts to find and exploit vulnerabilities in a computer system. The purpose of this simulated attack is to identify any weak spots in a system's defenses which attackers could take advantage of."],
    images:Penetration
  },
  {
    id: 2,
    title: "Threat Intelligence",
    text: ["Threat intelligence—also called cyberthreat intelligence (CTI) or threat intel—is detailed, actionable threat information for preventing and fighting cybersecurity threats targeting an organization. "],
    images: Threat
  },
];
export const chooseUs = [
  {
    id: 0,
    title: "Comprehensive Threat Protection",
    text: [
      "SafeMax Security offers end-to-end protection, leveraging advanced technology and continuous monitoring to defend against a wide range of cyber threats. With real-time analysis and early detection, we ensure that your business stays secure from the latest security vulnerabilities and attacks."
    ],
    images:hero_background
  },
  {
    id: 1,
    title: "Expertise in Vulnerability Assessment & Remediation",
    text: ["SafeMax Security employs industry-leading experts to conduct thorough vulnerability assessments, identifying potential risks and weaknesses within your systems. Our tailored remediation plans ensure that these vulnerabilities are addressed promptly, reducing your exposure to threats and ensuring optimal security measures are in place."],
    images:hero_background
  },
  {
    id: 2,
    title: "24/7 Monitoring and Support",
    text: ["At SafeMax Security, we provide round-the-clock monitoring to ensure your systems are always protected. Our dedicated security experts offer ongoing support, quickly responding to incidents and minimizing downtime. Whether it's a potential breach or a minor threat, we are there to safeguard your digital assets 24/7."],
    images:hero_background
  }
];
export const Testimonials = [
  {
    id: 0,
    name: "Kaushik Patil",
    text: [
      "As a small business owner, I was constantly worried about cyber threats. Thanks to Safemax Security, I now have peace of mind knowing that my data is secure. Their team is incredibly knowledgeable and responsive, always going above and beyond to address our concerns. I highly recommend their services to anyone looking to protect their digital assets!"
    ],
    images:Testimonial1
  },
  {
    id: 1,
    name: "Revansh Biradar",
    text: ["Working with Safemax Security has been a game-changer for our organization. Their comprehensive security solutions have significantly improved our defense against cyberattacks. The detailed reports and proactive measures they provide make us feel well-prepared for any potential threats. Their professionalism and dedication are unmatched in the industry."],
    images:Testimonial2
  },
  {
    id: 2,
    name: "Ellie",
    text: ["In the ever-evolving landscape of cyber threats, Safemax Security has been our trusted partner. Their expertise and cutting-edge technology have fortified our security infrastructure, ensuring that our sensitive information remains protected. Their customer service is exceptional, always providing timely and effective support. We couldn’t ask for a better cybersecurity partner."],
    images:Testimonial3
  }
];
  
  export const socials = [
    {
      id: "0",
      title: "Linkedin",
      iconUrl: Linkedin,
      url: "https://www.linkedin.com/company/safemax-security/",
    },
  ];
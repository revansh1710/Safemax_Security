import Section from "./Section";
import Heading from "./Heading";
import { servicesData } from "../constants";

const Services = () => {
  return (
    <Section id="Services">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl mb-10 text-center"
          title="Focused on Security, Driven by Trust."
        />
        <div className="flex flex-wrap gap-8 justify-center">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className="group w-full sm:w-[20rem] p-6 rounded-lg bg-white shadow-lg relative overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${item.images})`,
                }}
              ></div>
              <div className="relative z-10 bg-white bg-opacity-90 p-4 rounded-md h-full flex flex-col justify-center text-black group-hover:bg-opacity-75">
                <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
                <p className="text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;

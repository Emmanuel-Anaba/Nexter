/* eslint-disable react/no-unknown-property */
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import svg from "./assets/img/sprite.svg";

const App = () => {
  const features = [
    {
      icon: "icon-global",
      h: "World's best luxury homes",
      p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.",
    },
    {
      icon: "icon-trophy",
      h: "Only the best properties",
      p: "Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.",
    },
    {
      icon: "icon-map-pin",
      h: "All homes in in top locations",
      p: "Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.",
    },
    {
      icon: "icon-key",
      h: "New home in one week",
      p: "Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: "icon-presentation",
      h: "Top 1% realtors",
      p: "Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.",
    },
    {
      icon: "icon-lock",
      h: "Secure payments on nexter",
      p: "Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.",
    },
  ];

  return (
    <>
      <Header />
      <Section className="grid w-[95%] lg:w-5/6 mx-auto py-20 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {features.map(({ icon, h, p }) => (
          <div key={h} className="grid grid-flow-col gap-4 my-auto">
            <svg className="icon feature-icon">
              <use href={`${svg}#${icon}`}></use>
            </svg>
            <div className="grid gap-1">
              <p className="text-lg text-[#54483a]">{h}</p>
              <p className="text-[#6d5d4b]">{p}</p>
            </div>
          </div>
        ))}
      </Section>
      <Footer />
    </>
  );
};

export default App;

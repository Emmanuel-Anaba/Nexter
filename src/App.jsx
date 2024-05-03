/* eslint-disable react/no-unknown-property */
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import svg from "./assets/img/sprite.svg";
import story1 from "./assets/img/story-1.jpeg";
import story2 from "./assets/img/story-2.jpeg";
import storybg from "./assets/img/back.jpg";

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
      <Section className="grid w-[90%] lg:w-5/6 mx-auto py-20 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
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
      <Section className="grid md:grid-cols-2">
        <div
          className="relative p-12 md:p-20 bg-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(rgba(198, 153, 99, 0.5), rgba(198, 153, 99, 0.5)), url(${storybg})`,
          }}>
          <img className="story-img -translate-x-9 md:translate-x-0" src={story1} alt="" />
          <img
            className="story-img absolute h-[40%] w-[50%] md:top-[70%] top-1/2 -translate-y-1/2 md:-right-2 right-3 md:translate-x-[10%]"
            src={story2}
            alt=""
          />
        </div>
        <div className="bg-[#f9f7f6]">
          <p className="text-[#54483a]">“The best decision of our lives”</p>
          <p className="text-[#6d5d4b]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
            harum volupta!
          </p>
          <a href="#" className="btn mr-auto">
            FIND YOUR OWN HOME
          </a>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default App;

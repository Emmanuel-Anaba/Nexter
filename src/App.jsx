/* eslint-disable react/no-unknown-property */
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import svg from "./assets/img/sprite.svg";
import story1 from "./assets/img/story-1.jpeg";
import story2 from "./assets/img/story-2.jpeg";
import storybg from "./assets/img/back.jpg";
import home1 from "./assets/img/house-1.jpeg";
import home2 from "./assets/img/house-2.jpeg";
import home3 from "./assets/img/house-3.jpeg";
import home4 from "./assets/img/house-4.jpeg";
import home5 from "./assets/img/house-5.jpeg";
import home6 from "./assets/img/house-6.jpeg";

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

  const homes = [
    {
      img: home1,
      name: "Beautiful Familiy House",
      location: "USA",
      rooms: 5,
      area: 325,
      price: 1200000,
    },
    {
      img: home2,
      name: "Modern Glass Villa",
      location: "Canada",
      rooms: 6,
      area: 450,
      price: 2750000,
    },
    {
      img: home3,
      name: "Cozy Country House",
      location: "UK",
      rooms: 4,
      area: 250,
      price: 850000,
    },
    {
      img: home4,
      name: "Large Rustical Villa",
      location: "Portugal",
      rooms: 6,
      area: 480,
      price: 1950000,
    },
    {
      img: home5,
      name: "Majestic Palace House",
      location: "Germany",
      rooms: 18,
      area: 4230,
      price: 9500000,
    },
    {
      img: home6,
      name: "Modern Familiy Apartment",
      location: "Italy",
      rooms: 3,
      area: 180,
      price: 600000,
    },
  ];

  return (
    <>
      <Header />
      <Section className="grid w-[90%] lg:w-5/6 mx-auto py-20 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {features.map(({ icon, h, p }) => (
          <div key={h} className="grid grid-flow-col gap-4 mb-auto">
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
      <Section className="flex flex-col-reverse md:flex-row">
        <div
          className="relative p-12 lg:p-20 bg-center bg-cover w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(198, 153, 99, 0.5), rgba(198, 153, 99, 0.5)), url(${storybg})`,
          }}>
          <img
            className="story-img -translate-x-9 md:translate-x-0"
            src={story1}
          />
          <img
            className="story-img absolute h-[40%] w-[50%] md:top-[70%] top-1/2 -translate-y-1/2 md:-right-2 right-3 md:translate-x-[10%]"
            src={story2}
          />
        </div>
        <div className="bg-[#f9f7f6] w-full grid gap-8 lg:gap-0 p-12 lg:p-20 place-content-evenly">
          <p className="text-[#54483a] text-4xl italic">
            “The best decision of our lives”
          </p>
          <p className="text-[#6d5d4b]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
            harum volupta!
          </p>
          <a href="#" className="btn mr-auto rounded">
            FIND YOUR OWN HOME
          </a>
        </div>
      </Section>
      <Section className="grid w-[90%] lg:w-5/6 mx-auto py-20 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {homes.map(({ img, name, location, rooms, area, price }, i) => (
          <div
            key={i}
            className="card">
            <svg className="icon absolute top-4 right-4">
              <use href={`${svg}#icon-heart-full`}></use>
            </svg>
            <img src={img} alt={name} />
            <div className="grid grid-cols-2 p-8 pt-12 gap-8 text-[#6d5d4b] relative text-sm">
              <div className="bg-[#101d2c] text-base text-white py-3 px-7 absolute left-1/2 -translate-x-1/2 w-[70%] -translate-y-[50%] text-center rounded">
                {name}
              </div>
              <div className="flex gap-2">
                <svg className="icon">
                  <use href={`${svg}#icon-map-pin`}></use>
                </svg>
                <p>{location}</p>
              </div>
              <div className="flex gap-2">
                <svg className="icon">
                  <use href={`${svg}#icon-profile-male`}></use>
                </svg>
                <p>{rooms} rooms</p>
              </div>
              <div className="flex gap-2">
                <svg className="icon">
                  <use href={`${svg}#icon-expand`}></use>
                </svg>
                <p>
                  {area} m<sup>2</sup>
                </p>
              </div>
              <div className="flex gap-2">
                <svg className="icon">
                  <use href={`${svg}#icon-key`}></use>
                </svg>
                <p>${price}</p>
              </div>
            </div>
            <button className="btn w-full">CONTACT REALTOR</button>
          </div>
        ))}
      </Section>
      <Footer />
    </>
  );
};

export default App;

import img from "../assets/img/hero.webp";
import realtor1 from "../assets/img/realtor-1.webp";
import realtor2 from "../assets/img/realtor-2.webp";
import realtor3 from "../assets/img/realtor-3.webp";
import logo from "../assets/img/logo.webp";
import bbc from "../assets/img/logo-bbc.webp";
import forbes from "../assets/img/logo-forbes.webp";
import techcrunch from "../assets/img/logo-techcrunch.webp";
import bi from "../assets/img/logo-bi.webp";

const Header = () => {
  const realtors = [
    {
      img: realtor1,
      name: "Erik Feinman",
      sold: 245,
    },
    {
      img: realtor2,
      name: "Kim Brown",
      sold: 212,
    },
    {
      img: realtor3,
      name: "Toby Ramsey",
      sold: 198,
    },
  ];

  const logos = [
    {
      img: bbc,
      alt: "BBC",
    },
    {
      img: forbes,
      alt: "Forbes",
    },
    {
      img: techcrunch,
      alt: "Tech Crunch",
    },
    {
      img: bi,
      alt: "Business Insider",
    },
  ];

  return (
    <header className="md:h-[90svh] grid md:grid-cols-10">
      <div
        className="h-svh md:h-full md:col-span-7 lg:col-span-8 bg-cover bg-center flex flex-col justify-between py-10 px-4 md:px-6 lg:px-12"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 29, 44, 0.93), rgba(16, 29, 44, 0.93)), url(${img})`,
        }}>
        <img className="h-8 mx-auto" src={logo} alt="" />
        <div className="grid gap-4">
          <p className="heading">YOUR OWN HOME:</p>
          <p className="text-5xl">The ultimate personal freedom</p>
          <a href="#" className="btn mr-auto rounded">
            VIEW OUR PROPERTIES
          </a>
        </div>
        <div className="grid gap-4">
          <p className="seen">Seen On</p>
          <div className="logos">
            {logos.map(({ img, alt }, i) => (
              <img className="h-4" key={i} src={img} alt={`${alt}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#101d2c] md:col-span-3 lg:col-span-2 p-4 grid gap-6 place-items-center place-content-center">
        <p className="heading">TOP 3 REALTORS</p>
        {realtors.map(({ img, name, sold }, i) => (
          <div key={i} className="realtor">
            <img src={img} alt={`${name} - Realtor ${i + 1}`} />
            <div>
              <p>{name}</p>
              <p className="text-[10px] text-[#aaa]">
                {sold} HOUSE{sold > 1 && "S"} SOLD
              </p>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;

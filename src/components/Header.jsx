import img from "../assets/img/hero.jpeg";
import realtor1 from "../assets/img/realtor-1.jpeg";
import realtor2 from "../assets/img/realtor-2.jpeg";
import realtor3 from "../assets/img/realtor-3.jpeg";

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

  return (
    <header className="md:h-[90svh] grid md:grid-cols-10">
      <div
        className="h-svh md:h-full md:col-span-8 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 29, 44, 0.93), rgba(16, 29, 44, 0.93)), url(${img})`,
        }}></div>
      <div className="bg-[#101d2c] md:col-span-2 p-4 grid place-items-center">
        <p className="heading">TOP 3 REALTORS</p>
        {realtors.map(({ img, name, sold }, i) => (
          <div key={i} className="realtor">
            <img src={img} alt="" />
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

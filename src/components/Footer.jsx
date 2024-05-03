const Footer = () => {
  const links = [
    "Find your dream home",
    "Request proposal",
    "Download home planner",
    "Contact Us",
    "Submit your property",
    "Come work with us",
  ];
  return (
    <footer className="bg-[#101d2c] py-20">
      <div className="w-[90%] lg:w-5/6 mx-auto grid md:grid-cols-6 gap-y-16 text-sm">
        {links.map((item, i) => (
          <a
            key={i}
            href="#"
            className="uppercase hover:bg-[#ffffff0d] hover:-translate-y-1 text-center grid place-items-center py-2 lg:px-6">
            {item}
          </a>
        ))}
        <p className="text-center col-span-6 text-[#aaa]">
          © Copyright {new Date().getFullYear()}. Built by{" "}
          <a
            className="text-[#c69963] hover:underline"
            href="https://emmanuel-anaba.vercel.app">
            Emmanuel Anaba
          </a>{" "}
          as a practice for advancing his styling skills. Design Credit to {}
          <a className="text-[#c69963] hover:underline" href="#">
            Jonas Schmedtmann.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

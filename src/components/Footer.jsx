function Footer() {
  return (
    <footer className=" bg-primary mx-auto py-8 text-white ">
      <div className="max-w-[90%] lg:max-w-5xl mx-auto flex  flex-col lg:flex-row justify-between items-center ">
        <h1 className=" text-white text-1xl">
          Copyright &#169; -MasterIT Store{" "}
        </h1>

        <ul className=" flex items-center gap-4">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Term and Conditional</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

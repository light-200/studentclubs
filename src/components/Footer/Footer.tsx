// import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div style={{"backgroundColor":"#162839"}} className=" flex flex-col justify-center items-center text-white mt-12  ">
      <div className="w-11/12 p-12 flex justify-center flex-col xl:flex-row md:w-8/12 ">
        
          <div className="flex flex-col p-4">
            <h3 className="text-2xl mb-4 text-cyan-300 ">OUR VISION</h3>
            <p className="">
              Fostering the engagement of students in co-curricular and
              extracurricular activities, and to inculcate in them the urge to
              analyse, explore, build and project innovation as a community
              comprising members from varied backgrounds
            </p>
          </div>
          {/* <form className="">
            <input
              className=""
              type="text"
              placeholder="Email Address"
            />
            <button className="" type="submit">
              {">"}
            </button>
          </form> */}
      
        <div className="flex justify-center flex-col md:flex-row ">
          <div className="p-4">
            <h3 className="text-2xl mb-3 text-cyan-300">ABOUT US</h3>
            <p className="">
              Govind Ballabh Pant Institute of Engineering &amp; Technology is
              an Institute with total commitment to quality and excellence in
              academic pursuits. The Institute was established in 1989, as an
              autonomous body, with a view to fulfil the ever-growing demand for
              well-trained professionals.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-2xl mb-3 w-48 text-cyan-300">Quick Links</h3>
            <ul className="">
              <li>
                <a className="" href="/">
                  HOME
                </a>
              </li>
              <li>
                <a
                  className=""
                  href="http://www.gbpec.ac.in/aboutus/contact.php"
                  target={"_blank"}
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      <hr className="border-1 border-gray-400 w-full" />
      <section className="flex justify-center p-6  items-center w-full">
        <div className="text-white text-center">
          Copyright © Govind Ballabh Pant Institute of Engineering &amp;
          Technology, Pauri Garhwal
        </div>
      </section>
    </div>
  );
};

export default Footer;

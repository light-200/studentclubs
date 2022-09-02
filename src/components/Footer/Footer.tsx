import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.Section1}>
        <div className={classes.Vision}>
          <h3>OUR VISION</h3>
          <p>
            To pivot for the excellence in technical education and producing
            globally competent professionals by building the strong
            teaching-learning and research environment.
          </p>
        </div>
        <form className={classes.Newsletter}>
          <input type="text" placeholder="Email Address" />
          <button type="submit">{">"}</button>
        </form>
      </div>
      <div className={classes.Section2}>
        <div className={classes.About}>
          <h3>ABOUT US</h3>
          <p>
            Govind Ballabh Pant Institute of Engineering &amp; Technology is an
            Institute with total commitment to quality and excellence in
            academic pursuits. The Institute was established in 1989, as an
            autonomous body, with a view to fulfil the ever-growing demand for
            well-trained professionals.
          </p>
        </div>
        <div className={classes.Quicklinks}>
          <h3>Quick LInks</h3>
          <ul className={classes.FooterLinks}>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ACADEMICS</a>
            </li>
            <li>
              <a href="#">DEPARTMENTS</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
            <li>
              <a href="#">ADMINSTRATION</a>
            </li>
            <li>
              <a href="#">FACILITIES</a>
            </li>
          </ul>
        </div>
        <div className={classes.Services}>
          <h3>OUR SERVICES</h3>
          <ul className={classes.ServicesLinks}>
            <li>
              <a href="#">Fresher Jobs</a>
            </li>
            <li>
              <a href="#">InternEdge - Internships &amp; Projects </a>
            </li>
            <li>
              <a href="#">Resume Edge - Resume Writing Services</a>
            </li>
            <li>
              <a href="#">Readers Galleria - Curated Library</a>
            </li>
            <li>
              <a href="#">Trideus - Campus Ambassadors</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.Section3}>
        Copyright © Govind Ballabh Pant Institute of Engineering &amp;
        Technology, Pauri Garhwal
      </div>
    </div>
  );
};

export default Footer;

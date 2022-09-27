import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                This is a CRUD-application using ReactJS (CREATE, READ, UPDATE
                and DELETE) for the management of your invoices. You can view
                the list of all your invoices, add new ones, edit or delete the
                existing ones. Each invoice will have an incremented number.
                Also you can view all the details of one specific invoice.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Technologies used</h6>
              <ul className="footer-links">
                <li>
                  <a href="#">JavaScript</a>
                </li>
                <li>
                  <a href="#">TypeScript</a>
                </li>
                <li>
                  <a href="#">React JS</a>
                </li>
                <li>
                  <a href="#">React Router</a>
                </li>
                <li>
                  <a href="#">Android</a>
                </li>
                <li>
                  <a href="#">React Redux</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="#">Despre aplicatie</a>
                </li>
                <li>
                  <a href="#">Contacteaza-ne</a>
                </li>
                <li>
                  <a href="#">Contribuie</a>
                </li>
                <li>
                  <a href="#">Politica de Confidentialitate</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2022 All Rights Reserved by
                <a href="#">
                  <b> Remus Bejusca </b>
                </a>
                .
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <FaFacebookF />
                    {/* <i className="fa fa-facebook"></i> */}
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

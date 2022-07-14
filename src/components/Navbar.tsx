import React from "react";
import logo from "../assets/logo_main.svg";
import burgerIcon from "../assets/hamburger_white.png";
import ReactFlagsSelect from "react-flags-select";
import { useWindowSize } from "../hooks/useWindowSize";
import useSticky from "../hooks/useSticky";

interface NavProps {
  setMarket: Function;
  selectedMarket: string;
}

const navItems = [
  {
    text: "Africa",
    dropdownContent: {},
  },
  {
    text: "Americas",
    dropdownContent: {},
  },
  {
    text: "Asia",
    dropdownContent: {},
  },
  {
    text: "Europe",
    dropdownContent: {},
  },
  {
    text: "Oceania",
    dropdownContent: {},
  },
  {
    text: "Trip Style",
    dropdownContent: {},
  },
];

const Navbar: React.FC<NavProps> = ({ setMarket, selectedMarket }) => {
  const { width } = useWindowSize();
  const { isSticky } = useSticky();

  const returnLabelBool = (width: number): boolean => {
    return width > 600;
  };

  return (
    <div className={`navContainer ${isSticky && "collapsed"}`}>
      <div className="promotionBar">
        <div className="blueBlock">Last Chance</div>
        <h5>Save up to €1,000!</h5>
        <p className="moreInfo">+ info</p>
      </div>
      <div className={"navBar"}>
        <div className="navLeft">
          <div className="hamburger">
            <img src={burgerIcon} alt={"burgerIcon"} />
            <h6>MENU</h6>
          </div>
          <img data-testid="nav_logo" className="logo" src={logo} alt="" />
          <div className="mainNav">
            {navItems.map((item) => (
              <div data-testid="nav_item" key={item.text} className="navItem">
                <p>{item.text}</p>
                <div className="chevron" />
              </div>
            ))}
          </div>
        </div>
        <ReactFlagsSelect
          className="marketSelector"
          countries={["US", "GB", "FR", "DE", "ES"]}
          onSelect={(code) => setMarket(code === "GB" ? "UK" : code)}
          selected={selectedMarket === "UK" ? "GB" : selectedMarket}
          showOptionLabel={returnLabelBool(width)}
          showSelectedLabel={returnLabelBool(width)}
        />
        ;
      </div>
    </div>
  );
};

export default Navbar;

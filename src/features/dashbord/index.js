import { useState } from "react";

import { RightWhite_icon, Right_icon, cakeImg, documentImage, rightCake } from "../../utils/constant";
import Tabs from "./constant";
import "./styles.css";
import Image from "../../components/Image";
import { Link } from "react-router-dom";

const Dashbord = () => {
    const [activeTab, setActiveTab] = useState(1);
    const activeTabeData = Tabs.find(({ id }) => id === activeTab);

    return (
        <div>
            <div className="mainSection">
                <div className="py-4">
                    <div className="navBarSection">
                        <ul className="nav justify-content-center">
                            {Tabs.map(({ id, title }) => (
                                <li key={id} className="nav-item">
                                    <a className={`nav-link ${id === activeTab ? "activeNav" : ""}`} aria-current="page" onClick={() => setActiveTab(id)}>
                                        {title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="row m-0 innerMainSection">
                        <div className="col-6 d-flex justify-content-end">
                            <Image src={documentImage} className="img-fluid documentImg" />
                        </div>
                        <div className="col-6 text-light rightMainSection">
                            <h1 className="heading">{activeTabeData.subTitle}</h1>
                            {activeTabeData.content.map((text) => (
                                <p>{text}</p>
                            ))}
                            <Link to={"/users"} className="redirectLink">
                                <div>
                                    <span>Go To User Page</span>
                                    <span className="rightIconSection">
                                        <Image src={Right_icon} className="img-fluid rightIcon" />
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomSection">
                <div className="container-fluid p-0">
                    <div className="d-flex justify-content-between m-0">
                        <div className=" p-0">
                            <Image src={cakeImg} className="img-fluid" />
                        </div>
                        <div className="containSection">
                            <div>
                                <div className="headingSection">
                                    <div>Next Day Shipping is</div>
                                    <div className="text-center">
                                        our <span className="SweetSpotText">“Sweet Spot.”</span>
                                    </div>
                                </div>
                                <div className="startBtn m-auto">
                                    <span>Get Started</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-0">
                            <Image src={rightCake} className="img-fluid rightCakeImg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashbord;

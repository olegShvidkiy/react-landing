import { Button } from "../UI/button/button";
import { Charts } from "./landingComponents/charts/charts";
import { Footer } from "./landingComponents/footer/footer";
import { Forecast } from "./landingComponents/forecast/forecast";
import { HowWasCreated } from "./landingComponents/HowWasCreated/howWasCreated";
import { Payment } from "./landingComponents/payment/payment";
import { Peoples } from "./landingComponents/peoples/peoples";
import { PersonalizedPlan } from "./landingComponents/personalizedPlan/personalizedPlan";
import { SpecialOffer } from "./landingComponents/specialOffer/specialOffer";
import { Link } from "react-scroll";
import cls from "./landingPage.module.scss";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { Fragment } from "react";

export function LandingPage() {
  const state = useSelector((state) => state);
  return (
    <div className={cls.lending}>
      <div className={cls.page}>
        <div className={cls.page_inner}>
          <div className={cls.header}>
            <SpecialOffer />
            <div className={cls.btn_wrapper}>
              <Link to="payment" smooth={true} duration={1000}>
                <Button text={"Get My Plan"} />
              </Link>
            </div>
          </div>
          <Forecast />
          <Charts />
        </div>
        <div className={cls.page_inner_white}></div>
      </div>
      <div className={cls.page_white}>
        <div className={cls.page_white_inner}>
          <PersonalizedPlan />
          <HowWasCreated />
          <Peoples />
        </div>
      </div>
      <div id="payment" className={cls.page}>
        <div className={cls.page_inner}>
          <Payment />
        </div>
      </div>
      <div className={cls.page_white}>
        <div className={cls.page_white_inner}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

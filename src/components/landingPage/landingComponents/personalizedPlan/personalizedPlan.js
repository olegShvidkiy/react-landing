import { Button } from "../../../UI/button/button";
import cls from "./plan.module.scss";
export function PersonalizedPlan() {
  return (
    <div className={cls.wrapper}>
      <div className={cls.title}>
        Things your personalized plan{" "}
        <i style={{ color: "#4380FF" }}>will teach you</i>
      </div>
      <div className={cls.block}>
        <img src="./images/landing/pers_plan.png" alt="plan"></img>
        <div className={cls.text}>
          Build a habit system to get a better result
        </div>
        <div className={cls.text}>
          Bring life into all your ideas with a boosted motivation
        </div>
        <div className={cls.text}>Make changes with small steps art</div>
        <div className={cls.button_wrapper}>
          <Button text="Get my habit plan" />
        </div>
      </div>
    </div>
  );
}

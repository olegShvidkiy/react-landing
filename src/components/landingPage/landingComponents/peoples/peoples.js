import { Button } from "../../../UI/button/button";
import cls from "./peoples.module.scss";
export function Peoples() {
  return (
    <div className={cls.wrapper}>
      <div className={cls.title}>
        More <i style={{ color: "#4380FF" }}> than 2 mln</i> people are building
        habits with our plan
      </div>
      <div className={cls.image_wrapper}>
        <img
          className={cls.image}
          src="/test-project/images/landing/peoples.png"
          alt="portrets"
        ></img>
      </div>

      <Button text={"Get My Habit Plan"} />
    </div>
  );
}

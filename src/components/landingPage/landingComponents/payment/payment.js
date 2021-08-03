import { Button } from "../../../UI/button/button";
import cls from "./payment.module.scss";
export function Payment() {
  return (
    <div className={cls.wrapper}>
      <div className={cls.title}>What’s inside:</div>
      <div className={cls.block}>
        <div className={cls.image_wrapper}>
          <img
            src="/test-project/images/landing/payment_1.png"
            alt={"xz"}
          ></img>
        </div>
        <div className={cls.text}>
          Personalized plan on habits transformation: tools & strategies
        </div>
      </div>
      <div className={cls.block}>
        <div className={cls.image_wrapper}>
          <img
            src="/test-project/images/landing/payment_2.png"
            alt={"xz"}
          ></img>
        </div>
        <div className={cls.text}>
          Habit tracker with challenges set for topics you choose
        </div>
      </div>
      <h3 style={{ color: "#4380FF", paddingBottom: "20px" }}>
        Get your bonus:
      </h3>
      <div className={cls.bonus}>
        <div>
          <img src="/test-project/images/landing/star.png" alt="star"></img>
          <div className={cls.text_bonus}> The habits cheat sheet</div>
        </div>
        <div>
          <img src="/test-project/images/landing/star.png" alt="star"></img>
          <div className={cls.text_bonus}>
            <i style={{ fontWeight: "800" }}> Bonus guide: </i>how to apply
            habits to career
          </div>
        </div>
        <div>
          <img src="/test-project/images/landing/star.png" alt="star"></img>
          <div className={cls.text_bonus}>
            <i style={{ fontWeight: "800" }}> Bonus guide:</i> how to apply
            habits to relationships
          </div>
        </div>
      </div>
      <hr style={{ opacity: "0.5", marginTop: "20px" }}></hr>
      <div className={cls.price}>
        $19.99
        <div className={cls.discount}>$29,99</div>
      </div>
      <Button text={"Get My Habit Plan"} />
      <div className={cls.advice}>
        Instantly to your inbox • Money-back guarantee
      </div>
    </div>
  );
}

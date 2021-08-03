import cls from "./created.module.scss";
export function HowWasCreated() {
  return (
    <div className={cls.wrapper}>
      <div className={cls.title}>
        How your personal habit plan{" "}
        <i style={{ color: "#4380FF" }}>was created:</i>
      </div>
      <div className={cls.blocks}>
        <div className={cls.block}>
          <div className={cls.img_wrapper}>
            <img
              src="/test-project/images/landing/companies.png"
              alt="logo"
            ></img>
          </div>
          More than 1500 books and articles analyzed to choose the best
          <div className={cls.circle}>1</div>
        </div>
        <div className={cls.block}>
          Done and approved by behavioural psychologists
          <div className={cls.circle}>2</div>
        </div>
        <div className={cls.block}>
          <i style={{ color: "#4380FF" }}>99% of content</i> meets what you
          chose in the quiz
          <div className={cls.circle}>3</div>
        </div>
      </div>
    </div>
  );
}

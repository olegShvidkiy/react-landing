import cls from "./foote.module.scss";
export function Footer() {
  return (
    <div className={cls.wrapper}>
      <div className={cls.title}>
        100% money-back <i style={{ color: "#4380FF" }}>guarantee</i>
      </div>{" "}
      <div className={cls.text}>
        If you feel that your plan won’t work for you, we guarantee to give you
        money back in 14 days.
      </div>
      <div className={cls.text}>
        But you know, there’s no way it will dissapoint you
      </div>
      <h5 style={{ textAlign: "center", paddingTop: "20px" }}>
        Pay safe & secure
      </h5>
      <div className={cls.image_wrapper}>
        <img src="/images/landing/Footer.png"></img>
      </div>
      <div className={cls.links}>
        <a>Contact Us</a>
        <a>Privacy Policy</a>
        <a>Terms of Use</a>
      </div>
      <div className={cls.footer_text}>
        GM Unicorn Corporation Limited Florinis 7, Greg Tower,2nd Floor, 1065,
        Nicosia, Cyprus
      </div>
    </div>
  );
}

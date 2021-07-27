import cls from "./button.module.css";

export function Button({ disabled = false, text, onClick = () => {} }) {
  let button = cls.btn;
  if (disabled) button += " " + cls.btn_disabled;
  return (
    <div className={cls.wrapper}>
      <button disabled={disabled} onClick={() => onClick()} className={button}>
        {text}
      </button>
    </div>
  );
}

import cls from "./option.module.scss";
export function Option({ src, text, id, onChange, selected }) {
  return (
    <div className={cls.checkboxes}>
      <input
        onChange={() => onChange(id)}
        className={cls.input}
        id={id}
        type="checkbox"
        checked={selected}
      />

      <label className={cls.label} htmlFor={id}>
        <div className={cls.emojiText}>
          <img className={cls.img} src={src} alt="emoji"></img>
          <div>{text}</div>
        </div>
      </label>
      <hr className={cls.hr} />
    </div>
  );
}

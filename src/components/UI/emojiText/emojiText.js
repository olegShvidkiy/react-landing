import cls from "./emojiText.module.scss";
export function EmojiText({ src, text }) {
  return (
    <div className={cls.emojiText}>
      <img src={src} className={cls.emoji} alt="emoji"></img>
      <div className={cls.text}>{text}</div>
    </div>
  );
}

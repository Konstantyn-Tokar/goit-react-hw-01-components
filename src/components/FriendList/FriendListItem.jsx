import s from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={s.item}>
      <div
        className={s.status}
        style={{
          backgroundColor: isOnline ? "green" : "red",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
        }}
      ></div>
      <img className={s.avatar} src={avatar} alt="User avatar" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  avatar: "https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png",
};

export default FriendListItem;

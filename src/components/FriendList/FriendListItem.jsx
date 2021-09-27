// import s from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className="item">
      <div
        className="status"
        style={{
          backgroundColor: isOnline ? "green" : "red",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
        }}
      ></div>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  avatar: "https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png",
};

export default FriendListItem;

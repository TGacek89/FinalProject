import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"></span>
        <span className="headerTitleLg">FOTOS</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184_960_720.jpg"
        alt=""
      />
    </div>
  );
}

export default function CustomOption({ label, icon }) {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "5px" }}>
      {/* 图标 */}
      <span
        className={icon}
        style={{
          marginRight: "10px", // 为图标与文字之间添加一些空间
          width: "20px", // 控制图标大小
          height: "20px",
          display: "inline-block",
        }}
      ></span>
      {/* 文字 */}
      <span>{label}</span>
    </div>
  );
}

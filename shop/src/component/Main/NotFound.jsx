import { Text } from "@mantine/core";

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div className="container">
        <div className="kitty">
          <div className="face">
            <div className="ear"></div>
            <div className="eye"></div>
            <div className="mouth">
              <div className="nose"></div>
              <div className="whisker-1"></div>
              <div className="whisker-2"></div>
            </div>
            <div className="body">
              <div className="hand">
                <div className="hand-l"></div>
                <div className="hand-r"></div>
              </div>
            </div>
            <div className="tail"></div>
          </div>
          <div className="laptop">
            <div className="logo"></div>
          </div>
        </div>
      </div>
      <Text sx={{ fontSize: "1.3rem" }}>Раздел в разработке</Text>
    </div>
  );
}

export default NotFound;

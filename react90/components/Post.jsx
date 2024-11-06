const style = {
    width: 200,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 20,
  };
  
  function PostComponent({ name, subtitle, time, image, description }) {
    return (
      <div style={style}>
        <div style={{ display: "flex" }}>
          <img
            src={image}
            alt="Profile"
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
            }}
          />
          <div style={{ fontSize: 10, marginLeft: 10 }}>
            <b>{name}</b>
            <div>{subtitle}</div>
            {time && (
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>{time}</div>
                
              </div>
            )}
          </div>
        </div>
        <div style={{ fontSize: 12 }}>{description}</div>
      </div>
    );
  }

  export default PostComponent;
  
function Stat({ label, value }) {
  return (
    <p
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "40px 0",
      }}
    >
      <b style={{ width: "20%" }}>{label}: </b>
      <span style={{ width: "80%", display: "flex" }}>
        {Array(5)
          .fill(false)
          .map((_, i) => i + 1 <= value)
          .map((val, i) => (
            <div
              key={`${label}-${i}`}
              style={
                val
                  ? {
                      width: "20%",
                      margin: "0 6px",
                      height: 20,
                      backgroundColor: "#544439",
                      borderRadius: 999,
                    }
                  : {
                      width: "20%",
                      margin: "0 6px",
                      height: 20,
                      backgroundColor: "#E0E0E0",
                      borderRadius: 999,
                    }
              }
            />
          ))}
      </span>
    </p>
  );
}

export default Stat;

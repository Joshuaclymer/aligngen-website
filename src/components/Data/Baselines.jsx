import baselines from "../../assets/images/baselines.png";

function Baselines() {
  return (
    <div style={{ width: "100%", display:'flex', justifyContent:'center'}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "900px",
          marginBottom: "10vh",
        }}
      >
        <h2 class="section__title">Baselines</h2>
        <img src={baselines} alt="baselines" width="100%" />
      </div>
    </div>
  );
}

export default Baselines;

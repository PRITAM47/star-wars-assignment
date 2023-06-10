import loadingGif from "../../images/loading.gif";

const Loader = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "fixed",
        zIndex: "999",
        backgroundColor: "rgba(255,255,255,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={loadingGif} alt='loading' />
    </div>
  );
};

export default Loader;

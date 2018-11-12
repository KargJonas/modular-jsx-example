const textAlign = "center";
const themeDark = "#335588";

export default {
  "*": {
    fontFamily: "monoSpace",
    textAlign
  },

  ".top-container": {
    backgroundColor: "#ccddff",
    padding: "20px 0",
    borderBottom: "5px solid " + themeDark
  },

  ".logo": {
    width: "30%",
    height: "30%",
    minWidth: "250px",
    minHeight: "250px",
    position: "absolute",
    transform: `translate(-50%, -30%)`,
    top: "50%"
  },

  h1: {
    fontSize: 20 + 20 + "px",
    color: themeDark
  }
};
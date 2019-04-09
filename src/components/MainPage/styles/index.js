import IconsetW from "../../../img/icons/IconsetW.png"

export const avatar = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 42,
    width: 42,
    padding: 0,
    margin: 0,
    textTransform: "uppercase",
    borderRadius: "50%",
    color: "#fff",
    fontSize: "160%",
    flex: "0 0 auto",
};

export const avatarMedium = {
    ...avatar,
    height: 48,
    width: 48,
};

export const avatarBig = {
    ...avatar,
    height: 56,
    width: 56,
};

export const chipStyle = {
    display: "inline-flex",
    minWidth: 11,
    padding: 3,
    backgroundColor: "#BFBFBF",
    borderRadius: 50,
    textOverflow: "ellipsis",
    color: "white",
    justifyContent: "space-evenly",
};

export const titleStyle = {
    fontSize: 13,
    fontWeight: 800,
};

export const sudTitleStyle = {
    fontSize: 12,
    fontWeight: 700,
};
export const bodyTextstyle = {
    fontSize: 13,
    fontWeight: 400,
};
export const captionStyle = {
    fontSize: 11,
    fontWeight: 400,
};

export const inputSearchStyle = {
    outline: "none",
    margin: "10px 20px",
    height: 25,
    backgroundColor: "#f2f2f2",
    fontSize: 12,
    padding: "6px 26px 6px 30px",
    border: "1px solid #f2f2f2",
    borderRadius: 5,
    backgroundImage: `url(${IconsetW})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-6px -205px"
};

export const focusInputStyle = {
    ...inputSearchStyle,
    outline: "none",
    backgroundColor: "#fff",
    border: "1px solid #b8b8b8",
};

export const colors = {
    a: "green",
    b: "red",
    c: "pink",
    d: "coral",
    e: "cyan",
    f: "lightgreen",
    g: "cyan",
    h: "magenta",
    i: "gray",
    j: "green",
    k: "red",
    l: "pink",
    m: "coral",
    n: "black",
    o: "lightgreen",
    p: "cyan",
    q: "magenta",
    r: "gray",
    s: "pink",
    t: "coral",
    u: "black",
    v: "lightgreen",
    w: "cyan",
    x: "magenta",
    y: "gray",
    z: "lightgreen"
};
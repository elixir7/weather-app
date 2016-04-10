//This is a button object which is made for importing.
//Because the button is in another file it easy to change it here and it will change across the entire page
const borderRadius = 2;
const Button = {
  display: 'inline-block',
  textDecoration: 'none',
  border: "none",
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 30,
  paddingRight: 30,
  backgroundColor: "#3ecc72",
  color: "#ffffff",
  borderRadius: borderRadius,
  WebkitBorderRadius: borderRadius,
  MozBorderRadius: borderRadius,
  fontWeight: 300,
  fontSize: 12,
  marginBottom: 10
}

export default Button;

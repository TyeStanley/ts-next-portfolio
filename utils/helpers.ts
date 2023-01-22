export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function validateEmail({
  email,
  setEmailError,
}: {
  email: string;
  setEmailError: (error: string) => void;
}) {
  const emailRegular =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return email && !email.match(emailRegular)
    ? setEmailError("Please enter a valid email")
    : setEmailError("");
}

export function validateName({
  name,
  setNameError,
}: {
  name: string;
  setNameError: (error: string) => void;
}) {
  return name && name.length <= 1
    ? setNameError("Please enter a name")
    : name && name.length > 24
    ? setNameError("Name exceeds character length of 24")
    : setNameError("");
}

export function validateMessage({
  message,
  setMessageError,
}: {
  message: string;
  setMessageError: (error: string) => void;
}) {
  return message && message.length < 5
    ? setMessageError("Please enter a message")
    : message && message.length > 280
    ? setMessageError("Message exceeds character length of 24")
    : setMessageError("");
}

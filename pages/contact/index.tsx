import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import {
  validateName,
  validateEmail,
  validateMessage,
} from "../../utils/helpers";

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<string>();
  const [emailError, setEmailError] = useState<string>();
  const [messageError, setMessageError] = useState<string>();

  // const [send, setSend] = useState();

  useEffect(() => {
    // VALIDATION
    validateName({ name, setNameError });
    validateEmail({ email, setEmailError });
    validateMessage({ message, setMessageError });

    // if (send) {
    //   setName("");
    //   setEmail("");
    //   setMessage("");
    // }
  }, [name, email, message]);

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !nameError &&
      !emailError &&
      !messageError &&
      name !== "" &&
      email !== "" &&
      message !== ""
    ) {
      // SendEmail({ name, email, message, setSend });
    }
  }
  return (
    <>
      <div className="h-screen w-screen overflow-hidden bg-[url('../assets/main-background.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="justify-top flex h-full w-full flex-col bg-white/70">
          <Navbar />
          <section className="mx-auto w-[95vw] rounded-xl border border-sky-400 bg-sky-50/70 px-5 text-center">
            <h1 className="mt-5 text-lg font-extrabold text-sky-900 sm:text-[42px]">
              Send me a message!
            </h1>
            <p className="mx-auto mt-5 max-w-[768px] text-[12px] font-bold text-sky-800 xs:text-lg">
              I&apos;m always looking for new opportunities, so if you have any
              questions or would like to work together, please feel free to
              contact me!
            </p>
            {/* <form onSubmit={submitHandler}> */}
            <form>
              <Box className="mx-auto mt-5 max-w-[400px]">
                <FormControl fullWidth required>
                  <InputLabel htmlFor="name-input">Name</InputLabel>
                  <OutlinedInput
                    id="name-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    label="Name"
                    required
                  />
                  <FormHelperText
                    id="my-helper-text"
                    className="text-[#d8364c]"
                  >
                    {nameError}
                  </FormHelperText>
                </FormControl>
              </Box>

              <Box className="mx-auto mt-5 max-w-[400px]">
                <FormControl fullWidth required>
                  <InputLabel htmlFor="email-input">Email</InputLabel>
                  <OutlinedInput
                    id="email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Name"
                    required
                  />
                  <FormHelperText
                    id="my-helper-text"
                    className="text-[#d8364c]"
                  >
                    {emailError}
                  </FormHelperText>
                </FormControl>
              </Box>

              <FormControl fullWidth>
                <TextField
                  sx={{
                    marginTop: 2,
                  }}
                  className="mx-auto max-w-[400px]"
                  id="message-input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  label="Message"
                  variant="outlined"
                  min="5"
                  max="24"
                  required
                  multiline
                  rows={5}
                  fullWidth
                />
                <FormHelperText
                  id="my-helper-text"
                  sx={{ color: "#d8364c", paddingLeft: 1.5 }}
                >
                  {messageError}
                </FormHelperText>
              </FormControl>

              <FormControl color="primary">
                <Button
                  sx={{
                    "& > :not(style)": { m: 1 },
                    marginTop: 2,
                    paddingRight: 1,
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                  type="submit"
                  variant="contained"
                  size="medium"
                  endIcon={<SendIcon />}
                >
                  send
                </Button>
              </FormControl>

              <p className="my-5 mx-auto text-green-500">
                {/* {send ? "Message has been successfully sent!" : null} */}
              </p>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

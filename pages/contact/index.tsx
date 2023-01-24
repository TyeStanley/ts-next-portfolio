import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { validateName, validateEmail } from "../../utils/helpers";

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<string>();
  const [emailError, setEmailError] = useState<string>();

  const [send, setSend] = useState<boolean>(false);

  useEffect(() => {
    // VALIDATION
    validateName({ name, setNameError });
    validateEmail({ email, setEmailError });

    if (send) {
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [name, email, message, send]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !nameError &&
      !emailError &&
      name !== "" &&
      email !== "" &&
      message !== ""
    ) {
      const data = { name, email, message };
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      console.log(json);
      setSend(true);
      setTimeout(setSendToFalse, 5000);
    }
  };

  function setSendToFalse() {
    setSend(false);
  }

  return (
    <>
      <Head>
        <title>Contact Page | Tye Stanley</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="h-screen w-screen overflow-hidden bg-[url('../assets/main-background.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="justify-top flex h-full w-full flex-col bg-white/70">
          <Navbar />
          <section className="mx-auto w-[95vw] rounded-xl border border-sky-400 bg-sky-50/70 px-5 text-center">
            <h1 className="mt-5 text-lg font-extrabold text-sky-900 sm:text-[36px]">
              Send me a message!
            </h1>
            <p className="mx-auto mt-5 max-w-[768px] text-[12px] font-bold text-sky-800 xs:text-lg">
              I&apos;m always looking for new opportunities, so if you have any
              questions or would like to work together, please feel free to
              contact me!
            </p>

            <form className="max-width-[400px]" onSubmit={submitHandler}>
              <Box
                sx={{
                  marginTop: 3,
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "400px",
                }}
              >
                <FormControl fullWidth required>
                  <InputLabel htmlFor="name-input">Name</InputLabel>
                  <OutlinedInput
                    id="name-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    label="Name"
                    required
                  />
                  <FormHelperText id="my-helper-text" sx={{ color: "#d8364c" }}>
                    {nameError}
                  </FormHelperText>
                </FormControl>
              </Box>

              <Box
                sx={{
                  marginTop: 3,
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "400px",
                }}
              >
                <FormControl fullWidth required>
                  <InputLabel htmlFor="email-input">Email</InputLabel>
                  <OutlinedInput
                    id="email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Name"
                    required
                  />
                  <FormHelperText id="my-helper-text" sx={{ color: "#d8364c" }}>
                    {emailError}
                  </FormHelperText>
                </FormControl>
              </Box>

              <FormControl fullWidth required>
                <TextField
                  sx={{
                    marginTop: 3,
                    marginLeft: "auto",
                    marginRight: "auto",
                    maxWidth: "400px",
                    zIndex: 0,
                  }}
                  id="message-input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  label="Message"
                  variant="outlined"
                  required
                  multiline
                  rows={5}
                  fullWidth
                />
              </FormControl>

              <FormControl color="primary">
                <Button
                  sx={{
                    "& > :not(style)": { m: 1 },
                    marginTop: 3,
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

              <p className="my-5 mx-auto text-[14px] text-green-500 sm:text-[16px]">
                {send ? "Message has been successfully sent!" : null}
              </p>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { submitReferForm } from "../assets/apiService";
import image1 from "../images/Anniversary.png";
import note from "../images/Note.png";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EmailForm = (closeModal) => {
  console.log(274,closeModal);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");

  const referFormSubmit = async function (event) {
    event.preventDefault();

    // Final validation before submission
    if (!emailError && email) {
      // Submit the form
      const res = await submitReferForm({ email, message });
      console.log(36382,res);
      if(res){
        console.log(384,closeModal,closeModal.closeModal);
        closeModal.closeModal(true)
      };
    } else {
      console.log("Form not submitted: Invalid email");
    }
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      setEmailError(true);
      setEmailHelperText("Please enter a valid email address");
    } else {
      setEmailError(false);
      setEmailHelperText("");
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <form onSubmit={referFormSubmit} noValidate>
      <TextField
        className="w-full !mb-4"
        id="email"
        label="Email"
        variant="standard"
        value={email}
        onChange={handleEmailChange}
        error={emailError}
        helperText={emailHelperText}
      />
      <TextField
        className="w-full !mb-4"
        id="message"
        label="Name"
        variant="standard"
        value={message}
        onChange={handleMessageChange}
        multiline
        rows={1}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="w-full"
      >
        Submit
      </Button>
    </form>
  );
};

function BasicModal() {
  // const [email, setEmail] = useState('');
  // const [referrerId, setReferrerId] = useState('');
  // const [message, setMessage] = useState('');
  // const [feedback, setFeedback] = useState('');
  const [open, setOpen] = React.useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClosesuccess = (success) => {
    console.log("callled",success);
    setShowSuccess(true)
    // if(success){
    //    setShowSuccess(true);
    //   //  setTimeout(() => {
    //   //   setOpen(false)
    //   //  }, 5000);
    // // setOpen(false)
    // }
  };

  return (
    <div>
      <div className="button ml-20 mt-24 hover:underline">
        <button onClick={handleOpen}>Refer Now</button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
            {showSuccess ? (
              <>
                <div className="flex flex-col items-center justify-center bg-white rounded shadow-md text-center">
      <div className="text-green-500 text-xl font-bold mb-2">Success</div>
      <div className="text-gray-700 mb-4">
        Referral mail has been sent to the entered email.
      </div>
      <Button
        onClick={handleClose}
        variant="contained"
        color="primary"
        className="mt-2"
      >
        Close
      </Button>
    </div>
              </>
              
            ):(              <EmailForm closeModal={handleClosesuccess} />
            )}
            {/* <form className="w-full"> */}
              {/* <div>
                ReferrerId:
                <input type="number" />
              </div> */}/
              {/* <TextField className="w-full !mb-4" id="email" label="Email" variant="standard" />
              <TextField className="w-full !mb-4" id="message" label="Message" variant="standard" /> */}
              {/* <div>
                Email:
                <input type="email" />
              </div>
              <div>
                Message:
                <input type="text" />
              </div> */}
            {/* </form>
            <div className="button mt-6 hover:underline">
              <button onClick={() => handelFormSubmit.handelFormSubmit()}>
                Submit
              </button>
            </div> */}
          </Box>
      </Modal>
    </div>
  );
}



const Main = () => {
  return (
    <>
    <div className="bigcontainer flex">
    <div className="main">
      <span className="Note w-4 h-7 bg-black">
      </span>
      <div className="let p-20">
        <div className="content ml-2">Lets Learn & Earn</div>
        <div className="content2 mt-2 ml-2">
          Get a chance to win up-to <span> Rs. 15,000</span>
        </div>
      <BasicModal /></div>
      <div>
      </div>
     
    <div className="picture"> <img src={image1} alt="pic" width="670px" height="800px"/></div>
    </div>
    </div>
    </>
  );
};

export default Main;

import React, { useEffect, useState, useRef } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import { Gif } from "@material-ui/icons";
import SendIcon from "@material-ui/icons/Send";
import Avatar from "@material-ui/core/Avatar";

import getUserToken from "../../utils/getUserToken";

import Facepalm from "../../assets/gifs/FacePalm.gif";
import GoodMorning from "../../assets/gifs/GoodMorning.gif";
import ItsFriday from "../../assets/gifs/ItsFriday.gif";
import Laugh from "../../assets/gifs/Laugh.gif";
import Thanks from "../../assets/gifs/Thanks.gif";

import "./style.scss";

function handleConnection(response) {
  const notifySuccess = () => toast.success("Postée avec succès !");
  const notifyError = () => toast.error("Une erreur est survenu !");

  if (response.status === 201) {
    notifySuccess();
    setTimeout(function () {
      window.location.href = "/feed";
    }, 3500);
  } else {
    notifyError();
  }
  console.log(response.status);
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    width: 550,
    height: 200,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    height: 200,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function CustomizedDialogs({ user }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedFile, setSelectedFile] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);

      return;
    }
    setPreview(selectedFile);
  }, [selectedFile]);

  const [showText, setShowText] = useState(false);
  const onClick = () => {
    setShowText(true);
  };

  const fileInput = register("imageUrl", {
    required: "Ce champ est obligatoire",
  });

  const onSelectFile = (e) => {
    fileInput.onChange(e);
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    console.log(e.target.files[0]);

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedFile(reader.result);
    };
    reader.readAsDataURL(file);
  };

  /* Gif */

  const onSelectGif = (gifPath) => {
    setPreview(gifPath);
    console.log(gifPath);
  };

  const Text = () => (
    <div className="Gif-Container" id="Gif-Container">
      <Button onClick={() => onSelectGif(Facepalm)} {...fileInput}>
        <img src={Facepalm} alt="FacePalm" />
      </Button>
      <Button onClick={() => onSelectGif(GoodMorning)} {...fileInput}>
        <img src={GoodMorning} alt="GoodMorning" />
      </Button>
      <Button onClick={() => onSelectGif(ItsFriday)} {...fileInput}>
        <img src={ItsFriday} alt="ItsFriday" />
      </Button>
      <Button onClick={() => onSelectGif(Laugh)} {...fileInput}>
        <img src={Laugh} alt="Laugh" />
      </Button>
      <Button onClick={() => onSelectGif(Thanks)} {...fileInput}>
        <img src={Thanks} alt="Thanks" />
      </Button>
    </div>
  );

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Commencer un Post
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <form
          onSubmit={handleSubmit((data) => {
            const token = getUserToken();

            const formData = new FormData();

            formData.append("userId", user.id);
            formData.append("content", data.content);
            formData.append("image", data.imageUrl[0]);
            console.log(formData);

            fetch("http://localhost:3000/api/posts", {
              method: "POST",
              headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
              },
              body: formData,
            }).then((response) => {
              handleConnection(response);
              return response
                .json()
                .then((data) => {
                  console.log(data);
                })
                .catch((err) => {
                  console.log(err);
                });
            });
          })}
        >
          <div className="form-Container">
            <div className="title-container">
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Créer un Post
              </DialogTitle>
            </div>
            <div className="input-container">
              <div className="User-container">
                <Avatar className="userAvatar">
                  <span id="Image">{user.initials}</span>
                </Avatar>
                <span className="UserName" id="UserName">
                  {user.username}
                </span>
              </div>
              <div className="text-container">
                <MuiDialogContent>
                  <Box
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                  >
                    <TextField
                      className="textInput"
                      InputProps={{ disableUnderline: true }}
                      fullWidth
                      placeholder="De quoi souhaitez vous discuter ?"
                      id="fullWidth"
                      type="text"
                      rows={6}
                      multiline
                      required
                      {...register("content", {
                        required: "Ce champ est obligatoire",
                      })}
                    />
                  </Box>
                  <img id="blah" src={preview} alt="" />
                </MuiDialogContent>
              </div>
            </div>
            <DialogActions>
              <div className="btn-container">
                <div className="btn">
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" size="medium" component="span">
                      {" "}
                      <input
                        accept="image/*"
                        {...fileInput}
                        type="file"
                        onChange={onSelectFile}
                      />
                    </Button>
                  </label>
                </div>
                <div className="btn-group">
                  <div className="ttt">
                    <div className="btn">
                      <Button
                        onClick={onClick}
                        variant="contained"
                        size="medium"
                        component="span"
                      >
                        <Gif />
                        Gif
                      </Button>
                    </div>
                    <div className="btn-validation">
                      <Button
                        type="submit"
                        variant="contained"
                        className={classes.button}
                      >
                        Publier
                        <SendIcon className="sendIcon" />
                      </Button>
                    </div>
                  </div>

                  <div id="Gif-Body" className="Gif-Body">
                    {showText ? <Text /> : null}
                  </div>
                </div>
              </div>
            </DialogActions>
          </div>
        </form>
      </Dialog>
    </div>
  );
}

//<img src={Facepalm} alt="FacePalm" />;

CustomizedDialogs.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    initials: PropTypes.string.isRequired,
  }),
};

export default CustomizedDialogs;

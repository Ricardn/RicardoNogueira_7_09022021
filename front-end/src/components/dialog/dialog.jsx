import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
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
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import Avatar from "@material-ui/core/Avatar";

import "./style.scss";

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

const DialogContent = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    height: 200,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

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
        <form>
          <div className="title-container">
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Créer un Post
            </DialogTitle>
          </div>
          <div className="input-container">
            <div className="User-container">
              <Avatar className="userAvatar">
                <span id="Image">{localStorage.getItem("UserInitials")}</span>
              </Avatar>
              <span className="UserName" id="UserName">
                {localStorage.getItem("UserName")}
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
                  />
                </Box>
              </MuiDialogContent>
            </div>
          </div>

          <div className="btn-hastag">
            <Button variant="text">
              <span>Ajouter un hashtag</span>
            </Button>
          </div>
          <DialogActions>
            <div className="btn-container">
              <div className="btn">
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" size="medium" component="span">
                    <PhotoLibraryIcon />
                    Photo
                  </Button>
                </label>
              </div>
              <div className="btn">
                <input
                  accept="video/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" size="medium" component="span">
                    <VideoLibraryIcon />
                    Vidéo
                  </Button>
                </label>
              </div>
              <div className="btn">
                <input
                  accept=".pdf"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" size="medium" component="span">
                    <PictureAsPdfIcon />
                    Pdf
                  </Button>
                </label>
              </div>
              <div className="btn">
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" size="medium" component="span">
                    <Gif />
                    Gif
                  </Button>
                </label>
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
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

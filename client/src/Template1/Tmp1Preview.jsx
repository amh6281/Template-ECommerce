import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Tmp1Home from "./Tmp1Home";

export default function Tmp1Preview() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="warning"
        size="large"
        onClick={handleClickOpen}
      >
        Degin1
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        fullWidth={true}
        maxWidth={"xl"}
      >
        <DialogContent>
          <DialogContentText>
            <Tmp1Home />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus color="warning" onClick={handleClose}>
            돌아가기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Footer from "../Footer";
import TopNav from "../TopNav";
import MidNav from "../MidNav";
import Tmp3Cats from "./UsingPreview/Tmp3Cats";
import Tmp3Pdts from "./UsingPreview/Tmp3Pdts";
import Slider2 from "../Tmp2/UsingPreview/Slider2";

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
        Design3
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
            <TopNav />
            <MidNav />
            <Slider2 />
            <Tmp3Cats />
            <Tmp3Pdts />
            <Footer />
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

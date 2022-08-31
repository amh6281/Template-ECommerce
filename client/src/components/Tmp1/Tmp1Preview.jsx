import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Tmp1 from "../../pages/Tmp1";
import Navbar from "../Navbar";
import Announcement from "../Announcement";
import Tmp1Slider from "./Tmp1Slider";
import SliderCategories from "./SliderCategories";
import Tmp1Products from "./Tmp1Products";
import Footer from "../Footer";

export default function Tmp1Preview() {
  const titles = ["Best Item", "Hot Item", "New Item"];
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
            <Navbar />
            {/* Shop1에서는 카테고리 빼기*/}
            <Announcement />
            <Tmp1Slider />
            <SliderCategories />
            {titles.map((title) => (
              <Tmp1Products title={title} />
            ))}
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

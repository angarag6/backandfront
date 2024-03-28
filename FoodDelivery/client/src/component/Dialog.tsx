import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  PermIdentitySharp,
  ShoppingBasketSharp,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const styles = {
    btn: {
      color: "black",
      "&:hover": {
        backgroundColor: "transparent",
      },
      ungu: {
        color: "green",
      },
    },
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <Button startIcon={<PermIdentitySharp />} sx={styles.btn} onClick={handleClickOpen} disableRipple >
        Нэвтрэх
      </Button>
      <Dialog   open={open} onClose={handleClose}
      PaperProps={{ component: "form", onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }} >
        <DialogTitle display={"flex"} justifyContent={"center"} fontWeight={"700"}>Нэвтрэх</DialogTitle>
        <DialogContent>
          <InputLabel sx={{color:"black"}}>Имэйл</InputLabel>
          <TextField sx={{padding:"10px", backgroundColor:"#F5F5F5"}}  autoFocus required  margin="dense" id="name" name="email" placeholder="Имэйл хаягаа оруулна уу" type="email" fullWidth variant="standard"/>
          <InputLabel  sx={{color:"black"}}>Нууц үг</InputLabel>
          <FormControl fullWidth  variant="filled">
            <FilledInput placeholder="Нууц үг" sx={{ backgroundColor:"#F5F5F5"}}   id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end" >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment> }
            />
          </FormControl>
          <InputLabel   sx={{color:"black", display:"flex", marginTop:"5px", fontSize:"14px",  justifyContent:"flex-end", cursor:"pointer"}}>Нууц үг сэргээх</InputLabel>
        </DialogContent>
        <DialogActions sx={{justifyContent:"center",  width:"100%"}} >
          <Stack display={"flex"}  alignItems={"center"}>
            <Button disabled size="medium" sx={{ color: "black", width: 384, padding: 2, backgroundColor: "#F5F5F5"  }}  >Нэвтрэх</Button>
            <Typography padding={"10px 0px"}>Эсвэл</Typography>
             <Button size="medium" sx={{ color: "black", width: 384, padding: 2,  border: "1px solid green" }}>    
         <Link href={'/signup'}>Бүртгүүлэх</Link>
         </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

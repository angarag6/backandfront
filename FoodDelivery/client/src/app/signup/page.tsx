"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box,Button,Checkbox,FilledInput,FormControl,FormControlLabel,FormGroup, IconButton, InputAdornment,InputLabel, Stack,TextField, Typography, } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const api = "http://localhost:8000/auth/register";

export default function Signup() {
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [showPassword, setShowPassword] = useState(false);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const initialvalues = {
    name: "",
    email: "",
    phonenumber:'',
    password: '',
    repassword: ''
  };
  const router = useRouter();
  const [data, setData] = useState(initialvalues);
  const [error,setError] = useState("");
  const display = () => {console.log(data); };


  const handlerSignup = async (e:React.FormEvent) => {
    e.preventDefault();
    if(!data.name || !data.email || !data.phonenumber || !data.password || !data.repassword){ setError("Мэдээллээ бүрэн гүйцэд оруулна уу!!!"); return;}
    if (data.password !== data.repassword) {setError("Нууц үгээ ижилхэн оруулна уу!!!");}
    try {
      
      const res = await axios.post(api,  data );
      const { success, data } = res.data;
      // console.log("passed dataaaa", data, success);
      if (success === true) {
        // router.push("/dashboard");
        console.log("Success Registered");
      }
    } catch (error) {
      setError("Мэдээллээ шалгана уу");
      console.log("error");
    }
  };

  return (
    <Stack justifyContent={"center"} alignItems={"center"} >
      <Navbar />
      <Stack width={"448px"} padding={"32px"} gap={"16px"}>
        <Typography children="Бүртгүүлэх" sx={{fontSize:"28px", fontWeight:"700", textAlign:"center", color:"#0D1118"}}/>
        <Box>
          <InputLabel children="Нэр"></InputLabel>
          <TextField onChange={(e) =>setData((prev) => ({...prev , name:e.target.value})) }  placeholder="Нэрээ оруулна уу" id="filled-multiline-flexible1" variant="filled" fullWidth />
        </Box>
        <Box>
          <InputLabel children="И-мэйл"></InputLabel>
          <TextField onChange={(e) =>setData((prev) => ({...prev , email:e.target.value})) }  placeholder="Имэйл хаягаа оруулна уу" id="filled-multiline-flexible2" variant="filled" fullWidth />
        </Box>
        <Box>
          <InputLabel children="Утас"></InputLabel>
          <TextField onChange={(e) =>setData((prev) => ({...prev , phonenumber:e.target.value})) }   placeholder="Утсаа оруулна уу" id="filled-multiline-flexible3" variant="filled" fullWidth />
        </Box>
        <Box>
        <InputLabel htmlFor="filled-adornment-password">Нууц үг</InputLabel>
        <FormControl fullWidth variant="filled">
  
          <FilledInput onChange={(e) =>setData((prev) => ({...prev , password:e.target.value})) }   id="filled-adornment-password2" placeholder="Нууц үгээ оруулна уу" type={showPassword ? 'text' : 'password'} endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end" >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </Box>

        <Box>
        <InputLabel htmlFor="filled-adornment-password">Нууц үг давтах</InputLabel>
        <FormControl fullWidth variant="filled">
  
          <FilledInput onChange={(e) =>setData((prev) => ({...prev , repassword:e.target.value})) }  id="filled-adornment-password" placeholder="Нууц үгээ оруулна уу" type={showPassword ? 'text' : 'password'} endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end" >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </Box>
        <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Үйлчилгээний нөхцөл зөвшөөрөх" />
      <Button onClick={display}  variant="contained" color="success">Бүртгүүлэх</Button>

    </FormGroup>    
        
      </Stack>
      <Footer></Footer>
    </Stack>
  );
}

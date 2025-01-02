import React, { useEffect, useState } from "react";
import HeaderSAU from "../components/HeaderSAU.jsx";
import FooterSAU from "../components/FooterSAU.jsx";
import { Link } from "react-router-dom";
import { Box, Typography, Avatar, TextField, Button } from "@mui/material";

function AddMyTravel() {
  const [travellerFullname, setTravellerFullname] = useState("");
  const [travellerEmail, setTravellerEmail] = useState("");
  const [travelId, setTravelId] = useState("");
  const [travelPlace, setTravelPlace] = useState("");
  const [travelStartDate, setTravelStartDate] = useState("");
  const [travelEndDate, setTravelEndDate] = useState("");
  const [travelCostTotal, setTravelCostTotal] = useState("");

  const handleLogoutClick = () => {
    localStorage.removeItem("traveller");
    window.location.href = "/";
  };

  useEffect(() => {
    const traveller = JSON.parse(localStorage.getItem("traveller"));
    if (traveller) {
      setTravellerFullname(traveller.travellerFullname);
      setTravellerEmail(traveller.travellerEmail);
      setTravelId(traveller.travelId);
    } else {
      window.location.href = "/";
    }
  }, []);

  const handleSaveClick = async (e) => {
    e.preventDefault();

    if (
      travelPlace === "" ||
      travelStartDate === "" ||
      travelEndDate === "" ||
      travelCostTotal === ""
    ) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    try {
      const response = await fetch("http://localhost:3030/travel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          travelPlace,
          travelStartDate,
          travelEndDate,
          travelCostTotal,
          travelId,
        }),
      });

      if (response.status === 201) {
        alert("บันทึกการเดินทางเรียบร้อยแล้ว(￣┰￣*)");
        window.location.href = "/mytravel";
      } else {
        alert("เกิดข้อผิดพลาดในการบันทึกการเดินทาง กรุณาลองใหม่อีกครั้ง...");
      }
    } catch (error) {
      alert("เกิดข้อผิดพลาดในการบันทึกการเดินทาง กรุณาลองใหม่อีกครั้ง...");
    }
  };

  return (
    <>
      <HeaderSAU />
      <Button
        variant="text"
        color="error"
        sx={{ display: "block", mx: "auto" }}
        onClick={handleLogoutClick}
      >
        LOGOUT
      </Button>
      <Box sx={{ width: "100%", justifyContent: "center", display: "flex" }}>
        <Box sx={{ width: "70%", boxShadow: 2, my: 2, p: 3 }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", color: "#ffa07a" }}
          >
            My Travel App
          </Typography>
          <Avatar
            alt="Logoapp"
            src="https://media.istockphoto.com/id/1899228994/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B8%84%E0%B8%99%E0%B8%AB%E0%B8%99%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B8%AA%E0%B8%B2%E0%B8%A7%E0%B8%8A%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%AD%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B9%82%E0%B8%A3%E0%B8%94%E0%B8%97%E0%B8%A3%E0%B8%B4%E0%B8%9B%E0%B8%97%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B9%83%E0%B8%99%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%AB%E0%B8%A2%E0%B8%B8%E0%B8%94%E0%B8%A4%E0%B8%94%E0%B8%B9%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%99.jpg?s=1024x1024&w=is&k=20&c=1NJ7fP4Bp9vuP_s3Lp_2x7rIznIZocCKN_YZ0K0N_6M="
            sx={{ width: 100, height: 100, mx: "auto", my: 2 }}
          />
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            เพิ่มการเดินทาง
          </Typography>
          <Box sx={{ my: 2 }} />
          <Typography variant="h6">สถานที่เดินทางไป</Typography>
          <TextField
            id="travelPlace"
            variant="outlined"
            placeholder="Thailand"
            fullWidth
            value={travelPlace}
            onChange={(e) => setTravelPlace(e.target.value)}
          />
          <Typography variant="h6">วันที่ไป</Typography>
          <TextField
            id="travelStartDate"
            variant="outlined"
            placeholder="1 มกราคม 2566"
            fullWidth
            value={travelStartDate}
            onChange={(e) => setTravelStartDate(e.target.value)}
          />
          <Box sx={{ my: 2 }} />
          <Typography variant="h6">วันที่กลับ</Typography>
          <TextField
            id="travelEndDate"
            variant="outlined"
            placeholder="30 มกราคม 2566"
            fullWidth
            value={travelEndDate}
            onChange={(e) => setTravelEndDate(e.target.value)}
          />
          <Box sx={{ my: 2 }} />
          <Typography variant="h6">ค่าใช้จ่ายตลอดทาง</Typography>
          <TextField
            type="number"
            id="travelCostTotal"
            variant="outlined"
            placeholder="0.00"
            fullWidth
            value={travelCostTotal}
            onChange={(e) => setTravelCostTotal(e.target.value)}
          />
          <Box sx={{ my: 2 }} />
          <Button variant="contained" color="primary" onClick={handleSaveClick}>
            บันทึกการเดินทาง
          </Button>
          <Box sx={{ my: 2 }} />
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            <Link to="/mytravel">กลับไปหน้า การเดินทาง</Link>
          </Typography>
        </Box>
      </Box>
      <FooterSAU />
    </>
  );
}

export default AddMyTravel;

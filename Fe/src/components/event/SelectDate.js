import { Alert, Box, Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { PartyImg } from "../../asset";
import { useParams } from "react-router-dom";
import { ServiceApi } from "../../api";

const timeZoneList = ["10:00am", "12:00pm", "2:00pm", "4:00pm", "6:00pm"];
const SelectDate = () => {
  const params = useParams();
  const [packageDetail, setPackageDetail] = useState(null);
  const getPackagedetail = async (id) => {
    try {
      const res = await ServiceApi.getPackageDetailByCustomer(id);
      console.log("🚀 ~ getPackagedetail ~ res:", res);
      setPackageDetail(res);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    const { id } = params;
    if (id) {
      getPackagedetail(id);
    }
  }, [params.id]);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <div>
        {/* Pick a Date :
        <Box
          sx={{
            margin: "10px 0",
          }}
        >
          <DatePicker />
        </Box> */}
        <Stack direction={"column"}>
          <p>Select an item</p>
          <Alert severity="info">
            Pick an available time that you want to reserve next to the desired
            item, then click Next Step.
          </Alert>
          {packageDetail && <CartItem item={packageDetail} />}
        </Stack>
      </div>
    </LocalizationProvider>
  );
};

export default SelectDate;

const CartItem = ({ item }) => {
  /**
       * capacity 
description
packageName

price

services :[2, 3]
venue :"ThuDuc"
       */
  return (
    <Stack
      direction="column"
      sx={{
        margin: "20px 0",
      }}
    >
      <p>{item?.packageName}</p>
      <Stack direction="row" spacing={5}>
        <img src={PartyImg} alt="party img" width={128} height={128} />
        <p>
          Location :{item?.venue}
          <br />
          Total Capacity: {item?.capacity}
        </p>
        <Stack direction={"column"}>
          <p>Time Zone : MST</p>
          <Stack direction={"row"} spacing={3}>
            {timeZoneList?.map((item, index) => (
              <Button
                key={index}
                variant="contained"
                sx={{
                  background: "#f1f1f1",
                  color: "black",
                }}
              >
                {item}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Stack>
      <hr />
    </Stack>
  );
};

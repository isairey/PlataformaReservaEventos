import React, { useEffect, useState } from "react";
import { DashboardLayout } from "../layout";
import { HostApi, ServiceApi } from "../api";
import {
  Autocomplete,
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { Bounce, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTER } from "../util";
// import DatePicker from "react-multi-date-picker";
// import DatePanel from "react-multi-date-picker/plugins/date_panel";
// import TimePicker from "react-multi-date-picker/plugins/time_picker";
const CRUD_Package = () => {
  // const today = new Date();
  // const tomorrow = new Date();
  // const [values, setValues] = useState([today, tomorrow]);

  // tomorrow.setDate(tomorrow.getDate() + 1);

  // init package
  const params = useParams();
  const navigate = useNavigate();
  // Init state
  const [locationList, setLocationList] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  // input value
  const [locationValue, setLocationValue] = useState("");
  const [ServiceId, setServiceId] = useState([]);
  const [namePackage, setNamePackage] = useState("");
  const [descPackage, setDescPackage] = useState("");
  const [capacityPackage, setCapacityPackage] = useState(1);
  const getListAService = async () => {
    try {
      const res = await ServiceApi.getListservice();
      console.log("🚀 ~ getListAService ~ res:", res);
      setServiceList(res);
    } catch (error) {
      alert(error);
    }
  };
  const getListLocation = async () => {
    try {
      const res = await HostApi.getListLocation();
      setLocationList(res);
    } catch (error) {
      alert(error);
    }
  };
  const getPackagedetail = async (id) => {
    try {
      const res = await HostApi.getDetail(id);
      console.log("🚀 ~ getPackagedetail ~ res:", res);
      /**
       * capacity 
description
packageName

price

services :[2, 3]
venue :"ThuDuc"
       */
      setNamePackage(res.packageName);
      setDescPackage(res.description);
      setCapacityPackage(res.capacity);
      setLocationValue(res.venue);
    } catch (error) {
      alert(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !locationValue ||
      ServiceId?.length < 0 ||
      !namePackage ||
      !descPackage ||
      !capacityPackage
    ) {
      toast.error("some field is missing!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    } else {
      const body = {
        description: descPackage,
        capacity: capacityPackage,
        venue: locationValue,
        services: [...ServiceId.map((item) => item.id)],
      };
      !params.id ? (body.name = namePackage) : (body.packageName = namePackage);
      console.log("🚀 ~ handleSubmit ~ body:", body);
      const res = !params?.id
        ? await HostApi.createPackage(body)
        : await HostApi.editPackage(params?.id, body);
      res &&
        toast.success("🦄 create success!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      navigate(ROUTER.PACKAGE_HOST);
    }

    try {
    } catch (error) {
      toast.error("🦄 Something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  useEffect(() => {
    const { id } = params;
    if (id) {
      getPackagedetail(id);
    }
    getListAService();
    getListLocation();
  }, []);

  return (
    <div>
      {" "}
      <DashboardLayout>
        <h1>Create Package</h1>
        <Container
          maxWidth="lg"
          sx={{
            mt: 3,
          }}
        >
          <form>
            <Stack direction={"column"} spacing={1}>
              {/* name */}
              <Stack direction={"column"}>
                <p>Name:</p>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  required
                  value={namePackage}
                  onChange={(e) => setNamePackage(e.target.value)}
                />
              </Stack>
              {/* Description */}
              <Stack direction={"column"}>
                <p>Description:</p>
                <TextField
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  required
                  value={descPackage}
                  onChange={(e) => setDescPackage(e.target.value)}
                />
              </Stack>
              {/* capacity */}
              <Stack direction={"column"}>
                <p>capacity:</p>
                <TextField
                  id="outlined-basic"
                  label="capacity"
                  variant="outlined"
                  type="number"
                  required
                  inputProps={{ min: "0" }}
                  value={capacityPackage}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, "");
                    setCapacityPackage(value);
                  }}
                />
              </Stack>
              {/* capacity */}
              {/* <Stack direction={"column"}>
              <p>Time Slot:</p>
              <DatePicker
                multiple
                value={values}
                onChange={setValues}
                plugins={[<DatePanel />, <TimePicker position="bottom" />]}
                format="MM/DD/YYYY HH:mm:ss"
                minDate={new Date()}
                style={{
                  height: 50,
                  width: "99%",
                }}
              />
            </Stack> */}
              {/* Location */}
              <Stack direction={"column"}>
                <p>Location:</p>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Location"
                  value={locationValue}
                  onChange={(e) => setLocationValue(e.target.value)}
                >
                  {locationList?.length > 0 &&
                    locationList?.map((item, index) => (
                      <MenuItem value={item?.name} key={index}>
                        {item?.name}
                      </MenuItem>
                    ))}
                </Select>
              </Stack>

              {/* Service */}
              <Stack direction={"column"}>
                <p>Service:</p>

                <Autocomplete
                  multiple
                  id="multiple-limit-tags"
                  options={serviceList}
                  getOptionLabel={(option) =>
                    option?.serviceName + " " + option?.price + "$"
                  }
                  defaultValue={[]}
                  value={ServiceId}
                  onChange={(e, value) => setServiceId(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Service"
                      placeholder="Service"
                    />
                  )}
                  // sx={{ width: "500px" }}
                />
              </Stack>
              <Button type="submit" onClick={handleSubmit} variant="contained">
                {params.id ? "Edit" : "Create"}
              </Button>
            </Stack>
          </form>
        </Container>
      </DashboardLayout>
    </div>
  );
};

export default CRUD_Package;

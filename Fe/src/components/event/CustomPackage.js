import { Box, Button, Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import { giftImg } from "../../asset";
import AddIcon from "@mui/icons-material/Add";
import ModalBuyService from "../ModalBuyService";
import SignatureCanvas from "react-signature-canvas";
import "./style.css";

const CustomPackage = () => {
  const [openPopupBuy, setOpenPopupBuy] = useState(false);
  let sigPad = {};

  return (
    <Box
      sx={{
        margin: "20px 0 ",
      }}
    >
      Customize your event using the sections below. If there is anything you
      still need that you don't see here, tell us in the notes section on the
      next step.
      <h3>Add Product</h3>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          color: "#2e2e2e",
          padding: "10px 19px",
          background: "#f5f5f5",
          marginTop: "30px  !important",
        }}
      >
        {Array.from(Array(8)).map((_, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            <CardProduct handleOpen={() => setOpenPopupBuy(true)} />
          </Grid>
        ))}
      </Grid>
      <h3>Sign Waiver: Birthday Waiver</h3>
      <Stack
        direction={"column"}
        sx={{
          background: "#f5f5f5",
          padding: "19px",
        }}
      >
        {/* text */}
        <Policy />
        <div className="sigContainer">
          <SignatureCanvas
            penColor="black"
            canvasProps={{ width: 1114, height: 200, className: "sigCanvas" }}
            ref={(ref) => {
              sigPad = ref;
            }}
          />
        </div>
      </Stack>
      <ModalBuyService
        open={openPopupBuy}
        handleClose={() => setOpenPopupBuy(false)}
      />
    </Box>
  );
};

export default CustomPackage;

const CardProduct = ({ item, handleOpen }) => {
  return (
    <Stack direction={"column"}>
      <Stack direction={"row"} justifyContent={"center"}>
        {" "}
        <img src={giftImg} alt="gift" width={150} height={150} />
      </Stack>
      <p
        style={{
          margin: "0",
          marginTop: "5px",
          textAlign: "center",
        }}
      >
        Goodie Bag (each)
      </p>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        sx={{
          marginTop: "10px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: "#f8c853",
            width: "150px",
          }}
          onClick={handleOpen}
        >
          <AddIcon />
          Add
        </Button>
      </Stack>
    </Stack>
  );
};

const Policy = () => (
  <div
    id="waiver-content"
    style={{
      height: "250px",
      overflow: "auto",
      border: "none",
      background: "white",
      marginBottom: 20,
      padding: 10,
    }}
  >
    <p align="center" style={{ marginBottom: ".0001pt", textAlign: "center" }}>
      &nbsp;
    </p>
    <p align="center" style={{ marginBottom: ".0001pt", textAlign: "center" }}>
      <strong style={{ fontSize: "1.5em" }}>
        <span style={{ textDecorationLine: "underline" }}>
          <span lang="EN-CA" style={{ fontSize: "10.0pt", lineHeight: "107%" }}>
            BIRTHDAY PACKAGE, FACILITY RENTAL AND WAIVER AGREEMENT
          </span>
        </span>
      </strong>
      <br />
    </p>
    <p align="center" style={{ marginBottom: ".0001pt", textAlign: "center" }}>
      <strong>
        <span style={{ textDecoration: "underline" }}>
          <span lang="EN-CA" style={{ fontSize: "10.0pt", lineHeight: "107%" }}>
            $150.00+GST (PER ROOM) NON-REFUNDABLE DEPOSIT REQUIRED TO RESERVE
            PARTY DATE AND TIME
          </span>
        </span>
      </strong>
    </p>
    <p align="center" style={{ marginBottom: ".0001pt", textAlign: "center" }}>
      <strong>
        <span style={{ textDecoration: "underline" }}>
          <span
            lang="EN-CA"
            style={{ fontSize: "10.0pt", lineHeight: "107%" }}
          />
        </span>
      </strong>
      <strong />
    </p>
    <p align="center" style={{ textAlign: "center" }}>
      <strong>
        <span style={{ textDecoration: "underline" }}>
          <span lang="EN-CA" style={{ fontSize: "10.0pt", lineHeight: "107%" }}>
            WAIVER AND RELEASE AGREEMENT
          </span>
        </span>
      </strong>
    </p>
    <p data-level={1} data-list={0} style={{ textIndent: "-.25in" }}>
      <span
        lang="EN-CA"
        style={{
          fontSize: "12.0pt",
          lineHeight: "107%",
          fontFamily: "Symbol",
        }}
      >
        <span>
          
          <span style={{ font: '7.0pt "Times New Roman"' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
        </span>
      </span>
      <span lang="EN-CA" style={{ fontSize: "9.0pt", lineHeight: "107%" }}>
        I, the host of this event understand that The Big Box – Family
        Entertainment Hub has facilities that involve physical movements and
        exertion. It includes Indoor playground, Aerial Rope Course, Virtual
        Reality, Bumper cars, Arcade and others. As is the case with any
        physical activity, the risk of injury, even serious or disabling, is
        always present and cannot be entirely eliminated. I understand that, as
        a host, it is my responsibility to make sure that all children attending
        the party have their waivers signed by their respective parents before
        they engage in physical activity. In case of a child missing a signed
        waiver, I agree to assume full responsibility for any risks, injuries or
        damages, known or unknown, which any child in the birthday group might
        incur as a result of participating in the program or event. In further
        consideration of my child being permitted to participate in a The Big
        Box – Family Entertainment Hub, I expressly irrevocably release and
        waive any claims that I have now or may have hereafter for any reason
        against The Big Box – Family Entertainment Hub, its owners, employees
        and independent contractors, for injury or damages that any child in the
        birthday party may sustain as a result of participating in The Big Box –
        Family Entertainment Hub.
      </span>
      <strong>
        <span style={{ textDecoration: "underline" }} />
      </strong>
    </p>
    <p
      data-level={1}
      data-list={0}
      style={{ textAlign: "justify", textIndent: "-.25in" }}
    >
      <span
        lang="EN-CA"
        style={{
          fontSize: "9.0pt",
          lineHeight: "107%",
          fontFamily: "Symbol",
        }}
      >
        <span>
          
          <span style={{ font: '7.0pt "Times New Roman"' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
        </span>
      </span>
      <span lang="EN-CA" style={{ fontSize: "9.0pt", lineHeight: "107%" }}>
        I, the host of this event at The Big Box – Family Entertainment Hub.{" "}
      </span>
      <span lang="EN-CA" style={{ fontSize: "9.0pt", lineHeight: "107%" }}>
        I have read the “liability and hold harmless agreement” agreement and
        fully understand its contents, and I have the full right and authority
        to execute this release and permission.
      </span>
    </p>
    <p
      data-level={1}
      data-list={0}
      style={{ textAlign: "justify", textIndent: "-.25in" }}
    >
      <span
        lang="EN-CA"
        style={{
          fontSize: "9.0pt",
          lineHeight: "107%",
          fontFamily: "Symbol",
        }}
      >
        <span>
          
          <span style={{ font: '7.0pt "Times New Roman"' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
        </span>
      </span>
      <span lang="EN-CA" style={{ fontSize: "9.0pt", lineHeight: "107%" }}>
        I, the host of this event at The Big Box – Family Entertainment Hub. I
        give consent for the children in my party to be able to enter and exit
        the Leisure Lagoon without adult supervision on my party’s designated
        date. I acknowledge the safety procedures and risks involved and I have
        the full right and authority to execute this release and permission.
      </span>
    </p>
    <p>
      <strong>
        <span lang="EN-CA" style={{ fontSize: "9.0pt", lineHeight: "107%" }}>
          I agree that all information listed below is correct and has my final
          approval. Any extra food requirements will be directly processed at
          the kitchen by myself
        </span>
      </strong>
      <span lang="EN-CA" style={{ fontSize: "9.0pt", lineHeight: "107%" }}>
        .<span>&nbsp;</span>
      </span>
    </p>
    <p>&nbsp;</p>
    <p
      style={{
        marginTop: "0.05pt",
        textAlign: "center",
        lineHeight: "13.8px",
      }}
    >
      <strong>
        <span
          style={{
            fontSize: "18pt",
            lineHeight: "27.6px",
            fontFamily: "Arial, sans-serif",
            color: "#2f4b41",
          }}
        >
          COVID-19 WAIVER
        </span>
      </strong>
    </p>
    <p
      style={{
        margin: "0in 8.75pt 0.0001pt 5pt",
        textAlign: "justify",
        lineHeight: "13.8px",
      }}
    >
      <span
        style={{
          fontSize: "11pt",
          lineHeight: "16.8667px",
          fontFamily: "Arial, sans-serif",
          color: "#141415",
          letterSpacing: "0.05pt",
        }}
      >
        I
      </span>
      <span
        style={{
          fontSize: "11pt",
          lineHeight: "16.8667px",
          fontFamily: "Arial, sans-serif",
          color: "#141415",
        }}
      >
        ,&nbsp;
        <span style={{ letterSpacing: "0.15pt" }}>
          as primary member of family, along with said number of family
          members,&nbsp;
        </span>
        acce<span style={{ letterSpacing: "-0.15pt" }}>p</span>t&nbsp;
        <span style={{ letterSpacing: "0.05pt" }}>t</span>he
        <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>
        <span style={{ letterSpacing: "0.05pt" }}>f</span>o
        <span style={{ letterSpacing: "-0.05pt" }}>ll</span>o
        <span style={{ letterSpacing: "-0.05pt" }}>wi</span>ng
        <span style={{ letterSpacing: "0.1pt" }}>&nbsp;</span>a
        <span style={{ letterSpacing: "0.05pt" }}>ff</span>
        <span style={{ letterSpacing: "-0.15pt" }}>i</span>
        <span style={{ letterSpacing: "0.05pt" }}>rm</span>
        <span style={{ letterSpacing: "-0.15pt" }}>a</span>
        <span style={{ letterSpacing: "0.05pt" }}>t</span>
        <span style={{ letterSpacing: "-0.05pt" }}>i</span>ons before
        entertaining ourselves at The Big Box – Family Entertainment Hub today:
      </span>
    </p>
    <ul>
      <li>
        <span
          style={{
            fontSize: "11pt",
            lineHeight: "16.8667px",
            fontFamily: "Arial, sans-serif",
            color: "#141415",
          }}
        >
          I<span style={{ letterSpacing: "0.15pt" }}>&nbsp;</span>und
          <span style={{ letterSpacing: "-0.15pt" }}>e</span>
          <span style={{ letterSpacing: "0.05pt" }}>r</span>s
          <span style={{ letterSpacing: "0.05pt" }}>t</span>and
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "0.05pt" }}>t</span>he
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>COVID-19
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.1pt" }}>s</span>y
          <span style={{ letterSpacing: "0.05pt" }}>m</span>p
          <span style={{ letterSpacing: "0.05pt" }}>t</span>
          <span style={{ letterSpacing: "-0.15pt" }}>o</span>
          <span style={{ letterSpacing: "0.05pt" }}>m</span>s
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>and
          <span style={{ letterSpacing: "0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.15pt" }}>a</span>
          <span style={{ letterSpacing: "0.05pt" }}>ff</span>
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>
          <span style={{ letterSpacing: "-0.1pt" }}>r</span>m&nbsp;
          <span style={{ letterSpacing: "0.05pt" }}>t</span>h
          <span style={{ letterSpacing: "-0.15pt" }}>a</span>t&nbsp;
          <span style={{ letterSpacing: "0.05pt" }}>I</span>, as
          <span style={{ letterSpacing: "0.1pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.05pt" }}>w</span>e
          <span style={{ letterSpacing: "-0.05pt" }}>l</span>l as
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>a
          <span style={{ letterSpacing: "-0.05pt" }}>l</span>l&nbsp;
          <span style={{ letterSpacing: "0.05pt" }}>m</span>
          <span style={{ letterSpacing: "-0.15pt" }}>e</span>
          <span style={{ letterSpacing: "0.05pt" }}>m</span>be
          <span style={{ letterSpacing: "0.05pt" }}>r</span>s
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>of&nbsp;
          <span style={{ letterSpacing: "0.05pt" }}>m</span>y
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>househo
          <span style={{ letterSpacing: "-0.05pt" }}>l</span>d, do not
          <span style={{ letterSpacing: "0.15pt" }}>&nbsp;</span>c
          <span style={{ letterSpacing: "-0.15pt" }}>u</span>
          <span style={{ letterSpacing: "0.05pt" }}>rr</span>e
          <span style={{ letterSpacing: "-0.15pt" }}>n</span>
          <span style={{ letterSpacing: "0.05pt" }}>t</span>
          <span style={{ letterSpacing: "-0.05pt" }}>l</span>y
          <span style={{ letterSpacing: "0.1pt" }}>&nbsp;</span>have
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>nor h
          <span style={{ letterSpacing: "-0.15pt" }}>a</span>ve
          <span style={{ letterSpacing: "0.05pt" }}>&nbsp;</span>expe
          <span style={{ letterSpacing: "0.05pt" }}>r</span>
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>enced
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;C</span>
          <span style={{ letterSpacing: "0.05pt" }}>O</span>
          <span style={{ letterSpacing: "-0.15pt" }}>V</span>
          <span style={{ letterSpacing: "0.05pt" }}>I</span>
          <span style={{ letterSpacing: "-0.05pt" }}>D</span>
          <span style={{ letterSpacing: "0.05pt" }}>-</span>
          <span style={{ letterSpacing: "-0.15pt" }}>1</span>9
          <span style={{ letterSpacing: "0.05pt" }}>&nbsp;</span>s
          <span style={{ letterSpacing: "-0.1pt" }}>y</span>
          <span style={{ letterSpacing: "0.05pt" }}>m</span>p
          <span style={{ letterSpacing: "0.05pt" }}>t</span>
          <span style={{ letterSpacing: "-0.15pt" }}>o</span>
          <span style={{ letterSpacing: "0.05pt" }}>m</span>s
          <span style={{ letterSpacing: "0.1pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.05pt" }}>wi</span>
          <span style={{ letterSpacing: "0.05pt" }}>t</span>h
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>n
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "0.05pt" }}>t</span>he
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;l</span>ast
          <span style={{ letterSpacing: "0.15pt" }}>&nbsp;</span>14
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>day
          <span style={{ letterSpacing: "-0.1pt" }}>s</span>.
        </span>
      </li>
      <li>
        <span
          style={{
            fontSize: "11pt",
            lineHeight: "16.8667px",
            fontFamily: "Arial, sans-serif",
            color: "#141415",
          }}
        >
          I<span style={{ letterSpacing: "0.15pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.15pt" }}>a</span>
          <span style={{ letterSpacing: "0.05pt" }}>ff</span>
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>
          <span style={{ letterSpacing: "-0.1pt" }}>r</span>m&nbsp;
          <span style={{ letterSpacing: "0.05pt" }}>t</span>hat
          <span style={{ letterSpacing: "-0.1pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "0.05pt" }}>I</span>, as
          <span style={{ letterSpacing: "0.1pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.05pt" }}>w</span>e
          <span style={{ letterSpacing: "-0.05pt" }}>l</span>l as
          <span style={{ letterSpacing: "-0.15pt" }}>&nbsp;</span>a
          <span style={{ letterSpacing: "-0.05pt" }}>l</span>l&nbsp;
          <span style={{ letterSpacing: "0.05pt" }}>m</span>e
          <span style={{ letterSpacing: "0.05pt" }}>m</span>b
          <span style={{ letterSpacing: "-0.15pt" }}>e</span>
          <span style={{ letterSpacing: "0.05pt" }}>r</span>s
          <span style={{ letterSpacing: "0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.15pt" }}>o</span>f&nbsp;
          <span style={{ letterSpacing: "0.05pt" }}>m</span>y
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>hou
          <span style={{ letterSpacing: "-0.1pt" }}>s</span>eho
          <span style={{ letterSpacing: "-0.05pt" }}>l</span>d,
          <span style={{ letterSpacing: "0.15pt" }}>&nbsp;</span>have
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>not been
          <span style={{ letterSpacing: "0.05pt" }}>&nbsp;</span>d
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>
          <span style={{ letterSpacing: "-0.15pt" }}>a</span>gnosed
          <span style={{ letterSpacing: "0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.05pt" }}>wi</span>
          <span style={{ letterSpacing: "0.05pt" }}>t</span>h
          <span style={{ letterSpacing: "0.1pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.15pt" }}>C</span>
          <span style={{ letterSpacing: "0.05pt" }}>O</span>
          <span style={{ letterSpacing: "-0.05pt" }}>V</span>
          <span style={{ letterSpacing: "0.05pt" }}>I</span>
          <span style={{ letterSpacing: "-0.05pt" }}>D</span>-
        </span>
        <span
          style={{
            fontSize: "11pt",
            lineHeight: "16.8667px",
            fontFamily: "Arial, sans-serif",
            color: "#141415",
          }}
        >
          19<span style={{ letterSpacing: "0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.05pt" }}>wi</span>
          <span style={{ letterSpacing: "0.05pt" }}>t</span>h
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>n
          <span style={{ letterSpacing: "0.05pt" }}>&nbsp;t</span>he
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;l</span>ast 14
          <span style={{ letterSpacing: "0.05pt" }}>&nbsp;</span>da
          <span style={{ letterSpacing: "-0.1pt" }}>y</span>s.
        </span>
      </li>
      <li>
        <span
          style={{
            fontSize: "11pt",
            lineHeight: "16.8667px",
            fontFamily: "Arial, sans-serif",
            color: "#141415",
          }}
        >
          I<span style={{ letterSpacing: "0.15pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.15pt" }}>a</span>
          <span style={{ letterSpacing: "0.05pt" }}>ff</span>
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>
          <span style={{ letterSpacing: "-0.1pt" }}>r</span>m&nbsp;
          <span style={{ letterSpacing: "0.05pt" }}>t</span>ha
          <span style={{ letterSpacing: "-0.05pt" }}>t</span>,&nbsp;
          <span style={{ letterSpacing: "0.05pt" }}>t</span>o
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "0.05pt" }}>m</span>y
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>kno
          <span style={{ letterSpacing: "-0.05pt" }}>w</span>
          <span style={{ letterSpacing: "-0.15pt" }}>l</span>edge,
          <span style={{ letterSpacing: "0.1pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>n
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "0.05pt" }}>t</span>he
          <span style={{ letterSpacing: "0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.05pt" }}>l</span>a
          <span style={{ letterSpacing: "-0.1pt" }}>s</span>t
          <span style={{ letterSpacing: "0.15pt" }}>&nbsp;</span>14
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>days
          <span style={{ letterSpacing: "-0.15pt" }}>&nbsp;</span>we
          <span style={{ letterSpacing: "0.15pt" }}>&nbsp;</span>have
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>not been
          <span style={{ letterSpacing: "0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>n
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>con
          <span style={{ letterSpacing: "0.05pt" }}>t</span>
          <span style={{ letterSpacing: "-0.15pt" }}>a</span>ct
          <span style={{ letterSpacing: "0.15pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.05pt" }}>wi</span>
          <span style={{ letterSpacing: "0.05pt" }}>t</span>h
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>anyone
          <span style={{ letterSpacing: "0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.05pt" }}>w</span>ho has
          <span style={{ letterSpacing: "0.05pt" }}>&nbsp;</span>been
          <span style={{ letterSpacing: "0.05pt" }}>&nbsp;</span>d
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>agnosed
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;wi</span>
          <span style={{ letterSpacing: "0.05pt" }}>t</span>h
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;C</span>
          <span style={{ letterSpacing: "0.05pt" }}>O</span>
          <span style={{ letterSpacing: "-0.05pt" }}>V</span>
          <span style={{ letterSpacing: "0.05pt" }}>I</span>
          <span style={{ letterSpacing: "-0.15pt" }}>D</span>
          <span style={{ letterSpacing: "0.05pt" }}>-</span>19.
        </span>
      </li>
      <li>
        <span
          style={{
            fontSize: "11pt",
            lineHeight: "16.8667px",
            fontFamily: "Arial, sans-serif",
            color: "#141415",
          }}
        >
          I<span style={{ letterSpacing: "0.15pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.15pt" }}>a</span>
          <span style={{ letterSpacing: "0.05pt" }}>ff</span>
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>
          <span style={{ letterSpacing: "-0.1pt" }}>r</span>m&nbsp;
          <span style={{ letterSpacing: "0.05pt" }}>t</span>hat
          <span style={{ letterSpacing: "-0.1pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "0.05pt" }}>i</span>f we&nbsp;
          <span style={{ letterSpacing: "-0.05pt" }}>t</span>
          <span style={{ letterSpacing: "0.05pt" }}>r</span>ave
          <span style={{ letterSpacing: "-0.05pt" }}>l</span>ed
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>ou
          <span style={{ letterSpacing: "0.05pt" }}>t</span>s
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>de
          <span style={{ letterSpacing: "0.05pt" }}>&nbsp;</span>of&nbsp;
          <span style={{ letterSpacing: "-0.05pt" }}>C</span>a
          <span style={{ letterSpacing: "-0.05pt" }}>n</span>ada
          <span style={{ letterSpacing: "0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>n
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "0.05pt" }}>t</span>he
          <span style={{ letterSpacing: "-0.2pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.05pt" }}>l</span>ast&nbsp;
          <span style={{ letterSpacing: "0.05pt" }}>m</span>on
          <span style={{ letterSpacing: "0.05pt" }}>t</span>
          <span style={{ letterSpacing: "-0.15pt" }}>h</span>, I
          <span style={{ letterSpacing: "0.15pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>so
          <span style={{ letterSpacing: "-0.05pt" }}>l</span>a
          <span style={{ letterSpacing: "0.05pt" }}>t</span>ed
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;i</span>n
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "0.05pt" }}>m</span>y
          <span style={{ letterSpacing: "0.1pt" }}>&nbsp;</span>h
          <span style={{ letterSpacing: "-0.15pt" }}>o</span>
          <span style={{ letterSpacing: "0.05pt" }}>m</span>e
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "0.05pt" }}>f</span>
          <span style={{ letterSpacing: "-0.15pt" }}>o</span>r
          <span style={{ letterSpacing: "0.1pt" }}>&nbsp;</span>14
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>days upon
          <span style={{ letterSpacing: "0.05pt" }}>&nbsp;m</span>y
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "0.05pt" }}>r</span>
          <span style={{ letterSpacing: "-0.15pt" }}>e</span>
          <span style={{ letterSpacing: "0.05pt" }}>t</span>u
          <span style={{ letterSpacing: "0.05pt" }}>r</span>
          <span style={{ letterSpacing: "-0.15pt" }}>n</span>.
        </span>
      </li>
      <li>
        <span
          style={{
            fontSize: "11pt",
            lineHeight: "16.8667px",
            fontFamily: "Arial, sans-serif",
            color: "#141415",
            letterSpacing: "0.05pt",
          }}
        >
          I
        </span>
        <span
          style={{
            fontSize: "11pt",
            lineHeight: "16.8667px",
            fontFamily: "Arial, sans-serif",
            color: "#141415",
          }}
        >
          f a<span style={{ letterSpacing: "0.05pt" }}>&nbsp;</span>p
          <span style={{ letterSpacing: "-0.15pt" }}>o</span>
          <span style={{ letterSpacing: "0.05pt" }}>t</span>en
          <span style={{ letterSpacing: "0.05pt" }}>t</span>
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>al&nbsp;
          <span style={{ letterSpacing: "-0.15pt" }}>C</span>
          <span style={{ letterSpacing: "0.05pt" }}>O</span>
          <span style={{ letterSpacing: "-0.05pt" }}>V</span>
          <span style={{ letterSpacing: "0.05pt" }}>I</span>
          <span style={{ letterSpacing: "-0.05pt" }}>D</span>
          <span style={{ letterSpacing: "0.05pt" }}>-</span>19
          <span style={{ letterSpacing: "-0.2pt" }}>&nbsp;</span>exposu
          <span style={{ letterSpacing: "0.05pt" }}>r</span>e
          <span style={{ letterSpacing: "0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.15pt" }}>o</span>ccu
          <span style={{ letterSpacing: "0.05pt" }}>r</span>s
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>at
          <span style={{ letterSpacing: "-0.1pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "0.05pt" }}>t</span>h
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>s
          <span style={{ letterSpacing: "0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.15pt" }}>b</span>us
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>ness, I
          <span style={{ letterSpacing: "0.15pt" }}>&nbsp;</span>co
          <span style={{ letterSpacing: "-0.15pt" }}>n</span>sent&nbsp;
          <span style={{ letterSpacing: "0.05pt" }}>t</span>o
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>p
          <span style={{ letterSpacing: "0.05pt" }}>r</span>
          <span style={{ letterSpacing: "-0.15pt" }}>o</span>v
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>de
          <span style={{ letterSpacing: "0.05pt" }}>&nbsp;our</span>
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>na
          <span style={{ letterSpacing: "0.05pt" }}>m</span>e
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>and con
          <span style={{ letterSpacing: "0.05pt" }}>t</span>act&nbsp;
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>n
          <span style={{ letterSpacing: "0.05pt" }}>f</span>
          <span style={{ letterSpacing: "-0.15pt" }}>o</span>
          <span style={{ letterSpacing: "0.05pt" }}>rm</span>
          <span style={{ letterSpacing: "-0.15pt" }}>a</span>
          <span style={{ letterSpacing: "0.05pt" }}>t</span>
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>on
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "0.05pt" }}>t</span>o
          <span style={{ letterSpacing: "0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.05pt" }}>A</span>
          <span style={{ letterSpacing: "-0.15pt" }}>l</span>be
          <span style={{ letterSpacing: "0.05pt" }}>rt</span>a
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;H</span>ea
          <span style={{ letterSpacing: "-0.05pt" }}>l</span>
          <span style={{ letterSpacing: "0.05pt" }}>t</span>h
          <span style={{ letterSpacing: "0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "-0.05pt" }}>S</span>e
          <span style={{ letterSpacing: "-0.1pt" }}>r</span>v
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>ces
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>
          <span style={{ letterSpacing: "0.05pt" }}>f</span>or&nbsp;
          <span style={{ letterSpacing: "0.05pt" }}>t</span>he
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>pu
          <span style={{ letterSpacing: "0.05pt" }}>r</span>pose
          <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>of co
          <span style={{ letterSpacing: "-0.15pt" }}>n</span>
          <span style={{ letterSpacing: "0.05pt" }}>t</span>act&nbsp;
          <span style={{ letterSpacing: "-0.05pt" }}>t</span>
          <span style={{ letterSpacing: "-0.1pt" }}>r</span>ac
          <span style={{ letterSpacing: "-0.05pt" }}>i</span>ng.
        </span>
      </li>
    </ul>
    <p
      style={{
        marginTop: "0.45pt",
        textAlign: "justify",
        lineHeight: "13.8px",
      }}
    >
      <span
        style={{
          fontSize: "11pt",
          lineHeight: "16.8667px",
          fontFamily: "Arial, sans-serif",
          color: "#141415",
          letterSpacing: "-0.05pt",
        }}
      >
        B
      </span>
      <span
        style={{
          fontSize: "11pt",
          lineHeight: "16.8667px",
          fontFamily: "Arial, sans-serif",
          color: "#141415",
        }}
      >
        y<span style={{ letterSpacing: "0.1pt" }}>&nbsp;</span>s
        <span style={{ letterSpacing: "-0.05pt" }}>i</span>gn
        <span style={{ letterSpacing: "-0.05pt" }}>i</span>ng
        <span style={{ letterSpacing: "0.05pt" }}>&nbsp;t</span>h
        <span style={{ letterSpacing: "-0.05pt" }}>i</span>s
        <span style={{ letterSpacing: "-0.05pt" }}>&nbsp;</span>
        <span style={{ letterSpacing: "0.05pt" }}>f</span>o
        <span style={{ letterSpacing: "-0.1pt" }}>rm</span>, I
        <span style={{ letterSpacing: "0.15pt" }}>&nbsp;</span>a
        <span style={{ letterSpacing: "-0.1pt" }}>c</span>kno
        <span style={{ letterSpacing: "-0.05pt" }}>wl</span>edge
        <span style={{ letterSpacing: "0.05pt" }}>&nbsp;t</span>hat I am aware
        of the risks involved and give consent to use the facility.
      </span>
    </p>
    <p style={{ lineHeight: "normal" }}>
      <strong>
        <span
          lang="EN-CA"
          style={{
            fontSize: "10pt",
            fontFamily: "Arial, sans-serif",
            color: "#333333",
          }}
        >
          I HAVE READ THE ABOVE WAIVER AND BY SIGNING IT I AGREE IT IS MY
          INTENTION TO EXEMPT AND RELIEVE “THE BIG BOX - FAMILY ENTERTAINMENT
          HUB” FROM ALL LIABILITY ARISING FROM UTILIZING THE FACILITIES.
        </span>
      </strong>
    </p>
    <p>
      <span lang="EN-CA" style={{ fontSize: "9.0pt", lineHeight: "107%" }}>
        <span>&nbsp;</span>
      </span>
    </p>
  </div>
);

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import { giftImg } from "../asset";

const style = {
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  //   p: 4,
};

export default function ModalBuyService({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction={"column"}>
            <Box
              sx={{
                background: "#f5f5f5",
                height: "46px",
                textAlign: "center",
              }}
            >
              <h4>Product Infomation</h4>
            </Box>
            <Stack
              direction={"row"}
              sx={{
                p: 3,
              }}
            >
              <img src={giftImg} alt="gift" width={200} height={200} />
              <Stack
                direction={"column"}
                sx={{
                  ml: 2,
                }}
              >
                <p
                  style={{
                    lineHeight: "28px",
                  }}
                >
                  Upgrade from Classic to Infinite Pass (per kid)
                  <br />
                  $49.99
                  <br />
                  Classic Infinite Upgrade
                </p>

                <p>Quantity</p>
                <input
                  type="number"
                  defaultValue={1}
                  style={{
                    width: 100,
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

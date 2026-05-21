import { Stack } from "@mui/material";
import React from "react";

const Order = () => {
  return (
    <div>
      <div
        style={{
          margin: "20px 0",
        }}
      >
        <table
          className="table table-striped table-hover"
          style={{
            borderBottom: "2px solid #e7e7e7",
          }}
        >
          <thead
            style={{
              backgroundColor: "#e7e7e7",
              height: "36px",
            }}
          >
            <tr>
              <th>Item</th>
              <th
                style={{
                  width: "20%",
                }}
              >
                Quantity
              </th>
              <th
                style={{
                  width: "20%",
                }}
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Stack direction={"row"} spacing={3} alignItems={"center"}>
                  <div className="col-lg-2 col-xs-3 hidden-550">
                    <img
                      src="https://thebigboxstorage.blob.core.windows.net/thebigbox/images/assignment/f6ee011d8f134066a4d5cad369c249e2.jpg"
                      alt="Venue Image"
                      width={49}
                      height={49}
                    />
                  </div>
                  {/* /.col */}
                  <div className="col-lg-10 col-xs-9 col-550-12">
                    <p className="bottommargin-0 lineheight18">
                      <span className="family-avi-medium darkblue">
                        <b>Party Room 1</b>
                        <br />
                        Category:{" "}
                        <b>
                          Book a Party (If less than 48hrs, please email us)
                        </b>
                        <br />
                        Package: <b>Party Classic</b>
                        <br />
                        Location: <b>The Big Box - Family Entertainment Hub</b>
                        <br />
                        <b>
                          Thu Jan 25, 2024
                          <br /> 10:00am - 11:30am (MST)
                        </b>
                        <br />
                        <b>1</b> - # of kids (Max. Room Seating = 16) <br />
                        <b>1</b> - # of adults (Max. Room Seating = 16) <br />
                        <br />
                      </span>
                    </p>
                    <p className="bottommargin-0 lineheight16">
                      <span className="font12 darkblue">
                        10:00am - 11:30am (MST)
                      </span>
                    </p>
                    <p className="bottommargin-0 lineheight16">
                      <span className="font12 darkblue">
                        1 # of kids (Max. Room Seating = 16) , 1 # of adults
                        (Max. Room Seating = 16)
                      </span>
                    </p>
                  </div>
                  {/* /.col */}
                </Stack>
                {/* /.row */}
              </td>
              <td>1</td>
              <td>$299.99</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p
        style={{
          padding: "10px 0",
          borderBottom: "2px solid #e7e7e7",
          textAlign: "end",
          width: 1059,
        }}
      >
        Subtotal : $299.00
      </p>
      <p
        style={{
          padding: "10px 0",
          borderBottom: "2px solid #e7e7e7",
          textAlign: "end",
          width: 1059,
        }}
      >
        Total discount : $00.00
      </p>
      <p
        style={{
          padding: "10px 0",
          borderBottom: "2px solid #e7e7e7",
          textAlign: "end",
          width: 1059,
        }}
      >
        Tax : $15.00
      </p>
      <p
        style={{
          padding: "10px 0",
          borderBottom: "2px solid #e7e7e7",
          textAlign: "end",
          background: "#e7e7e7",
          width: 1059,
          paddingRight: "10px",
        }}
      >
        Grand Total: $314.99
      </p>
    </div>
  );
};

export default Order;

import axios from "axios";
import { NextResponse } from "next/server";

export function GET() {
  console.log("this function is working");
  axios
    .post(
      "https://dev.transfer.slick-pay.com/api/user/transfer",
      {
        amount: 1000,
        rib: "01234567890123456789",
        receiver_uuid: "37990d08-fc51-4c32-ad40-1552d13c00d1",
        returnUrl: "https://my-website.com/thank-you-page",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.SLICK_PAY_API_PUBLIC_KEY || ""}`,
        },
      }
    )
    .then((result) => {
      let response = result.data;

      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  return NextResponse.json({ status: "OK" });
}

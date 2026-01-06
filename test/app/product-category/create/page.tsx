// "use client"

import Layout from "@/components/ui/Layout";
import {Button, TextField } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <Layout>
    <div className="w-full my-4">
      <h1 className="text-black text-bold text-2xl text-shadow-lg/30">
        Prodocut Category Create
      </h1>
      <form action="" className="w-full">
        <div className="grid grid-cols-2 gap-4 my-4">
          <TextField id="name" label="Name" variant="filled" />
          <TextField id="description" label="Description" variant="filled" />
        </div>

        <Button variant="contained">Send</Button>
      </form>
      </div>
    </Layout>
  );
}

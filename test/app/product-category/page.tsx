// 'use server' //untuk defaultnya
'use client' //untuk menjlankan di client

import Layout from "@/components/ui/Layout";
import { service } from "@/services/services";
import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
// import Button from "@/components/ui/Button";
import Button from '@mui/material/Button';
// modal
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Link from "next/link";


const columns: GridColDef[] = [
  { field: 'id', headerName: 'No', width: 100 }, //id ambil dari id kolom db
  { field: 'name', headerName: 'Name', width: 200 }, //name ambil dari nama kolom db
  { field: 'description', headerName: 'Description', width: 300 }
];

export default function Page() {
  const [rows, setRows] = useState<GridRowsProp>([]);
  const getData = async() =>{
    const response = await service('categorie-product');  // ini disamakan dengan route pada file api.php untuk ambil data
    console.log(response);
    setRows(response.data); //ini percobaan

    // pakai ini saja 
    // if(response.error){
    //   setRows([]);
    // } else{
    //   setRows(response.data);
    // }
    // console.log(response);

  };

  useEffect(()=>{
    getData();
  }, []);

  // modal
const style = {
  color: 'black',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return <Layout>
    <div className="flex w-full justify-between items-center my-4">
        <h1 className="text-black text-bold text-3xl text-shadow-lg/30">Product-category</h1>
        {/* button biasa */}
      <Link href="/product-category/create">
      <Button variant="contained">Tambah data</Button>
      </Link>
        {/* button modal */}
      <Button variant="contained" onClick={handleOpen}>Tambah Data Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Input Data
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
    
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>

    <Button/>

  </Layout>


  ;
}

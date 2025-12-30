// 'use server' //untuk defaultnya
'use client' //untuk menjlankan di client

import Layout from "@/components/ui/Layout";
import { service } from "@/services/services";
import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

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



  return <Layout>
    <h1 className="text-black text-bold text-3xl text-shadow-lg/30">Product-category</h1>
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>

  

  </Layout>


  ;
}

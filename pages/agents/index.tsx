import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next/types"
import React from "react";

const Community: NextPage = () => {
    return (
        <div style={{ margin: "20px 0" }}>
            <Stack className="container">Comunity</Stack>
        </div>
    );
}

export default  withLayoutBasic(Community)
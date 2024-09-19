import withLayoutBasic from "@/libs/components/layout/LayoutBasic"
import { Stack } from "@mui/material";
import { NextPage } from "next/types"

const Community: NextPage = () => {
    return (
        <div style={{ margin: "20px 0" }}>
            <Stack className="container">COMUNITY</Stack>
        </div>
    );
}

export default  withLayoutBasic(Community)
import React from 'react';
import Badge from '@mui/material/Badge';

interface Props {
    children: React.ReactNode;
    Content: string
}

function Bedge({ children, Content }: Props) {
    return (
        <Badge badgeContent={Content} sx={{
            "& .MuiBadge-badge": {
                bgcolor: "#FF8501",
                fontFamily: 'Inter',
                // fontSize: "10px",
                color: "white",
                fontWeight: "normal"
            }
        }}>
            {children}
        </Badge>
    )
}

export default Bedge
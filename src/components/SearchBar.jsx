import React from 'react'
import { Paper, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Search } from "@mui/icons-material"

function SearchBar() {
    return (
        <Paper
            component="form"
            onSubmit={() => { }}

            sx={{
                borderRadius: 20,
                border: "1px solid #e3e3e3",
                pl: 2,
                boxShadow: "none",
                mr: { sm: 5 }
            }}

        >
                    <input type="text" value="" placeholder='Search...' className='search-bar' 
                    onChange={()=>{}} />
                    <IconButton type='submit' sx={{p:"10px",color:"red"}}>
                        <Search/>
                    </IconButton>

        </Paper>


    )
}

export default SearchBar

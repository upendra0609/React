import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';

export default function Data() {

    const [form, setForm] = useState({
        name:'',
        email:''
    });

    const [data, setData] = useState([]);

    const addData = () => {
        setData([...data, form]);
        setForm(form)
    }

    const remove =(index)=>{
        let arr = data;
        arr.splice(index,1);
        setData([...arr]);
      }

    return (
        <div className='form'>
            <Stack spacing={2} direction="row">
                <TextField id="outlined-basic" value={form.name} onChange={(event) => setForm({...form, name:event.target.value})} label="name" variant="outlined" />
                <TextField id="outlined-basic" value={form.email} onChange={(event) => setForm({...form, email:event.target.value})} label="email" variant="outlined" />
                <Button variant="contained" onClick={addData}>
                    <AddIcon></AddIcon>
                </Button>
            </Stack>
            <div>
                <h2>Sno    Name     Email     Remove</h2>
                <h3>
                {
                            data.map((user, index) => {
                                return (
                                <div key={index}>
                                        {index + 1}.   {user.name}     {user.email}
                                        <Button variant="outlined" color="error" onClick={()=>remove(index)}>Remove</Button>
                                </div>
                                )
                            })
                        }
                </h3>
            </div>
        </div>
    )
}

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';

export default function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [data, setData] = useState([]);

    const addData = () => {
        setData([...data, { name: name, email: email }]);
        setName("");
        setEmail("");
    }

    const remove =(index)=>{
        let arr = data;
        arr.splice(index,1);
        setData([...arr]);
      }

    return (
        <div className='form'>
            <Stack spacing={2} direction="row">
                <TextField id="outlined-basic" value={name} onChange={(event) => setName(event.target.value)} label="name" variant="outlined" />
                <TextField id="outlined-basic" value={email} onChange={(event) => setEmail(event.target.value)} label="email" variant="outlined" />
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

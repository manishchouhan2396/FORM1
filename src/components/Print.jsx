import React, { useState, useEffect } from 'react'
import Reactform from './Reactform'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Showdata from "../components/Showdata"
import {
    Table,
    Thead,
    Tr,
    Th,
    TableContainer,
} from '@chakra-ui/react'

const Print = () => {

    const [newlist, setNewlist] = useState([])
    const [list, setList] = useState([])

    const getdata1 = async (e) => {
        const data = {
            id: uuidv4(),
            username: e.username,
            age: e.age,
            address: e.address,
            salary: e.salary,
            department: e.department,
            state: e.state
        };
        setList([...list, data])
        // console.log(data)

        try {
            let res = await fetch("http://localhost:8081/form", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                },
            });
            await res.json();
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const getlist = async () => {
            let res = await axios.get("http://localhost:8081/form");
            setNewlist(res.data);
            // console.log(res.data)
        }
        getlist();
    }, [])



    const handleDelete = async (id) => {
        setList(list.filter(list => list.id !== id));

        await fetch(`http://localhost:8081/form/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
        });
    };

    
    
    return (
        <div>
            <Reactform getdata={getdata1} />



            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Age</Th>
                            <Th>Address</Th>
                            <Th>Salary</Th>
                            <Th>Deparment</Th>
                            <Th>Marital Status</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                </Table>
            </TableContainer>
            {newlist.map((e) => (
                <Showdata key={e.id} value={e}   handleDelete={handleDelete} />
            ))}
        </div>

    )
}

export default Print

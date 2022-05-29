import React, { useState } from 'react'
import "../components/ReactStyle.css"

const Reactform = ({ getdata }) => {
    // const [form1 , setForm1] = useState([])
    const [form, setForm] = useState({
        username: "",
        age: 0,
        address: "",
        department: "",
        salary: "",
        state: "",
    })


    const onhandleInput = (e) => {
        let { name, value, file, type } = e.target
        // console.log(value)
        if (type === "file") {
            setForm({
                ...form,
                [name]: file,
            })
        } else {
            setForm({
                ...form,
                [name]: value,
            })
        }
    }

    console.log("m",form)
    const onhanbleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        getdata(form)
    }

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={onhanbleSubmit}>

                <div>
                    <label>Name   :</label>
                    <input type="text"
                        placeholder="Enter Name"
                        name="username"
                        value={form.name}
                        onChange={onhandleInput}
                    />
                </div>
                <div>
                    <label>Age   :</label>
                    <input type="Number"
                        placeholder="Enter Age"
                        name="age"
                        value={form.age}
                        onChange={onhandleInput}
                    />
                </div>
                <div>
                    <label>Address :</label>
                    <input type="text"
                        placeholder="Enter Address"
                        name="address"
                        value={form.address}
                        onChange={onhandleInput}
                    />
                </div>
                <div>
                    <label>Deparment :</label>
                    <select name="department" value={form.department} onChange={onhandleInput}>
                        <option >Option</option>
                        <option value="Mechanical Engg">Mechanical Engg</option>
                        <option value="Civil Engg">Civil Engg</option>
                        <option value="Chemical Engg">Chemical Engg</option>
                        <option value="Aeronotical Engg"> AeronoticalEngg</option>
                        <option value="Biomedical Engg">Biomedical Engg</option>
                        <option value="Automobile Engg">Automobile Engg</option>
                    </select>
                </div>
                <div>
                    <label>Salary : </label>
                    <input type="number"
                        placeholder='Enter Salary'
                        name="salary"
                        value={form.salary}
                        onChange={onhandleInput}
                    />
                </div>
                <div>
                    <label>Marital State  :</label>
                    <div>
                        <label>Married</label>
                        <input type="radio"
                            name="state"
                            value="married"
                            onChange={onhandleInput}
                        />
                        <label>Single</label>
                        <input type="radio"
                            name="state"
                            value="Single"
                            onChange={onhandleInput}
                        />
                    </div>
                </div>
                <div>
                    <label>Image :</label>
                    <input type="file"
                        name="image"
                        accept='.png , .jpg ,.jpeg'
                        value={form.image}
                        onChange={onhandleInput}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Reactform

import React, { useState } from 'react';


const Form = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        age: 0,
        isIndian: false,
        city: ""
    })

    const handOnChange = (e) => {
        let { name, value, checked, type, files } = e.target;

        // console.log(value, checked)

        if (type === 'checked') {
            setForm({
                ...form,
                [name]: checked,
            });
        } else if (type === 'files') {
            setForm({
                ...form,
                [name]: files,
            });
        } else {
            setForm({
                ...form,
                [name]: value,
            });
        }

    };

    const hanleOnSubmit = (e) => {
        e.preventDefault();
        // console.log(form);
    }


    return (
        <div>
            <form onSubmit={hanleOnSubmit}>
                Form

                

                <div>
                    <label>Name :</label>
                    <input type="text"
                        name="username"
                        placeholder="Enter Name...."
                        value={form.username}
                        onChange={handOnChange}
                        variant='outline'
                    />
                </div>

                <div>
                    <label>Age :</label>
                    <input type="number"
                        name="age"
                        placeholder="Enter Age...."
                        value={form.age}
                        onChange={handOnChange}
                    />
                </div>
                <div>
                    <label>Email :</label>
                    <input type="email"
                        name="email"
                        placeholder="Enter Email...."
                        value={form.email}
                        onChange={handOnChange}
                    />
                </div>
                <div>
                    <label>Password :</label>
                    <input type="password"
                        name="password"
                        placeholder="Enter Password...."
                        value={form.password}
                        onChange={handOnChange}
                    />
                </div>

                <div>
                    <label>: Is Indian</label>
                    <input type="checkbox"
                        name="isIndian"
                        checked={form.isIndian}
                        onChange={handOnChange}
                    />
                </div>
                <div>
                    <div>
                        <label>Male</label>
                        <input type="radio"
                            name="gender"
                            value="male"
                            onChange={handOnChange}
                        />
                    </div>
                    <div>
                        <label>Female</label>
                        <input type="radio"
                            name="gender"
                            value="female"
                            onChange={handOnChange}
                        />
                    </div>
                </div>
                <div>
                    <label> User Resume</label>
                    <input type="file"
                        name="resume"
                        value={form.resume}
                        onChange={handOnChange}
                    />
                </div>
                <div>
                    <label> User Resume</label>
                    <select name="city" value={form.city} onChange={handOnChange}>
                        <option value="Delhi">Delhi</option>
                        <option value="Pune">Pune</option>
                        <option value="BangaNagpurluru">BangaNagpurluru</option>
                        <option value="Nagpur">Nagpur</option>
                    </select>Pune
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form


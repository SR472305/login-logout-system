import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [Data, setData] = useState([]);

    const vailddata = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        datatransfer();
    }, [])

    const datatransfer = () => {
        fetch(vailddata)
            .then((resp) => {
                return resp.json()
            })

            .then((Data) => {
                console.log(Data);

                setData(Data)
            })

    }
    return (
        <div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.map((detail) => (


                        <tr key={detail.id}>
                            <td>{detail.name}</td>
                            <td>{detail.username}</td>
                            <td>{detail.email}</td>
                            <td>{detail.phone}</td>
                            <td>{detail.company}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}


    export default Fetch

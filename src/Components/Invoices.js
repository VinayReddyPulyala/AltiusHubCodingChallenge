import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Invoices = () => {
    let [invoices, setInvoices] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        let fetchdata = async () => {
            let {data} = await axios.get("./../data.json");
            console.log(data);
            setInvoices(data);
        }
        fetchdata();
    }, []);

    if (invoices.length === 0) {
        return (
            <>
                <h1>Sorry! No Data Available</h1>
            </>
        )
    }
    else {
        return (
            <div class="col-10 p-5">
                <div className='d-flex justify-content-center my-4'>
                    <button className='btn btn-primary' onClick={()=>{
                        navigate("/InvoiceDetailComponent/0");
                    }}>Add</button>
                </div>
                <table class="table table-hover mx-2"> 
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Date</th>
                            <th>Invoice_Number</th>
                            <th>Customer_Name</th>
                            <th>Billing_Address</th>
                            <th>Shipping_Address</th>
                            <th>GSTIN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            invoices.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{val.Id}</td>
                                        <td>{val.Date}</td>
                                        <td>{val.InvoiceNumber}</td>
                                        <td>{val.CustomerName}</td>
                                        <td>{val.BillingAddress}</td>
                                        <td>{val.ShippingAddress}</td>
                                        <td>{val.GSTIN}</td>
                                        <td>{val.Amount}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Invoices

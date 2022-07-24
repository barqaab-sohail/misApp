import React, { useEffect, useState } from "react";
import "../../../css/card.css";

const Card = (props) => {
    const [employee, setEmployee] = useState([]);
    const getData = async () => {
        const response = await fetch(
            "http://192.168.0.121/misApp/public/api/allEmployees"
        );
        setEmployee(await response.json());
    };
    useEffect(() => {
        getData();
    }, []);
    const color = 'white';
    return (
        <>
            <div className="col-md-4 col-xl-3">
            <div className={"card order-card "+props.backgroundColor}>
                    <div className="card-block" >
                        <h1 className="m-b-20">{props.title}</h1>
                        <h1 className="text-right ">
                            <span>{employee[props.quantity]}</span>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;

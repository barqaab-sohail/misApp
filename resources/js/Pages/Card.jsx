import React, { useEffect, useState } from "react";
import "../../css/card.css";

const Card = (props) => {
    const [employee, setEmployee] = useState([]);
    const getData = async () => {
        const response = await fetch(
            "http://192.168.1.10/misApp/public/api/allEmployees"
        );
        setEmployee(await response.json());
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-xl-3">
                        <div class="card bg-c-blue order-card">
                            <div class="card-block">
                                <h6 class="m-b-20">Orders Received</h6>
                                <h2 class="text-right">
                                    <i class="fa fa-cart-plus f-left"></i>
                                    <span>486</span>
                                </h2>
                                <p class="m-b-0">
                                    Completed Orders
                                    <span class="f-right">351</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-xl-3">
                        <div class="card bg-c-green order-card">
                            <div class="card-block">
                                <h6 class="m-b-20">Orders Received</h6>
                                <h2 class="text-right">
                                    <i class="fa fa-rocket f-left"></i>
                                    <span>486</span>
                                </h2>
                                <p class="m-b-0">
                                    Completed Orders
                                    <span class="f-right">351</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-xl-3">
                        <div class="card bg-c-yellow order-card">
                            <div class="card-block">
                                <h6 class="m-b-20">Orders Received</h6>
                                <h2 class="text-right">
                                    <i class="fa fa-refresh f-left"></i>
                                    <span>486</span>
                                </h2>
                                <p class="m-b-0">
                                    Completed Orders
                                    <span class="f-right">351</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-xl-3">
                        <div class="card bg-c-pink order-card">
                            <div class="card-block">
                                <h6 class="m-b-20">Orders Received</h6>
                                <h2 class="text-right">
                                    <i class="fa fa-credit-card f-left"></i>
                                    <span>486</span>
                                </h2>
                                <p class="m-b-0">
                                    Completed Orders
                                    <span class="f-right">351</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;

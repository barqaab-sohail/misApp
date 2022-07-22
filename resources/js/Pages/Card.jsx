import React, { useEffect } from "react";

const Card = (props) => {
    const getData = async () => {
        const response = await fetch(
            "http://192.168.1.10/misApp/public/api/allEmployees"
        );
        const data = await response.json();
        console.log(data);
    };
    useEffect(() => {
        getData();
    });

    return (
        <>
            <div className={props.className}>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col mt-0">
                                <h5 className="card-title">{props.title}</h5>
                            </div>

                            <div className="col-auto">
                                <div className="stat text-primary">
                                    <i
                                        className="align-middle"
                                        data-feather="truck"
                                    ></i>
                                </div>
                            </div>
                        </div>
                        <h1 className="mt-1 mb-3">50</h1>
                        <div className="mb-0">
                            <span className="text-danger">
                                {" "}
                                <i className="mdi mdi-arrow-bottom-right"></i>{" "}
                                -3.65%{" "}
                            </span>
                            <span className="text-muted">Since last week</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;

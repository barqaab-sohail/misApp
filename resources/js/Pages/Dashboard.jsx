import React, { useContext, useEffect } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import TopHeader from "@/Pages/Layout/TopHead";
import Card from "@/Pages/Layout/Card.jsx";

export default function Dashboard(props) {
    return (
        <>
            {/* <Authenticated
                auth={props.auth}
                errors={props.errors}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Dashboard
                    </h2>
                }
            >
                <Head title="Dashboard" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                                You're logged in!
                            </div>
                        </div>
                    </div>
                </div>
            </Authenticated> */}
            <div className="wrapper">
                <TopHeader name={props.userName} picture={props.picture} />
                <div className="main">
                    <main className="content">
                        <div className="container-fluid">
                            <h1 className="h3 mb-3">
                                <strong>Analytics</strong> Dashboard 
                            </h1>
                            <div className="row">
                                <Card
                                    className={"col-xl-3"}
                                    title={"Total Running Projects"}
                                    quantity={"totalProjects"}
                                    backgroundColor={"bg-c-blue"}
                                />
                                <Card
                                    className={"col-xl-3"}
                                    title={"Total Power Projects"}
                                    quantity={"powerProjects"}
                                    backgroundColor={"bg-c-yellow"}
                                />
                                <Card
                                    className={"col-xl-3"}
                                    title={"Total Water Projects"}
                                    quantity={"waterProjects"}
                                    backgroundColor={"bg-c-green"}
                                />
                                  <Card
                                    className={"col-xl-3"}
                                    title={"Completed Projects"}
                                    quantity={"totalProjects"}
                                    backgroundColor={"bg-c-pink"}
                                />

                            </div>
                        </div>
                    </main>
                </div>
            </div>
         </>
    );
}

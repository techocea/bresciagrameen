import React from "react";
import Migrationloans from "./migrationloans";
import StudentLoans from "./studentloans";
import Westernunion from "./westernunion";
import Goldpawning from "./goldpawning";

const Services = () => {
    return (
        <div className="pt-[80px]">
            <Migrationloans />
            <StudentLoans />
            <Westernunion />
            <Goldpawning />
        </div>
    )
}
export default Services;
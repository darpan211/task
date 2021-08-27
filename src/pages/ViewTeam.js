import React from "react";
import DataList from "../components/DataList";
import {Redirect} from "react-router-dom";

export default function ViewTeam() {
    const rows = [
        {
            id: 1,
            name: "a",
            logo: "aaaa",
            tag_line: "test line",
            created_by: {
                _id: "61164d3ada5347221ded1bc2",
                username: "TEST",
                password: "$2a$08$pHrCWYLBp0UTcbRTOWF1Ge3JNjJbZOmVI8RcHtQ/AFVSdjhn24F.2",
                role: "team",
                createdAt: "2021-08-13T10:45:14.118Z",
                updatedAt: "2021-08-13T10:45:14.118Z",
            }
        },
        {
            id: 2,
            name: "bbbb",
            logo: "bbbbb",
            tag_line: "test line",
            created_by: {
                _id: "61164d3ada5347221ded1bc2",
                username: "TEST",
                password: "$2a$08$pHrCWYLBp0UTcbRTOWF1Ge3JNjJbZOmVI8RcHtQ/AFVSdjhn24F.2",
                role: "team",
                createdAt: "2021-08-13T10:45:14.118Z",
                updatedAt: "2021-08-13T10:45:14.118Z",
            }
        },
        {
            id: 3,
            name: "cccc",
            logo: "cccccc",
            tag_line: "test line",
            created_by: {
                _id: "61164d3ada5347221ded1bc2",
                username: "TEST",
                password: "$2a$08$pHrCWYLBp0UTcbRTOWF1Ge3JNjJbZOmVI8RcHtQ/AFVSdjhn24F.2",
                role: "team",
                createdAt: "2021-08-13T10:45:14.118Z",
                updatedAt: "2021-08-13T10:45:14.118Z",
            }
        },
        {
            id: 4,
            name: "ffff",
            logo: "fffff",
            tag_line: "test line",
            created_by: {
                _id: "61164d3ada5347221ded1bc2",
                username: "TEST",
                password: "$2a$08$pHrCWYLBp0UTcbRTOWF1Ge3JNjJbZOmVI8RcHtQ/AFVSdjhn24F.2",
                role: "team",
                createdAt: "2021-08-13T10:45:14.118Z",
                updatedAt: "2021-08-13T10:45:14.118Z",
            }
        },
        {
            id: 5,
            name: "eeee",
            logo: "eeeee",
            tag_line: "test line",
            created_by: {
                _id: "61164d3ada5347221ded1bc2",
                username: "TEST",
                password: "$2a$08$pHrCWYLBp0UTcbRTOWF1Ge3JNjJbZOmVI8RcHtQ/AFVSdjhn24F.2",
                role: "team",
                createdAt: "2021-08-13T10:45:14.118Z",
                updatedAt: "2021-08-13T10:45:14.118Z",
            }
        },
        {
            id: 6,
            name: "ddddd",
            logo: "ddddd",
            tag_line: "test line",
            created_by: {
                _id: "61164d3ada5347221ded1bc2",
                username: "TEST",
                password: "$2a$08$pHrCWYLBp0UTcbRTOWF1Ge3JNjJbZOmVI8RcHtQ/AFVSdjhn24F.2",
                role: "team",
                createdAt: "2021-08-13T10:45:14.118Z",
                updatedAt: "2021-08-13T10:45:14.118Z",
            }
        }
    ];
    return (localStorage.getItem("user") ?
            <>
                <DataList data={rows} type={"View Players"}/>
            </> : <Redirect to={'/login'}/>
    )
}
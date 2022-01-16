import React, { useEffect } from 'react'
import './List.css';

export default function List(props) {

    useEffect(() => {
        addList();
    });
    const addList = async () => {
        const list = await select(props.table_name);
        const listDom = document.getElementById(props.table_name);
        while(listDom.firstChild)
            listDom.removeChild(listDom.lastChild);
        let div = document.createElement("div");
        props.headers.forEach((element) => {
            const col = document.createElement("div");
            col.innerText = element;
            div.appendChild(col);
        });
        if(props.headers.length)
            listDom.appendChild(div);

        list.forEach(element => {
            div = document.createElement("div");
            props.cols.forEach((colId) => {
                const col = document.createElement("div");
                col.innerText = element[colId];
                div.appendChild(col);
            })
            if(props.cols.length)
                listDom.appendChild(div);
        });
    }

    const select = async (table_name) => {
        const url = new URL("http://localhost:3000/select");
        const params = {
            table_name: table_name
        }
        url.search = new URLSearchParams(params).toString();
        let data;
        await fetch(url).then(r =>  r.json()
        .then(fetchData => (fetchData)))
        .then(obj => {
            data = obj;
        });
        return data;
    }
    return (
        <div className="List inputBlock">
            <h2>{props.title}</h2>
            <div className='List__block' id={props.table_name}></div>
        </div>
    )
}

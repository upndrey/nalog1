import React from 'react'
import './InsertSysAdmin.css';

export default function InsertSysAdmin() {

    const buttonClickHandler = async () => {
        const name = document.getElementById('name');
        const number = document.getElementById('number');
        const salary = document.getElementById('salary');
        const url = new URL("http://localhost:3000/insertSysAdmin");
        const params = {
            sys_admin_name: name.value,
            sys_admin_number: number.value,
            salary: salary.value
        }
        url.search = new URLSearchParams(params).toString();
        await fetch(url, {mode: 'no-cors'});
        alert("Команда выполнена!");
    }

    return (
        <div className="insertSysAdmin inputBlock">
            <h2>Добавить системного администратора</h2>
            <input type="text" placeholder="ФИО" id='name' />
            <input type="number" placeholder="Номер сотрудника" id='number' />
            <input type="number" placeholder="З/П" id='salary' />
            <button onClick={buttonClickHandler}>Создать</button>
        </div>
    )
}

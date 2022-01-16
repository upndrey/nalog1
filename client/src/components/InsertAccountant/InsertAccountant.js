import React from 'react'
import './InsertAccountant.css';

export default function InsertAccountant() {

    const buttonClickHandler = async () => {
        const name = document.getElementById('accountant_name');
        const number = document.getElementById('accountant_number');
        const salary = document.getElementById('accountant_salary');
        const url = new URL("http://localhost:3000/insertAccountant");
        const params = {
            accountant_name: name.value,
            accountant_number: number.value,
            salary: salary.value
        }
        url.search = new URLSearchParams(params).toString();
        await fetch(url, {mode: 'no-cors'});
        alert("Команда выполнена!");
    }

    return (
        <div className="insertAccountant inputBlock">
            <h2>Добавить бухгалтера</h2>
            <input type="text" 
            placeholder="ФИО" id='accountant_name' />
            <input type="number" 
            placeholder="Номер сотрудника" id='accountant_number' />
            <input type="number" 
            placeholder="З/П" id='accountant_salary' />
            <button onClick={buttonClickHandler}>Создать</button>
        </div>
    )
}

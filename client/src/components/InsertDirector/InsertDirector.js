import React from 'react'
import './InsertDirector.css';

export default function InsertDirector() {

    const buttonClickHandler = async () => {
        const name = document.getElementById('director_name');
        const number = document.getElementById('director_number');
        const salary = document.getElementById('director_salary');
        const url = new URL("http://localhost:3000/insertDirector");
        const params = {
            director_name: name.value,
            director_number: number.value,
            salary: salary.value
        }
        url.search = new URLSearchParams(params).toString();
        await fetch(url, {mode: 'no-cors'});
        alert("Команда выполнена!");
    }

    return (
        <div className="insertDirector inputBlock">
            <h2>Добавить директора</h2>
            <input type="text" placeholder="ФИО" id='director_name' />
            <input type="number" placeholder="Номер отрудника" id='director_number' />
            <input type="number" placeholder="З/П" id='director_salary' />
            <button onClick={buttonClickHandler}>Создать</button>
        </div>
    )
}

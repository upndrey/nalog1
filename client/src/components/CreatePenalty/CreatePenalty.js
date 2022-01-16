import React from 'react'
import './CreatePenalty.css';

export default function CreatePenalty() {

    const buttonClickHandler = async () => {
        const penalty_number = document.getElementById('penalty_number1');
        const name = document.getElementById('penalty_name1');
        const year = document.getElementById('penalty_year1');
        const url = new URL("http://localhost:3000/createPenalty");
        console.log(penalty_number.value);
        const params = {
            penalty_number: penalty_number.value,
            physical_person_name: name.value,
            yearZ: year.value
        }
        url.search = new URLSearchParams(params).toString();
        await fetch(url, {mode: 'no-cors'});
        alert("Команда выполнена!");
    }

    return (
        <div className="createPenalty inputBlock">
            <h2>Назначить штраф физическому лицу за неуплату налогов</h2>
            <input type="number" placeholder="Номер пени" id='penalty_number1' />
            <input type="text" placeholder="ФИО" id='penalty_name1' />
            <input type="number" placeholder="Срок оплаты" id='penalty_year1' />
            <button onClick={buttonClickHandler}>Создать</button>
        </div>
    )
}

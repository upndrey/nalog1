import React from 'react'
import './CheckPenalty.css';

export default function CheckPenalty() {

    const buttonClickHandler = async () => {
        const penalty_id = document.getElementById('penalty_id');
        const penalty_number = document.getElementById('penalty_number');
        const url = new URL("http://localhost:3000/checkPenalty");
        const params = {
            id_penalty: penalty_id.value,
            penalty_number: penalty_number.value
        }
        url.search = new URLSearchParams(params).toString();
        await fetch(url, {mode: 'no-cors'});
        alert("Команда выполнена!");
    }

    return (
        <div className="checkPenalty inputBlock">
            <h2>Проверить штраф</h2>
            <input type="number" 
                placeholder="Номер пени" id='penalty_id' />
            <input type="number"
                placeholder="Номер уведомления" id='penalty_number' />
            <button onClick={buttonClickHandler}>Проверить</button>
        </div>
    )
}

import React from 'react'
import './CreatePhysical.css';

export default function CreatePhysical() {

    const buttonClickHandler = async () => {
        const name = document.getElementById('physical_name');
        const url = new URL("http://localhost:3000/createPhysical");
        const params = {
            physical_person_name: name.value,
        }
        console.log(params);
        url.search = new URLSearchParams(params).toString();
        await fetch(url, {mode: 'no-cors'});
        alert("Команда выполнена!");
    }

    return (
        <div className="createPhysical inputBlock">
            <h2>Добавить физическое лицо</h2>
            <input type="text" name="ФИО" placeholder="name" id='physical_name' />
            <button onClick={buttonClickHandler}>Создать</button>
        </div>
    )
}

import React, { useEffect } from 'react'
import './CreateTransports.css';

export default function CreateTransports() {

    useEffect(() => {
        setSelectors();
    });

    const setSelectors = async () => {
        let accountantsDom = document.getElementById('transport_accountants');
        let accountantsData = await select("accountant");
        accountantsData.forEach(element => {
            let option = document.createElement("option");
            option.value = element[0];
            option.innerText = element[1];
            accountantsDom.appendChild(option);
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

    const buttonClickHandler = async () => {
        const number = document.getElementById('transport_number');
        const name = document.getElementById('transport_name');
        const year = document.getElementById('transport_year');
        const duration = document.getElementById('transport_duration');
        const regional = document.getElementById('transport_regional');
        const increasing = document.getElementById('transport_increasing');
        const preferential = document.getElementById('transport_preferential');
        const accountants = document.getElementById('transport_accountants');
        const url = new URL("http://localhost:3000/createTransports");
        const params = {
            number_calculation_doc: number.value,
            physical_person_name: name.value,
            year_calculation: year.value,
            duration_car_own_per_year: duration.value,
            regional_coefficient: regional.value,
            increasing_coefficient: increasing.value,
            preferential_coefficient: preferential.value,
            id_accontant: accountants.value
        }
        url.search = new URLSearchParams(params).toString();
        await fetch(url, {mode: 'no-cors'});
        alert("Команда выполнена!");
    }

    return (
        <div className="createTransports inputBlock">
            <h2>Рассчитать транспортный налог физлица по всем транспортным средствам, находящимся в пользовании за год</h2>
            <input type="number" 
                placeholder="Номер документа расчета" id='transport_number' />
            <input type="text" 
                placeholder="ФИО" id='transport_name' />
            <input type="number" 
                placeholder="Год расчета" id='transport_year' />
            <input type="number" 
                placeholder="Длительность владения" id='transport_duration' />
            <input type="number" 
                placeholder="Региональный коэффициент" id='transport_regional' />
            <input type="number" 
                placeholder="Повышающий коэффициент" id='transport_increasing' />
            <input type="number" 
                placeholder="Льготный коэффициент" id='transport_preferential' />
            <select defaultValue={'DEFAULT'} id="transport_accountants">
                <option disabled value='DEFAULT'>Выберите бухгалтера</option>
            </select>
            <button onClick={buttonClickHandler}>Создать</button>
        </div>
    )
}

import React, { useEffect } from 'react'
import './CreateLands.css';

export default function CreateLands() {

    useEffect(() => {
        setSelectors();
    });

    const setSelectors = async () => {
        let accountantsDom = document.getElementById('lands_accountants');
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
        const number = document.getElementById('lands_number');
        const name = document.getElementById('lands_name');
        const year = document.getElementById('lands_year');
        const cadastrial = document.getElementById('lands_cadastrial');
        const ownership = document.getElementById('lands_ownership');
        const tax = document.getElementById('lands_tax');
        const preferential = document.getElementById('lands_preferential');
        const accountants = document.getElementById('lands_accountants');
        const url = new URL("http://localhost:3000/createLands");
        const params = {
            number_calculation_doc: number.value,
            physical_person_name: name.value,
            year_calculation: year.value,
            cadastral_value: cadastrial.value,
            time_ownership: ownership.value,
            tax_rate: tax.value,
            preferential_coefficient: preferential.value,
            id_accontant: accountants.value
        }
        url.search = new URLSearchParams(params).toString();
        await fetch(url, {mode: 'no-cors'});
        alert("Команда выполнена!");
    }

    return (
        <div className="createLands inputBlock">
            <h2>Рассчитать годовой земельный налог физлица по всем принадлежащим ему участкам</h2>
            <input type="number" 
                placeholder="Номер документа расчета" id='lands_number' />
            <input type="text" 
                placeholder="ФИО" id='lands_name' />
            <input type="number" 
                placeholder="Год расчета" id='lands_year' />
            <input type="number" 
                placeholder="Кадастровая стоимость участка" id='lands_cadastrial' />
            <input type="number" 
                placeholder="Время владения" id='lands_ownership' />
            <input type="number" 
                placeholder="Налоговая ставка" id='lands_tax' />
            <input type="number" 
                placeholder="Льготный коэффициент" id='lands_preferential' />
            <select defaultValue={'DEFAULT'} id="lands_accountants">
                <option disabled value='DEFAULT'>Выберите бухгалтера</option>
            </select>
            <button onClick={buttonClickHandler}>Создать</button>
        </div>
    )
}

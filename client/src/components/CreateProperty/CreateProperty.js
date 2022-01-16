import React, { useEffect } from 'react'
import './CreateProperty.css';

export default function CreateProperty() {

    useEffect(() => {
        setSelectors();
    });

    const setSelectors = async () => {
        let accountantsDom = document.getElementById('property_accountants');
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
        const number = document.getElementById('property_number');
        const name = document.getElementById('property_name');
        const year = document.getElementById('property_year');
        const cadastrial = document.getElementById('property_cadastrial');
        const tax = document.getElementById('property_tax');
        const preferential = document.getElementById('property_preferential');
        const accountants = document.getElementById('property_accountants');
        const url = new URL("http://localhost:3000/createProperty");
        const params = {
            number_calculation_doc: number.value,
            physical_person_name: name.value,
            year_calculation: year.value,
            cadastral_value: cadastrial.value,
            tax_rate: tax.value,
            preferential_coefficient: preferential.value,
            id_accontant: accountants.value
        }
        url.search = new URLSearchParams(params).toString();
        await fetch(url, {mode: 'no-cors'});
        alert("Команда выполнена!");
    }

    return (
        <div className="createProperty inputBlock">
            <h2>Рассчитать имущественный налог физлица за год по всем объектам недвижимости, принадлежащим ему</h2>
            <input type="number" 
                placeholder="Номер документа расчета" id='property_number' />
            <input type="text" 
                placeholder="ФИО" id='property_name' />
            <input type="number" 
                placeholder="Год расчета" id='property_year' />
            <input type="number" 
                placeholder="Кадастровая стоимость" id='property_cadastrial' />
            <input type="number" 
                placeholder="Налоговая ставка" id='property_tax' />
            <input type="number" 
                placeholder="Льготный коэффициент" id='property_preferential' />
            <select defaultValue={'DEFAULT'} id="property_accountants">
                <option disabled value='DEFAULT'>Выберите бухгалтера</option>
            </select>
            <button onClick={buttonClickHandler}>Создать</button>
        </div>
    )
}

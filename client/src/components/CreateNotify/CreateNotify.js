import React, { useEffect } from 'react'
import './CreateNotify.css';

export default function CreateNotify() {

    useEffect(() => {
        setSelectors();
    });

    const setSelectors = async () => {
        const notify_property = document.getElementById('notify_property');
        let notify_propertyData = await select("property_tax");
        notify_propertyData.forEach(element => {
            let option = document.createElement("option");
            option.value = element[0];
            option.innerText = element[1];
            notify_property.appendChild(option);
        });

        const notify_transport = document.getElementById('notify_transport');
        let notify_transportData = await select("transport_tax");
        notify_transportData.forEach(element => {
            let option = document.createElement("option");
            option.value = element[0];
            option.innerText = element[1];
            notify_transport.appendChild(option);
        });
        
        const notify_land = document.getElementById('notify_land');
        let notify_landData = await select("land_tax");
        notify_landData.forEach(element => {
            let option = document.createElement("option");
            option.value = element[0];
            option.innerText = element[1];
            notify_land.appendChild(option);
        });

        const notify_income = document.getElementById('notify_income');
        let notify_incomeData = await select("income_tax");
        notify_incomeData.forEach(element => {
            let option = document.createElement("option");
            option.value = element[0];
            option.innerText = element[1];
            notify_income.appendChild(option);
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

    // TODO: сперва сделай notification
    const buttonClickHandler = async () => {
        const notify_number = document.getElementById('notify_number');
        const number_calculation_doc = document.getElementById('notify_calc');
        const notify_tax = document.getElementById('notify_tax');
        const notify_physical = document.getElementById('notify_physical');
        const notify_issue = document.getElementById('notify_issue');
        const notify_payment = document.getElementById('notify_payment');
        const notify_year = document.getElementById('notify_year');
        const notify_time = document.getElementById('notify_time');
        const notify_property = document.getElementById('notify_property');
        const notify_transport = document.getElementById('notify_transport');
        const notify_land = document.getElementById('notify_land');
        const notify_income = document.getElementById('notify_income');
        const url = new URL("http://localhost:3000/createNotify");
        const params = {
            notification_number: notify_number.value,
            number_calculation_doc: number_calculation_doc.value,
            tax_name: notify_tax.value,
            physical_person_name: notify_physical.value,
            date_issue: notify_issue.value,
            payment_details: notify_payment.value,
            yearN: notify_year.value,
            timeN: notify_time.value,
            id_property_tax: notify_property.value,
            id_transport_tax: notify_transport.value,
            id_land_tax: notify_land.value,
            id_income_tax: notify_income.value
        }
        console.log(params);
        url.search = new URLSearchParams(params).toString();
        await fetch(url, {mode: 'no-cors'});
        alert("Команда выполнена!");
    }

    return (
        <div className="createNotify inputBlock">
            <h2>Уведомить физлицо о необходимости оплатить сумму по налогу</h2>
            <input type="number" 
                placeholder="Номер уведомления" id='notify_number' />
            <input type="number" 
                placeholder="Номер документа рачета" id='notify_calc' />
            <input type="text" 
                placeholder="Название налога" id='notify_tax' />
            <input type="text" 
                placeholder="ФИО" id='notify_physical' />
            <input type="date" 
                placeholder="Дата выдачи" id='notify_issue' />
            <input type="number" 
                placeholder="Реквизиты оплаты" id='notify_payment' />
            <input type="number" 
                placeholder="Год оплаты" id='notify_year' />
            <input type="date" 
                placeholder="Дата создания" id='notify_time' />
            <select defaultValue={'DEFAULT'} id="notify_property">
                <option disabled value='DEFAULT'>Выберите имущественный налог</option>
            </select>
            <select defaultValue={'DEFAULT'} id="notify_transport">
                <option disabled value='DEFAULT'>Выберите транспортный налог</option>
            </select>
            <select defaultValue={'DEFAULT'} id="notify_land">
                <option disabled value='DEFAULT'>Выберите земельный налог</option>
            </select>
            <select defaultValue={'DEFAULT'} id="notify_income">
                <option disabled value='DEFAULT'>Выберите подоходный налог</option>
            </select>
            <button onClick={buttonClickHandler}>Создать</button>
        </div>
    )
}

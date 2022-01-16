import React, { useEffect } from 'react'
import './СreatePayTax.css';

export default function СreatePayTax() {

    useEffect(() => {
        setSelectors();
    });

    const setSelectors = async () => {
        let payTax_notification = document.getElementById('payTax_notification');
        let payTax_notificationData = await select("notification");
        payTax_notificationData.forEach(element => {
            let option = document.createElement("option");
            option.value = element[0];
            option.innerText = element[1];
            payTax_notification.appendChild(option);
        });

        let payTax_physical = document.getElementById('payTax_physical');
        let payTax_physicalData = await select("physical_person");
        payTax_physicalData.forEach(element => {
            let option = document.createElement("option");
            option.value = element[0];
            option.innerText = element[1];
            payTax_physical.appendChild(option);
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
        const number = document.getElementById('payTax_number');
        const payTax_date = document.getElementById('payTax_date');
        const payTax_amount = document.getElementById('payTax_amount');
        const payTax_details = document.getElementById('payTax_details');
        const notifications = document.getElementById('payTax_notification');
        const payTax_physical = document.getElementById('payTax_physical');
        let options = payTax_physical.getElementsByTagName("option");
        const url = new URL("http://localhost:3000/createPayTax");
        const params = {
            notification_number: number.value,
            physical_person_name: options[payTax_physical.selectedIndex].innerText,
            date_filling: payTax_date.value,
            payment_amount: payTax_amount.value,
            payment_details: payTax_details.value,
            id_notification: notifications.value,
            id_physical_person: payTax_physical.value
        };
        url.search = new URLSearchParams(params).toString();
        await fetch(url, {mode: 'no-cors'});
        alert("Команда выполнена!");
    }

    return (
        <div className="createPayTax inputBlock">
            <h2>Оплатить налог по соответствующему уведомлению</h2>
            <input type="number" 
                placeholder="Номер уведомления" id='payTax_number' />
            <input type="date" 
                placeholder="Дата заполнения" id='payTax_date' />
            <input type="number" 
                placeholder="Сумма оплаты" id='payTax_amount' />
            <input type="number" 
                placeholder="Реквизиты оплаты" id='payTax_details' />
            <select defaultValue={'DEFAULT'} id="payTax_notification">
                <option disabled value='DEFAULT'>Выберите уведомление</option>
            </select>
            <select defaultValue={'DEFAULT'} id="payTax_physical">
                <option disabled value='DEFAULT'>Выберите физическое лицо</option>
            </select>
            <button onClick={buttonClickHandler}>Создать</button>
        </div>
    )
}

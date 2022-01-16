import React, { useEffect } from 'react'
import './CreatePayPenalty.css';

export default function CreatePayPenalty() {

    useEffect(() => {
        setSelectors();
    });

    const setSelectors = async () => {
        let payPen_notification = document.getElementById('payPen_peny');
        let payPen_notificationData = await select("notification");
        payPen_notificationData.forEach(element => {
            let option = document.createElement("option");
            option.value = element[0];
            option.innerText = element[1];
            payPen_notification.appendChild(option);
        });

        let payPen_physical = document.getElementById('payPen_physical');
        let payPen_physicalData = await select("physical_person");
        payPen_physicalData.forEach(element => {
            let option = document.createElement("option");
            option.value = element[0];
            option.innerText = element[1];
            payPen_physical.appendChild(option);
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
        const number = document.getElementById('payPen_number');
        const payPen_date = document.getElementById('payPen_date');
        const payPen_amount = document.getElementById('payPen_amount');
        const payPen_details = document.getElementById('payPen_details');
        const payPen_peny = document.getElementById('payPen_peny');
        const payPen_physical = document.getElementById('payPen_physical');
        let options = payPen_physical.getElementsByTagName("option");
        const url = new URL("http://localhost:3000/createPayPenalty");
        const params = {
            penalty_number: number.value,
            physical_person_name: options[payPen_physical.selectedIndex].innerText,
            date_filling: payPen_date.value,
            payment_amount: payPen_amount.value,
            payment_details: payPen_details.value,
            id_penalty: payPen_peny.value,
            id_physical_person: payPen_physical.value
        };
        url.search = new URLSearchParams(params).toString();
        await fetch(url, {mode: 'no-cors'});
        alert("Команда выполнена!");
    }

    return (
        <div className="createPayPenalty inputBlock">
            <h2>Оплатить пени</h2>
            <input type="number" 
                placeholder="Номер пени" id='payPen_number' />
            <input type="date" 
                placeholder="Дата заполнения" id='payPen_date' />
            <input type="number" 
                placeholder="Сумма оплаты" id='payPen_amount' />
            <input type="number" 
                placeholder="Реквизиты оплаты" id='payPen_details' />
            <select defaultValue={'DEFAULT'} id="payPen_peny">
                <option disabled value='DEFAULT'>Выберите пени</option>
            </select>
            <select defaultValue={'DEFAULT'} id="payPen_physical">
                <option disabled value='DEFAULT'>Выберите физическое лицо</option>
            </select>
            <button onClick={buttonClickHandler}>Создать</button>
        </div>
    )
}

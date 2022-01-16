import React, { useEffect } from 'react'
import './CreateIncome.css';

export default function CreateIncome() {

    useEffect(() => {
        setSelectors();
    });

    const setSelectors = async () => {
        let accountantsDom = document.getElementById('income_accountants');
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
        const number = document.getElementById('income_number');
        const name = document.getElementById('income_name');
        const income_resident = document.getElementById('income_resident');
        const tax = document.getElementById('income_tax');
        const income_type = document.getElementById('income_type');
        const income_source = document.getElementById('income_source');
        const income_amount = document.getElementById('income_amount');
        const income_receipt = document.getElementById('income_receipt');
        const accountants = document.getElementById('income_accountants');
        const url = new URL("http://localhost:3000/createIncome");
        const params = {
            number_calculation_doc: number.value,
            physical_person_name: name.value,
            status_tax_resident: income_resident.value,
            tax_rate: tax.value,
            type_income_tax: income_type.value,
            source_income: income_source.value,
            amount_income: income_amount.value,
            time_receipt_income: income_receipt.value,
            id_accontant: accountants.value
        }
        url.search = new URLSearchParams(params).toString();
        await fetch(url, {mode: 'no-cors'});
        alert("Команда выполнена!");
    }

    return (
        <div className="createIncome inputBlock">
            <h2>Рассчитать подоходный налог для физлица с его доходов</h2>
            <input type="number" 
                placeholder="Номер документа рассчета" id='income_number' />
            <input type="text" 
                placeholder="ФИО" id='income_name' />
            <input type="text" 
                placeholder="Статус налогового резидента" id='income_resident' />
            <input type="number" 
                placeholder="Налоговая ставка" id='income_tax' />
            <input type="text" 
                placeholder="Вид подоходного налога" id='income_type' />
            <input type="text" 
                placeholder="Источник дохода" id='income_source' />
            <input type="number" 
                placeholder="Размер дохода" id='income_amount' />
            <input type="date" 
                placeholder="Время получения дохода" id='income_receipt' />
            <select defaultValue={'DEFAULT'} id="income_accountants">
                <option disabled value='DEFAULT'>Выберите бухгалтера</option>
            </select>
            <button onClick={buttonClickHandler}>Создать</button>
        </div>
    )
}

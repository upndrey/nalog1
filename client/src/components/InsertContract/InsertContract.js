import React, { useEffect } from 'react'
import './InsertContract.css';

export default function InsertContract() {

    useEffect(() => {
        setSelectors();
    });

    const setSelectors = async () => {
        let directorsDom = document.getElementById('contract_directors');
        let directorsData = await select("director");
        directorsData.forEach(element => {
            let option = document.createElement("option");
            option.value = element[0];
            option.innerText = element[1];
            directorsDom.appendChild(option);
        });
        let adminsDom = document.getElementById('contract_admins');
        let adminsData = await select("system_administrator");
        adminsData.forEach(element => {
            let option = document.createElement("option");
            option.value = element[0];
            option.innerText = element[1];
            adminsDom.appendChild(option);
        });

        let accountantsDom = document.getElementById('contract_accountants');
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
        const number = document.getElementById('contract_number');
        const startDate = document.getElementById('contract_dateConclusion');
        const endData = document.getElementById('contract_endDate');
        const post = document.getElementById('contract_post');
        const salary = document.getElementById('contract_salary');
        const directors = document.getElementById('contract_directors');
        const admins = document.getElementById('contract_admins');
        const accountants = document.getElementById('contract_accountants');
        const url = new URL("http://localhost:3000/insertContract");
        const params = {
            number_contract: number.value,
            date_conclusion: startDate.value,
            end_date: endData.value,
            post: post.value,
            salary: salary.value,
            id_director: directors.value,
            id_system_administrator: admins.value,
            id_accontant: accountants.value
        }
        url.search = new URLSearchParams(params).toString();
        await fetch(url, {mode: 'no-cors'});
        alert("Команда выполнена!");
    }

    return (
        <div className="insertContract inputBlock">
            <h2>Добавить контракт с работником</h2>
            <input type="number" 
                placeholder="Номер контракта" id='contract_number' />
            <input type="date" 
                placeholder="Дата заключения" id='contract_dateConclusion' />
            <input type="date" 
                placeholder="Дата окончания" id='contract_endDate' />
            <input type="number" 
                placeholder="З/П" id='contract_salary' />
            <input type="text" 
                placeholder="Должность" id='contract_post' />
            <select defaultValue={'DEFAULT'} id="contract_directors">
                <option disabled value='DEFAULT'>Выберите директора</option>
            </select>
            <select defaultValue={'DEFAULT'} id="contract_admins">
                <option disabled value='DEFAULT'>Выберите администратора</option>
                </select>
            <select defaultValue={'DEFAULT'} id="contract_accountants">
                <option disabled value='DEFAULT'>Выберите бухгалтера</option>
                </select>
            <button onClick={buttonClickHandler}>Создать</button>
        </div>
    )
}

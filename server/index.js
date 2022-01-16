const express = require('express')
const oracledb = require('oracledb');
const app = express();
const port = 3000;
//checkPenalty
app.get('/checkPenalty', async function (req, res) {
    try {
        connection = await oracledb.getConnection({ user: "ANDREY", password: "qwerty", connectionString: "localhost/xe" });
        console.log('connected to database');
        result = await connection.execute(
            `BEGIN
                checkPenalty(:id_penalty, :penalty_number);
            END;`,
            {
                id_penalty: req.query.id_penalty,
                penalty_number: req.query.penalty_number,
            },
            { autoCommit: true }
        );
    } 
    catch (err) {
        //json error message
        console.log(err.message);
        return res.json(err.message);
    } 
    finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);
            }
        }
        if(result.rows) {
            if (result.rows.length == 0) {
                //query return zero employees
                return res.json([]);
            } else {
                //json all employees
                return res.json(result.rows);
            }
        }
        else {
            return res.json(result);
        }
    }
});

//createIncome
app.get('/createIncome', async function (req, res) {
    try {
        connection = await oracledb.getConnection({ user: "ANDREY", password: "qwerty", connectionString: "localhost/xe" });
        console.log('connected to database');
        result = await connection.execute(
            `BEGIN
                createIncome(
                    :number_calculation_doc, 
                    :physical_person_name, 
                    :status_tax_resident, 
                    :tax_rate, 
                    :type_income_tax, 
                    :source_income, 
                    :amount_income, 
                    :time_receipt_income, 
                    :id_accontant
                );
            END;`,
            {
                number_calculation_doc: req.query.number_calculation_doc,
                physical_person_name: req.query.physical_person_name,
                status_tax_resident: req.query.status_tax_resident,
                tax_rate: req.query.tax_rate,
                type_income_tax: req.query.type_income_tax,
                source_income: req.query.source_income,
                amount_income: req.query.amount_income,
                time_receipt_income: new Date(req.query.time_receipt_income),
                id_accontant: req.query.id_accontant,
            },
            { autoCommit: true }
        );
    } 
    catch (err) {
        //json error message
        console.log(err.message);
        return res.json(err.message);
    } 
    finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);
            }
        }
        if(result.rows) {
            if (result.rows.length == 0) {
                //query return zero employees
                return res.json([]);
            } else {
                //json all employees
                return res.json(result.rows);
            }
        }
        else {
            return res.json(result);
        }
    }
});

//createLands
app.get('/createLands', async function (req, res) {
    try {
        connection = await oracledb.getConnection({ user: "ANDREY", password: "qwerty", connectionString: "localhost/xe" });
        console.log('connected to database');
        result = await connection.execute(
            `BEGIN
                createLands(
                    :number_calculation_doc, 
                    :physical_person_name, 
                    :year_calculation, 
                    :cadastral_value, 
                    :time_ownership, 
                    :tax_rate, 
                    :preferential_coefficient, 
                    :id_accontant
                );
            END;`,
            {
                number_calculation_doc: req.query.number_calculation_doc, 
                physical_person_name: req.query.physical_person_name, 
                year_calculation: req.query.year_calculation, 
                cadastral_value: req.query.cadastral_value, 
                time_ownership: req.query.time_ownership, 
                tax_rate: req.query.tax_rate, 
                preferential_coefficient: req.query.preferential_coefficient, 
                id_accontant: req.query.id_accontant
            },
            { autoCommit: true }
        );
    } 
    catch (err) {
        //json error message
        console.log(err.message);
        return res.json(err.message);
    } 
    finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);
            }
        }
        if(result.rows) {
            if (result.rows.length == 0) {
                //query return zero employees
                return res.json([]);
            } else {
                //json all employees
                return res.json(result.rows);
            }
        }
        else {
            return res.json(result);
        }
    }
});

//createNotify
app.get('/createNotify', async function (req, res) {
    try {
        connection = await oracledb.getConnection({ user: "ANDREY", password: "qwerty", connectionString: "localhost/xe" });
        console.log('connected to database');
        result = await connection.execute(
            `BEGIN
                createNotify(
                    :notification_number, 
                    :number_calculation_doc, 
                    :tax_name, 
                    :physical_person_name, 
                    :date_issue, 
                    :payment_details, 
                    :id_property_tax, 
                    :id_transport_tax, 
                    :id_land_tax, 
                    :id_income_tax, 
                    :yearN, 
                    :timeN 
                );
            END;`,
            {
                notification_number: parseFloat(req.query.notification_number), 
                number_calculation_doc: parseFloat(req.query.number_calculation_doc), 
                tax_name: req.query.tax_name, 
                physical_person_name: req.query.physical_person_name, 
                date_issue: new Date(req.query.date_issue), 
                payment_details: req.query.payment_details, 
                id_property_tax: parseFloat(req.query.id_property_tax), 
                id_transport_tax: parseFloat(req.query.id_transport_tax), 
                id_land_tax: parseFloat(req.query.id_land_tax), 
                id_income_tax: parseFloat(req.query.id_income_tax), 
                yearN: parseFloat(req.query.yearN), 
                timeN: new Date(req.query.timeN) 
            },
            { autoCommit: true }
        );
    } 
    catch (err) {
        //json error message
        console.log(err.message);
        return res.json(err.message);
    } 
    finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);
            }
        }
        if(result.rows) {
            if (result.rows.length == 0) {
                //query return zero employees
                return res.json([]);
            } else {
                //json all employees
                return res.json(result.rows);
            }
        }
        else {
            return res.json(result);
        }
    }
});

//createPayPenalty
app.get('/createPayPenalty', async function (req, res) {
    try {
        connection = await oracledb.getConnection({ user: "ANDREY", password: "qwerty", connectionString: "localhost/xe" });
        console.log('connected to database');
        result = await connection.execute(
            `BEGIN
                createPayPenalty(
                    :penalty_number, 
                    :physical_person_name, 
                    :date_filling, 
                    :payment_amount, 
                    :payment_details, 
                    :id_penalty, 
                    :id_physical_person 
                );
            END;`,
            {
                penalty_number: req.query.penalty_number, 
                physical_person_name: req.query.physical_person_name, 
                date_filling: req.query.date_filling, 
                payment_amount: req.query.payment_amount, 
                payment_details: req.query.payment_details, 
                id_penalty: req.query.id_penalty, 
                id_physical_person: req.query.id_physical_person 
            },
            { autoCommit: true }
        );
    } 
    catch (err) {
        //json error message
        console.log(err.message);
        return res.json(err.message);
    } 
    finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);
            }
        }
        if(result.rows) {
            if (result.rows.length == 0) {
                //query return zero employees
                return res.json([]);
            } else {
                //json all employees
                return res.json(result.rows);
            }
        }
        else {
            return res.json(result);
        }
    }
});

//createPayTax
app.get('/createPayTax', async function (req, res) {
    try {
        connection = await oracledb.getConnection({ user: "ANDREY", password: "qwerty", connectionString: "localhost/xe" });
        console.log('connected to database');
        result = await connection.execute(
            `BEGIN
                createPayTax(
                    :notification_number, 
                    :physical_person_name, 
                    :date_filling, 
                    :payment_amount, 
                    :payment_details, 
                    :id_notification, 
                    :id_physical_person 
                );
            END;`,
            {
                notification_number: req.query.notification_number, 
                physical_person_name: req.query.physical_person_name, 
                date_filling: new Date(req.query.date_filling), 
                payment_amount: req.query.payment_amount, 
                payment_details: req.query.payment_details, 
                id_notification: req.query.id_notification, 
                id_physical_person: req.query.id_physical_person 
            },
            { autoCommit: true }
        );
    } 
    catch (err) {
        //json error message
        console.log(err.message);
        return res.json(err.message);
    } 
    finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);
            }
        }
        if(result.rows) {
            if (result.rows.length == 0) {
                //query return zero employees
                return res.json([]);
            } else {
                //json all employees
                return res.json(result.rows);
            }
        }
        else {
            return res.json(result);
        }
    }
});

//createPenalty
app.get('/createPenalty', async function (req, res) {
    try {
        connection = await oracledb.getConnection({ user: "ANDREY", password: "qwerty", connectionString: "localhost/xe" });
        console.log('connected to database');
        result = await connection.execute(
            `BEGIN
                createPenalty(
                    :penalty_number, 
                    :physical_person_name, 
                    :yearZ
                );
            END;`,
            {
                penalty_number: req.query.penalty_number, 
                physical_person_name: req.query.physical_person_name, 
                yearZ: req.query.yearZ
            },
            { autoCommit: true }
        );
    } 
    catch (err) {
        //json error message
        console.log(err.message);
        return res.json(err.message);
    } 
    finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);
            }
        }
        if(result.rows) {
            if (result.rows.length == 0) {
                //query return zero employees
                return res.json([]);
            } else {
                //json all employees
                return res.json(result.rows);
            }
        }
        else {
            return res.json(result);
        }
    }
});

//createPhysical
app.get('/createPhysical', async function (req, res) {
    try {
        connection = await oracledb.getConnection({ user: "ANDREY", password: "qwerty", connectionString: "localhost/xe" });
        console.log('connected to database');
        result = await connection.execute(
            `BEGIN
                createPhysical(
                    :physical_person_name
                );
            END;`,
            {
                physical_person_name: req.query.physical_person_name
            },
            { autoCommit: true }
        );
    } 
    catch (err) {
        //json error message
        console.log(err.message);
        return res.json(err.message);
    } 
    finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);
            }
        }
        if(result.rows) {
            if (result.rows.length == 0) {
                //query return zero employees
                return res.json([]);
            } else {
                //json all employees
                return res.json(result.rows);
            }
        }
        else {
            return res.json(result);
        }
    }
});

//createProperty
app.get('/createProperty', async function (req, res) {
    try {
        connection = await oracledb.getConnection({ user: "ANDREY", password: "qwerty", connectionString: "localhost/xe" });
        console.log('connected to database');
        result = await connection.execute(
            `BEGIN
                createProperty(
                    :number_calculation_doc, 
                    :physical_person_name, 
                    :year_calculation, 
                    :cadastral_value, 
                    :tax_rate, 
                    :preferential_coefficient, 
                    :id_accontant
                );
            END;`,
            {
                number_calculation_doc: req.query.number_calculation_doc, 
                physical_person_name: req.query.physical_person_name, 
                year_calculation: req.query.year_calculation, 
                cadastral_value: req.query.cadastral_value, 
                tax_rate: req.query.tax_rate, 
                preferential_coefficient: req.query.preferential_coefficient, 
                id_accontant: req.query.id_accontant
            },
            { autoCommit: true }
        );
    } 
    catch (err) {
        //json error message
        console.log(err.message);
        return res.json(err.message);
    } 
    finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);
            }
        }
        if(result.rows) {
            if (result.rows.length == 0) {
                //query return zero employees
                return res.json([]);
            } else {
                //json all employees
                return res.json(result.rows);
            }
        }
        else {
            return res.json(result);
        }
    }
});

//createTransports
app.get('/createTransports', async function (req, res) {
    try {
        connection = await oracledb.getConnection({ user: "ANDREY", password: "qwerty", connectionString: "localhost/xe" });
        console.log('connected to database');
        result = await connection.execute(
            `BEGIN
                createTransports(
                    :number_calculation_doc, 
                    :physical_person_name, 
                    :year_calculation, 
                    :duration_car_own_per_year, 
                    :regional_coefficient, 
                    :increasing_coefficient, 
                    :preferential_coefficient, 
                    :id_accontant
                );
            END;`,
            {
                number_calculation_doc: req.query.number_calculation_doc, 
                physical_person_name: req.query.physical_person_name, 
                year_calculation: req.query.year_calculation, 
                duration_car_own_per_year: req.query.duration_car_own_per_year, 
                regional_coefficient: req.query.regional_coefficient, 
                increasing_coefficient: req.query.increasing_coefficient, 
                preferential_coefficient: req.query.preferential_coefficient, 
                id_accontant: req.query.id_accontant
            },
            { autoCommit: true }
        );
    } 
    catch (err) {
        //json error message
        console.log(err.message);
        return res.json(err.message);
    } 
    finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);
            }
        }
        if(result.rows) {
            if (result.rows.length == 0) {
                //query return zero employees
                return res.json([]);
            } else {
                //json all employees
                return res.json(result.rows);
            }
        }
        else {
            return res.json(result);
        }
    }
});

//insertAccountant
app.get('/insertAccountant', async function (req, res) {
    try {
        connection = await oracledb.getConnection({ user: "ANDREY", password: "qwerty", connectionString: "localhost/xe" });
        console.log('connected to database');
        result = await connection.execute(
            `BEGIN
                insertAccountant(
                    :accountant_name, 
                    :accountant_number, 
                    :salary
                );
            END;`,
            {
                accountant_name: req.query.accountant_name, 
                accountant_number: req.query.accountant_number, 
                salary: req.query.salary
            },
            { autoCommit: true }
        );
    } 
    catch (err) {
        //json error message
        console.log(err.message);
        return res.json(err.message);
    } 
    finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);
            }
        }
        if(result.rows) {
            if (result.rows.length == 0) {
                //query return zero employees
                return res.json([]);
            } else {
                //json all employees
                return res.json(result.rows);
            }
        }
        else {
            return res.json(result);
        }
    }
});

//insertContract
app.get('/insertContract', async function (req, res) {
    try {
        connection = await oracledb.getConnection({ user: "ANDREY", password: "qwerty", connectionString: "localhost/xe" });
        console.log('connected to database');
        result = await connection.execute(
            `BEGIN
                insertContract(
                    :number_contract, 
                    :date_conclusion, 
                    :end_date, 
                    :post, 
                    :salary,
                    :id_director, 
                    :id_system_administrator, 
                    :id_accontant
                );
            END;`,
            {
                number_contract: req.query.number_contract, 
                date_conclusion: new Date(req.query.date_conclusion), 
                end_date: new Date(req.query.end_date), 
                post: req.query.post, 
                salary: req.query.salary,
                id_director: req.query.id_director, 
                id_system_administrator: req.query.id_system_administrator, 
                id_accontant: req.query.id_accontant
            },
            { autoCommit: true }
        );
    } 
    catch (err) {
        //json error message
        console.log(err.message);
        return res.json(err.message);
    } 
    finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);
            }
        }
        if(result.rows) {
            if (result.rows.length == 0) {
                //query return zero employees
                return res.json([]);
            } else {
                //json all employees
                return res.json(result.rows);
            }
        }
        else {
            return res.json(result);
        }
    }
});

//insertDirector
app.get('/insertDirector', async function (req, res) {
    try {
        connection = await oracledb.getConnection({ user: "ANDREY", password: "qwerty", connectionString: "localhost/xe" });
        console.log('connected to database');
        console.log(req.query);
        result = await connection.execute(
            `BEGIN
                insertDirector(
                    :director_name, 
                    :director_number, 
                    :salary
                );
            END;`,
            {
                director_name: req.query.director_name.toString(), 
                director_number: req.query.director_number.toString(), 
                salary: parseFloat(req.query.salary)
            },
            { autoCommit: true }
        );
    } 
    catch (err) {
        //json error message
        console.log(err.message);
        return res.json(err.message);
    } 
    finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);
            }
        }
        if(result.rows) {
            if (result.rows.length == 0) {
                //query return zero employees
                return res.json([]);
            } else {
                //json all employees
                return res.json(result.rows);
            }
        }
        else {
            return res.json(result);
        }
    }
});

//insertSysAdmin
app.get('/insertSysAdmin', async function (req, res) {
    try {
        connection = await oracledb.getConnection({ user: "ANDREY", password: "qwerty", connectionString: "localhost/xe" });
        console.log('connected to database');
        result = await connection.execute(
            `BEGIN
                insertSysAdmin(
                    :sys_admin_name, 
                    :sys_admin_number, 
                    :salary
                );
            END;`,
            {
                sys_admin_name: req.query.sys_admin_name.toString(), 
                sys_admin_number: req.query.sys_admin_number.toString(), 
                salary: parseFloat(req.query.salary)
            },
            { autoCommit: true }
        );
        console.log(result);
    } 
    catch (err) {
        //json error message
        console.log(err.message);
        return res.json(err.message);
    } 
    finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);
            }
        }
        if(result.rows) {
            if (result.rows.length == 0) {
                //query return zero employees
                return res.json([]);
            } else {
                //json all employees
                return res.json(result.rows);
            }
        }
        else {
            return res.json({result});
        }
    }
});

app.get('/select', async function (req, res) {
    try {
        connection = await oracledb.getConnection({ user: "ANDREY", password: "qwerty", connectionString: "localhost/xe" });
        console.log('connected to database');
        result = await connection.execute(`SELECT * FROM "${req.query.table_name}"`);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    } 
    catch (err) {
        //json error message
        console.log(err.message);
        return res.json(err.message);
    } 
    finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);
            }
        }
        if(result.rows) {
            if (result.rows.length == 0) {
                //query return zero employees
                return res.json([]);
            } else {
                //json all employees
                return res.json(result.rows);
            }
        }
        else {
            return res.json("ok");
        }
    }
});


app.listen(port, () => console.log("nodeOracleRestApi app listening on port %s!", port))
import Header from '../Header/Header';
import { useState } from 'react';
import List from '../List/List';
import './App.css';

function App() {
  const [currentList, setCurrentList] = useState(0);

  const renderSwitch = () => {
    console.log(currentList);
    switch (parseInt(currentList)) {
      case 0:
        return <List 
          title="Список системных администраторов" 
          table_name="system_administrator"
          headers={['Имя', 'З/П']}
          cols={[1, 3]}
        />
      case 1:
        return <List 
          title="Список бухгалтеров" 
          table_name="accountant"
          headers={['Имя', 'З/П']}
          cols={[1, 3]}
        />
      case 2:
        return <List 
          title="Список физических лиц" 
          table_name="physical_person"
          headers={['Имя']}
          cols={[1]}
        />
      case 3:
        return <List 
          title="Список уведомлений" 
          table_name="notification"
          headers={['Номер', 'ФИО', 'Номер налога', 'Размер']}
          cols={[1, 4, 2, 5]}
        />
      case 4:
        return <List 
          title="Список подоходных налогов" 
          table_name="income_tax"
          headers={['Номер', 'ФИО']}
          cols={[1, 2]}
        />
      case 5:
        return <List 
          title="Список имущественных налогов" 
          table_name="property_tax"
          headers={['Номер', 'ФИО']}
          cols={[1, 2]}
        />
      case 6:
        return <List 
          title="Список земельных налогов" 
          table_name="land_tax"
          headers={['Номер', 'ФИО']}
          cols={[1, 2]}
        />
      case 7:
        return <List 
          title="Список транспортных налогов" 
          table_name="transport_tax"
          headers={['Номер', 'ФИО']}
          cols={[1, 2]}
        />
      case 8:
        return <List 
          title="Список пени" 
          table_name="penalty"
          headers={['Номер', 'ФИО', 'Задолженность']}
          cols={[1, 4, 5]}
        />
    
      default:
        break;
    }
  };

  const onChangeHandler = (e) => {
    setCurrentList(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="App container">
        
        <select onChange={onChangeHandler}>
          <option value="0">Список системных администраторов</option>
          <option value="1">Список бухгалтеров</option>
          <option value="2">Список физических лиц</option>
          <option value="3">Список уведомлений</option>
          <option value="4">Список подоходных налогов</option>
          <option value="5">Список имущественных налогов</option>
          <option value="6">Список земельных налогов</option>
          <option value="7">Список транспортных налогов</option>
          <option value="8">Список пени</option>
        </select>
        {renderSwitch()}
        
      </div>
    </div>
  );
}

export default App;

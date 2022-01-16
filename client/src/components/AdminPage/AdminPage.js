import './AdminPage.css';
import InsertAccountant from '../InsertAccountant/InsertAccountant';
import InsertDirector from '../InsertDirector/InsertDirector';
import InsertSysAdmin from '../InsertSysAdmin/InsertSysAdmin';
import Header from '../Header/Header';

function AdminPage() {
  return (
    <div>
      <Header />
      <div className="AdminPage container">
        <InsertSysAdmin />
        <InsertDirector />
        <InsertAccountant />
      </div>
    </div>
  );
}

export default AdminPage;

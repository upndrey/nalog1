import './AccountantPage.css';
import CreatePenalty from '../CreatePenalty/CreatePenalty';
import CreatePhysical from '../CreatePhysical/CreatePhysical';
import InsertContract from '../InsertContract/InsertContract';
import CreatePayTax from '../CreatePayTax/CreatePayTax';
import CreateNotify from '../CreateNotify/CreateNotify';
import CheckPenalty from '../CheckPenalty/CheckPenalty';
import Header from '../Header/Header';
import CreatePayPenalty from '../CreatePayPenalty/CreatePayPenalty';

function AccountantPage() {
  return (
    <div>
      <Header />
      <div className="AccountantPage container">
        <CreatePhysical />
        <CheckPenalty />
        <CreatePenalty />
        <CreatePayPenalty />
        <CreateNotify /> 
        <CreatePayTax />
        <InsertContract />
      </div>
    </div>
  );
}

export default AccountantPage;

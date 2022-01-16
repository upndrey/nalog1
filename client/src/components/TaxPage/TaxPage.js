import './TaxPage.css';
import CreateProperty from '../CreateProperty/CreateProperty';
import CreateTransports from '../CreateTransports/CreateTransports';
import CreateLands from '../CreateLands/CreateLands';
import CreateIncome from '../CreateIncome/CreateIncome';
import Header from '../Header/Header';

function TaxPage() {
  return (
    <div>
      <Header />
      <div className="TaxPage container">
        <CreateTransports />
        <CreateLands />
        <CreateIncome />
        <CreateProperty />
      </div>
    </div>
  );
}

export default TaxPage;

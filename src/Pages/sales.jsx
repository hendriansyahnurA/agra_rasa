import AuthLayouts from '../components/Elements/Layout/AuthLayouts';
import FromSales from '../components/Elements/fragments/FromSales';
import { Link } from 'react-router-dom';
const SalesPage = () => {
  return (
    <AuthLayouts title="Sales" label="admin">
      <FromSales />
      <p className="font-medium text-slate-500 mt-2 ml-2  ">
        have to account
        <Link to="/admin" className="text-blue-400 gap-px hover:underline ml-1">
          admin
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default SalesPage;

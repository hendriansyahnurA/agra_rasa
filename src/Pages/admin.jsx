import AuthLayouts from '../components/Elements/Layout/AuthLayouts';
import FromLogin from '../components/Elements/fragments/FromLogin';
import { Link } from 'react-router-dom';
const AdminPage = () => {
  return (
    <AuthLayouts title="admin" label="sales">
      <FromLogin />
      <p className="font-medium text-slate-500 mt-2 ml-2  ">
        have to account
        <Link to="/sales" className="text-blue-400 gap-px hover:underline ml-1">
          sales
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default AdminPage;

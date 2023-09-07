const AuthLayouts = (props) => {
  const { children, title, label } = props;
  return (
    <div className="flex justify-center min-h-screen items-center ">
      <div className="w-full max-w-xs rounded-md shadow-xl">
        <h1 className="text-3xl font-bold md-2 text-blue-600 underline decoration-sky-500/40 flex gap-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-7 mt-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          {title}
        </h1>
        <p className="font-medium text-slate-500 mt-4 ml-2">Welcome,Please Enter Your details!!</p>
        {children}
      </div>
    </div>
  );
};
export default AuthLayouts;

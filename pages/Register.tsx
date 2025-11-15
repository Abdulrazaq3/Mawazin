import React, { useState } from 'react';
import { MawazinLogo, UserIcon, AtSymbolIcon, LockClosedIcon, SpinnerIcon } from '../components/icons';

interface RegisterProps {
  onRegister: (name: string, email: string, pass: string, confirmPass: string) => Promise<void>;
  onNavigateToLogin: () => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister, onNavigateToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onRegister(name, email, password, confirmPassword);
      // On success, App component will navigate to login
    } catch (error) {
      // On failure, stop loading. Error toast is handled in App.tsx
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      <div style={{backgroundColor: '#023337'}} className="w-full md:w-1/2 text-white flex flex-col justify-center items-center p-8 md:p-12 order-2 md:order-1 animate-fadeIn">
        <MawazinLogo className="h-24 w-auto mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
          إدارة عقاراتك بذكاء وسهولة
        </h1>
        <p className="text-lg text-cyan-200 text-center max-w-md">
          منصة "موازين" تمنحك التحكم الكامل لإدارة الممتلكات والمستأجرين والمعاملات المالية بكفاءة عالية.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center p-8 order-1 md:order-2">
        <div className="w-full max-w-md space-y-8 animate-scaleIn">
          <div>
            <h2 className="text-center text-3xl font-bold text-slate-900">
              إنشاء حساب جديد
            </h2>
            <p className="mt-2 text-center text-sm text-slate-600">
              انضم إلينا وابدأ في إدارة عقاراتك اليوم.
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                 <label htmlFor="name" className="sr-only">الاسم الكامل</label>
                 <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <UserIcon />
                    </div>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="appearance-none rounded-t-md relative block w-full pr-10 pl-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                        placeholder="الاسم الكامل"
                    />
                 </div>
              </div>
              <div>
                 <label htmlFor="email-address" className="sr-only">البريد الإلكتروني</label>
                 <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <AtSymbolIcon />
                    </div>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="appearance-none rounded-none relative block w-full pr-10 pl-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                        placeholder="البريد الإلكتروني"
                    />
                 </div>
              </div>
               <div>
                 <label htmlFor="password" className="sr-only">كلمة المرور</label>
                 <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <LockClosedIcon />
                    </div>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="appearance-none rounded-none relative block w-full pr-10 pl-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                        placeholder="كلمة المرور"
                    />
                 </div>
              </div>
              <div>
                 <label htmlFor="confirm-password" className="sr-only">تأكيد كلمة المرور</label>
                 <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <LockClosedIcon />
                    </div>
                    <input
                        id="confirm-password"
                        name="confirm-password"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="appearance-none rounded-b-md relative block w-full pr-10 pl-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                        placeholder="تأكيد كلمة المرور"
                    />
                 </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:bg-teal-400 disabled:cursor-not-allowed transition-colors duration-300 btn-press"
              >
                {isLoading ? <SpinnerIcon /> : 'إنشاء حساب'}
              </button>
            </div>
          </form>
           <p className="mt-2 text-center text-sm text-slate-600">
            لديك حساب بالفعل؟{' '}
            <button onClick={onNavigateToLogin} className="font-medium text-teal-600 hover:text-teal-500 focus:outline-none">
              تسجيل الدخول
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
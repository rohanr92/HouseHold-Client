
import { use, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router';
import logo from '../../../src/assets/logo-cl.svg'
import { AuthContext } from '../Provider/AuthContext';
import toast from 'react-hot-toast';
import { FiSun, FiMoon } from "react-icons/fi";
import "./Navbar.css"


const Navbar = () => {

    const { user, setUser, logOut } = use(AuthContext);
   let navigate = useNavigate();

   const [theme, setTheme] = useState (localStorage.getItem("theme") || "light");

    const [state, setState] = useState(false);

useEffect(() => {
  const html = document.querySelector("html");
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}, [theme]);

const handleTheme = (checked) => { 
    
    setTheme (checked ? "dark" : "light");
};


   const handleLogOut = () => {

    logOut()
    .then(() => {
      setUser(null);
      navigate('/')
      toast.success('Logged Out Successfully')
    }) 
    .catch((error) => {
      toast.error(error.message);
    })
   }
   
    const navigations = (
        <>
            <NavLink to='/' className='hover:text-[#0ab991] text-[16px] sm:text-[16px] text-black block md:flex'>Home</NavLink>
            <NavLink to='/all-services' className='hover:text-[#0ab991] text-[16px] sm:text-[16px] text-black sm:block block md:flex'>Services</NavLink>

            {user &&<>
            
            <NavLink to='/my-services' className='hover:text-[#0ab991] text-[16px] sm:text-[16px] text-black sm:block block md:flex'>My Services</NavLink>
            <NavLink to='/add-services' className='hover:text-[#0ab991] text-[16px] sm:text-[16px] text-black sm:block block md:flex'>Add Services</NavLink>
            <NavLink to='my-bookings' className='hover:text-[#0ab991] text-[16px] sm:text-[16px] text-black sm:block block md:flex'>My Bookings</NavLink>
            <NavLink to='profile' className='hover:text-[#0ab991] text-[16px] sm:text-[16px] text-black sm:block block md:flex'>Profile</NavLink>
            
            </>}



        </>
    )

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".nav-menu"));
        };
    }, []);


    return (
        <div>
            <nav className={`relative z-20 bg-white w-full md:static md:text-sm md:border-b border-gray-300 ${state ? "shadow-lg rounded-b-xl md:shadow-none" : ""}`}>
                <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-0">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <img
                                src={logo}
                                width={120}
                                height={50}
                                alt="Float UI logo"
                            />
                        </a>
                        <div className="md:hidden">
                            <button className="text-gray-500 hover:text-gray-800"
                                onClick={() => setState(!state)}
                            >
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                        </svg>

                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                        <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0 ">
                            {navigations}

                           <div className='flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0'>
{user ? (
  <>
<button onClick={() => handleTheme(theme !== "dark")}>
  {theme === "dark" ? (
    <FiSun className="text-2xl text-[#0ab991] cursor-pointer" />
  ) : (
    <FiMoon className="text-2xl text-gray-700 cursor-pointer" />
  )}
</button>
<li>

  {user ? (
  <div className="relative group mr-[7px]">
    {user.photoURL ? (
      <img
        src={user.photoURL}
        alt="Profile"
        className="w-12 h-12 rounded-full border-2 border-[#0ab991] object-cover"
      />
    ) : (
      <div className="w-12 h-12 sm:flex items-center justify-center rounded-full border-2 border-yellow-500 bg-gray-200 hidden">
        <RxAvatar className="text-gray-400 w-8 h-8" />
      </div>
    )}

   
    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      {user.displayName || "User"}
    </span>
  </div>
) : null}
</li>

    <li>
      <Link
        onClick={handleLogOut}
        className="inline-block rounded border border-[#0ab991] bg-[#0ab991] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#3cc7ac] hover:border-[#3cc7ac]"
      >
        Sign Out
      </Link>
    </li>
  </>
) : (
  <>
<button onClick={() => handleTheme(theme !== "dark")}>
  {theme === "dark" ? (
    <FiSun className="text-2xl text-yellow-400 cursor-pointer" />
  ) : (
    <FiMoon className="text-2xl text-gray-700 cursor-pointer" />
  )}
</button>

    <li>
      <Link
        to="/auth/login"
        className="block text-[16px] py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none"
      >
        Log in
      </Link>
    </li>

    <li>
      <Link
        to="/auth/register"
        className="inline-block rounded border border-[#0ab991] bg-[#0ab991] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#3cc7ac] hover:border-[#3cc7ac]"
      >
        Get Started
      </Link>
    </li>
  </>
)}

</div>

                        </ul>
                    </div>
                </div>
            </nav>
            {
                state ? (
                    <div
                        className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
                        onClick={() => setState(false)}></div>
                ) : ""
            }
        </div>
    );
};

export default Navbar;
// import { signOut } from "firebase/auth";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../utils/firebase";

// const Header = () => {
//     return (
//         <div className='absolute top-0 left-0 w-screen h-screen z-50'>
//             <div className='bg-gradient-to-b from-black'>
//                 <img
//                     src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
//                     alt='logo'
//                     className='w-60 py-2 ml-3'
//                 />
//             </div>
//         </div>
//     );
// };

// export default Header;

// const Header = () => {
//     const navigate = useNavigate();
//     const user = useSelector((store) => store.user);
//     const handleSignOut = () => {
//         signOut(auth)
//             .then(() => {
//                 navigate("/");
//             })
//             .catch((error) => {
//                 navigate("/error");
//             });
//     };

//     return (
//         <div className="bg-gradient-to-b from-black absolute top-0 left-0 w-full z-10">
//             <div className="container mx-auto flex items-center justify-between py-4 px-8">
//                 <img
//                     className="w-36"
//                     src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
//                     alt="Netflix Logo"
//                 />
//                 {user && (
//                     <div className="flex items-center space-x-4">
//                         <img
//                             className="w-10 h-10 square-full"
//                             alt="User Icon"
//                             src="https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
//                         />
//                         <button onClick={handleSignOut}
//                             className="font-bold text-white transition-colors duration-300"
//                         >
//                             (Sign Out)
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Header;

import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const user = useSelector((store) => store.user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        // Unsiubscribe when component unmounts
        return () => unsubscribe();
    }, []);

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView())
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
            })
            .catch((error) => {
                navigate("/error");
            });
    };

    const showGptSearch = useSelector(store => 
        store.gpt.showGptSearch
    );

    if (pathname === "/") {
        // Render header for Sign Up page
        return (
            <div className='absolute top-0 left-0 w-full z-50'>
                <div className='bg-gradient-to-b from-black'>
                    <img
                        src={LOGO}
                        alt='logo'
                        className='w-60 py-2 ml-3'
                    />
                </div>
            </div>
        );
    } else {
        // Render default header for other pages
        return (
            <div className="bg-black bg-opacity-40 absolute top-0 left-0 w-full z-10">
                <div className="container mx-auto flex items-center justify-between py-4 px-4">
                    <img
                        className="w-36"
                        src={LOGO}
                        alt="Netflix Logo"
                    />
                    {user && (
                        
                        <div className="flex justify-between items-center space-x-4">
                            {/* GPT Search button centered */}
                            <div className="flex-grow mr-2">
                                <button className="bg-gray-800 hover:bg-gray-700 text-white text-md font-bold py-2 px-3 rounded" onClick={handleGptSearchClick}>
                                    {showGptSearch? "Homepage" : "GPT Search"}                                                                        
                                </button>
                            </div>
                            {/* User avatar and Sign Out button */}
                            {user && (
                                <div className="flex items-center space-x-4">
                                    <img
                                        className="w-10 h-10"
                                        alt="User Icon"
                                        src={USER_AVATAR}
                                    />
                                    <button
                                        onClick={handleSignOut}
                                        className="font-bold text-white transition-colors duration-300"
                                    >
                                        (Sign Out)
                                    </button>
                                </div>
                            )}
                        </div>)}
                </div>
            </div>
        );
    }
};

export default Header;

import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                navigate("/error");
            });
    };

    return (
        <div className="bg-gradient-to-b from-black absolute top-0 left-0 w-full z-10">
            <div className="container mx-auto flex items-center justify-between py-4 px-8">
                <img
                    className="w-36"
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                    alt="Netflix Logo"
                />
                {user && (
                    <div className="flex items-center space-x-4">
                        <img
                            className="w-10 h-10 square-full"
                            alt="User Icon"
                            src="https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
                        />
                        <button onClick={handleSignOut}
                            className="font-bold text-white transition-colors duration-300"
                        >
                            (Sign Out)
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;

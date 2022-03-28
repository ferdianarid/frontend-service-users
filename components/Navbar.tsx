import Link from "next/link"
import React, { useEffect, useState } from "react"
import photos from "assets/photo.jpeg"
import Image from "next/image"
import axios from "axios"
import { useRouter } from "next/router"

const Navbar = ({ username }: any) => {
    const [titles, setTitles] = useState("")

    const router = useRouter()

    const logoutHandler = async () => {
        try {
            await axios.delete("http://localhost:8888/v1/logout")
            router.push("/auth/login")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        dynamicTitle()
    }, [])

    // Detect current path and set as title page
    const dynamicTitle = () => {
        const paths = window.location.pathname
        console.log(paths)
        if (paths === "/") {
            setTitles("Homepage")
        } else if (paths === "/profile") {
            setTitles("Profile Page")
        } else if (paths === "/auth/login") {
            setTitles("Login Page")
        } else if (paths === "/auth/register") {
            setTitles("Register Page")
        } else {
            setTitles("Service Frontend")
        }
    }

    return (
        <React.Fragment>
            <div className="navbar py-5 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                            <li>
                                <Link href="/" passHref>
                                    <div className="justify-between">
                                        Homepage
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/auth/register" passHref>
                                    <div className="justify-between">
                                        Register
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/auth/login" passHref>
                                    <div className="justify-between">
                                        Login
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <p className="btn btn-ghost normal-case text-xl">{titles}</p>
                </div>
                <div className="navbar-end">
                    <h3 className="font-bold text-md mr-2">{username === undefined ? "" : username}</h3>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image className='rounded-full' src={photos} alt={'image'} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                            <li>
                                <Link href="/profile" passHref>
                                    <div className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/settings" passHref>
                                    Settings
                                </Link>
                            </li>
                            <li>
                                <button onClick={logoutHandler}>
                                    Log Out
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar
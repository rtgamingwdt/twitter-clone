import Image from "next/image"
import "../styles/sidebar.scss"
import NavLink from "./NavLink"
import { FaBell, FaEnvelope, FaHome } from "react-icons/fa"
import { FaEllipsis, FaMagnifyingGlass } from "react-icons/fa6"

export default function Sidebar() {
    return (
        <nav className="sidebar">
            <div className="sidebar-flex">
                <div className="sidebar-content">
                    <Image draggable={false} src={"/logo.svg"} width={128} height={47} alt="logo" />
                    <div className="sidebar-links">
                        <NavLink href={"/"}>
                            <FaHome />
                            <span>Home</span>
                        </NavLink>
                        <NavLink href={"/explore"}>
                            <FaMagnifyingGlass />
                            <span>Explore</span>
                        </NavLink>
                        <NavLink href={"/notifications"}>
                            <FaBell />
                            <span>Notifications</span>
                        </NavLink>
                        <NavLink href={"/messages"}>
                            <FaEnvelope />
                            <span>Messages</span>
                        </NavLink>
                        <button className="primary post">
                            <span>Post</span>
                        </button>
                    </div>
                    <button className="sidebar-panel">
                        <div className="sidebar-profile">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img draggable={false} className="profile" src={"/logo.svg"} width={40} height={40} alt="pfp" />
                            <span>
                                <span className="username">YoItsRT</span>
                                <span className="tag">@yoitsrt</span>
                            </span>
                        </div>
                        <FaEllipsis className="more" />
                    </button>
                </div>
            </div>
        </nav>
    )
}
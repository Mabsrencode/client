import React from 'react'
import "../styles/dashboard.css"
import adminUser from "../assets/users/adminUser.png"
import tsa from "../assets/users/tsa.png"
import jannn from "../assets/users/jann.png"
import dj from "../assets/users/dj.png"
import cc from "../assets/users/cc.png"
import mamen from "../assets/users/JAMES.png"
const UserDashboard = () => {
    return (
        <>
            <section id="sidebar">
                <a href="#" class="brand">
                    <i class='bx bxs-dashboard'></i>
                    <span class="text">TESDA</span>
                </a>
                <ul class="side-menu top">
                    <li class="active">
                        <a href="#">
                            <i class='bx bxs-dashboard' ></i>
                            <span class="text">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxs-shopping-bag-alt' ></i>
                            <span class="text">Documents</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxs-group' ></i>
                            <span class="text">Scholars</span>
                        </a>
                    </li>
                </ul>
                <ul class="side-menu">
                    <li>
                        <a href="#" class="logout">
                            <i class='bx bxs-log-out-circle' ></i>
                            <span class="text">Logout</span>
                        </a>
                    </li>
                </ul>
            </section>




            <section id="content">

                <nav>
                    <i class='bx bx-menu' ></i>
                    <a href="#" class="nav-link"></a>
                    <form action="#">
                        <div class="form-input">
                            <input type="search" placeholder="Search..." />
                            <button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
                        </div>
                    </form>
                    <input type="checkbox" id="switch-mode" hidden />
                    <label for="switch-mode" class="switch-mode"></label>
                    <a href="#" class="notification">
                        <i class='bx bxs-bell' ></i>
                        <span class="num">8</span>
                    </a>
                    <a href="#" class="profile">
                        <img src={adminUser} />
                    </a>
                </nav>



                <main>
                    <div class="head-title">
                        <div class="left">
                            <h1>Dashboard</h1>
                            <ul class="breadcrumb">
                                <li>
                                    <a href="#">Dashboard</a>
                                </li>
                                <li><i class='bx bx-chevron-right' ></i></li>
                                <li>
                                    <a class="active" href="#">Home</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <ul class="box-info">
                        <li>
                            <i class='bx bxs-calendar-check' ></i>
                            <span class="text">
                                <h3>Completed Task</h3>
                                <p>9/10</p>
                            </span>
                        </li>
                        <li>
                            <i class='bx bxs-group' ></i>
                            <span class="text">
                                <h3>Pending Task</h3>
                                <p>7/10</p>
                            </span>
                        </li>
                        <li>
                            <i class='bx bxs-log-out-circle' ></i>
                            <span class="text">
                                <h3>Rejected</h3>
                                <p>14</p>
                            </span>
                        </li>
                    </ul>


                    <div class="table-data">
                        <div class="order">
                            <div class="head">
                                <h3>Audit Logs</h3>
                                <i class='bx bx-search' ></i>
                                <i class='bx bx-filter' ></i>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={jannn} />
                                            <p>Jann Feliciano</p>
                                        </td>
                                        <td>05-13-2024</td>
                                        <td><span class="status completed">Completed</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={dj} />
                                            <p>Jay Del Pilar</p>
                                        </td>
                                        <td>05-10-2024</td>
                                        <td><span class="status pending">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={tsa} />
                                            <p>Charles Torres</p>
                                        </td>
                                        <td>05-12-2024</td>
                                        <td><span class="status process">Process</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={cc} />
                                            <p>Christian Payawal</p>
                                        </td>
                                        <td>05-10-2024</td>
                                        <td><span class="status pending">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={mamen} />
                                            <p>James Malit</p>
                                        </td>
                                        <td>05-09-2024</td>
                                        <td><span class="status completed">Completed</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="todo">
                            <div class="head">
                                <h3>Reminders</h3>
                                <i class='bx bx-plus' ></i>
                                <i class='bx bx-filter' ></i>
                            </div>
                            <ul class="todo-list">
                                <li class="completed">
                                    <p></p>
                                    <i class='bx bx-dots-vertical-rounded' ></i>
                                </li>
                                <li class="completed">
                                    <p></p>
                                    <i class='bx bx-dots-vertical-rounded' ></i>
                                </li>
                                <li class="not-completed">
                                    <p></p>
                                    <i class='bx bx-dots-vertical-rounded' ></i>
                                </li>
                                <li class="completed">
                                    <p></p>
                                    <i class='bx bx-dots-vertical-rounded' ></i>
                                </li>
                                <li class="not-completed">
                                    <p></p>
                                    <i class='bx bx-dots-vertical-rounded' ></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default UserDashboard
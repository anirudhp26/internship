import React from "react";

export default function Body() {
    const menuClick = () => {
        const element = document.getElementById('sidebar');
        element.classList.toggle('nav-handle');
        console.log("lol");
    }

    const dropdownClick = (id) => {
        if (id === 1) {
            const element = document.getElementById('dropdown-1');
            element.classList.toggle('dropdown-handle');
        }
        else if (id === 2) {
            const element = document.getElementById('dropdown-2');
            element.classList.toggle('dropdown-handle');
        }
        else if (id === 3) {
            const element = document.getElementById('dropdown-3');
            element.classList.toggle('dropdown-handle');
        }
        else if (id === 4) {
            const element = document.getElementById('dropdown-4');
            element.classList.toggle('dropdown-handle');
        }
        else if (id === 5) {
            const element = document.getElementById('dropdown-5');
            element.classList.toggle('dropdown-handle');
        }
    }
    return (<>

        <div className="left-area">
            <div className="top-bar">
                <span class="material-icons menu" onClick={menuClick}>
                    menu
                </span>
                <div className="search">
                    <span class="material-icons" style={{ position: 'absolute', padding: '0.5rem', color: 'grey' }}>
                        search
                    </span>
                    <input type='text' placeholder='Search...' />
                </div>
                <div className="accessories">
                    <span class="material-icons">
                        notifications
                    </span>
                    <span class="material-icons">
                        email
                    </span>
                    <span class="material-icons" style={{ fontSize: '35px' }}>
                        account_circle
                    </span>
                    <span class="material-icons">
                        apps
                    </span>
                </div>
            </div>

            <h1>Dashboard</h1>
            <p className="left-head">Home&nbsp;&nbsp;/&nbsp;&nbsp;<a href="/" style={{ color: 'grey', textDecoration: 'none' }}>Dashboard</a></p>

            <div className="data">
                <div className="data-sales">
                    <div className="sale">
                        <p style={{ fontSize: '35px', padding: '0.5rem 0 0 1rem' }}>Sale</p>
                        <p style={{ color: 'blue', fontWeight: '700', padding: '1rem 1rem 0 0', fontSize: '25px' }}>$613.200</p>
                    </div>
                    <div className="layer2-root">
                        <div className="layer2">
                            <div className="layer2-data">
                                <p>Customers</p>
                                <p>44.725</p>
                                <p style={{ color: 'red' }}>-12.4% &darr;</p>
                            </div>
                            <div className="layer2-logo">
                                <span class="material-icons" style={{ color: 'blue', fontSize: '30px', border: '1px solid blue', borderRadius: '10px', padding: '3px', backgroundColor: 'lightblue' }}>
                                    connect_without_contact
                                </span>
                            </div>
                        </div>
                        <div className="layer2">
                            <div className="layer2-data">
                                <p>Orders</p>
                                <p>385</p>
                                <p style={{ color: 'blue' }}>17.2% &uarr;</p>
                            </div>
                            <div className="layer2-logo">
                                <span class="material-icons" style={{ color: 'blue', fontSize: '30px', border: '1px solid blue', borderRadius: '10px', padding: '3px', backgroundColor: 'lightblue' }}>
                                    shopping_cart
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="data-traffic">
                    <p style={{ fontSize: '30px', padding: '0.5rem 0 0 1rem' }}>Traffic</p>
                    <p></p>
                </div>
            </div>
            <div className="users">
                <div className="user-root">
                    <div>
                        <p style={{ fontSize: '35px' }}>Users</p>
                        <p style={{ color: 'grey' }}>1,232,150 registered users</p>
                    </div>
                    <button><span class="material-icons" style={{ paddingRight: '5px' }}>
                        person_add
                    </span>Add new user</button>

                </div>
                <div className="user-tabs">
                    <div className="div-1"><p>Users</p></div>
                    <div className="div-2"><p>Conversion Rate</p></div>
                    <div className="div-3"><p>Sessions</p></div>
                </div>
            </div>
            <div className="traffic">
                <p className="traffic-head">Traffic</p>
                <p className="traffic-time">Last Week</p>
                <div className="clients">
                    <div className="section-1">
                        <p style={{ color: 'grey' }}>New client</p>
                        <p style={{ fontSize: '20px', fontWeight: '500', paddingTop: '3px' }}>9.123</p>
                    </div>
                    <div className="section-2">
                        <p style={{ color: 'grey' }}>Recurring</p>
                        <p style={{ fontSize: '20px', fontWeight: '500', paddingTop: '3px' }}>22.643</p>
                    </div>
                    <div className="section-3">
                        <p style={{ color: 'grey' }}>Page views</p>
                        <p style={{ fontSize: '20px', fontWeight: '500', paddingTop: '3px' }}>78.623</p>
                    </div>
                    <div className="section-4">
                        <p style={{ color: 'grey' }}>Organic</p>
                        <p style={{ fontSize: '20px', fontWeight: '500', paddingTop: '3px' }}>49.123</p>
                    </div>

                </div>
            </div>
        </div>

        <nav id="sidebar" className="navbar">
            <div className="sidebar-icon">
                {/* <p>CORE-UI</p> */}
                <img src="/img/logo.svg" width='100px' style={{ backgroundColor: 'white', padding: '4px', borderRadius: '10px' }}></img>
                <span class="material-icons" style={{ color: 'grey' }} onClick={menuClick}>arrow_back_ios</span>
            </div>
            <div className="dashboard sidebar-title">
                <span class="material-icons">
                    speed
                </span>
                <p style={{ color: 'white' }}>Dashboard</p>
                <p style={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'rgba(255, 255, 255, 0.87)',
                    padding: '2px',
                    margin: '2rem',
                    width: '2.5rem',
                    height: '1.5rem',
                    backgroundColor: '#2e8ae6',
                    fontSize: '13px',
                    fontWeight: '700',
                    textAlign: 'center',
                    borderRadius: '6px',

                }}>New</p>
            </div>
            <div className="components">
                <p className="sidebar-title sub-title">COMPONENTS</p>
                <ul>
                    <li><span class="material-icons">
                        extension
                    </span>Base<span class="material-icons" id="dropdown-1" className="dropdown-items" onClick={() => dropdownClick(1)}>
                            keyboard_arrow_down
                        </span></li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    <li><span class="material-icons">
                        near_me
                    </span>Buttons<span class="material-icons dropdown-items" id="dropdown-2" onClick={() => dropdownClick(2)}>
                            keyboard_arrow_down
                        </span></li>
                    <li><span class="material-icons">
                        feed
                    </span>Forms<span class="material-icons dropdown-items" id="dropdown-3" onClick={() => dropdownClick(3)}>
                            keyboard_arrow_down
                        </span></li>
                    <li><span class="material-icons">
                        star_border
                    </span>Icons<span class="material-icons dropdown-items" id="dropdown-4" onClick={() => dropdownClick(4)}>
                            keyboard_arrow_down
                        </span></li>
                    <li><span class="material-icons">
                        notifications
                    </span>Notifications<span class="material-icons dropdown-items" id="dropdown-5" onClick={() => dropdownClick(5)}>
                            keyboard_arrow_down
                        </span></li>
                    <li><span class="material-icons">
                        widgets
                    </span>Widgets<p style={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: 'rgba(255, 255, 255, 0.87)',
                        padding: '2px',
                        width: '2.5rem',
                        height: '1.5rem',
                        backgroundColor: '#2e8ae6',
                        fontSize: '13px',
                        fontWeight: '700',
                        textAlign: 'center',
                        borderRadius: '6px',

                    }}>New</p></li>
                </ul>
            </div>
            <div className="plugins">
                <p className="sidebar-title sub-title">PLUGINS</p>
                <ul>
                    <li><span class="material-icons">
                        calendar_month
                    </span>Calender</li>
                    <li><span class="material-icons">
                        pie_chart
                    </span>Charts</li>
                    <li><span class="material-icons">
                        analytics
                    </span>DataTables</li>
                    <li><span class="material-icons">
                        map
                    </span>Google Maps</li>
                </ul>
            </div>
            <div className="extras">
                <p className="sidebar-title sub-title">EXTRAS</p>
                <ul>
                    <li><span class="material-icons">
                        grade
                    </span>Pages</li>
                    <li><span class="material-icons">
                        apps
                    </span>Apps</li>
                    <li><span class="material-icons">
                        description
                    </span>Docs</li>
                </ul>
            </div>
        </nav>

    </>
    )
}
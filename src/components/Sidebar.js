import React from "react";

export default function Sidebar() {

    return (<>

    <div className="left-area">
        <div className="top-bar">
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
                <span class="material-icons" style={{fontSize: '35px'}}>
                    account_circle
                </span>
                <span class="material-icons">
                    apps
                </span>
            </div>
        </div>

        <h1>Dashboard</h1>
        <p>Dashboard</p>
    </div>






        <nav>
            <div className="sidebar-icon">
                <p>CORE-UI</p>
                <span class="material-icons" style={{ color: 'grey' }}>arrow_back_ios</span>
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
                    </span>Base<span class="material-icons">
                            keyboard_arrow_down
                        </span></li>
                    <li><span class="material-icons">
                        near_me
                    </span>Buttons<span class="material-icons">
                            keyboard_arrow_down
                        </span></li>
                    <li><span class="material-icons">
                        feed
                    </span>Forms<span class="material-icons">
                            keyboard_arrow_down
                        </span></li>
                    <li><span class="material-icons">
                        star_border
                    </span>Icons<span class="material-icons">
                            keyboard_arrow_down
                        </span></li>
                    <li><span class="material-icons">
                        notifications
                    </span>Notifications<span class="material-icons">
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
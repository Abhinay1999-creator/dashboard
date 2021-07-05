import React from 'react';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import DescriptionIcon from '@material-ui/icons/Description';


const Navbar = () => {
    return (
        <>
            <html lang="en">

                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Screen</title>
                </head>

                <body>
                    <nav>
                        <div className="head">
                            <NavLink exact to="/">
                                <WifiTetheringIcon />
                            </NavLink>
                        </div>


                        <hr />


                        <div className="nav1">
                            <NavLink exact to="/student">
                                <AccountCircleIcon />
                                <div className="sp1">
                                    <span>Students</span>
                                </div>
                            </NavLink>

                        </div>



                        <div className="nav2">
                            <NavLink exact to="/lesson">
                            <DescriptionIcon />
                                <div className="sp2">
                                    <span>Lesson</span>
                                </div>
                            </NavLink>

                        </div>



                        <div className="nav3">
                            <NavLink exact to="/settings">
                            <SettingsIcon />
                                <div className="sp3">
                                    <span>Settings</span>
                                </div>
                            </NavLink>

                        </div>

                    </nav>

                </body>

            </html>

        </>
    )
}


export default Navbar;

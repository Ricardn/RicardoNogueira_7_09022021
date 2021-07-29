import "./Topbar.css";
import { Search, Person, Chat, Notifications, AccountCircle } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLogo">
                <img src="/images/logo-white.png" alt="logo" />
                <p className="logoName">Groupomania</p>
            </div>
            <div className="topbarLeft">
              
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search/>
                    <input placeholder="Rechercher" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>

                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>

                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <div className="topbarUserItem">
                        <AccountCircle/>
                </div>
                
            </div>
            
        </div>
    )
}
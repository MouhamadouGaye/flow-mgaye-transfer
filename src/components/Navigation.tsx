
import { Link, useLocation } from 'react-router-dom';
import { Home, Send, History, User, Menu } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Send, label: 'Transfer', path: '/transfer' },
    { icon: History, label: 'History', path: '/history' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <h1 className="brand-text">FlowPay</h1>
        </div>
        
        <div className="nav-menu">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className={`nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon className="nav-icon" />
                <span className="nav-label">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <button className="mobile-menu-btn">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

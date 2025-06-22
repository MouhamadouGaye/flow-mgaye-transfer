
import { Link } from 'react-router-dom';
import { Send, ArrowDownLeft, CreditCard, Smartphone } from 'lucide-react';
import './QuickActions.css';

const QuickActions = () => {
  const actions = [
    {
      icon: Send,
      label: 'Send Money',
      description: 'Transfer to contacts',
      path: '/transfer',
      color: 'blue',
    },
    {
      icon: ArrowDownLeft,
      label: 'Request Money',
      description: 'Ask for payment',
      path: '/request',
      color: 'green',
    },
    {
      icon: CreditCard,
      label: 'Pay Bills',
      description: 'Utilities & more',
      path: '/bills',
      color: 'purple',
    },
    {
      icon: Smartphone,
      label: 'Mobile Top-up',
      description: 'Recharge phone',
      path: '/topup',
      color: 'orange',
    },
  ];

  return (
    <div className="quick-actions-card">
      <div className="card-header">
        <h3 className="card-title">Quick Actions</h3>
      </div>
      <div className="card-content">
        <div className="actions-grid">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.label} to={action.path} className="action-link">
                <div className="action-item">
                  <div className={`action-icon ${action.color}`}>
                    <Icon className="icon" />
                  </div>
                  <div className="action-text">
                    <div className="action-label">{action.label}</div>
                    <div className="action-description">{action.description}</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;

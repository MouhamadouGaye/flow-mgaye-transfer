
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import './RecentTransactions.css';

const RecentTransactions = () => {
  const transactions = [
    {
      id: 1,
      type: 'sent',
      recipient: 'John Doe',
      amount: 250.00,
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: 2,
      type: 'received',
      recipient: 'Sarah Wilson',
      amount: 180.50,
      date: '2024-01-14',
      status: 'completed'
    },
    {
      id: 3,
      type: 'sent',
      recipient: 'Mike Johnson',
      amount: 75.25,
      date: '2024-01-13',
      status: 'pending'
    },
  ];

  return (
    <div className="transactions-card">
      <div className="card-header">
        <h3 className="card-title">Recent Transactions</h3>
      </div>
      <div className="card-content">
        <div className="transactions-list">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-icon-wrapper">
                <div className={`transaction-icon ${transaction.type}`}>
                  {transaction.type === 'sent' ? (
                    <ArrowUpRight className="icon" />
                  ) : (
                    <ArrowDownLeft className="icon" />
                  )}
                </div>
              </div>
              
              <div className="transaction-details">
                <div className="transaction-main">
                  <span className="transaction-action">
                    {transaction.type === 'sent' ? 'Sent to' : 'Received from'}
                  </span>
                  <span className="transaction-recipient">{transaction.recipient}</span>
                </div>
                <div className="transaction-meta">
                  <span className="transaction-date">{transaction.date}</span>
                  <span className={`transaction-status ${transaction.status}`}>
                    {transaction.status}
                  </span>
                </div>
              </div>
              
              <div className="transaction-amount">
                <span className={`amount ${transaction.type}`}>
                  {transaction.type === 'sent' ? '-' : '+'}${transaction.amount.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;

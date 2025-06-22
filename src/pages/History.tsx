
import { useState } from 'react';
import { ArrowUpRight, ArrowDownLeft, Filter, Search } from 'lucide-react';
import Navigation from '@/components/Navigation';
import './History.css';

const History = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const transactions = [
    { id: 1, type: 'sent', recipient: 'John Doe', amount: 250.00, date: '2024-01-15', status: 'completed' },
    { id: 2, type: 'received', recipient: 'Sarah Wilson', amount: 180.50, date: '2024-01-14', status: 'completed' },
    { id: 3, type: 'sent', recipient: 'Mike Johnson', amount: 75.25, date: '2024-01-13', status: 'pending' },
    { id: 4, type: 'received', recipient: 'Emma Davis', amount: 320.00, date: '2024-01-12', status: 'completed' },
    { id: 5, type: 'sent', recipient: 'Alex Thompson', amount: 95.75, date: '2024-01-11', status: 'completed' },
  ];

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.recipient.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || transaction.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-6">
        <div className="history-container">
          <div className="history-header">
            <h2 className="page-title">Transaction History</h2>
            <p className="page-subtitle">View all your money transfers</p>
          </div>

          <div className="history-filters">
            <div className="search-box">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search transactions..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filter-box">
              <Filter className="filter-icon" />
              <select
                className="filter-select"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Transactions</option>
                <option value="sent">Sent</option>
                <option value="received">Received</option>
              </select>
            </div>
          </div>

          <div className="transactions-card">
            <div className="transactions-list">
              {filteredTransactions.map((transaction) => (
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
      </main>
    </div>
  );
};

export default History;


import { useState } from 'react';
import { Send, User, DollarSign } from 'lucide-react';
import Navigation from '@/components/Navigation';
import './Transfer.css';

const Transfer = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Transfer submitted:', { recipient, amount, note });
    // Handle transfer logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-6">
        <div className="transfer-container">
          <div className="transfer-card">
            <div className="card-header">
              <h2 className="page-title">Send Money</h2>
              <p className="page-subtitle">Transfer money to friends and family</p>
            </div>
            
            <form onSubmit={handleSubmit} className="transfer-form">
              <div className="form-group">
                <label className="form-label">
                  <User className="label-icon" />
                  Recipient
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter email or phone number"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <DollarSign className="label-icon" />
                  Amount
                </label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min="0"
                  step="0.01"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Note (Optional)</label>
                <textarea
                  className="form-textarea"
                  placeholder="What's this for?"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={3}
                />
              </div>

              <button type="submit" className="submit-btn">
                <Send className="btn-icon" />
                Send ${amount || '0.00'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Transfer;

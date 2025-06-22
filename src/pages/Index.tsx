import { useState } from "react";
import { ArrowUpRight, ArrowDownLeft, Plus, Send } from "lucide-react";
import { Link } from "react-router-dom";
import QuickActions from "../components/QuickActions";
import RecentTransactions from "../components/RecentTransactions";
import "./Index.css";
import Navigation from "../components/Navigation";

const Index = () => {
  const [balance] = useState(2847.5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navigation />

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Balance Card */}
        <div className="balance-card">
          <div className="balance-header">
            <h2 className="balance-title">Total Balance</h2>
          </div>
          <div className="balance-content">
            <div className="balance-amount">${balance.toLocaleString()}</div>
            <div className="balance-actions">
              <Link to="/transfer">
                <button className="action-btn primary">
                  <Send className="h-4 w-4 mr-2" />
                  Send Money
                </button>
              </Link>
              <button className="action-btn secondary">
                <Plus className="h-4 w-4 mr-2" />
                Add Money
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Recent Transactions */}
        <RecentTransactions />
      </main>
    </div>
  );
};

export default Index;

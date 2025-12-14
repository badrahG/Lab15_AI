import React, { useState } from 'react';

export default function LoginTestCases() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const testCases = [
    // Functional Test Cases
    {
      id: "TC001",
      category: "Functional",
      title: "Successful login with valid credentials",
      steps: "1. Enter valid registered email\n2. Enter correct password\n3. Click Login button",
      expected: "User is redirected to Dashboard page",
      priority: "High"
    },
    {
      id: "TC002",
      category: "Functional",
      title: "Password visibility toggle - Show password",
      steps: "1. Enter password\n2. Click password visibility toggle (eye icon)\n3. Observe password field",
      expected: "Password characters are displayed in plain text",
      priority: "Medium"
    },
    {
      id: "TC003",
      category: "Functional",
      title: "Password visibility toggle - Hide password",
      steps: "1. Enter password\n2. Click toggle to show password\n3. Click toggle again to hide\n4. Observe password field",
      expected: "Password characters are masked again (••••)",
      priority: "Medium"
    },
    // Negative Test Cases
    {
      id: "TC004",
      category: "Negative",
      title: "Login with empty email field",
      steps: "1. Leave email field empty\n2. Enter valid password\n3. Click Login button",
      expected: "Validation error message appears: 'Email is required'",
      priority: "High"
    },
    {
      id: "TC005",
      category: "Negative",
      title: "Login with empty password field",
      steps: "1. Enter valid email\n2. Leave password field empty\n3. Click Login button",
      expected: "Validation error message appears: 'Password is required'",
      priority: "High"
    },
    {
      id: "TC006",
      category: "Negative",
      title: "Login with incorrect password - First attempt",
      steps: "1. Enter valid email\n2. Enter incorrect password\n3. Click Login button",
      expected: "Error message: 'Invalid credentials. Attempts remaining: 2'",
      priority: "High"
    },
    {
      id: "TC007",
      category: "Negative",
      title: "Account lock after 3 failed attempts",
      steps: "1. Enter valid email\n2. Enter wrong password\n3. Click Login (1st attempt)\n4. Repeat step 2-3 two more times",
      expected: "After 3rd attempt: 'Account temporarily locked. Please try again later or reset password.'",
      priority: "Critical"
    },
    {
      id: "TC008",
      category: "Negative",
      title: "Login attempt with locked account",
      steps: "1. Use account that is locked\n2. Enter correct credentials\n3. Click Login button",
      expected: "Error message: 'Account is temporarily locked'",
      priority: "High"
    },
    {
      id: "TC009",
      category: "Negative",
      title: "Login with unregistered email",
      steps: "1. Enter email not in system\n2. Enter any password\n3. Click Login button",
      expected: "Error message: 'Invalid credentials'",
      priority: "Medium"
    },
    // Boundary Test Cases
    {
      id: "TC010",
      category: "Boundary",
      title: "Email with minimum valid length",
      steps: "1. Enter email 'a@b.c' (shortest valid format)\n2. Enter valid password\n3. Click Login",
      expected: "If registered: Login succeeds. If not: Shows 'Invalid credentials'",
      priority: "Low"
    },
    {
      id: "TC011",
      category: "Boundary",
      title: "Email with maximum allowed length",
      steps: "1. Enter email with 254 characters (RFC limit)\n2. Enter valid password\n3. Click Login",
      expected: "System accepts input and validates credentials",
      priority: "Low"
    },
    {
      id: "TC012",
      category: "Boundary",
      title: "Password with special characters",
      steps: "1. Enter valid email\n2. Enter password with special chars (!@#$%^&*)\n3. Click Login",
      expected: "Password is accepted and validated correctly",
      priority: "Medium"
    },
    {
      id: "TC013",
      category: "Boundary",
      title: "Failed login - Exactly 2 attempts",
      steps: "1. Enter wrong password twice\n2. Check account status",
      expected: "Account remains unlocked. Warning: '1 attempt remaining'",
      priority: "Medium"
    },
    // Security Test Cases
    {
      id: "TC014",
      category: "Security",
      title: "Password masking by default",
      steps: "1. Navigate to login page\n2. Click password field\n3. Type password\n4. Observe display",
      expected: "Password is masked by default (•••• or ****)",
      priority: "High"
    },
    {
      id: "TC015",
      category: "Security",
      title: "SQL Injection attempt in email field",
      steps: "1. Enter: admin'--\n2. Enter any password\n3. Click Login",
      expected: "Input is sanitized. Shows 'Invalid credentials' or validation error",
      priority: "Critical"
    },
    {
      id: "TC016",
      category: "Security",
      title: "XSS attempt in email field",
      steps: "1. Enter: <script>alert('xss')</script>@test.com\n2. Submit form",
      expected: "Input is sanitized. No script execution. Shows validation error",
      priority: "Critical"
    },
    {
      id: "TC017",
      category: "Security",
      title: "Case sensitivity of email",
      steps: "1. Register with User@Email.com\n2. Try login with user@email.com\n3. Observe result",
      expected: "Email should be case-insensitive (both should work)",
      priority: "Medium"
    },
    {
      id: "TC018",
      category: "Security",
      title: "Brute force protection - Lock duration",
      steps: "1. Lock account with 3 failed attempts\n2. Wait 1 minute\n3. Try valid credentials",
      expected: "Account remains locked for configured duration (e.g., 15-30 minutes)",
      priority: "High"
    }
  ];

  const categories = ['All', 'Functional', 'Negative', 'Boundary', 'Security'];
  
  const filteredTests = selectedCategory === 'All' 
    ? testCases 
    : testCases.filter(tc => tc.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      'Functional': 'bg-blue-100 text-blue-800 border-blue-300',
      'Negative': 'bg-red-100 text-red-800 border-red-300',
      'Boundary': 'bg-yellow-100 text-yellow-800 border-yellow-300',
      'Security': 'bg-purple-100 text-purple-800 border-purple-300'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-300';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'Critical': 'text-red-600 font-bold',
      'High': 'text-orange-600 font-semibold',
      'Medium': 'text-blue-600',
      'Low': 'text-gray-600'
    };
    return colors[priority] || 'text-gray-600';
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header Section */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '12px', 
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
          padding: '24px',
          marginBottom: '24px'
        }}>
          <h1 style={{ 
            fontSize: '30px', 
            fontWeight: 'bold', 
            color: '#1f2937',
            marginBottom: '8px'
          }}>
            Login System - Test Cases
          </h1>
          <p style={{ color: '#6b7280', marginBottom: '20px' }}>
            AI-Generated comprehensive test suite for login functionality
          </p>
          
          {/* Category Filter Buttons */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: selectedCategory === cat ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                  backgroundColor: selectedCategory === cat ? '#eff6ff' : 'white',
                  color: selectedCategory === cat ? '#1d4ed8' : '#4b5563',
                  fontWeight: selectedCategory === cat ? '600' : '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* Statistics */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '16px'
          }}>
            <div style={{ backgroundColor: '#eff6ff', padding: '16px', borderRadius: '8px' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#2563eb' }}>
                {testCases.filter(tc => tc.category === 'Functional').length}
              </div>
              <div style={{ fontSize: '14px', color: '#4b5563' }}>Functional Tests</div>
            </div>
            <div style={{ backgroundColor: '#fee2e2', padding: '16px', borderRadius: '8px' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#dc2626' }}>
                {testCases.filter(tc => tc.category === 'Negative').length}
              </div>
              <div style={{ fontSize: '14px', color: '#4b5563' }}>Negative Tests</div>
            </div>
            <div style={{ backgroundColor: '#fef3c7', padding: '16px', borderRadius: '8px' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#d97706' }}>
                {testCases.filter(tc => tc.category === 'Boundary').length}
              </div>
              <div style={{ fontSize: '14px', color: '#4b5563' }}>Boundary Tests</div>
            </div>
            <div style={{ backgroundColor: '#f3e8ff', padding: '16px', borderRadius: '8px' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#9333ea' }}>
                {testCases.filter(tc => tc.category === 'Security').length}
              </div>
              <div style={{ fontSize: '14px', color: '#4b5563' }}>Security Tests</div>
            </div>
          </div>
        </div>

        {/* Test Cases List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredTests.map((tc) => (
            <div 
              key={tc.id} 
              style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
                padding: '20px',
                transition: 'box-shadow 0.2s'
              }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                justifyContent: 'space-between', 
                marginBottom: '12px',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <span style={{ 
                    fontSize: '18px', 
                    fontWeight: 'bold', 
                    color: '#374151',
                    minWidth: '60px'
                  }}>
                    {tc.id}
                  </span>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    border: '1px solid',
                  }} className={getCategoryColor(tc.category)}>
                    {tc.category}
                  </span>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: tc.priority === 'Critical' || tc.priority === 'High' ? '600' : '500',
                    color: tc.priority === 'Critical' ? '#dc2626' : 
                           tc.priority === 'High' ? '#ea580c' :
                           tc.priority === 'Medium' ? '#2563eb' : '#6b7280'
                  }}>
                    Priority: {tc.priority}
                  </span>
                </div>
              </div>
              
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: '600', 
                color: '#111827', 
                marginBottom: '16px'
              }}>
                {tc.title}
              </h3>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
                gap: '16px'
              }}>
                <div>
                  <h4 style={{ 
                    fontSize: '14px', 
                    fontWeight: '600', 
                    color: '#4b5563', 
                    marginBottom: '8px'
                  }}>
                    Test Steps:
                  </h4>
                  <div style={{ 
                    backgroundColor: '#f9fafb', 
                    padding: '12px', 
                    borderRadius: '6px',
                    fontSize: '14px',
                    color: '#374151',
                    whiteSpace: 'pre-line',
                    lineHeight: '1.6'
                  }}>
                    {tc.steps}
                  </div>
                </div>
                
                <div>
                  <h4 style={{ 
                    fontSize: '14px', 
                    fontWeight: '600', 
                    color: '#4b5563', 
                    marginBottom: '8px'
                  }}>
                    Expected Result:
                  </h4>
                  <div style={{ 
                    backgroundColor: '#f0fdf4', 
                    padding: '12px', 
                    borderRadius: '6px',
                    fontSize: '14px',
                    color: '#166534',
                    lineHeight: '1.6'
                  }}>
                    {tc.expected}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Note */}
        <div style={{ 
          marginTop: '32px',
          backgroundColor: '#eff6ff',
          borderLeft: '4px solid #3b82f6',
          padding: '16px',
          borderRadius: '6px'
        }}>
          <h3 style={{ fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px' }}>
            📋 Тэмдэглэл:
          </h3>
          <ul style={{ 
            fontSize: '14px', 
            color: '#1e40af',
            paddingLeft: '20px',
            lineHeight: '1.8'
          }}>
            <li>Нийт 18 тест кейс үүсгэгдсэн</li>
            <li>Functional, Negative, Boundary, Security тестүүдийг хамарсан</li>
            <li>Edge cases: SQL injection, XSS, brute force protection</li>
            <li>Priority-ээр эрэмбэлсэн (Critical → Low)</li>
            <li>Дээрх товчлууруудаар категориор шүүж харах боломжтой</li>
          </ul>
        </div>
      </div>
    </div>
  );
}   
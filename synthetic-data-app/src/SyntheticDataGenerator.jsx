import React, { useState } from 'react';

export default function SyntheticDataGenerator() {
  const [generatedData, setGeneratedData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [dataCount, setDataCount] = useState(20);
  const [validationResults, setValidationResults] = useState(null);

  const syntheticUsers = [
    { id: 1, name: "Батбаяр Доржсүрэн", email: "batbayar.d@techcorp.mn", age: 28, country: "Mongolia", role: "Software Engineer" },
    { id: 2, name: "Оюунгэрэл Цэцэгмаа", email: "oyungerel.ts@dataworks.mn", age: 34, country: "Mongolia", role: "QA Manager" },
    { id: 3, name: "Энхбаяр Мөнхбат", email: "enkhbayar.m@innovate.mn", age: 25, country: "Mongolia", role: "Junior Developer" },
    { id: 4, name: "Сарантуяа Ганбат", email: "sarantuya.g@cloudtech.mn", age: 31, country: "Mongolia", role: "Senior QA Engineer" },
    { id: 5, name: "Төмөрбаатар Болд", email: "tumurkbaatar.b@digital.mn", age: 29, country: "Mongolia", role: "DevOps Engineer" },
    { id: 6, name: "Номин Эрдэнэчимэг", email: "nomin.e@webdev.mn", age: 26, country: "Mongolia", role: "Frontend Developer" },
    { id: 7, name: "Бямбасүрэн Ганзориг", email: "byambasuren.g@systems.mn", age: 38, country: "Mongolia", role: "Team Lead" },
    { id: 8, name: "Туяа Баттөр", email: "tuyaa.b@automation.mn", age: 27, country: "Mongolia", role: "Automation Engineer" },
    { id: 9, name: "Мөнхзул Батсайхан", email: "munkhzul.b@quality.mn", age: 33, country: "Mongolia", role: "Test Architect" },
    { id: 10, name: "Ганбаатар Пүрэвсүрэн", email: "ganbaatar.p@enterprise.mn", age: 41, country: "Mongolia", role: "Engineering Director" },
    { id: 11, name: "Одгэрэл Цэнд", email: "odgerel.ts@startup.mn", age: 24, country: "Mongolia", role: "Intern" },
    { id: 12, name: "Болормаа Чинзориг", email: "bolormaa.ch@mobile.mn", age: 30, country: "Mongolia", role: "Mobile Developer" },
    { id: 13, name: "Эрдэнэбат Лхагва", email: "erdenebat.l@backend.mn", age: 35, country: "Mongolia", role: "Backend Engineer" },
    { id: 14, name: "Нарантуяа Батчулуун", email: "narantuya.b@testing.mn", age: 28, country: "Mongolia", role: "Performance Tester" },
    { id: 15, name: "Цэрэнпил Мөнхбаяр", email: "tserenpil.m@security.mn", age: 32, country: "Mongolia", role: "Security Engineer" },
    { id: 16, name: "Баясгалан Ганбаяр", email: "bayasgalan.g@platform.mn", age: 29, country: "Mongolia", role: "Platform Engineer" },
    { id: 17, name: "Дэлгэрмаа Төгөлдөр", email: "delgermaa.t@analytics.mn", age: 36, country: "Mongolia", role: "Data Analyst" },
    { id: 18, name: "Чинбат Бат-Эрдэнэ", email: "chinbat.be@frontend.mn", age: 26, country: "Mongolia", role: "UI Developer" },
    { id: 19, name: "Сайнбаяр Түвшинбаяр", email: "sainbayar.t@integration.mn", age: 31, country: "Mongolia", role: "Integration Specialist" },
    { id: 20, name: "Ариунаа Золбаяр", email: "ariunaa.z@devtools.mn", age: 27, country: "Mongolia", role: "Tools Developer" }
  ];

  const generateData = () => {
    setGeneratedData(syntheticUsers.slice(0, dataCount));
    setShowData(true);
    setValidationResults(null);
  };

  const validateData = () => {
    const issues = [];
    const emails = new Set();
    
    generatedData.forEach((user, index) => {
      // Check for duplicate emails
      if (emails.has(user.email)) {
        issues.push(`Row ${index + 1}: Duplicate email "${user.email}"`);
      }
      emails.add(user.email);
      
      // Check for invalid age
      if (user.age < 18 || user.age > 70) {
        issues.push(`Row ${index + 1}: Invalid age ${user.age} (should be 18-70)`);
      }
      
      // Check for empty fields
      if (!user.name || !user.email || !user.country || !user.role) {
        issues.push(`Row ${index + 1}: Empty field detected`);
      }
      
      // Check email format
      if (!user.email.includes('@') || !user.email.includes('.')) {
        issues.push(`Row ${index + 1}: Invalid email format "${user.email}"`);
      }
    });
    
    setValidationResults({
      total: generatedData.length,
      valid: generatedData.length - issues.length,
      issues: issues
    });
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Age', 'Country', 'Role'];
    const csvContent = [
      headers.join(','),
      ...generatedData.map(user => 
        `${user.id},"${user.name}",${user.email},${user.age},${user.country},"${user.role}"`
      )
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'synthetic_test_data.csv';
    a.click();
  };

  const exportToJSON = () => {
    const jsonContent = JSON.stringify(generatedData, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'synthetic_test_data.json';
    a.click();
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '24px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ 
          background: 'white', 
          borderRadius: '15px', 
          padding: '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          marginBottom: '24px'
        }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#667eea', marginBottom: '10px' }}>
            🎲 АЖИЛ 4: Synthetic Test Data Generator
          </h1>
          <p style={{ fontSize: '18px', color: '#666' }}>
            AI ашиглан PII агуулаагүй synthetic өгөгдөл үүсгэх
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 1024 ? '1fr 2fr' : '1fr', gap: '24px' }}>
          
          {/* Control Panel */}
          <div>
            <div style={{ 
              background: 'white', 
              borderRadius: '15px', 
              padding: '24px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              marginBottom: '24px'
            }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '20px' }}>
                ⚙️ Settings
              </h2>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontWeight: '600', color: '#555', marginBottom: '8px' }}>
                  Өгөгдлийн тоо:
                </label>
                <input 
                  type="number" 
                  value={dataCount}
                  onChange={(e) => setDataCount(Math.min(20, Math.max(1, parseInt(e.target.value) || 1)))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                  min="1"
                  max="20"
                />
                <small style={{ color: '#666', fontSize: '13px' }}>1-20 хүртэл</small>
              </div>
              
              <button
                onClick={generateData}
                style={{
                  width: '100%',
                  padding: '16px',
                  background: '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginBottom: '12px',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => e.target.style.background = '#5568d3'}
                onMouseOut={(e) => e.target.style.background = '#667eea'}
              >
                🚀 Generate Data
              </button>
              
              {showData && (
                <>
                  <button
                    onClick={validateData}
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: '#10b981',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      marginBottom: '12px'
                    }}
                  >
                    ✓ Validate Data
                  </button>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <button
                      onClick={exportToCSV}
                      style={{
                        padding: '12px',
                        background: '#3b82f6',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      📊 CSV
                    </button>
                    <button
                      onClick={exportToJSON}
                      style={{
                        padding: '12px',
                        background: '#8b5cf6',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      📄 JSON
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Info Box */}
            <div style={{ 
              background: 'white', 
              borderRadius: '15px', 
              padding: '24px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#333', marginBottom: '15px' }}>
                💡 AI Prompt ашигласан:
              </h3>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '15px', 
                borderRadius: '8px',
                fontSize: '14px',
                lineHeight: '1.7',
                color: '#555',
                borderLeft: '4px solid #667eea'
              }}>
                <p style={{ fontWeight: '600', color: '#667eea', marginBottom: '10px' }}>
                  "PII агуулаагүй synthetic user data үүсгэнэ үү."
                </p>
                <p>
                  20 мөр, дараах бүтэцтэй:<br/>
                  • name (монгол нэр)<br/>
                  • email (зохиомол)<br/>
                  • age (18-70)<br/>
                  • country<br/>
                  • role<br/><br/>
                  Өгөгдлийг бодит мэт боловч зохиомол байдлаар гаргана уу.
                </p>
              </div>
              
              <div style={{ 
                background: '#fff3cd', 
                padding: '15px', 
                borderRadius: '8px',
                marginTop: '15px',
                borderLeft: '4px solid #ffc107'
              }}>
                <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#856404', marginBottom: '8px' }}>
                  ⚠️ Анхаар:
                </h4>
                <ul style={{ fontSize: '13px', color: '#856404', lineHeight: '1.6', paddingLeft: '20px' }}>
                  <li>Бодит хүний мэдээлэл БИШИ</li>
                  <li>Тестэд л ашиглах</li>
                  <li>Production-д БҮҮС ашиглах</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Display */}
          <div>
            {showData ? (
              <>
                {/* Statistics */}
                <div style={{ 
                  background: 'white', 
                  borderRadius: '15px', 
                  padding: '24px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  marginBottom: '24px'
                }}>
                  <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '20px' }}>
                    📊 Statistics
                  </h2>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
                    <div style={{ background: '#eff6ff', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#3b82f6' }}>{generatedData.length}</div>
                      <div style={{ fontSize: '14px', color: '#64748b', marginTop: '5px' }}>Total Records</div>
                    </div>
                    <div style={{ background: '#f0fdf4', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981' }}>
                        {validationResults ? validationResults.valid : '?'}
                      </div>
                      <div style={{ fontSize: '14px', color: '#64748b', marginTop: '5px' }}>Valid</div>
                    </div>
                    <div style={{ background: '#fef2f2', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#ef4444' }}>
                        {validationResults ? validationResults.issues.length : '?'}
                      </div>
                      <div style={{ fontSize: '14px', color: '#64748b', marginTop: '5px' }}>Issues</div>
                    </div>
                    <div style={{ background: '#fefce8', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#eab308' }}>5</div>
                      <div style={{ fontSize: '14px', color: '#64748b', marginTop: '5px' }}>Fields</div>
                    </div>
                  </div>
                </div>

                {/* Validation Results */}
                {validationResults && (
                  <div style={{ 
                    background: 'white', 
                    borderRadius: '15px', 
                    padding: '24px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    marginBottom: '24px'
                  }}>
                    <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '20px' }}>
                      {validationResults.issues.length === 0 ? '✅ Validation Passed' : '⚠️ Validation Issues'}
                    </h2>
                    
                    {validationResults.issues.length === 0 ? (
                      <div style={{ 
                        background: '#f0fdf4', 
                        padding: '20px', 
                        borderRadius: '10px',
                        color: '#166534',
                        fontSize: '16px',
                        textAlign: 'center',
                        fontWeight: '600'
                      }}>
                        🎉 Бүх өгөгдөл шалгалтад тэнцсэн! Ашиглахад бэлэн.
                      </div>
                    ) : (
                      <div style={{ 
                        background: '#fef2f2', 
                        padding: '20px', 
                        borderRadius: '10px',
                        maxHeight: '200px',
                        overflowY: 'auto'
                      }}>
                        {validationResults.issues.map((issue, idx) => (
                          <div key={idx} style={{ 
                            padding: '10px', 
                            marginBottom: '8px',
                            background: 'white',
                            borderRadius: '6px',
                            fontSize: '14px',
                            color: '#dc2626',
                            borderLeft: '4px solid #ef4444'
                          }}>
                            {issue}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Data Table */}
                <div style={{ 
                  background: 'white', 
                  borderRadius: '15px', 
                  padding: '24px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}>
                  <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '20px' }}>
                    📋 Generated Data
                  </h2>
                  
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                      <thead>
                        <tr style={{ background: '#f8f9fa' }}>
                          <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600' }}>ID</th>
                          <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600' }}>Name</th>
                          <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600' }}>Email</th>
                          <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600' }}>Age</th>
                          <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600' }}>Country</th>
                          <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600' }}>Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        {generatedData.map((user, idx) => (
                          <tr key={user.id} style={{ background: idx % 2 === 0 ? 'white' : '#f8f9fa' }}>
                            <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>{user.id}</td>
                            <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>{user.name}</td>
                            <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0', fontFamily: 'monospace', fontSize: '13px' }}>{user.email}</td>
                            <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>{user.age}</td>
                            <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>{user.country}</td>
                            <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>{user.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            ) : (
              <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '80px 40px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                textAlign: 'center',
                border: '3px dashed #cbd5e1'
              }}>
                <div style={{ fontSize: '80px', marginBottom: '20px' }}>🎲</div>
                <h3 style={{ fontSize: '24px', color: '#64748b', marginBottom: '10px' }}>
                  Өгөгдөл үүсгэхэд бэлэн
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '16px' }}>
                  Зүүн талын "Generate Data" товч дарж эхлээрэй
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Key Takeaways */}
        <div style={{ 
          background: 'white', 
          borderRadius: '15px', 
          padding: '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          marginTop: '24px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '20px' }}>
            📚 Synthetic Data-н давуу тал
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', gap: '20px' }}>
            <div style={{ background: '#f0fdf4', padding: '20px', borderRadius: '10px', borderLeft: '5px solid #10b981' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#166534', marginBottom: '10px' }}>
                ✅ Давуу тал
              </h3>
              <ul style={{ lineHeight: '1.8', color: '#166534', paddingLeft: '20px' }}>
                <li>Privacy хамгаалагдана</li>
                <li>GDPR болон бусад хууль дагаж мөрдөнө</li>
                <li>Хязгааргүй өгөгдөл үүсгэж болно</li>
                <li>Тодорхой тест кейст зориулж өгөгдөл үүсгэнэ</li>
                <li>Production өгөгдөл хэрэггүй</li>
              </ul>
            </div>
            
            <div style={{ background: '#fef2f2', padding: '20px', borderRadius: '10px', borderLeft: '5px solid #ef4444' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#991b1b', marginBottom: '10px' }}>
                ⚠️ Эрсдэл
              </h3>
              <ul style={{ lineHeight: '1.8', color: '#991b1b', paddingLeft: '20px' }}>
                <li>Бодит өгөгдөлтэй яг адилхан биш</li>
                <li>Edge case-үүд дутагдаж болно</li>
                <li>Өгөгдлийн хоорондын хамаарал дутуу</li>
                <li>AI алдаа гаргаж болно</li>
                <li>Заавал validation хийх шаардлагатай</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
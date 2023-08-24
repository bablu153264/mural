import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';
import './passwordstrength.css';

const PasswordStrengthMeter = () => {
  const [password, setPassword] = useState('');
  const [score, setScore] = useState(0);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    const result = zxcvbn(newPassword);
    setScore(result.score);
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
      />
      {password && (
        <div className="password-strength">
          <div className={`strength-${score}`}>
            Strength: {['Weak', 'Weak', 'Fair', 'Good', 'Strong'][score]}
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordStrengthMeter;

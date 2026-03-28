import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <header style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '16px 32px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            margin: 0
          }}>
            EduSphere
          </h1>
          <p style={{
            margin: 0,
            opacity: 0.9,
            fontSize: '14px'
          }}>
            Ваша персональная образовательная траектория
          </p>
        </div>
        <button
          onClick={signOut}
          style={{
            background: 'rgba(255,255,255,0.2)',
            border: '2px solid white',
            color: 'white',
            padding: '10px 24px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.color = '#667eea';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
            e.currentTarget.style.color = 'white';
          }}
        >
          Выйти
        </button>
      </div>
    </header>
  );
};

import React from 'react';
import { Header } from '../components/Header';

export const Dashboard: React.FC = () => {

  return (
    <div style={{ minHeight: '100vh', background: '#f5f7fa' }}>
      <Header />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '24px'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '24px',
            color: '#333'
          }}>
            Добро пожаловать в EduSphere!
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '32px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '12px',
              padding: '24px',
              color: 'white',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
            }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>📊</div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                margin: 0,
                marginBottom: '8px'
              }}>
                Панель прогресса
              </h3>
              <p style={{
                margin: 0,
                opacity: 0.9,
                fontSize: '14px'
              }}>
                Отслеживайте ваш прогресс и достижения
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              borderRadius: '12px',
              padding: '24px',
              color: 'white',
              boxShadow: '0 4px 15px rgba(240, 147, 251, 0.3)'
            }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>📋</div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                margin: 0,
                marginBottom: '8px'
              }}>
                Учебный план
              </h3>
              <p style={{
                margin: 0,
                opacity: 0.9,
                fontSize: '14px'
              }}>
                Ваш персональный путь обучения
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              borderRadius: '12px',
              padding: '24px',
              color: 'white',
              boxShadow: '0 4px 15px rgba(79, 172, 254, 0.3)'
            }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>💡</div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                margin: 0,
                marginBottom: '8px'
              }}>
                Рекомендации
              </h3>
              <p style={{
                margin: 0,
                opacity: 0.9,
                fontSize: '14px'
              }}>
                Материалы, подобранные специально для вас
              </p>
            </div>
          </div>

          <div style={{
            background: '#f9fafb',
            borderRadius: '12px',
            padding: '24px',
            border: '2px dashed #e5e7eb'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '12px'
            }}>
              О системе
            </h3>
            <p style={{
              color: '#666',
              fontSize: '14px',
              lineHeight: '1.6',
              margin: 0
            }}>
              EduSphere - это адаптивная образовательная платформа, которая создает индивидуальные учебные планы на основе вашего уровня знаний, стиля обучения и целей.
              Система анализирует ваш прогресс и рекомендует наиболее эффективные материалы для обучения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import './FeedbakForm.css';

const FeedbackForm = () => {
  const [formType, setFormType] = useState('anonymous');
  const [formData, setFormData] = useState({
    type: 'suggestion',
    text: '',
    name: '',
    contact: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', { formType, ...formData });
    setSubmitted(true);
    setFormData({
      type: 'suggestion',
      text: '',
      name: '',
      contact: ''
    });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="feedback-form card">
      <h3>Обратная связь</h3>
      
      <div className="form-type-selector">
        <button
          className={`type-btn ${formType === 'anonymous' ? 'active' : ''}`}
          onClick={() => setFormType('anonymous')}
        >
          Анонимно
        </button>
        <button
          className={`type-btn ${formType === 'contact' ? 'active' : ''}`}
          onClick={() => setFormType('contact')}
        >
          С контактами
        </button>
      </div>

      {submitted && (
        <div className="alert alert-success">
          Спасибо! Ваше обращение отправлено администратору.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Тип обращения</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="complaint">Жалоба</option>
            <option value="suggestion">Предложение</option>
            <option value="feedback">Отзыв</option>
          </select>
        </div>

        {formType === 'contact' && (
          <>
            <div className="form-group">
              <label className="form-label">ФИО</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Введите ваше имя"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Telegram или WhatsApp</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className="form-input"
                placeholder="@username или +996..."
              />
            </div>
          </>
        )}

        <div className="form-group">
          <label className="form-label">Текст обращения</label>
          <textarea
            name="text"
            value={formData.text}
            onChange={handleInputChange}
            className="form-textarea"
            placeholder="Опишите ваше обращение..."
            rows="4"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
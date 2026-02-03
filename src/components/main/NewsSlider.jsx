import React, { useState, useEffect } from 'react';
import './NewsSlider.css';

const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const news = [
    {
      id: 1,
      title: 'Новый регламент по удаленной работе',
      description: 'С 1 марта вступают в силу обновленные правила удаленной работы',
      fullText: 'С 1 марта 2025 года в компании вступают в силу обновленные правила удаленной работы. Все сотрудники обязаны ознакомиться с новым регламентом в разделе "Регламенты". Основные изменения касаются времени отчетности и правил коммуникации.',
      image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&auto=format&fit=crop',
      date: '25.02.2025'
    },
    {
      id: 2,
      title: 'Обновление системы онбординга',
      description: 'Запущена новая версия платформы для стажеров',
      fullText: 'Мы запустили обновленную версию платформы онбординга. Теперь стажеры могут более эффективно проходить обучение и отслеживать свой прогресс. Все изменения направлены на улучшение процесса адаптации новых сотрудников.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w-800&auto=format&fit=crop',
      date: '20.02.2025'
    },
    {
      id: 3,
      title: 'Корпоративное мероприятие',
      description: 'Приглашаем всех на ежегодную встречу команды',
      fullText: '15 марта состоится ежегодная встреча команды "В Плюсе". Мероприятие пройдет в конференц-зале главного офиса. Будут подведены итоги года и намечены планы на будущее. Регистрация обязательна.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop',
      date: '15.02.2025'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % news.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [news.length]);

  const openModal = (newsItem) => {
    setModalContent(newsItem);
    setShowModal(true);
  };

  return (
    <div className="news-slider card">
      <div className="news-header">
        <h3>Новости компании</h3>
        <div className="news-controls">
          {news.map((_, index) => (
            <button
              key={index}
              className={`news-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className="news-slides">
        {news.map((item, index) => (
          <div
            key={item.id}
            className={`news-slide ${index === currentSlide ? 'active' : ''}`}
            onClick={() => openModal(item)}
          >
            <div className="news-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="news-content">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <div className="news-date">{item.date}</div>
              <button className="news-read-more">Читать полностью →</button>
            </div>
          </div>
        ))}
      </div>

      {showModal && modalContent && (
        <div className="news-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="news-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <img src={modalContent.image} alt={modalContent.title} className="modal-image" />
            <div className="modal-content">
              <h3>{modalContent.title}</h3>
              <div className="modal-date">{modalContent.date}</div>
              <p>{modalContent.fullText}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsSlider;
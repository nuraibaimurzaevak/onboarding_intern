import React, { useState } from 'react';
import './TeamSlider.css';

const TeamSlider = () => {
  const [showAll, setShowAll] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: 'Айбек Сулайманов',
      position: 'Генеральный директор',
      department: 'Руководство',
      contact: '@ceo_vplus',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60'
    },
    {
      id: 2,
      name: 'Мария Иванова',
      position: 'HR Директор',
      department: 'HR',
      contact: 'm.ivanova@vplus.kg',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop&q=60'
    },
    {
      id: 3,
      name: 'Дмитрий Петров',
      position: 'Технический директор',
      department: 'Разработка',
      contact: '@tech_lead',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60'
    },
    {
      id: 4,
      name: 'Айгуль Караева',
      position: 'Руководитель отдела маркетинга',
      department: 'Маркетинг',
      contact: 'a.karaeva@vplus.kg',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60'
    },
    {
      id: 5,
      name: 'Эрлан Беков',
      position: 'Senior Developer',
      department: 'Разработка',
      contact: '@erlan_dev',
      photo: 'https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=400&auto=format&fit=crop&q=60'
    },
    {
      id: 6,
      name: 'Алина Смирнова',
      position: 'Менеджер проектов',
      department: 'PMO',
      contact: 'a.smirnova@vplus.kg',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60'
    }
  ];

  const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 3);

  return (
    <div className="team-slider card">
      <div className="team-header">
        <h3>Наша команда</h3>
        <button 
          className="toggle-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Показать меньше' : 'Показать всех'}
        </button>
      </div>

      <div className="team-grid">
        {displayedMembers.map(member => (
          <div key={member.id} className="team-member">
            <div className="member-photo">
              <img src={member.photo} alt={member.name} />
            </div>
            <div className="member-info">
              <h4>{member.name}</h4>
              <p className="member-position">{member.position}</p>
              <p className="member-department">{member.department}</p>
              <p className="member-contact">{member.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSlider;
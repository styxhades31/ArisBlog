import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
const cardData = [
  {
    id: 1,
    title: 'Day 1',
    description: 'On the first day, after lunch, we visited Intramuros—a historic walled city where we delved into the rich history of the Spanish colonial era and learned about its profound impact on the Philippines.',
    date: '2025-04-14',
    images: ['/Day1.jpg', '/Day1a.jpg', '/Day1b.jpg'],


  },
  {
    id: 2,
    title: 'Day 2',
    description: 'On the second day, we explored Subic Bay—a hub of maritime history and innovation. Here, we learned how advanced communication systems are used to coordinate with nearby vessels, ensuring safe and efficient navigation. We also delved into Subic Bay’s fascinating past, from its role as a Spanish naval base to its transformation into a key strategic port during the American era. The visit gave us a deeper appreciation for how technology and history intersect in this vital coastal region.',
    date: '2025-04-15',
    images: ['/Day2a.jpg', '/Day2b.jpg', '/Day2.jpg','/Day2c.jpg'],
  },
  {
    id: 3,
    title: 'Day 3',
    description: 'Our day began with a visit to the Natural Art Museum, where we marveled at stunning exhibits blending nature, culture, and creativity. From intricate indigenous crafts to contemporary eco-art installations, the museum showcased the beauty of Filipino artistry and its deep connection to the environment. Interactive displays allowed us to appreciate sustainable materials and traditional techniques, making it both an educational and visually captivating experience. Next, we headed to the iconic Quezon Memorial Shrine, a towering monument dedicated to President Manuel L. Quezon, the second President of the Philippines. Standing at the heart of Quezon City, the shrine’s grand Art Deco design and museum offered a fascinating glimpse into his life, leadership, and legacy. We explored historical artifacts, personal memorabilia, and informative exhibits detailing his contributions to Philippine independence and social justice. The serene park surrounding the shrine provided a peaceful space to reflect on the nation’s past.',
    date: '2025-04-27',
    images: ['/Day3z.jpg','/Day3.jpg', '/Day3a.jpg', '/Day3b.jpg','/Day3c.jpg'],
  },
  {
    id: 4,
    title: 'Day 4',
    description: 'Our day started with a visit to LRT-2 (Light Rail Transit Line 2), one of Metro Manila’s vital transport arteries. We observed how this elevated railway system efficiently connects key areas, from Santolan in Pasig to Recto in Manila, easing urban congestion. A facility tour gave us insights into its operations—from automated ticketing to safety protocols—highlighting how modern rail technology serves thousands of commuters daily. The seamless blend of engineering and public service underscored the importance of sustainable urban mobility. In the afternoon, we headed to Hytech Power Inc., a leader in energy solutions in the Philippines. Here, we delved into cutting-edge technologies in power distribution, renewable energy systems, and industrial automation. Through interactive demonstrations, we learned how their innovations—from solar hybrid systems to smart grid solutions—support energy efficiency and environmental sustainability. The session emphasized the role of private-sector ingenuity in shaping the nation’s energy future.',
    date: '2025-04-27',
    images: ['/Day4z.jpg','/Day4x.jpg', '/Day4b.jpg', '/Day4c.jpg','/Day4d.jpg','/Day4e.jpg'],
  },
  {
    id: 5,
    title: 'Day 5',
    description: 'We embarked on an early morning trip to the "Summer Capital of the Philippines"—Baguio City. The cool mountain air and lush pine trees welcomed us as we arrived, setting the perfect tone for a day of exploration. Then we visited the prestigious Philippine Military Academy (PMA), the training ground of the country’s future military leaders. We walked through the iconic Borromeo Field, visited the PMA Museum, and learned about the academy’s rich history, rigorous training programs, and the values of "Courage, Integrity, and Loyalty" instilled in every cadet. Witnessing the discipline and grandeur of the campus left us inspired! After the structured tour, we got to experience Baguio at our own pace. ',
    date: '2025-04-27',
    images: ['/Day5.jpg','/Day5a.jpg', '/Day5b.jpg', '/Day5c.jpg','/Day5d.jpg'],
  },
 
];



  
const openCard = (card) => {
  setSelectedCard(card);
  setCurrentImageIndex(0);
};

const closeModal = () => {
  setSelectedCard(null);
};

const nextImage = () => {
  if (selectedCard) {
    setCurrentImageIndex((prev) => (prev + 1) % selectedCard.images.length);
  }
};

const prevImage = () => {
  if (selectedCard) {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedCard.images.length - 1 : prev - 1
    );
  }
};

return (
  <div className="app-container">

    {/* Header */}
    <header className="header">
    <img src="/Header.jpg" alt="BSIT Educational Tour Header" className="header-img" />
      <h1 className="header-title">BSIT Educ Tour 2025</h1>
    </header>

    {/* Cards */}
    <div className="cards-container">
      {cardData.map((card) => (
        <div key={card.id} className="card" onClick={() => openCard(card)}>
          <img src={card.images[0]} alt={card.title} className="card-img" />
          <h2 className="card-title">{card.title}</h2>
        </div>
      ))}
    </div>

    {/* Modal */}
    {selectedCard && (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <img
            src={selectedCard.images[currentImageIndex]}
            alt={selectedCard.title}
            className="modal-img"
          />

          {selectedCard.images.length > 1 && (
            <div className="modal-buttons">
              <button onClick={prevImage} className="modal-button">Previous</button>
              <button onClick={nextImage} className="modal-button">Next</button>
            </div>
          )}

          <h2 className="modal-title">{selectedCard.title}</h2>
          <p className="modal-description">{selectedCard.description}</p>
          <p className="modal-date"><strong>Date:</strong> {selectedCard.date}</p>

          <button onClick={closeModal} className="modal-close-button">Close</button>
        </div>
      </div>
    )}

  </div>
);
}

export default App;
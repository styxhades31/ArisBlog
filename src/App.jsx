import React, { useState } from 'react';
import './App.css'; // Make sure to import your CSS file for styling
import { GoX, GoArrowLeft, GoArrowRight, GoCalendar } from 'react-icons/go';


// Image imports
import Day1 from './assets/Day1.jpg';
import Day1a from './assets/Day1a.jpg';
import Day1b from './assets/Day1b.jpg';

import Day2 from './assets/Day2.jpg';
import Day2a from './assets/Day2a.jpg';
import Day2b from './assets/Day2b.jpg';
import Day2c from './assets/Day2c.jpg';

import Day3 from './assets/Day3.jpg';
import Day3a from './assets/Day3a.jpg';
import Day3b from './assets/Day3b.jpg';
import Day3c from './assets/Day3c.jpg';
import Day3z from './assets/Day3z.jpg';

import Day4z from './assets/Day4z.jpg';
import Day4c from './assets/Day4c.jpg';
import Day4e from './assets/Day4e.jpg';

import dDay5 from './assets/dDay5.jpg';
import dDay5a from './assets/dDay5a.jpg';
import dDay5b from './assets/dDay5b.jpg';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const cardData = [
    {
      id: 1,
      title: 'Day 1',
      description: 'On the first day, after lunch, we visited Intramuros—a historic walled city where we delved into the rich history of the Spanish colonial era and learned about its profound impact on the Philippines.',
      date: '2025-04-07',
      images: [Day1, Day1a, Day1b],
      reflection: 'The visit to Intramuros allowed us to reflect on the complexities of history and how it shapes the present. Walking through the old streets of Intramuros, I couldn’t help but think about the cultural and societal transformations that occurred during the Spanish colonial period. It was a powerful reminder of the enduring impact of history on our daily lives and how we can learn from the past to better understand the present and the future.'
    },
    {
      id: 2,
      title: 'Day 2',
      description: 'On the second day, we explored Subic Bay—a hub of maritime history and innovation. Here, we learned how advanced communication systems are used to coordinate with nearby vessels, ensuring safe and efficient navigation. We also delved into Subic Bay’s fascinating past, from its role as a Spanish naval base to its transformation into a key strategic port during the American era. The visit gave us a deeper appreciation for how technology and history intersect in this vital coastal region.',
      date: '2025-04-08',
      images: [Day2a, Day2b, Day2, Day2c],
      reflection: 'The visit to Subic Bay was an eye-opener, revealing how the region evolved from a military base to a bustling trade and maritime hub. We were amazed by how technology has advanced the coordination between vessels, ensuring safer and more efficient navigation. It was fascinating to learn how Subic Bay’s rich history still plays a vital role in shaping the future of maritime communication and trade.'
    },
    {
      id: 3,
      title: 'Day 3',
      description: 'Our day began with a visit to the Natural Art Museum, where we marveled at stunning exhibits blending nature, culture, and creativity. From intricate indigenous crafts to contemporary eco-art installations, the museum showcased the beauty of Filipino artistry and its deep connection to the environment. Interactive displays allowed us to appreciate sustainable materials and traditional techniques, making it both an educational and visually captivating experience. Next, we headed to the iconic Quezon Memorial Shrine, a towering monument dedicated to President Manuel L. Quezon, the second President of the Philippines. Standing at the heart of Quezon City, the shrine’s grand Art Deco design and museum offered a fascinating glimpse into his life, leadership, and legacy. We explored historical artifacts, personal memorabilia, and informative exhibits detailing his contributions to Philippine independence and social justice. The serene park surrounding the shrine provided a peaceful space to reflect on the nation’s past.',
      date: '2025-04-09',
      images: [Day3z, Day3, Day3a, Day3b, Day3c],
      reflection: 'Visiting the Natural Art Museum was a profound experience that opened our eyes to the deep connection between Filipino culture and the environment. The exhibits highlighted how art can be a vehicle for both personal expression and environmental advocacy. At the Quezon Memorial Shrine, we were reminded of the significance of leadership and the ongoing fight for justice and independence in the Philippines. The peaceful atmosphere surrounding the shrine gave us a chance to reflect on the historical struggles and triumphs that shaped the nation.'
    },
    {
      id: 4,
      title: 'Day 4',
      description: 'Our day started with a visit to the Bangko Sentral ng Pilipinas (BSP), the central bank of the Philippines. We explored its role in maintaining monetary stability and ensuring the smooth functioning of the country\'s financial system. The visit included a guided tour of the BSP’s Museum of Coins, where we learned about the history of Philippine currency and the evolution of the country’s monetary policy. After the BSP, we headed to Hytech Power Inc., a leader in energy solutions in the Philippines. Here, we delved into cutting-edge technologies in power distribution, renewable energy systems, and industrial automation. Through interactive demonstrations, we learned how their innovations—from solar hybrid systems to smart grid solutions—support energy efficiency and environmental sustainability. The session emphasized the role of private-sector ingenuity in shaping the nation’s energy future.',
      date: '2025-04-10',
      images: [Day4z,  Day4c, Day4e],
      reflection: 'Visiting the Bangko Sentral ng Pilipinas allowed us to gain a deeper understanding of the critical role central banks play in a nation’s economy. We were fascinated by the history of Philippine currency and how it has evolved to meet the demands of a modern financial system. The tour of the BSP Museum of Coins was a great way to see how the country’s monetary policy has shaped its economic growth. Later, at Hytech Power Inc., we were impressed by the innovative energy solutions being developed. The visit showed how sustainability and advanced technology are working hand in hand to create a more energy-efficient future for the Philippines.'
    },
    {
      id: 5,
      title: 'Day 5',
      description: 'Our day started with a visit to the Metropolitan Manila Development Authority (MMDA), where we learned about its crucial role in managing traffic, public safety, and urban development across Metro Manila. During the visit, we explored MMDA’s traffic management systems, emergency response protocols, and their efforts to improve the quality of life in the bustling metro area. In the afternoon, we headed to LRT-2 (Light Rail Transit Line 2), one of Metro Manila’s vital transport arteries. We observed how this elevated railway system efficiently connects key areas, from Santolan in Pasig to Recto in Manila, easing urban congestion. A facility tour gave us insights into its operations—from automated ticketing to safety protocols—highlighting how modern rail technology serves thousands of commuters daily. The seamless blend of engineering and public service underscored the importance of sustainable urban mobility.',
      date: '2025-04-11',
      images: [dDay5b,dDay5a,dDay5],
      reflection: 'Visiting the MMDA was an eye-opening experience as we saw firsthand how they manage the complex task of traffic regulation and public safety in such a densely populated area. We were impressed by their integrated systems that help ease congestion and ensure public safety in Metro Manila. The afternoon trip to LRT-2 gave us an appreciation for modern public transportation systems and how they contribute to sustainable urban development. The experience highlighted the importance of technological solutions in urban mobility and how they can improve the daily lives of commuters.'
    },
  ];
  const openModal = (cardIndex) => {
    setSelectedCard(cardData[cardIndex]);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedCard.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + selectedCard.images.length) % selectedCard.images.length
    );
  };

  const truncateDescription = (description, maxLength) => {
    return description.length > maxLength ? description.substring(0, maxLength) + "..." : description;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-title">BSIT Educ Tour 2025</h1>
        <h2>Welcome to Our BSIT Educational Tour 2025 Blog!</h2>
        <p>This blog captures the exciting and enriching experiences from our 5-day educational tour across key historical, technological, and cultural sites in the Philippines. Scroll through each day's highlights and insights!</p>
      </header>

      <main>
        {/* Cards for each day of the tour */}
        <div className="card-container">
        {cardData.map((card, index) => (
  <div 
    key={card.id} 
    className="card" 
    onClick={() => openModal(index)}
    style={{ "--order": index }}
  >
              <h3>{card.title}</h3>
              <p>{truncateDescription(card.description, 150)}</p> {/* Truncated description */}
              <p><strong>Date: </strong>{card.date}</p>
              <div className="card-preview">
                <img
                  src={card.images[0]}
                  alt={`${card.title} preview`}
                  className="card-image-preview"
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      {isModalOpen && (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal" onClick={(e) => e.stopPropagation()}> {/* Prevents closing modal when clicking inside */}
    <button className="close-modal" onClick={closeModal}><GoX /> Close</button>
      <div className="modal-content">
        {/* Image Navigation */}
        <div className="modal-images">
          <img
            src={selectedCard.images[currentImageIndex]}
            alt={`${selectedCard.title} ${currentImageIndex}`}
            className="modal-image"
          />
        </div>

        {/* Title, Date, Description, Reflection */}
        <h3>{selectedCard.title}</h3>
        <p><strong>Date:</strong> {selectedCard.date}</p>
        <p><strong>Description:</strong> {selectedCard.description}</p>
        <p><strong>Reflection:</strong> {selectedCard.reflection}</p>
        <button onClick={prevImage} className="prev-button"><GoArrowLeft /> Prev</button>
        <button onClick={nextImage} className="next-button">Next <GoArrowRight /></button>
      </div>
    </div>
  </div>
)}



      <footer className="App-footer">
        <p>&copy; 2025 BSIT Educational Tour. All rights reserved.</p>
        <p>“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”</p>
      </footer>
    </div>
  );
}

export default App;
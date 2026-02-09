import React, { useState } from 'react';
import './App.css';

const movies = [
  { id: 1, title: 'La La Land', img: 'https://i.ytimg.com/vi/GTWqwSNQCcg/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGC0gFSh_MA8=&rs=AOn4CLAVcMM-8FRuEW7Xoxtr2YTaIB5uzQ' },
  { id: 2, title: 'Shakespeare in Love', img: 'https://i.etsystatic.com/33352065/r/il/56ee00/4178173620/il_570xN.4178173620_louo.jpg' },
  { id: 3, title: 'The Dark Knight', img: 'https://live.staticflickr.com/2222/2452159541_6ba004979d_k.jpg' },
  { id: 4, title: 'F1: The Movie', img: 'https://www.f1themovie.net/images/share.jpg' },
  { id: 5, title: 'Interstellar', img: 'https://i.ytimg.com/vi/YF1eYbfbH5k/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGE4gYShlMA8=&rs=AOn4CLDt6JPoesvmQnP8qf-00JpeDZUfyA' },
  { id: 6, title: 'Spider-Man: No Way Home', img: 'https://wallpapers.com/images/hd/spider-man-no-way-home-background-mcg8r3eg84os1zue.jpg' },
  { id: 7, title: 'Jujutsu Kaisen 0', img: 'https://4kwallpapers.com/images/walls/thumbs_3t/24378.jpg' },
  { id: 8, title: 'Haikyu!! The Dumpster Battle', img: 'https://assets-in.bmscdn.com/discovery-catalog/events/et00399331-lbbuknxaeq-landscape.jpg' },
  { id: 9, title: 'Demon Slayer: Kimetsu No Yaiba ', img: 'https://4kwallpapers.com/images/walls/thumbs_3t/22988.jpg' },
  { id: 10, title: 'Black Panther', img: 'https://images4.alphacoders.com/119/thumb-1920-1198452.jpg' },
  { id: 11, title: 'Nigga: The Movie', img: 'https://image.joox.com/JOOXcover/0/f163a6228ef2e88d/300' },
  { id: 12, title: 'The Fast and the Furious: Tokyo Drift', img: 'https://is1-ssl.mzstatic.com/image/thumb/r1Uej27huOQ6cI_6eCLm4g/1200x675.jpg' },
];

export default function App() {
  const [step, setStep] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [userData, setUserData] = useState({ name: '', email: '', mobile: '' });
  const [bookingId, setBookingId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const finalizeBooking = (e) => {
    e.preventDefault();
    setBookingId(Math.floor(Math.random() * 1000000));
    setStep(4);
  };

  return (
    <div className="container">

      {step === 1 && (
        <div>
          <h1 className="title">🎬 Today's Show</h1>
          <div className="movie-grid">
            {movies.map(movie => (
              <div 
                key={movie.id} 
                className="movie-card"
                onClick={() => { setSelectedMovie(movie); setStep(2); }}
              >
                <img src={movie.img} alt={movie.title} />
                <h3>{movie.title}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 2 && selectedMovie && (
        <div className="details-box">
          <h1>{selectedMovie.title}</h1>
          <img src={selectedMovie.img} alt={selectedMovie.title} />
          <p>Explore the cinematic universe of {selectedMovie.title}.</p>

          <div className="btn-group">
            <button className="primary-btn" onClick={() => setStep(3)}>Book Seat</button>
            <button className="secondary-btn" onClick={() => setStep(1)}>Back to Movies</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="form-box">
          <h1>🎟️ Booking Details</h1>
          <form onSubmit={finalizeBooking}>
            <input name="name" placeholder="Full Name" required value={userData.name} onChange={handleInputChange} />
            <input name="email" type="email" placeholder="Email Address" required value={userData.email} onChange={handleInputChange} />
            <input name="mobile" type="tel" placeholder="Mobile Number" required value={userData.mobile} onChange={handleInputChange} />
            <button type="submit" className="primary-btn">Confirm Booking</button>
          </form>
        </div>
      )}

      {step === 4 && (
        <div className="confirmation-box">
          <h1>✅ Seat Booked!</h1>
          <h3>Booking ID: {bookingId}</h3>
          <hr />

          <div className="summary">
            <p><strong>Movie:</strong> {selectedMovie.title}</p>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Mobile:</strong> {userData.mobile}</p>
          </div>

          <button className="secondary-btn" onClick={() => window.location.reload()}>
            Book Another Movie
          </button>
        </div>
      )}
    </div>
  );
}

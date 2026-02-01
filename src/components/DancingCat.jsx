import { useState } from 'react';
import catImage from '../assets/images/cat.svg';
import '../styles/animations.css';
import './DancingCat.css';

function DancingCat() {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="dancing-cat-container">
      <h1 className="title">Dancing Cat</h1>

      <div className="stage">
        <div className="sparkles">
          <span className="sparkle">✨</span>
          <span className="sparkle">⭐</span>
          <span className="sparkle">✨</span>
        </div>

        <div
          className={`cat-wrapper ${isPlaying ? 'dancing' : 'paused'}`}
          onClick={toggleAnimation}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && toggleAnimation()}
          aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
        >
          <img src={catImage} alt="Dancing Cat" className="cat-image" />
        </div>

        <div className="shadow"></div>
      </div>

      <button
        className="control-button"
        onClick={toggleAnimation}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        {isPlaying ? '⏸️ 정지' : '▶️ 시작'}
      </button>

      <p className="instruction">고양이를 클릭하거나 버튼을 눌러 춤을 제어하세요!</p>
    </div>
  );
}

export default DancingCat;

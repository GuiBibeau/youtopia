import "./WaveBackground.css";
import clsx from 'clsx' 

export const BackgroundWave: React.FC = () => {
  return (
    <div className="waveWrapper waveAnimation">
      <div className="waveWrapperInner bgTop">
        <div
          className="wave waveTop"
        />
      </div>
      <div className="waveWrapperInner bgMiddle">
        <div
          className="wave waveMiddle"
        />
      </div>
      <div className="waveWrapperInner bgBottom">
        <div
          className="wave waveBottom"
        />
      </div>
    </div>
  );
};

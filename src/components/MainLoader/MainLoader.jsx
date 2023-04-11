import './MainLoader.css';
export default function MainLoader() {
  return (
    <div className="container">
      <div className="pan-loader">
        <div className="loader"></div>
        <div className="pan-container">
          <div className="pan"></div>
          <div className="handle"></div>
        </div>
        <div className="shadow"></div>
      </div>
    </div>
  );
}

import "./home.css";

const Home = () => {
  return (
    <div className="h" id="home">
      <div className="avilable-container">
        <div className="avilable">
          <p className="hire">Hire</p>
          <div className="avStatus">
            <div className="status"></div>
            <p className="avi">Available</p>
          </div>
        </div>
      </div>
      <div className="h-wraper">
        <h2 className="h-intro">Welcome To My Portfolio</h2>
        <h1 className="h-name">
          <span style={{ fontSize: "28px", fontWeight: "200" }}>I'm</span> Ramy
        </h1>
        <div className="h-title">
          <div className="h-title-wrapper">
            <div className="h-title-item">Fron-End Dev</div>
            <div className="h-title-item">JavaScript Dev</div>
            <div className="h-title-item">React.js Developer</div>
            <div className="h-title-item">Next.js Developer</div>
            <div className="h-title-item">UI Developer</div>
          </div>
        </div>
        <div className="h-desc">
          <p>
            Here You Will Find What Is You looking For
            <br />
            success, Development Business And Increase Profits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

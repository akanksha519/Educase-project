import "./Profile.css";

const Details = () => {
  return (
    <div className="main-profile-container">
      <h1 className="main-heading">Account Settings</h1>
      <div className="main-content-container">
        <div className="main-profile-details-container">
          <div className="profile-container">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*RoSyEn6aSFZclgu8v2kSaw.jpeg" // replace with actual profile URL
              alt="Profile"
              className="profile-pic"
            />
            <div className="camera-icon">
              <i className="fas fa-camera"></i>
            </div>
          </div>
          <div className="profile-details">
            <h1>Marry Doe</h1>
            <p>Marry@Gmail.com</p>
          </div>
        </div>
        <div className="profile-description">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Details;

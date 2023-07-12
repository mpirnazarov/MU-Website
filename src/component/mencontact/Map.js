import React from "react";

function Map() {
  return (
    <>
      <div className="map fix" style={{ background: "#f5f5f5" }}>
        <div className="container-flud">
          <div className="row">
            <div className="col-lg-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.6240508365877!2d69.22288847546086!3d41.295285901704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b23e6bb3cb3%3A0x8e0a4c0bfa73921e!2sCambridge%20International%20University%20(CIU)%20Novza%20Branch!5e0!3m2!1sru!2s!4v1689152822768!5m2!1sru!2s"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Map;

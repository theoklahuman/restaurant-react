import fries from "./assets/fries.jpeg";

function CareersPage() {
  return (
    <div className="container-fluid" id="careersPage">
      <div className="text-center">
        <div>
          <img src={fries} alt="placeholder image of fries" />
        </div>
        <h6 className="">
          The strength of our success comes from our support system - our
          people. At Lorem Ipsum PLC, we are committed to developing our people
          at every level - from restaurant crew to directors. If it's important
          to you, it's important to Lorem Ipsum Plc. From flexible scheduling to
          comprehensive benefits and anything in-between, you can find it all
          here. Check to see what openings are available at Lorem Ipsum PLC adx
          McDonald's.
        </h6>
        <div className="row gx-2 justify-content-center">
          <button
            className="btn btn-info col col-lg-2 memorial-btn"
            type="button"
          >
            Apply S. Memorial Location
          </button>
          <button className="btn btn-info col col col-lg-2" type="button">
            Apply S. Meridian Location
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default CareersPage;

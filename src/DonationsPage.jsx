function DonationsPage() {
  return (
    <div className="container-fluid" id="donationsPage">
      <div className="">
        <div className="">
          <div className="">
            <h1 className="display-6">Donation Request</h1>
          </div>
          <form
            action="/donations"
            method="POST"
            className="row g-3 needs-validation"
            noValidate
          >
            <div className="row g-1">
              <div className="col-lg-6">
                <label className="form-label" htmlFor="organization">
                  Requesting Organization
                </label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  name="organization"
                  id="organization"
                  placeholder="e.g Jane Doe"
                  required=""
                />
              </div>
              <div className="col-lg-6">
                <label className="form-label" htmlFor="name">
                  Contact Name
                </label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  name="name"
                  id="name"
                  required=""
                />
              </div>
              <div className="col-lg-12">
                <label className="form-label" htmlFor="street">
                  Address
                </label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  name="street"
                  id="street"
                  placeholder="123 Main Street"
                  required=""
                />
              </div>
              <div className="col-lg-5">
                <label htmlFor="address2">Address Line 2</label>
                <input
                  className="form-control form-control-sm col-6"
                  type="text"
                  name="address2"
                  id="address2"
                  placeholder="Apartment, Studio or Floor"
                />
              </div>
              <div className="col-lg-5">
                <label htmlFor="city">City</label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  required=""
                />
              </div>
              <div className="col-lg">
                <label htmlFor="state">State</label>
                <div>
                  <input type="radio" name="state" id="state" />
                  <label htmlFor="state">Oklahoma</label>
                </div>
                <div>
                  <input type="radio" name="state" id="state-radio__other" />
                  <label htmlFor="state">Other</label>
                </div>
                <label className="form-text" id="state-radio__help">
                  Only Oklahoma is allowed
                </label>
              </div>
              <div className="col-lg-3">
                <label htmlFor="zip">Zip Code</label>
                <input
                  className="form-control"
                  type="number"
                  name="zip"
                  id="zip"
                  minLength={5}
                  max={5}
                  placeholder="Zip/Postal Code"
                  required=""
                />
              </div>
              <div className="col-lg-3">
                <label htmlFor="country">Country</label>
                <input
                  className="form-control"
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Country"
                  required=""
                />
              </div>
              <div className="col-lg-2">
                <label htmlFor="number">Phone Number</label>
                <input
                  className="form-control"
                  type="tel"
                  name="number"
                  id="number"
                  placeholder="(405)-xxx-xxxx"
                  required=""
                />
              </div>
              <div className="col-lg">
                <label htmlFor="contact-email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="contact-email"
                  id="contact-email"
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <input
                className="form-control"
                type="text"
                name="event"
                id="event"
                placeholder="Event Name"
                required=""
              />
              <input
                className="form-control"
                type="text"
                name="deadline"
                id="deadline"
                placeholder="Donation Deadline"
              />
              <label htmlFor="type">Type Of Donation: </label>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="type"
                  id="type"
                />
                <label htmlFor="monetary">Monetary</label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="in-kind"
                  id="in-kind"
                />
                <label htmlFor="in-kind">In-Kind</label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="mcteachers"
                  id="mcteachers"
                />
                <label htmlFor="mcteachers-night">McTeachers Night</label>
              </div>
              <label className="form-control" htmlFor="notes">
                Additional Information:{" "}
              </label>
              <textarea
                className="form-control"
                name="notes"
                id="notes"
                cols={30}
                rows={3}
                defaultValue={""}
              />
            </div>
            <div className="">
              <button
                type="reset"
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button className="btn btn-primary">Contact Us</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DonationsPage;

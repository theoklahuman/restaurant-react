function ContactUsPage() {
  return (
    <div className="" id="contact-us__page">
      <div className="container-fluid row">
        <div className="col-12 col-lg-6">
          <form
            action="/contact"
            className="needs-validation"
            method="POST"
            noValidate=""
          >
            <div>
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                required=""
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                required=""
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                name="message"
                id="message"
                cols={30}
                rows={3}
                required=""
                defaultValue={""}
              />
            </div>
            <button className="btn btn-secondary">Back</button>
            <button className="btn btn-success">Send Message</button>
          </form>
        </div>
        <div className="container text-center col col-lg-6">
          <div className="row justify-content-md-center">
            <h1>Contact Us</h1>
            <div>PO box 007 Oklahoma City, OK 54321, USA</div>
            <div>Phone: 4051234567</div>
            <div>Email: info@thisisjustatest.com</div>
            <h1>Office Hours:</h1>
          </div>
          <div className="row justify-content-md-center">
            <h3 className="col col-lg-4">Monday</h3>
            <p className="col col-lg-4">10:00am - 4:30pm</p>
          </div>
          <div className="row justify-content-md-center">
            <h3 className="col col-lg-4">Tuesday</h3>
            <p className="col col-lg-4">10:00am - 4:30pm</p>
          </div>
          <div className="row justify-content-md-center">
            <h3 className="col col-lg-4">Wednesday</h3>
            <p className="col col-lg-4">10:00am - 4:30pm</p>
          </div>
          <div className="row justify-content-md-center">
            <h3 className="col col-lg-4">Thursday</h3>
            <p className="col col-lg-4">10:00am - 4:30pm</p>
          </div>
          <div className="row justify-content-md-center">
            <h3 className="col col-lg-4">Friday</h3>
            <p className="col col-lg-4">10:00am - 4:30pm</p>
          </div>
          <div className="row justify-content-md-center">
            <h3 className="col col-lg-4">Saturday</h3>
            <p className="col col-lg-4">CLOSED</p>
          </div>
          <div className="row justify-content-md-center">
            <h3 className="col col-lg-4">Sunday</h3>
            <p className="col col-lg-4">CLOSED</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
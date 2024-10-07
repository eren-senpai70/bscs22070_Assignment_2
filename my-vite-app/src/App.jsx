import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function ComplaintForm() {
  // State for form fields
  const [formData, setFormData] = useState({
    title: '',
    email: '',
    description: '',
    image: null
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle image change
  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data (like sending it to a server)
    console.log('Form Submitted:', formData);

    // Clear the form after submission
    setFormData({
      title: '',
      email: '',
      description: '',
      image: null
    });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h2 className="card-title">Complaint Cell</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Complaint Title */}
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Complaint Title <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Enter the title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email ID <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Complaint Description */}
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Complaint Description <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="4"
                    placeholder="Describe your complaint"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                {/* Image Upload (Optional) */}
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Upload Image (Optional)
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-success">
                  Submit Complaint
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplaintForm;
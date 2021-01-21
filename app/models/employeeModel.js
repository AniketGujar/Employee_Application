const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    department: {
      type: String,
      required: true
    },
    salary: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const employee = mongoose.model("employee", EmployeeSchema);

class EmployeeModel {

  // Create and Save a Employee Data
  create = (body) => {
    console.log("Request Data in Model");
    return new Promise((resolve, reject) => {
      employee
        .create(body)
        .then((data) => {
          resolve(data);
          console.log("Success Full", data);
        })
        .catch((err) => {
          console.log("Error in Model");
          reject(err);
        });
    });
  };

  // Retrieve all Employee's Data
  getAll = (req) => {
    console.log("Request Data in Model");
    return new Promise((resolve, reject) => {
      employee
        .find(req)
        .then((data) => {
          resolve(data);
          console.log("Get Data Successfull", data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  // Retrieve a single Employee with EmployeeId
  getOne = (id) => {
    console.log("Request One Emp Data by id in Model");
    return new Promise((resolve, reject) => {
      employee
        .findById(id)
        .then((data) => {
          resolve(data);
          console.log("Get Data Successfull", data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  // Update an Employee with EmployeeId
  update = (req, a) => {
    console.log("Update One Emp Data by id--in Model",);
    return new Promise((resolve, reject) => {

      employee
        .findByIdAndUpdate(
          req.params.id,
          {
            firstName: req.body.firstName || a.firstName,
            lastName: req.body.lastName || a.lastName,
            email: req.body.email || a.email,
            department: req.body.department || a.department,
            salary: req.body.salary || a.salary,
          },
          { new: true }
        )
        .then((data) => {
          resolve(data);
          console.log("Get Data Successfull", data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });

  };

  // Delete an Employee with EmployeeId
  delete = (id) => {
    console.log("Delete One Emp Data by id--in Model");
    return new Promise((resolve, reject) => {
      employee
        .findByIdAndRemove(id)
        .then((data) => {
          resolve(data);
          console.log("Delete Data Successfull", data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
}

module.exports = new EmployeeModel();

const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    department: String,
    salary: String,
  },
  {
    timestamps: true,
  }
);

const employee = mongoose.model("employee", EmployeeSchema);

class EmployeeModel {
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
          console.log(err);
          reject(err);
        });
    });
  };

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

  delete = (id) => {
    console.log("Delete One Emp Data by id--in Model");
    return new Promise((resolve, reject) => {
      employee
        .findByIdAndRemove(id)
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
}

module.exports = new EmployeeModel();

const { response } = require("express");
const model = require("../models/employeeModel");

class EmployeeService {

  // Create and Save a Employee Data
  createService = (body) => {
    return model.create(body).then((data) => {
      return ({ status: true, message: "Successfully Registered", data: data });
    }).catch((err) => {
      return ({ status: false, message: "Fail to Store", data: err });
    });
  };

  // Retrieve all Employee's Data
  getAllService = (req) => {
    return model.getAll(req).then((data) => {
      return data;
    }).catch((err) => {
      return err;
    });
  };

  // Retrieve a single Employee with EmployeeId
  getOneService = (id) => {
    return model.getOne(id).then((data) => {
      return data;
    }).catch((err) => {
      return err;
    });
  };

  // Update an Employee with EmployeeId
  updateService = (req) => {
    return model.getOne(req.params.id).then((data) => {
      let a = data;
      console.log("Print data: ", data);
      return model.update(req, a).then((data) => {
        return data;
      }).catch((err) => {
        return err;
      });
    }).catch((err) => {
      console.log(err);
    })
  };

  // Delete an Employee with EmployeeId
  deleteService = (id) => {
    return model.delete(id).then((data) => {
      return data;
    }).catch((err) => {
      return err;
    });
  };
}

module.exports = new EmployeeService();

const { response } = require("express");
const service = require("../service/employeeService");

class EmployeeController {

  // Create and Save a Employee Data
  create = (req, res) => {
    console.log("Data in Controller ", req.body);
    service
      .createService(req.body)
      .then((data) => {
        response.success = data.status;
        response.message = data.message;
        response.data = data.data;
        return res.status(200).send(response);
      })
      .catch((err) => {
        response.success = false;
        response.message = err;
        return res.status(400).send(response);
      });
  };

  // Retrieve all Employee's Data
  getAllData = (req, res) => {
    console.log("Data in Controller ", req.body);
    service
      .getAllService(req.body)
      .then((data) => {
        response.message = "Employee All Employee Data Fetched Sucessfully";
        response.data = data;
        return res.status(200).send(response);
      })
      .catch((err) => {
        (response.message = "error:"), err;
        return res.status(400).send(response);
      });
  };

  // Retrieve a single Employee with EmployeeId
  getOneEmployeeData = (req, res) => {
    console.log("Data in Controller ", req.body);
    service
      .getOneService(req.params.id)
      .then((data) => {
        response.message = "Employee Data by Id Fetched Sucessfully";
        response.data = data;
        return res.status(200).send(response);
      })
      .catch((err) => {
        (response.message = "error:"), err;
        return res.status(400).send(response);
      });
  };

  // Update an Employee with EmployeeId
  updateEmployeeData = (req, res) => {
    console.log("Data in Controller ", req.body);
    service
      .updateService(req)
      .then((data) => {
        response.message = "Employee Data by Id Updated Sucessfully";
        response.data = data;
        return res.status(200).send(response);
      })
      .catch((err) => {
        (response.message = "error:"), err;
        return res.status(400).send(response);
      });
  };

  // Delete an Employee with EmployeeId
  deleteEmployeeData = (req, res) => {
    console.log("Data in Controller ", req.body);
    service
      .deleteService(req.params.id)
      .then((data) => {
        response.message = "Employee Deleted Sucessfully";
        response.data = data;
        return res.status(200).send(response);
      })
      .catch((err) => {
        response.message = "error:", err;
        return res.status(400).send(response);
      });
  };

}
module.exports = new EmployeeController();

const { response } = require("express");
const service = require("../service/employeeService");

class EmployeeController {
  // Create and Save a new Note
  create = (req, res) => {
    console.log("Data in Controller ", req.body);
    service
      .createService(req.body)
      .then((data) => {
        response.success = true;
        response.message = "Employee Registered Sucessfully";
        response.data = data;
        return res.status(200).send(response);
      })
      .catch((err) => {
        response.success = false;
        (response.message = "error:"), err;
        response.data = err;
        return res.status(400).send(response);
      });
  };

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
        (response.message = "error:"), err;
        return res.status(400).send(response);
      });
  };

}
module.exports = new EmployeeController();

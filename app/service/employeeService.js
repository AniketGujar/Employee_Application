const model = require("../models/employeeModel");

class EmployeeService {
  createService = (body) => {
    console.log("Request Data in Service");
    return model.create(body).then((data) => {
      return data;
    }).catch((err) => {
      return err;
    });
  };

  getAllService = (req) => {
    console.log("Request Data in Service");
    return model.getAll(req).then((data) => {
      return data;
    }).catch((err) => {
      return err;
    });
  };

  getOneService = (id) => {
    console.log("Request Data in Service");
    return model.getOne(id).then((data) => {
      return data;
    }).catch((err) => {
      return err;
    });
  };

  updateService = (req) => {
    console.log("Request Data in Service");

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

  deleteService = (id) => {
    console.log("Request Data in Service");
    return model.delete(id).then((data) => {
      return data;
    }).catch((err) => {
      return err;
    });
  };
}

module.exports = new EmployeeService();

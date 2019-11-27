const School = require("../../core/db/models/School");

class CourseController {
  async insert({ body, headers }, res) {
    const { schoolid } = headers;

    const school = await School.findById(schoolid);

    if (!school) {
      return res.status(401).json({
        error: 'School not found',
      });
    }

    school.courses.push(body);
    await school.save();

    return res.json(school);
  }
}

module.exports = new CourseController();
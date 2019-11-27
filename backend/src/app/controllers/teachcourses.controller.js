const School = require("../../core/db/models/School");

class TeachCourses {
  async insert({ body, params }, res) {
    const { courseId } = params;

    const school = await School.list({
      courses: {
        _id: courseId
      }
    })

    return res.json(school);
  }
}

module.exports = new TeachCourses();
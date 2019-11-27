const School = require("../../core/db/models/School");

class TeachCourses {
  async insert({ body, params, headers }, res) {

    const { courseId } = params;
    const { coachid } = headers;


    const school = await School.findOne({
      'courses._id': courseId,
    });

    console.log(school);


    if (!school) {
      return res.status(401).json({
        error: 'Course not found',
      })
    }
  

    const courseIndex = school.courses.findIndex(course => course._id == courseId);
    const course = school.courses[courseIndex];

    body.coach = coachid;
    school.courses[courseIndex] = Object.assign(course, body);

    await school.save();

    return res.json(school);
  }
}

module.exports = new TeachCourses();
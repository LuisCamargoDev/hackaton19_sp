const School = require("../../core/db/models/School");

class TeachCourses {
  async insert({ body, params }, res) {
    const { courseId } = params;
    const { entityId: coachid } = body;

    const school = await School.findOne({
      "courses._id": courseId
    });

    if (!school) {
      return res.status(401).json({
        error: "Course not found"
      });
    }

    const courseIndex = school.courses.findIndex(
      course => course._id == courseId
    );
    const course = school.courses[courseIndex];

    body.coach = coachid;
    school.courses[courseIndex] = Object.assign(course, body);

    await school.save();

    return res.json(school);
  }

  async index({ body }, res) {
    const { entityId: coachid } = body;

    const school = await School.list({
      "courses.coach": coachid
    });

    const schoolFiltered = school.map(schoo => {
      schoo.courses = schoo.courses.filter(course => course.coach == coachid);
      return schoo;
    });

    return res.json(schoolFiltered);
  }
}

module.exports = new TeachCourses();

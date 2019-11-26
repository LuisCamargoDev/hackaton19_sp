const { expect } = require("chai");
const schoolService = require("../../src/core/services/school.services");
describe("unit test of school", function() {
  describe("list", function() {
    it("should return a list", function() {
        schoolService.list().then(res => {
            expect(res).not.to.be.undefined;
        });
    });
  });
});

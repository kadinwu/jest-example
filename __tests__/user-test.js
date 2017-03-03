jest.unmock('../user');
jest.unmock('chakram');

import * as user from '../user';

describe('get user name test', () => {
	it("works", () => {
		return user.getUserName(5).then(name => expect(name).toEqual('Paul'));
	});
	
	it('works with async/await', async () => {
		const userName = await user.getUserName(4);
		expect(userName).toEqual('Mark');
  });
});


var chakram = require('chakram'),
    expect = chakram.expect;

describe("Chakram", function() {
    it("should provide HTTP specific assertions", function () {
        var response = chakram.get("http://httpbin.org/get");
        return expect(response).to.have.status(200);
    });
});
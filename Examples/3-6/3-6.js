var name = 'TY Chen';
console.log(name.length);	// 代表var變數也是一個物件，可以取用length

var age = 39;
var affiliation = 'NTHU';

var profile = {
	name: 'TY Chen',
	age: 39,
	affiliation: 'NTHU',
	height: 180,
	weight: 72,
	contact: {
		home: '02-1234567',
		mobile: ['0123456789','1234567890','2345678901']
	}
};

// following is doing the same thing
console.log(profile.name);
console.log(profile['name']);
// end of log

// if exists, cover it. If not, generate new one
profile.gender = 'male';
console.log(profile.gender);

console.log(profile.contact.home);
console.log(profile.contact.mobile);
console.log(profile['contact'].mobile);	// the same as previous one
console.log(profile.contact.mobile[1]);
console.log(profile.contact.mobile.length);

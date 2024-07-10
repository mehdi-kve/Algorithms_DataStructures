let formats = [
    /^\d\d\d\d\d\d\d\d\d\d$/,			// 5555555555
    /^\d\d\d-\d\d\d-\d\d\d\d/,			// 555-555-5555
    /^\d\d\d\s\d\d\d\s\d\d\d\d/,		// 555 555 5555
    /^\(\d\d\d\)\d\d\d-\d\d\d\d/,		// (555)555-5555
    /^\(\d\d\d\)\s\d\d\d-\d\d\d\d/,		// (555) 555-5555
    /^1\d\d\d\d\d\d\d\d\d\d/,			// 15555555555
    /^1\s\d\d\d\s\d\d\d\s\d\d\d\d/,		// 1 555 555 5555
    /^1\s\d\d\d-\d\d\d-\d\d\d\d/,		// 1 555-555-5555
    /^1\(\d\d\d\)\d\d\d-\d\d\d\d/,		// 1(555)555-5555
    /^1\s\(\d\d\d\)\s\d\d\d-\d\d\d\d/	// 1 (555) 555-5555
];


function telephoneCheck(str) {
    return formats.some(reg => reg.test(str));
}

console.log(telephoneCheck("555-555-5555"));
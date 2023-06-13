const byteSize = (str) => {
  // write your code here
	  // Convert the string to a byte array.
  const bytes = new Uint8Array(str);

  // Return the length of the byte array.
  return bytes.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));

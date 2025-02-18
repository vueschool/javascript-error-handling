try {
  throw new Error("User not found");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("this runs no matter what");
}

console.log("The program continues...");

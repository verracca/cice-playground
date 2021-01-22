export function failSometimes() {
<<<<<<< HEAD
  return Math.random() > 0.5
    ? (() => {
        throw new Error("an error occured");
      })()
    : 42;
=======
  if (Math.random() > 0.5) {
    throw new Error('an error occurred')
  }

  return 42
>>>>>>> 853834dd92ecab6e11b9e5c5b0b5e6fba8a06417
}

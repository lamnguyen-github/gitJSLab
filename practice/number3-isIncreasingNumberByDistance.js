  export const isIncreasingNumberByDistance = (n, x) => {
      if (n < 0 || n > 1000000 || typeof n !== 'number' || x < 0 || x > 5) return false;

      let assign = '' + n;
      let splitAssign = assign.split('');
      for (let i = 0; i < splitAssign.length - 1; i += x) {
          if (splitAssign[i + 1] - splitAssign[i] !== x) return false;
      }
      return true;
  };
  let number = 148;
  console.log(isIncreasingNumberByDistance(number, 3));
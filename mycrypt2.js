 function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  // 可能性のあるすべての順列の出現数
  let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }
  
  // 結果を表示します
  for (let key in count) {
    console.log(`${key}: ${count[key]}`);
  }

  console.log('----2')

  function shuffle2(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // counts of appearances for all possible permutations
count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle2(array);
    count[array.join('')]++;
  }
  
  // show counts of all possible permutations
  for (let key in count) {
    console.log(`${key}: ${count[key]}`);
  }


  console.log('----3')

 cryptrnd =  window.crypto.getRandomValues(new Uint8Array(1)) / 255

  console.log(cryptrnd)

  function shuffle3(array) {
    array.sort(() => (window.crypto.getRandomValues(new Uint8Array(1)) / 255) - 0.5);
  }
  
  // 可能性のあるすべての順列の出現数
count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle3(array);
    count[array.join('')]++;
  }
  
  // 結果を表示します
  for (let key in count) {
    console.log(`${key}: ${count[key]}`);
  }
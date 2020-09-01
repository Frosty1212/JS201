// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb'



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "decipher" which is given a string, a shift, and returns the
// decoded Caesar cipher message.
//
// Examples:
// > decipher('cvvcem cv fcyp!', 2)
// 'attack at dawn!'
// > decipher('ehz czlod otgpcrpo ty l hzzo', 11)
// 'two roads diverged in a wood'
//part 1
let ceaserCipher = (str) => { //better way of writing the function =>
    //Deciphered reference letters
    let code = {
      a: 'q', b: 'p', c: '3',
      d: 'n', e: 'r', f: 's',
      g: 't', h: 'u', i: 'v',
      j: 'z', k: 'x', l: 'y',
      m: 'w', n: 'a', o: 'b',
      p: 'f', q: 'd', r: 'e',
      s: 'i', t: 'g', u: 'h',
      v: 'l', w: 'j', x: 'k',
      y: 'o', z: 'm'   
    }
  str = str.toLowerCase();//convert the string to lowercase
  let decipher = ''; //decipher the code
  for(let i = 0 ; i < str.length; i++){
    decipher += code[str[i]];
  }
  return decipher;
}
console.log(ceaserCipher('youlike')) // cant use spaces
// part 2
let ceaserCipherDecoded = (str) => {
    //Deciphered reference letters
    let decoded = {
    a: 'n', j: 'w', s: 'f',
    b: 'o', k: 'x', t: 'g',
    c: '3', l: 'v', u: 'h',
    d: 'q', m: 'z', v: 'i',
    e: 'r', n: 'd', w: 'm',
    f: 'p', o: 'y', x: 'k',
    g: 't', p: 'b', y: 'l',
    h: 'u', q: 'a', z: 'z',
    i: 's', r: 'e',  
    }
    //convert the string to lowercase
    str = str.toLowerCase();
    let deciphered = '';
    for(let i = 0 ; i < str.length; i++){
      deciphered += decoded[str[i]];
    }
    return deciphered;
  }
console.log(ceaserCipherDecoded('obhyvxr')) // cant use spaces
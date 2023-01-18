

  function isPrime() {
    
    const number = document.getElementById('num').value;
  
    
  
    if (number < 2) {
      document.getElementById('wynik').innerHTML = 'Podana liczba nie jest liczbą pierwszą';
      return;
    }
  
 
    for (let i = 2; i <= number / 2; i++) {
    
      if (number % i === 0) {
        document.getElementById('wynik').innerHTML = 'Podana liczba nie jest liczbą pierwszą';
        return;
      }
    }
  
   
    document.getElementById('wynik').innerHTML = 'Podana liczba jest liczbą pierwszą';
  }
    

      
      function reverseString() {
        
        const input = document.getElementById('str').value;
      
       
        const chars = input.split('');
        
        const reversedChars = chars.reverse();
      
        const reversedString = reversedChars.join('');
      
       
        document.getElementById('wynik').innerHTML = reversedString;
      }
      
      
      
      
  
 
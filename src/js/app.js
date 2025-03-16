export function personHP (person) {    
    const healthy = 'grean';
    const wounded = 'yellow';
    const critical = 'red';
  
      if (person.health >= 50) {
          return healthy;
      } else if (person.health >= 15) {
          return wounded;
      } else {
          return critical;
      }
  }
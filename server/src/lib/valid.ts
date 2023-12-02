

// Cameroon | Country code: +237 | Regex = \(237\)\ ?[2368]\d{7,8}$
// Ethiopia | Country code: +251 | Regex = \(251\)\ ?[1-59]\d{8}$
// Morocco | Country code: +212 | Regex = \(212\)\ ?[5-9]\d{8}$
// Mozambique | Country code: +258 | Regex = \(258\)\ ?[28]\d{7,8}$
// Uganda | Country code: +256 | Regex = \(256\)\ ?\d{9}$

type Customer = {
    id: number
    name: string
    phone: string
}

const validatePhoneNumber = (phoneNumber: string) => {
    //  Regex patterns for each country
    const cameroon = /\(237\)\ ?[2368]\d{7,8}$/;
    const ethiopia = /\(251\)\ ?[1-59]\d{8}$/;
    const morocco = /\(212\)\ ?[5-9]\d{8}$/;
    const mozambique = /\(258\)\ ?[28]\d{7,8}$/;
    const uganda = /\(256\)\ ?\d{9}$/;
  
    // Check the country code and match against the corresponding pattern
    if (phoneNumber.startsWith('(237)')) {
      return { state: cameroon.test(phoneNumber), country: 'Cameroon' };
    } else if (phoneNumber.startsWith('(251)')) {
      return { state: ethiopia.test(phoneNumber), country: 'Ethiopia' };
    } else if (phoneNumber.startsWith('(212)')) {
      return { state: morocco.test(phoneNumber), country: 'Morocco' };
    } else if (phoneNumber.startsWith('(258)')) {
      return { state: mozambique.test(phoneNumber), country: 'Mozambique' };
    } else if (phoneNumber.startsWith('(256)')) {
      return { state: uganda.test(phoneNumber), country: 'Uganda' };
    } else {
      // return null and false
      return { state: false, country: 'Invalid Country Code' };
    }
}

export const newUser = (c: Customer) => { // creates a new user with  validated details
   const { state, country } = validatePhoneNumber(c.phone)

   return { 
      id: c.id,
      name: c.name, 
      phone: c.phone, 
      state: state === false ? 'not valid' : 'valid',
      country 
    }
}
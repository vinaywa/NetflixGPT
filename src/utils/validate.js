export const checkValidate1=(email,password)=>{
 
    const isValidEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isValidPswd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if(!isValidEmail)
    {
        return "Email is not Valid";
    }
    if(!isValidPswd)
    {
        return "Password not Valid";
    }
    return null;
};
export const checkValidate2=(email,password,name,phno)=>{
    console.log(email)
    console.log(password)
    const isValidEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isValidPswd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isValidname=/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name)

    const isValidPhone=/^[0-9]{10}$/.test(phno)
    if(!isValidname)
    {
        return "Name is not Valid";
    }
    if(!isValidPhone)
    {
        return "Phone no. is not Valid";
    }
    if(!isValidEmail)
    {
        return "Email is not Valid";
    }
    if(!isValidPswd)
    {
        return "Password is not Valid";
    }
   
    return null;
};
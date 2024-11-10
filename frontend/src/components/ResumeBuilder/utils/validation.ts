// validation.ts

// Validate required fields in the resume data
export const validatePersonalDetails = (personalDetails: any) => {
    const { name, email, phone } = personalDetails;
    let errors: string[] = [];
  
    if (!name || name.trim() === '') errors.push('Name is required');
    if (!email || !/\S+@\S+\.\S+/.test(email)) errors.push('Valid email is required');
    if (!phone || phone.trim().length < 10) errors.push('Valid phone number is required');
    
    return errors;
  };
  
  export const validateEducation = (education: any[]) => {
    let errors: string[] = [];
    education.forEach((edu, index) => {
      if (!edu.degree || edu.degree.trim() === '') {
        errors.push(`Degree is required for education entry ${index + 1}`);
      }
      if (!edu.institution || edu.institution.trim() === '') {
        errors.push(`Institution is required for education entry ${index + 1}`);
      }
    });
    return errors;
  };
  
  // Add other validation functions as needed for each section of the resume
  
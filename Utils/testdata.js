export const signUpdata={
    fname:'Umer',
    lname:'Sh',
    pnocode:'IE',
    pno:'11312131',
    phonetype:'mobile',
    name:'Umer2030'
}
export function generateEmail() {
  const timestamp = Date.now();
  return `umer${timestamp}@mailinator.com`;
}
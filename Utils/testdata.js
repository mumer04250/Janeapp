export const signUpdata={
    fname:'Umer',
    lname:'Sh',
    pnocode:'IE',
    pno:'11312131',
    phonetype:'mobile',
    name:'Umer2030',
    aboutus:'Web Search',
    referalid:'2',
    password:'NNm@9090',
    confirmpassword:'NNm@9090'

}
export function generateEmail() {
  const timestamp = Date.now();
  return `umer${timestamp}@mailinator.com`;
}
import {test} from '../fixtures/envSetupfixture'
import { userSignup } from '../Pages/Signup'
import { signUpdata,generateEmail } from '../Utils/testdata'
let signupObj
const email=generateEmail()
test('User SignUp',async({page})=>{
    signupObj=new userSignup(page)
    await signupObj.SignupClick(
        signUpdata.fname,
        signUpdata.lname,
        email,
        signUpdata.pnocode,
        signUpdata.pno,
        signUpdata.phonetype,
        signUpdata.name
    )
})
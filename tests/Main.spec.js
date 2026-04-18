import {expect, test} from '../fixtures/envSetupfixture'
import { userSignup } from '../Pages/Signup'
import { userLogin } from '../Pages/Login'
import { signUpdata,generateEmail } from '../Utils/testdata'
let signupObj
let userLoginobj
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
        signUpdata.name,
        signUpdata.aboutus,
        signUpdata.referalid,
        signUpdata.name,
        signUpdata.password,
        signUpdata.confirmpassword
        
    )
})
test ('User Login',async({page})=>{
    userLoginobj=new userLogin(page)
    await userLoginobj.Login(signUpdata.name,signUpdata.password)


})
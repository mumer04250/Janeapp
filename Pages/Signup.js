import {test,expect} from '@playwright/test'
import { signUpdata } from '../Utils/testdata'
export class userSignup{
    /** @param {import('@playwright/test').Page} page */
    constructor(page)
    {
        this.page=page
        this.userSignupLink=this.page.getByRole('link',{name:'Sign In or Sign Up'})
        this.userCreateAccLink=this.page.getByRole('link',{name:'Create Account'})
        this.txtfname=this.page.getByLabel('First name')
        this.txtlname=this.page.getByLabel('Last name')
        this.txtemail=this.page.getByLabel('Email')
        this.ddpnocode=this.page.locator('select[name="country_code"]')
        this.txtpno=page.locator('input[name="phone"]')
        this.ddphonetype=page.getByLabel('Phone Type')
        this.txtname=page.getByLabel('Preferred name')
        this.ddaboutus=page.locator('select[name="referral_source"]')
        this.ddrefstaffmember=this.page.getByLabel('Who were you referred to?')
        //this.ddrefstaffmember=page.locator('select["referring_staff_member_id"]')
        this.btncontinue=this.page.getByRole('button',{name:'Continue'})
        this.btnsubmit=this.page.locator('button[type="submit"]')
        this.txtusername=this.page.getByPlaceholder('Username or Email Address')
        this.txtpassword=this.page.locator('#identity_password')
        this.txtconfpassword=this.page.getByPlaceholder('Confirm Password')
        this.confheading=this.page.getByRole('heading',{name:"'You're almost done!'"})
        this.creatheading=this.page.getByRole('heading',{name:"Create Account"})
        this.acccreate=this.page.locator('#account_navigation')

        this.btnLogin=this.page.locator('#log_in')

    }
    async SignupClick(fname,lname,email,pnocode,pno,pnotype,name,about,refid,username,password,confpass)
    {
        await this.userSignupLink.click()
        await this.userCreateAccLink.click()
        await expect(this.page).toHaveURL(/new/)
        await this.txtfname.fill(fname)
        await this.txtlname.fill(lname)
        await this.txtemail.fill(email)
        await this.ddpnocode.selectOption(pnocode)
        await this.txtpno.fill(pno)
        await this.ddphonetype.selectOption(pnotype)
        await this.txtname.fill(name)
        await this.btncontinue.click()
      //  await expect(this.confheading).toBeVisible()
        await this.ddaboutus.selectOption(about)
        await this.ddrefstaffmember.selectOption(refid)
        await this.btnsubmit.click()
       // await expect(this.creatheading).toBeVisible()
        await this.txtusername.fill(username)
        await this.txtpassword.fill(password)
        await this.txtconfpassword.fill(confpass)
        await this.btnLogin.click()
        //await expect(this.acccreate).toBeVisible()
       // await expect(this.page).toHaveURL(/account/)
        console.log(email)

       
    }
    
}
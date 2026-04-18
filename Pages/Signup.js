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
        this.btncontinue=this.page.getByRole('button',{name:'Continue'})
    }
    async SignupClick(fname,lname,email,pnocode,pno,pnotype,name)
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
       
    }
    
}
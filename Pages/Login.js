import {test,expect} from '@playwright/test'
import { signUpdata,generateEmail } from '../Utils/testdata'
export class userLogin{
     /** @param {import('@playwright/test').Page} page */
    constructor(page)
    {
        this.page=page
        this.userSignupLink=this.page.getByRole('link',{name:'Sign In or Sign Up'})
        this.txtusername=this.page.locator('#auth_key')
        this.txtpassword=this.page.getByPlaceholder('Password')
        this.btncontinue=this.page.getByRole('button',{name:'Continue'})
        this.btnLogin=this.page.locator('#log_in')
    }
    async Login(username,password)
    {
        await this.userSignupLink.click()
        await this.txtusername.fill(username)
        await this.btncontinue.click()
        await this.txtpassword.fill(password)
        await this.btnLogin.click()
        await this.page.waitForURL(/account/)
        
    }
}
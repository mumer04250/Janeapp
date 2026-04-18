import{test,expect} from '@playwright/test'
export class BookAppointmnetUser{
    /** @param {import('@playwright/test').Page} page */
        constructor(page)
    {
     this.page=page
     
     this.appbooklink=this.page.getByRole('link',{name:'Book an Appointment'})
     this.distappbooklink=this.page.getByRole('link',{name:'Book an Appointment at The District'})
     this.headingdistrict=this.page.getByRole('heading',{name:'at The District - Downtown'})
     this.iniappointment=this.page.locator('a').filter({ hasText: 'Initial Assessment and Treatment' }).filter({ hasText: '60 minutes' })
      this.appointdate=this.page.getByTestId('item_opening')
    }

     async Appointment()
     {
       await  this.appbooklink.click()
        await this.distappbooklink.click()
        await expect(this.headingdistrict).toBeVisible()
        await this.iniappointment.click()
        await this.appointdate.click()

     }


}
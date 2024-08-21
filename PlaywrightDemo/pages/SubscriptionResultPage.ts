import { Page, BrowserContext, Locator, expect } from '@playwright/test';

const subscriptionResultPage = "https://lh-subscription-acc.ireckonu.com/#/subscription-result/subscribe"

export class SubscriptionResultPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly LOGO: Locator;
    readonly SUCCSESS_IMAGE: Locator;
    readonly SUCCSESS_MSG: Locator;
    readonly SUCCSESS_MSG_LINE_TWO: Locator;
    readonly MSG_CONTAINER: Locator;
    readonly FOOTER: Locator;
   

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.LOGO = page.locator(".hotel-logo");
        this.SUCCSESS_IMAGE = page.locator(".success-image");
        this.SUCCSESS_MSG = page.getByText('Thank You')
        this.SUCCSESS_MSG_LINE_TWO = page.getByText('Your subscription preferences have been updated.')
        this.MSG_CONTAINER = page.locator('.message-container');
        this.FOOTER = page.locator(".footer");

    }

    async subscriptionResultPageIsOpened(): Promise<void> {
        await this.page.waitForURL(subscriptionResultPage);
    }

    async verifySubscriptionResultPage(): Promise<void> {
        await expect(this.LOGO).toBeVisible();
        await expect(this.SUCCSESS_IMAGE).toBeVisible();
        await expect(this.SUCCSESS_MSG).toBeVisible();
        await expect(this.SUCCSESS_MSG_LINE_TWO).toBeVisible();  
        await expect(this.MSG_CONTAINER).toHaveCSS('background-color', 'rgb(255, 255, 255)');
        await expect(this.MSG_CONTAINER).toHaveCSS('color', 'rgb(13, 34, 63)');
        await expect(this.MSG_CONTAINER).toHaveCSS('font-size', '13.6px');
        await expect(this.MSG_CONTAINER).toHaveCSS('padding-top', '60px');
        await expect(this.MSG_CONTAINER).toHaveCSS('padding-bottom', '60px');
        await this.page.evaluate(() => {
            window.scrollBy(0, 500);
          });
        await expect(this.FOOTER).toBeVisible();
    }     
}

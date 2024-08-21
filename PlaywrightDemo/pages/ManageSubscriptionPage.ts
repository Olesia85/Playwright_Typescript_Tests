import { Page, BrowserContext, Locator, expect } from '@playwright/test';

export class ManageSubscriptionPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly LOGO: Locator;
    readonly IMAGE: Locator;
    readonly INTRO_TEXT: Locator;
    readonly SUBS_TITLE: Locator;
    readonly SUBS_TEXT_LINE_ONE: Locator;
    readonly SUBS_TEXT_LINE_TWO: Locator;
    readonly RADIO_BUTTON_SUBSCRIBE_TO_ALL: Locator;
    readonly OPTION_TITLE: Locator;
    readonly CHECK_BOX_DIRECT_MAIL: Locator;
    readonly CHECK_BOX_MARKET_RESEARCH: Locator;
    readonly CHECK_BOX_TRANSACTIONAL_REQ: Locator;
    readonly CHECK_BOX_SPECIAL_OFFER: Locator;
    readonly RADIO_BUTTON_UNSUBSCRIBE_TO_ALL: Locator;
    readonly UPDATE_BUTTON: Locator;
    readonly FOOTER: Locator;
    readonly FOOTER_CONTACT_US: Locator;
    readonly FOOTER_PRIVACY_POLICY: Locator;


    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.LOGO = page.locator(".hotel-logo");
        this.IMAGE = page.locator(".loews-image");
        this.INTRO_TEXT = page.getByText(' Subscription preferences for karan@ireckonu.com ')
        this.SUBS_TITLE = page.getByText('Manage My Subscriptions')
        this.SUBS_TEXT_LINE_ONE = page.getByText('We appreciate your interest in Loews Hotels & Co and would love to keep in touch.')
        this.SUBS_TEXT_LINE_TWO = page.getByText(' Please let us know what communications you would like to receive. ')
        this.RADIO_BUTTON_SUBSCRIBE_TO_ALL = page.getByText('Subscribe me to all available', { exact: true })
        this.OPTION_TITLE = page.getByText("I'm only interested in communication related to:")
        this.CHECK_BOX_DIRECT_MAIL = page.getByText('Direct Mail')
        this.CHECK_BOX_MARKET_RESEARCH = page.getByText('Market Research')
        this.CHECK_BOX_TRANSACTIONAL_REQ = page.getByText("Loews 'Chat your Service' SMS (for transactional requests only)")
        this.CHECK_BOX_SPECIAL_OFFER = page.getByText('Special Offer Emails')
        this.RADIO_BUTTON_UNSUBSCRIBE_TO_ALL = page.getByText('Unsubscribe me to all available')
        this.UPDATE_BUTTON = page.getByRole('button', { name: ' update ' })
        this.FOOTER = page.locator(".footer");
        this.FOOTER_CONTACT_US = page.locator('[href*="https://www.loewshotels.com/contact-us"]')
        this.FOOTER_PRIVACY_POLICY = page.locator('[href*="https://www.loewshotels.com/privacy-policy"]')
    }

    async navigateToURL(): Promise<void> {
        await this.page.goto("https://lh-subscription-acc.ireckonu.com/#/manage-subscription?payload=vNyUgznpPiHZrQl5n3DHziPdU5ObD5E0ErziUiVOxmg%3D");
    }

    async verifyBanner(): Promise<void> {
        await expect(this.LOGO).toBeVisible();
        await expect(this.LOGO).toHaveCSS('background-color', 'rgb(0, 0, 0)');
        await expect(this.LOGO).toHaveCSS('color', 'rgb(13, 34, 63)');
        await expect(this.LOGO).toHaveCSS('text-align', 'center');
        await expect(this.LOGO).toHaveCSS('font-size', '13.6px');
        await expect(this.LOGO).toHaveCSS('padding-top', '30px');
        await expect(this.LOGO).toHaveCSS('padding-bottom', '30px');
        await expect(this.IMAGE).toBeVisible();
    }

    async verifyIntroSection(): Promise<void> {
        await expect(this.INTRO_TEXT).toBeVisible();
        await expect(this.INTRO_TEXT).toHaveCSS('color', 'rgb(255, 255, 255)');
        await expect(this.INTRO_TEXT).toHaveCSS('text-align', 'center');
        await expect(this.INTRO_TEXT).toHaveCSS('margin-top', '32px');
        await expect(this.INTRO_TEXT).toHaveCSS('margin-bottom', '32px');
        await expect(this.INTRO_TEXT).toHaveCSS('font-size', '13.6px');

    }

    async verifySubsSection(): Promise<void> {
        await expect(this.SUBS_TITLE).toBeVisible();
        await expect(this.SUBS_TEXT_LINE_ONE).toBeVisible();
        await expect(this.SUBS_TEXT_LINE_TWO).toBeVisible();
        await expect(this.RADIO_BUTTON_SUBSCRIBE_TO_ALL).toBeVisible();
        await expect(this.OPTION_TITLE).toBeVisible();
        await expect(this.CHECK_BOX_DIRECT_MAIL).toBeVisible();
        await expect(this.CHECK_BOX_MARKET_RESEARCH).toBeVisible();
        await expect(this.CHECK_BOX_TRANSACTIONAL_REQ).toBeVisible();
        await expect(this.CHECK_BOX_SPECIAL_OFFER).toBeVisible();
        await expect(this.RADIO_BUTTON_UNSUBSCRIBE_TO_ALL).toBeVisible();
        await expect(this.SUBS_TITLE).toHaveCSS('color', 'rgb(13, 34, 63)');
        await expect(this.SUBS_TITLE).toHaveCSS('margin-left', '12.8px');
        await expect(this.SUBS_TEXT_LINE_ONE).toHaveCSS('color', 'rgb(13, 34, 63)');
        await expect(this.SUBS_TEXT_LINE_ONE).toHaveCSS('font-size', '13.6px');
        await expect(this.SUBS_TEXT_LINE_TWO).toHaveCSS('color', 'rgb(13, 34, 63)');
        await expect(this.SUBS_TEXT_LINE_TWO).toHaveCSS('font-size', '13.6px');
        await expect(this.OPTION_TITLE).toHaveCSS('color', 'rgb(13, 34, 63)');
        await expect(this.OPTION_TITLE).toHaveCSS('font-size', '13.6px');
        await expect(this.CHECK_BOX_DIRECT_MAIL).toHaveCSS('color', 'rgb(13, 34, 63)');
        await expect(this.CHECK_BOX_DIRECT_MAIL).toHaveCSS('text-align', 'left');
        await expect(this.CHECK_BOX_DIRECT_MAIL).toHaveCSS('font-size', '13.6px');
        await expect(this.CHECK_BOX_MARKET_RESEARCH).toHaveCSS('color', 'rgb(13, 34, 63)');
        await expect(this.CHECK_BOX_MARKET_RESEARCH).toHaveCSS('text-align', 'left');
        await expect(this.CHECK_BOX_MARKET_RESEARCH).toHaveCSS('font-size', '13.6px');
        await expect(this.CHECK_BOX_TRANSACTIONAL_REQ).toHaveCSS('color', 'rgb(13, 34, 63)');
        await expect(this.CHECK_BOX_TRANSACTIONAL_REQ).toHaveCSS('text-align', 'left');
        await expect(this.CHECK_BOX_TRANSACTIONAL_REQ).toHaveCSS('font-size', '13.6px');
        await expect(this.CHECK_BOX_SPECIAL_OFFER).toHaveCSS('color', 'rgb(13, 34, 63)');
        await expect(this.CHECK_BOX_SPECIAL_OFFER).toHaveCSS('text-align', 'left');
        await expect(this.CHECK_BOX_SPECIAL_OFFER).toHaveCSS('font-size', '13.6px');
    }

    async verifyUpdateButton(): Promise<void> {
        await expect(this.UPDATE_BUTTON).toBeVisible();
        await expect(this.UPDATE_BUTTON).toHaveCSS('background-color', 'rgb(215, 64, 34)');
        await expect(this.UPDATE_BUTTON).toHaveCSS('color', 'rgb(255, 255, 255)');
        await expect(this.UPDATE_BUTTON).toHaveCSS('padding-top', '16px');
        await expect(this.UPDATE_BUTTON).toHaveCSS('padding-bottom', '16px');
    }

    async verifyUnsubscribeToAllRadioButton(): Promise<void> {
        await this.RADIO_BUTTON_UNSUBSCRIBE_TO_ALL.check();
        await expect(this.RADIO_BUTTON_UNSUBSCRIBE_TO_ALL).toBeChecked();
        await expect(this.RADIO_BUTTON_SUBSCRIBE_TO_ALL).not.toBeChecked();
        await expect(this.CHECK_BOX_DIRECT_MAIL).not.toBeChecked();
        await expect(this.CHECK_BOX_MARKET_RESEARCH).not.toBeChecked();
        await expect(this.CHECK_BOX_TRANSACTIONAL_REQ).not.toBeChecked();
        await expect(this.CHECK_BOX_SPECIAL_OFFER).not.toBeChecked();
    }

    async verifySubscribeToAllRadioButton(): Promise<void> {
        await this.RADIO_BUTTON_SUBSCRIBE_TO_ALL.check();
        await expect(this.RADIO_BUTTON_SUBSCRIBE_TO_ALL).toBeChecked();
        await expect(this.RADIO_BUTTON_UNSUBSCRIBE_TO_ALL).not.toBeChecked();
        await expect(this.CHECK_BOX_DIRECT_MAIL).toBeChecked();
        await expect(this.CHECK_BOX_MARKET_RESEARCH).toBeChecked();
        await expect(this.CHECK_BOX_TRANSACTIONAL_REQ).toBeChecked();
        await expect(this.CHECK_BOX_SPECIAL_OFFER).toBeChecked();
    }

    async verifyDirectMailCheckbox(): Promise<void> {
        await this.CHECK_BOX_DIRECT_MAIL.uncheck();
        await expect(this.CHECK_BOX_DIRECT_MAIL).not.toBeChecked();
        await expect(this.RADIO_BUTTON_SUBSCRIBE_TO_ALL).not.toBeChecked();
        await expect(this.RADIO_BUTTON_UNSUBSCRIBE_TO_ALL).not.toBeChecked();
        await expect(this.CHECK_BOX_MARKET_RESEARCH).toBeChecked();
        await expect(this.CHECK_BOX_TRANSACTIONAL_REQ).toBeChecked();
        await expect(this.CHECK_BOX_SPECIAL_OFFER).toBeChecked();
    }

    async clickUpdateButton(): Promise<void> {
        await this.UPDATE_BUTTON.click();
    }

    async verifyFooter(): Promise<void> {
        await this.page.evaluate(() => {
            window.scrollBy(0, 500);
        });
        await expect(this.FOOTER).toBeVisible();
        await expect(this.FOOTER).toHaveCSS('background-color', 'rgb(0, 0, 0)');
        await expect(this.FOOTER).toHaveCSS('color', 'rgb(255, 255, 255)');
        await expect(this.FOOTER).toHaveCSS('text-align', 'center');
        await expect(this.FOOTER).toHaveCSS('font-size', '13.6px');
        await expect(this.FOOTER_CONTACT_US).toHaveText("Contact Us");
        await expect(this.FOOTER_PRIVACY_POLICY).toHaveText("Privacy Policy");
    }
}

import { test as baseTest } from '@playwright/test';
import { ManageSubscriptionPage } from "../pages/ManageSubscriptionPage";
import { SubscriptionResultPage } from "../pages/SubscriptionResultPage";

const test = baseTest.extend<{
    manageSubscriptionPage: ManageSubscriptionPage;
    subscriptionResultPage: SubscriptionResultPage;
}>({
    manageSubscriptionPage: async ({ page, context }, use) => {
        await use(new ManageSubscriptionPage(page, context));
    },
    subscriptionResultPage: async ({ page, context }, use) => {
        await use(new SubscriptionResultPage(page, context));
    }
})

export default test;
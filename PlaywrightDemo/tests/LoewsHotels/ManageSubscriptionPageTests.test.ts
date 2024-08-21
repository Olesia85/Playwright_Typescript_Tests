import test from '../../lib/BaseTest';

test(`Check manage subscription page elements test`, { tag: '@Smoke' }, async ({ manageSubscriptionPage }) => {
    await test.step(`Navigate to subscription preferenses page`, async () => {
        await manageSubscriptionPage.navigateToURL();
    });
    await test.step(`Check banner`, async () => {
        await manageSubscriptionPage.verifyBanner();
    });
    await test.step(`Check intro secton`, async () => {
        await manageSubscriptionPage.verifyIntroSection();
    });
    await test.step(`Check subs section`, async () => {
        await manageSubscriptionPage.verifySubsSection();
    });
    await test.step(`Check Update button`, async () => {
        await manageSubscriptionPage.verifyUpdateButton();
    });
    await test.step(`Check footer`, async () => {
        await manageSubscriptionPage.verifyFooter();
    });
});

test(`Check behaviour of elements and navigation to next page test`, { tag: '@Smoke' }, async ({ manageSubscriptionPage, subscriptionResultPage }) => {
    await test.step(`Navigate to subscription preferenses page`, async () => {
        await manageSubscriptionPage.navigateToURL();
    });
    await test.step(`Verify unsubscribe to all radio button`, async () => {
        await manageSubscriptionPage.verifyUnsubscribeToAllRadioButton();
    });
    await test.step(`Verify subscribe to all radio button`, async () => {
        await manageSubscriptionPage.verifySubscribeToAllRadioButton();
    });
    await test.step(`Verify one of the check boxes`, async () => {
        await manageSubscriptionPage.verifyDirectMailCheckbox();
    });
    await test.step(`Ckick Update button, check navigation to next page`, async () => {
        await manageSubscriptionPage.clickUpdateButton();
        await subscriptionResultPage.subscriptionResultPageIsOpened();
        await subscriptionResultPage.verifySubscriptionResultPage();
    });
});

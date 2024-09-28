const { expect } = require('@playwright/test');

class SubbyxMatchPage {
    constructor(page) {
        this.page = page;
        this.cookieButtonSelector = 'button:has-text("Accept")';
        this.vaiIniziamoButtonxpath = '//button//*[text() = "Vai, iniziamo!"]'
        this.smartphoneButtonXpath = '//button//*[text() = "Smartphone"]'
        this.avantiButtonSelector = 'button:has-text("Avanti")';
        this.miInformoButtonXpath = '//button//*[text() = "Mi informo, so esattamente cosa vorrei"]'
        this.androidButtonXpath = '//button//*[text() = "Android"]'
        this.faccioMolteFotoButtonXpath = '//button//*[text() = "Faccio molte foto e video"]'
        this.vorreiSpenderePocoButtonXpath = '//button//*[text() = "Vorrei spendere poco"]'
        this.scopriIMatchButtonXpath = '//button//*[text() = "Scopri i Match"]'
        this.motorolaEdgeButtonXpath = '//button//*[text() = "motorola edge 40 pro"]'
    }

    async subbyxMatchSimpleFlow() {
        await this.page.click(this.cookieButtonSelector)
        await this.page.click(this.vaiIniziamoButtonxpath)
        await this.page.click(this.smartphoneButtonXpath)
        await this.page.click(this.avantiButtonSelector)
        await this.page.click(this.miInformoButtonXpath)
        await this.page.click(this.avantiButtonSelector)
        await this.page.click(this.androidButtonXpath)
        await this.page.click(this.avantiButtonSelector)
        await this.page.click(this.faccioMolteFotoButtonXpath)
        await this.page.click(this.avantiButtonSelector)
        await this.page.click(this.vorreiSpenderePocoButtonXpath)
        await this.page.click(this.avantiButtonSelector)
        await this.page.click(this.scopriIMatchButtonXpath)
    }

    async verifyMatch() {
        await expect(this.page.locator(this.motorolaEdgeButtonXpath)).toBeVisible()
    }

}

module.exports=SubbyxMatchPage; 
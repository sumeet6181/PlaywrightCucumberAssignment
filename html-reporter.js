const reporter= require('cucumber-html-reporter')
var date= new Date();
var currentDate= date.getDate()+'-'+ (date.getMonth()+1)+'_'+ date.getFullYear()+'_'+ date.getHours() +'_'+
                date.getMinutes()+'_'+date.getMilliseconds();

var options={
    brandTitle:"Demo Test Scenarios",
    theme:"bootstrap",
    jsonFile:"Reports/cucumber_report.json",
    output:"Reports/cucumber_report.html",
    screenshotsDirectory:"./screenshots",
    storeScreenshots:true,
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata:{
        "App Version":"1.1.1",
        "Test Environment":"QA",
        "Platform":"Web",
        "Tester": "Sumeet Pal"
    }
};
reporter.generate(options);
